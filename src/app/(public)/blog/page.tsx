import { Metadata } from 'next';
import HomeContent from '@/components/blog/HomeContent';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, doc, getDoc } from 'firebase/firestore';
import type { BlogPost } from '@/types/blog';
import { Suspense } from 'react';

export const revalidate = 60; // Revalidate page every 60 seconds

export const metadata: Metadata = {
  title: "SolveMPire — Writing about Code, Design, and AI",
  description: "An open journal by Hanish Jyosyabhatla exploring software engineering, AI, and digital craftsmanship in his own words.",
  openGraph: {
    title: "SolveMPire — AI, Agents & Tech by Hanish Jyosyabhatla",
    description: "Insights into AI, Agents, and modern engineering by Hanish Jyosyabhatla.",
    siteName: "SolveMPire",
    url: "https://solvempire.com/blog",
  }
};

async function getInitialPosts() {
  try {
    const q = query(collection(db, 'blogs'));
    const snapshot = await getDocs(q);

    let blogs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];

    blogs = blogs.filter(b => b.status === 'published');
    blogs.sort((a, b) => {
        const dateA = a.publishedAt || a.createdAt || 0;
        const dateB = b.publishedAt || b.createdAt || 0;
        return (dateB as number) - (dateA as number);
    });

    let featuredPost: BlogPost | null = null;
    try {
      const featuredSnap = await getDoc(doc(db, 'featured', 'current'));
      if (featuredSnap.exists()) {
        const featuredId = featuredSnap.data().blogId;
        const matchingIndex = blogs.findIndex(b => b.id === featuredId);
        if (matchingIndex !== -1) {
          featuredPost = blogs.splice(matchingIndex, 1)[0];
        }
      }
    } catch (err) {
      console.error('Error fetching featured post:', err);
    }

    if (featuredPost) {
      return [featuredPost, ...blogs.slice(0, 5)];
    }

    return blogs.slice(0, 6);
  } catch (err) {
    console.error('Error fetching initial posts:', err);
    return [];
  }
}

export default async function BlogLandingPage() {
  const initialPosts = await getInitialPosts();

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-bg-dark pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="h-12 w-64 bg-white/5 animate-pulse rounded-lg mb-8" />
          <div className="h-[500px] w-full bg-white/5 animate-pulse rounded-3xl" />
        </div>
      </div>
    }>
      <HomeContent initialPosts={initialPosts} />
    </Suspense>
  );
}
