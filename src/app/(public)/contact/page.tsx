import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact SolveMPire | Get in Touch',
  description: 'Reach out to the SolveMPire team for technical inquiries, collaboration, or support. We are here to help you architect the future.',
  openGraph: {
    title: 'Contact SolveMPire | Get in Touch',
    description: 'Reach out to the SolveMPire team for technical inquiries, collaboration, or support. We are here to help you architect the future.',
    url: 'https://solvempire.com/contact',
    siteName: 'SolveMPire',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg-dark pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-bebas text-4xl md:text-5xl text-text-light tracking-tight leading-tight mb-8 animate-slide-up">
          Contact Us
        </h1>
        
        <div className="prose prose-invert prose-zinc max-w-none text-text-light/60 animate-fade-in">
          <p className="text-xl leading-relaxed mb-12 text-text-light/80">
            Have a question about our engineering processes, want to collaborate on an AI project, or simply need support? 
            We&apos;d love to hear from you. Reach out to the SolveMPire team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.05] transition-all group">
              <h2 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Email Inquiry</h2>
              <a href="mailto:support.solvempire@gmail.com" className="text-xl font-bold text-text-light group-hover:text-secondary transition-colors break-all">
                support.solvempire@gmail.com
              </a>
              <p className="mt-4 text-sm text-text-light/30">Official support and business inquiries.</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.05] transition-all group">
              <h2 className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">Direct Link</h2>
              <a href="tel:+919701341323" className="text-xl font-bold text-text-light group-hover:text-amber-500 transition-colors">
                +91 9701341323
              </a>
              <p className="mt-4 text-sm text-text-light/30">Available for urgent technical consultations.</p>
            </div>
          </div>
          
          <div className="pt-12 mt-12 border-t border-white/[0.06]">
            <p className="text-sm font-medium text-text-light/30 leading-relaxed italic">
              We aim to respond to all technical inquiries within 24-48 business hours. Thank you for your patience 
              and for being a vital part of the SolveMPire ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
