'use client';

import { useSearchParams, useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useAuth } from '@/components/blog/AuthContext';
import { LoginModal } from '@/components/blog/LoginModal';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, deleteDoc, updateDoc, increment, collection, query, where, getDocs } from 'firebase/firestore';
import type { BlogPost } from '@/types/blog';

const ReadOnlyEditor = dynamic(() => import('@/components/blog/ReadOnlyEditor'), {
    ssr: false,
    loading: () => (
        <div className="animate-pulse space-y-6 py-12 max-w-3xl mx-auto">
            <div className="h-6 bg-white/5 rounded w-full"></div>
            <div className="h-6 bg-white/5 rounded w-5/6"></div>
            <div className="h-6 bg-white/5 rounded w-4/5"></div>
            <div className="h-6 bg-white/5 rounded w-full"></div>
            <div className="h-6 bg-white/5 rounded w-2/3"></div>
            <div className="h-32 bg-white/5 rounded w-full my-8"></div>
        </div>
    ),
});

interface BlogDetailContentProps {
    initialPost: BlogPost;
}

export default function BlogDetailContent({ initialPost }: BlogDetailContentProps) {
    const params = useParams();
    const searchParams = useSearchParams();
    const [post, setPost] = useState<BlogPost>(initialPost);

    // Sidebar State
    const [sidebarPosts, setSidebarPosts] = useState<BlogPost[]>([]);
    const [sidebarPage, setSidebarPage] = useState(parseInt(searchParams.get('page') || '1'));
    const [sidebarTotalPages, setSidebarTotalPages] = useState(1);
    const [sidebarLoading, setSidebarLoading] = useState(false);

    // Likes & Auth
    const { user } = useAuth();
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(initialPost.likes || 0);
    const [isLikeLoading, setIsLikeLoading] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        setPost(initialPost);
        setLikeCount(initialPost.likes || 0);
    }, [initialPost]);

    useEffect(() => {
        async function checkLikeStatus() {
            if (!user || !post.id) {
                setIsLiked(false);
                return;
            }
            try {
                const likeRef = doc(db, 'blogs', post.id, 'likes', user.uid);
                const likeSnap = await getDoc(likeRef);
                setIsLiked(likeSnap.exists());
            } catch (err) {
                console.error('Failed to check like status', err);
            }
        }
        checkLikeStatus();
    }, [params.slug, user]);

    useEffect(() => {
        async function fetchSidebarPosts() {
            setSidebarLoading(true);
            try {
                const res = await fetch(`/api/blogs?status=published&pageSize=9&page=${sidebarPage}`);
                if (res.ok) {
                    const data = await res.json();
                    setSidebarPosts(data.blogs || []);
                    setSidebarTotalPages(data.totalPages || 1);
                }
            } catch (err) {
                console.error('Failed to fetch sidebar posts', err);
            } finally {
                setSidebarLoading(false);
            }
        }
        fetchSidebarPosts();
    }, [sidebarPage]);

    const handleToggleLike = async () => {
        if (!user || !post.id) {
            setShowLoginModal(true);
            return;
        }
        if (isLikeLoading) return;

        try {
            setIsLikeLoading(true);
            const action = isLiked ? 'unlike' : 'like';
            const previousIsLiked = isLiked;

            setIsLiked(!isLiked);
            setLikeCount(prev => action === 'like' ? prev + 1 : Math.max(0, prev - 1));

            const blogRef = doc(db, 'blogs', post.id);
            const likeRef = doc(db, 'blogs', post.id, 'likes', user.uid);

            if (action === 'like') {
                await setDoc(likeRef, {
                    createdAt: Date.now(),
                    userId: user.uid,
                    blogId: post.id,
                    slug: post.slug
                });
                await updateDoc(blogRef, { likes: increment(1) });
            } else {
                await deleteDoc(likeRef);
                const blogSnap = await getDoc(blogRef);
                if (blogSnap.exists()) {
                    const currentLikes = blogSnap.data().likes || 0;
                    await updateDoc(blogRef, { likes: currentLikes > 0 ? increment(-1) : 0 });
                }
            }
        } catch (err) {
            console.error('Failed to toggle like:', err);
            setIsLiked(isLiked ? false : true);
            setLikeCount(post.likes || 0);
        } finally {
            setIsLikeLoading(false);
        }
    };

    const publishDate = new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric'
    });

    return (
        <div className="bg-bg-dark min-h-screen">
            <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-20 lg:grid lg:grid-cols-12 lg:gap-10">

                {/* Sidebar */}
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-28 space-y-8">
                        <div className="flex flex-col h-[600px] border border-white/[0.06] rounded-2xl bg-white/[0.02] overflow-hidden">
                            <div className="p-6 border-b border-white/[0.06]">
                                <h2 className="text-xs font-bold text-accent uppercase tracking-[0.2em]">Latest Articles</h2>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                                {sidebarLoading ? (
                                    [...Array(6)].map((_, i) => (
                                        <div key={i} className="h-14 bg-white/5 animate-pulse rounded-xl"></div>
                                    ))
                                ) : (
                                    sidebarPosts.map((sPost) => (
                                        <Link
                                            key={sPost.id}
                                            href={`/blog/${sPost.slug}${sidebarPage > 1 ? `?page=${sidebarPage}` : ''}`}
                                            className={`block p-4 rounded-xl transition-all border ${sPost.slug === params.slug
                                                ? 'bg-primary border-primary text-white shadow-md shadow-primary/20'
                                                : 'bg-white/[0.02] border-white/[0.06] text-text-light/70 hover:border-white/[0.12] hover:bg-white/[0.04]'
                                                }`}
                                        >
                                            <h3 className="text-sm font-bold uppercase tracking-tight line-clamp-2 leading-snug">
                                                {sPost.title}
                                            </h3>
                                        </Link>
                                    ))
                                )}
                            </div>

                            {/* Sidebar Pagination */}
                            <div className="p-4 border-t border-white/[0.06] flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => setSidebarPage(prev => Math.max(1, prev - 1))}
                                        disabled={sidebarPage === 1 || sidebarLoading}
                                        className="p-1.5 rounded-lg border border-white/[0.08] text-text-light/50 hover:bg-white/5 disabled:opacity-30 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                                    </button>

                                    <div className="flex gap-1">
                                        {[...Array(sidebarTotalPages)].map((_, i) => {
                                            const p = i + 1;
                                            if (p > 3 && p < sidebarTotalPages) return null;
                                            if (p === 3 && sidebarTotalPages > 4) return <span key="dots" className="text-text-light/20">.</span>;

                                            return (
                                                <button
                                                    key={p}
                                                    onClick={() => setSidebarPage(p)}
                                                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all border ${sidebarPage === p
                                                        ? 'bg-primary border-primary text-white'
                                                        : 'bg-white/[0.02] border-white/[0.06] text-text-light/40 hover:border-white/[0.12]'
                                                        }`}
                                                >
                                                    {p}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <button
                                        onClick={() => setSidebarPage(prev => Math.min(sidebarTotalPages, prev + 1))}
                                        disabled={sidebarPage === sidebarTotalPages || sidebarLoading}
                                        className="p-1.5 rounded-lg border border-white/[0.08] text-text-light/50 hover:bg-white/5 disabled:opacity-30 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Link href="/blog" className="flex items-center gap-2 text-xs font-bold text-text-light/30 uppercase tracking-widest hover:text-secondary transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
                            View Full Archive
                        </Link>
                    </div>
                </aside>

                {/* Main Content Area */}
                <article className="lg:col-span-9 animate-fade-in w-full">
                    {/* Header & Hero Image 
                    {post.coverImage ? (
                        <header className="mb-5 w-full">
                            <div className="relative rounded-3xl overflow-hidden bg-tertiary aspect-[21/9] border border-white/[0.06] shadow-sm group w-full min-w-full">
                                <img src={post.coverImage} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" alt={post.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-bg-dark/20 to-transparent" />
                            </div>
                        </header>
                    ) : (*/}
                    <header className="mt-8 mb-2 max-w-4xl">
                        <h1 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-text-light tracking-tight leading-tight">
                            {post.title}
                        </h1>
                    </header>
                    {/* )} */}

                    {/* Intro Text */}
                    {post.excerpt && (
                        <p className="text-md md:text-md text-text-light/55 leading-relaxed font-normal mb-4 border-l-4 border-primary pl-8 max-w-4xl">
                            {post.excerpt}
                        </p>
                    )}

                    {/* Body Content */}
                    <div className="prose-clean mb-20 max-w-4xl">
                        {post.content ? (
                            <ReadOnlyEditor content={post.content} />
                        ) : (
                            <div className="py-20 text-center bg-white/[0.02] rounded-3xl border border-dashed border-white/[0.06]">
                                <p className="text-text-light/40 text-lg">This article has no content yet.</p>
                            </div>
                        )}
                    </div>

                    {/* Footer Metadata */}
                    <footer className="pt-12 border-t border-white/[0.06] space-y-12 max-w-4xl">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary text-white flex items-center justify-center font-bold text-xl shadow-lg">
                                    {post.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-text-light leading-tight">{post.author}</p>
                                    <div className="flex items-center gap-3 text-sm text-text-light/40 mt-1.5 font-medium">
                                        <time dateTime={new Date(post.publishedAt || post.createdAt).toISOString()}>{publishDate}</time>
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                                        <span>{post.readTime} min read</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                                        <span className="text-secondary font-bold">{post.category}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Like Component */}
                            <div className="flex items-center gap-4 bg-white/[0.03] px-6 py-3 rounded-2xl border border-white/[0.06] self-start sm:self-center">
                                <button
                                    onClick={handleToggleLike}
                                    disabled={isLikeLoading}
                                    className={`group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 border shadow-sm ${isLiked
                                        ? 'bg-rose-500 border-rose-500 text-white shadow-rose-500/20'
                                        : 'bg-white/5 border-white/[0.08] text-text-light/40 hover:border-white/15'
                                        }`}
                                >
                                    <svg className={`w-6 h-6 ${isLiked ? 'fill-current' : 'fill-none'} transition-transform group-hover:scale-110`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold text-text-light leading-none">{likeCount}</span>
                                    <span className="text-xs font-bold text-text-light/30 uppercase tracking-widest mt-1">Appreciation</span>
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2.5">
                                {post.tags.map(tag => (
                                    <span key={tag} className="px-4 py-2 bg-white/[0.04] text-text-light/50 rounded-xl text-xs font-bold uppercase tracking-wider border border-white/[0.06] hover:bg-white/[0.08] transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </footer>
                </article>
            </div>

            <LoginModal
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                title="Sign in to Like"
                subtitle="Join SolveMPire to save and like your favorite articles."
            />
        </div>
    );
}
