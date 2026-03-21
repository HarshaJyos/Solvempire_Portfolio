import { MetadataRoute } from 'next';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://solvempire.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Fetch all published blog posts
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const q = query(collection(db, 'blogs'), where('status', '==', 'published'));
    const snapshot = await getDocs(q);
    blogEntries = snapshot.docs.map((docSnap) => ({
      url: `${baseUrl}/blog/${docSnap.get('slug') || docSnap.id}`,
      lastModified: new Date(docSnap.get('updatedAt') || docSnap.get('createdAt') || Date.now()),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('SITEMAP_ERROR: Failed to fetch blogs from Firebase:', error);
    // Return at least static routes if Firebase is unavailable during sitemap generation
  }

  return [...staticRoutes, ...blogEntries];
}
