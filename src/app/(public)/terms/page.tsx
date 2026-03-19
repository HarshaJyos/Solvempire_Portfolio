import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform Agreement | Terms of Service | SolveMPire',
  description: 'The formal agreement governing the use of SolveMPire technical insights, journal content, and architectural patterns.',
  openGraph: {
    title: 'Terms of Service | SolveMPire Platform',
    description: 'Guidelines for professional interaction and intellectual property governance on the SolveMPire platform.',
    url: 'https://solvempire.com/terms',
    siteName: 'SolveMPire',
    type: 'website',
  },
};

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="min-h-screen bg-bg-dark pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-[11px] font-black text-secondary uppercase tracking-[0.4em] mb-4">
            System Agreement
          </h2>
          <h1 className="font-bebas text-5xl md:text-6xl text-text-light tracking-tight leading-tight uppercase">
            Platform <span className="text-primary italic">Terms</span> & Conditions
          </h1>
          <p className="mt-4 text-[10px] font-black text-text-light/20 uppercase tracking-[0.3em]">
            Protocol v1.0.4 — {lastUpdated}
          </p>
        </div>
        
        <div className="prose prose-invert prose-zinc max-w-none text-text-light/60 space-y-16 animate-fade-in">
          <section>
             <h2 className="text-sm font-black text-secondary uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-secondary/30" /> 
                01. ACCEPTANCE OF PROTOCOL
             </h2>
             <p className="leading-relaxed text-lg font-medium text-text-light/50">
               By interfacing with the SolveMPire system, you acknowledge and agree to the protocols outlined 
               herein. These terms govern the consumption of our technical documentation, interactive 
               components, and proprietary engineering insights.
             </p>
          </section>

          <section>
             <h2 className="text-sm font-black text-primary uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary/30" /> 
                02. INTELLECTUAL SOVEREIGNTY
             </h2>
             <p className="leading-relaxed text-lg font-medium text-text-light/50">
               SolveMPire retains exclusive ownership of all architectural patterns, code snippets, and 
               conceptual frameworks presented within this platform. Personal use for learning is encouraged; 
               commercial replication of our core intellectual property is strictly prohibited without prior authorization.
             </p>
          </section>

          <section>
             <h2 className="text-sm font-black text-accent uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent/30" /> 
                03. COMMUNITY INTERACTION
             </h2>
             <p className="leading-relaxed text-lg font-medium text-text-light/50">
               Our Journal is a professional space. Users contributing comments or feedback must maintain 
               the highest standards of technical discourse. We reserve the right to terminate access for 
               any behavior deemed non-constructive or harmful to the system&apos;s integrity.
             </p>
          </section>

          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.08] backdrop-blur-3xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
             <h2 className="text-xl font-black text-text-light mb-6 uppercase tracking-widest">Governing Framework</h2>
             <p className="text-[13px] leading-relaxed text-text-light/35 font-medium">
               These Terms shall be governed by and construed in accordance with international digital commerce 
               laws, or as applicable per our headquarters in India. Our commitment is to transparency, 
               engineering excellence, and mutual professional respect.
             </p>
          </div>
          
          <footer className="pt-10 flex items-center justify-between text-text-light/10 italic text-[11px]">
             <span>Architecting the future, responsibly.</span>
             <span>SolveMPire Pvt Ltd.</span>
          </footer>
        </div>
      </div>
    </div>
  );
}
