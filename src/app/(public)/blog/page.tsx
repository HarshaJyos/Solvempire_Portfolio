'use client';

import { Suspense } from 'react';
import BlogArchiveContent from '@/components/blog/BlogArchiveContent';

export default function BlogListingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-bg-dark pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="h-12 w-64 bg-white/5 animate-pulse rounded-lg mb-8" />
          <div className="h-[500px] w-full bg-white/5 animate-pulse rounded-3xl" />
        </div>
      </div>
    }>
      <BlogArchiveContent />
    </Suspense>
  );
}
