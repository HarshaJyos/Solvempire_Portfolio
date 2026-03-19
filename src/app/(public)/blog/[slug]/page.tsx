import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import BlogDetailContent from '@/components/blog/BlogDetailContent';
import type { BlogPost } from '@/types/blog';
import { Suspense } from 'react';

export const revalidate = 60; // Revalidate dynamic info every 60 seconds

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const q = query(collection(db, 'blogs'), where('slug', '==', slug), where('status', '==', 'published'));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() } as BlogPost;
  } catch (err) {
    console.error('Error fetching post:', err);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }

  const seo = post.seo || {};
  const title = `${seo.metaTitle || post.title} | SolveMPire Journal`;
  const description = seo.metaDescription || post.excerpt;
  const ogImage = seo.ogImage || post.coverImage;

  return {
    title,
    description,
    keywords: seo.keywords || post.tags || [],
    robots: seo.noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: seo.canonicalUrl || `https://solvempire.com/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: new Date(post.publishedAt || post.createdAt).toISOString(),
      authors: [post.author || 'Hanish Jyosyabhatla'],
      images: ogImage ? [{ url: ogImage }] : undefined,
      siteName: 'SolveMPire',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = post.seo?.structuredData
    ? JSON.parse(post.seo.structuredData)
    : {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "image": post.coverImage,
      "datePublished": new Date(post.publishedAt || post.createdAt).toISOString(),
      "dateModified": new Date(post.updatedAt || post.createdAt).toISOString(),
      "author": {
        "@type": "Person",
        "name": post.author,
        "url": "https://solvempire.com"
      },
      "description": post.excerpt,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://solvempire.com/blog/${post.slug}`
      }
    };

  let jsonLdString = "";
  try {
    jsonLdString = typeof jsonLd === 'string' ? jsonLd : JSON.stringify(jsonLd);
  } catch (err) {
    console.error("Error stringifying JSON-LD:", err);
  }

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-bg-dark pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto animate-pulse">
          <div className="h-4 w-32 bg-white/5 rounded-full mb-8"></div>
          <div className="h-12 bg-white/5 rounded-xl w-3/4 mb-10"></div>
          <div className="aspect-[2/1] bg-white/5 rounded-3xl mb-12"></div>
          <div className="space-y-4">
             <div className="h-4 bg-white/5 rounded w-full"></div>
             <div className="h-4 bg-white/5 rounded w-5/6"></div>
             <div className="h-4 bg-white/5 rounded w-full"></div>
          </div>
        </div>
      </div>
    }>
      {jsonLdString && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
      )}
      <BlogDetailContent initialPost={post} />
    </Suspense>
  );
}
