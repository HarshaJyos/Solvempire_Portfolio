import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact SolveMPire — Bring Us Your Problem',
  description: 'Have a real problem you\'re serious about solving? Get in touch with SolveMPire. We build software, AI systems, hardware, and digital strategies that work.',
  keywords: [
    'contact solvempire',
    'hire solvempire',
    'work with solvempire',
    'tech company contact india',
    'software development inquiry'
  ],
  openGraph: {
    title: 'Contact SolveMPire — Bring Us Your Problem',
    description: 'Have a real problem you\'re serious about solving? Get in touch with SolveMPire.',
    url: 'https://solvempire.com/contact',
    siteName: 'SolveMPire',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg-dark pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-[11px] font-black text-primary uppercase tracking-[0.4em] mb-4">
            Transmission Channel
          </h2>
          <h1 className="font-bebas text-5xl md:text-7xl text-text-light tracking-tight leading-[0.9] mb-8">
            TELL US WHAT&apos;S <span className="text-secondary italic">BROKEN</span>.
          </h1>
          <p className="text-xl md:text-2xl text-text-light/40 max-w-2xl leading-relaxed font-medium">
            We don&apos;t process service requests. We intake problems. 
            Describe your hurdle, and we&apos;ll build the bridge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {/* Main Problem Submission Card */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.08] backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -mr-32 -mt-32 rounded-full" />
            
            <div className="relative z-10">
               <h3 className="text-[12px] font-black text-text-light/20 uppercase tracking-[0.25em] mb-8">Submission Protocol</h3>
               <p className="text-lg text-text-light/70 mb-10 leading-relaxed">
                 For high-stakes engineering problems, infrastructure failures, or AI implementation bottlenecks, initiate a formal intake through our direct line.
               </p>
               
               <div className="flex flex-col sm:flex-row items-center gap-4">
                 <a 
                   href="mailto:support.solvempire@gmail.com?subject=Problem Submission: [Brief Description]" 
                   className="w-full sm:w-auto px-10 py-5 bg-primary text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-secondary transition-all hover:shadow-[0_8px_30px_rgba(33,72,186,0.3)] active:scale-[0.98] text-center"
                 >
                   Open Intake Case
                 </a>
                 <span className="text-[10px] font-bold text-text-light/20 uppercase tracking-widest hidden sm:block">— OR —</span>
                 <a 
                   href="tel:+919701341323" 
                   className="w-full sm:w-auto px-10 py-5 bg-white/[0.03] border border-white/[0.08] text-text-light/80 text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-white/[0.06] transition-all text-center"
                 >
                   Priority Voice Line
                 </a>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:border-primary/20 transition-all">
                <h4 className="text-[10px] font-black text-secondary uppercase tracking-widest mb-4">Response SLA</h4>
                <p className="text-sm text-text-light/30 leading-relaxed">
                  Our architects review every problem personally. Expect a preliminary diagnostic within 24-48 business hours.
                </p>
             </div>
             <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.05] hover:border-accent/20 transition-all">
                <h4 className="text-[10px] font-black text-accent uppercase tracking-widest mb-4">Global Reach</h4>
                <p className="text-sm text-text-light/30 leading-relaxed">
                  Headquartered in India, solving problems globally. No geographical borders for digital innovation.
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
