'use client';

import { useAuth } from '@/components/blog/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AccountPage() {
    const { user, loading, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/');
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-bg-dark">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center animate-pulse shadow-lg shadow-primary/20">
                        <span className="text-white font-black text-xl">S</span>
                    </div>
                    <p className="text-text-light/40 font-bold uppercase tracking-widest text-[10px] animate-pulse">Loading Account</p>
                </div>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="min-h-screen bg-bg-dark pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-bebas text-4xl md:text-5xl text-text-light tracking-tight leading-tight mb-8 animate-slide-up">
                    My Account
                </h1>

                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
                    <div className="px-6 py-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-tertiary to-primary flex items-center justify-center shrink-0 border border-white/[0.1] shadow-xl">
                            <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-white/50">
                                {user.email?.charAt(0).toUpperCase() || 'U'}
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-text-light mb-1">{user.displayName || 'SolveMPire Member'}</h2>
                            <p className="text-text-light/40 mb-4 font-medium">{user.email}</p>
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    Verified Account
                                </span>
                                {user.email === 'adminsolvempirehtl@ikyk.com' && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-secondary border border-primary/20">
                                        Administrator
                                    </span>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                logout();
                                router.push('/');
                            }}
                            className="w-full sm:w-auto px-6 py-3 bg-white/[0.03] border border-white/[0.08] text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/20 font-bold rounded-2xl transition-all shrink-0 uppercase tracking-widest text-xs"
                        >
                            Sign out
                        </button>
                    </div>

                    <div className="border-t border-white/[0.06] bg-white/[0.02] px-6 py-5">
                        <p className="text-[10px] text-text-light/20 text-center uppercase tracking-widest font-bold">
                            User ID: <span className="text-text-light/40 ml-2">{user.uid}</span>
                        </p>
                    </div>
                </div>

                <div className="mt-12 animate-slide-up" style={{ animationDelay: '100ms' }}>
                    <h3 className="text-xl font-bold text-text-light mb-5 tracking-tight">Account Settings</h3>
                    <div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] p-8 border-dashed">
                        <p className="text-text-light/40 text-sm leading-relaxed max-w-lg">
                            Settings and preferences will be available in a future update. For now, your account grants you ability to like and comment on community articles!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
