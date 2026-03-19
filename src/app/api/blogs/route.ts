import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  doc,
  setDoc,
  getDoc,
} from 'firebase/firestore';
import type { BlogPost } from '@/types/blog';

// Helper to sync polls from blog content to firestore
async function syncPolls(content: string) {
  try {
    const contentJson = JSON.parse(content);
    const polls: any[] = [];

    const findPolls = (nodes: any[]) => {
      for (const node of nodes) {
        if (node.type === 'poll') {
          polls.push(node);
        }
        if (node.children) findPolls(node.children);
      }
    };

    if (contentJson.root && contentJson.root.children) {
      findPolls(contentJson.root.children);
    }

    // Upsert each poll found
    for (const poll of polls) {
      const pollRef = doc(db, 'polls', poll.pollId);
      const pollSnap = await getDoc(pollRef);

      if (!pollSnap.exists()) {
        console.log('SYNC: Creating missing poll in Firestore:', poll.pollId);
        await setDoc(pollRef, {
          question: poll.question,
          options: {}, // Results are stored as { [optionUid]: count }
          totalVotes: 0,
          createdAt: poll.createdAt || Date.now(),
          lastSyncAt: Date.now(),
        });
      }
    }
  } catch (e) {
    console.error('Error syncing polls:', e);
  }
}


export const dynamic = 'force-dynamic';

// GET /api/blogs — list blog posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const category = searchParams.get('category');
    const search = searchParams.get('search')?.toLowerCase();
    const pageSize = parseInt(searchParams.get('pageSize') || '9');
    const page = parseInt(searchParams.get('page') || '1');
    const lastDocId = searchParams.get('lastDocId');

    let q;
    if (status) {
      q = query(collection(db, 'blogs'), where('status', '==', status));
    } else {
      q = query(collection(db, 'blogs')); // Fetch all and filter out 'trash' below
    }

    const snapshot = await getDocs(q);
    let blogs: BlogPost[] = [];

    snapshot.forEach((docSnap) => {
      blogs.push({
        id: docSnap.id,
        ...docSnap.data(),
      } as BlogPost);
    });

    if (status) {
      blogs = blogs.filter(b => b.status === status);
    } else {
      // Hide trashed blogs by default
      blogs = blogs.filter(b => b.status !== 'trash');
    }
    if (category && category !== 'All Topic' && category !== 'All') {
      blogs = blogs.filter(b => b.category === category);
    }
    if (search) {
      blogs = blogs.filter(b =>
        b.title.toLowerCase().includes(search) ||
        b.excerpt.toLowerCase().includes(search) ||
        b.tags.some(t => t.toLowerCase().includes(search))
      );
    }

    blogs.sort((a, b) => b.createdAt - a.createdAt);

    const total = blogs.length;
    const totalPages = Math.ceil(total / pageSize);
    const currentPage = Math.max(1, Math.min(page, totalPages || 1));

    let startIndex = (currentPage - 1) * pageSize;

    // Support for legacy lastDocId pagination if needed, but primary is page-based now
    if (lastDocId && !searchParams.has('page')) {
      const idx = blogs.findIndex(b => b.id === lastDocId);
      if (idx !== -1) {
        startIndex = idx + 1;
      }
    }

    const paginatedBlogs = blogs.slice(startIndex, startIndex + pageSize);

    return NextResponse.json({
      blogs: paginatedBlogs,
      total,
      totalPages,
      currentPage,
      pageSize,
      hasMore: startIndex + pageSize < blogs.length,
      lastDocId: paginatedBlogs.length > 0 ? paginatedBlogs[paginatedBlogs.length - 1].id : null,
    });
  } catch (error: any) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs', message: error.message },
      { status: 500 }
    );
  }
}

