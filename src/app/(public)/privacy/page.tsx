import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Governance & Privacy Policy | SolveMPire',
  description: 'Our commitment to data integrity and user privacy. Review the SolveMPire Data Governance standards and protection protocols.',
  openGraph: {
    title: 'Privacy Policy | SolveMPire Platform',
    description: 'Learn how SolveMPire secures your identity and respects your data ownership within our engineering ecosystem.',
    url: 'https://solvempire.com/privacy',
    siteName: 'SolveMPire',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  
  return (
    <div className="min-h-screen bg-bg-dark pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-[11px] font-black text-primary uppercase tracking-[0.4em] mb-4">
            Platform Protocol
          </h2>
          <h1 className="font-bebas text-5xl md:text-6xl text-text-light tracking-tight leading-tight">
            DATA GOVERNANCE & <span className="text-secondary italic">PRIVACY</span>
          </h1>
          <p className="mt-4 text-[10px] font-black text-text-light/20 uppercase tracking-[0.3em]">
            Revision v2.1.0 — {lastUpdated}
          </p>
        </div>
        
        <div className="prose prose-invert prose-zinc max-w-none text-text-light/60 space-y-20 animate-fade-in">
          <section>
             <div className="flex items-center gap-4 mb-8">
               <span className="text-primary font-black text-xl">01</span>
               <h2 className="text-xl font-bold text-text-light uppercase tracking-widest m-0">Identity Protection</h2>
             </div>
             <p className="leading-relaxed text-lg font-medium text-text-light/50">
               SolveMPire is built on trust. We collect only what is essential for secure interaction within our 
               journal and administrative systems. Your identity is proxied through industry-standard providers 
               (Firebase Auth), ensuring we never store plaintext credentials.
             </p>
          </section>

          <section>
             <div className="flex items-center gap-4 mb-8">
               <span className="text-secondary font-black text-xl">02</span>
               <h2 className="text-xl font-bold text-text-light uppercase tracking-widest m-0">Data Sovereignty</h2>
             </div>
             <p className="leading-relaxed text-lg font-medium text-text-light/50 mb-6">
               We categorize data into three distinct layers of governance:
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                   <h3 className="text-[10px] font-black text-primary uppercase mb-2">Metadata</h3>
                   <p className="text-[12px] leading-relaxed">Browser type, session duration, and technical footprints.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                   <h3 className="text-[10px] font-black text-secondary uppercase mb-2">Identity</h3>
                   <p className="text-[12px] leading-relaxed">Name, Email, and Avatar associated with your SolveMPire account.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                   <h3 className="text-[10px] font-black text-accent uppercase mb-2">Interactions</h3>
                   <p className="text-[12px] leading-relaxed">Comments, likes, and poll participations within the Journal.</p>
                </div>
             </div>
          </section>

          <section className="bg-gradient-to-br from-primary/5 to-transparent p-10 rounded-[2rem] border border-white/[0.06] shadow-2xl">
             <h2 className="text-xl font-black text-text-light mb-4 uppercase tracking-[0.1em]">THE SECURITY PROMISE</h2>
             <p className="text-sm leading-relaxed text-text-light/40 font-medium">
               SolveMPire leverages cloud-native architectures with strict IAM policies and encryption-at-rest. 
               We maintain an engineering-first culture where security is not a feature, but the foundational 
               logic of every system we architect.
             </p>
          </section>

          <footer className="pt-10 border-t border-white/[0.06] text-center">
             <p className="text-[10px] font-bold text-text-light/15 uppercase tracking-[0.2em]">
               SolveMPire Pvt Ltd. — Architecting secure digital futures since 2024
             </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
