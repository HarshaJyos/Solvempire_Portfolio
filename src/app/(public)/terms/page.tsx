import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | SolveMPire',
  description: 'Read the Terms and Conditions for using SolveMPire. Information regarding intellectual property, user content rules, and platform agreements.',
  openGraph: {
    title: 'Terms and Conditions | SolveMPire',
    description: 'Read the Terms and Conditions for using SolveMPire. Information regarding intellectual property, user content rules, and platform agreements.',
    url: 'https://solvempire.com/terms',
    siteName: 'SolveMPire',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg-dark pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-bebas text-4xl md:text-5xl text-text-light tracking-tight leading-tight mb-8 animate-slide-up">
          Terms and Conditions
        </h1>
        
        <div className="prose prose-invert prose-zinc max-w-none text-text-light/60 space-y-12 animate-fade-in">
          <p className="text-sm font-bold tracking-widest text-text-light/20 uppercase">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <section>
            <h2 className="text-2xl font-bold text-text-light mb-6 tracking-tight border-l-4 border-primary pl-6 uppercase">1. Agreement to Terms</h2>
            <p className="leading-relaxed text-lg">
              By accessing or using the SolveMPire platform, you agree to be bound by these Terms and Conditions. 
              These terms govern your use of our technical insights, journal content, and architectural resources.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-light mb-6 tracking-tight border-l-4 border-secondary pl-6 uppercase">2. Intellectual Property</h2>
            <p className="leading-relaxed text-lg">
              The platform and its original content, features, and functionality are and will remain the exclusive 
              property of SolveMPire and its licensors. Our brand marks and engineering patterns are protected by 
              intellectual property laws and may not be used without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-light mb-6 tracking-tight border-l-4 border-accent pl-6 uppercase">3. User Content</h2>
            <p className="leading-relaxed text-lg">
              Our service allows you to interact with content via likes and comments. You are responsible for the 
              content you contribute, ensuring it maintains the professional and technical standards of the 
              SolveMPire community.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-light mb-6 tracking-tight border-l-4 border-quaternary pl-6 uppercase">4. Termination</h2>
            <p className="leading-relaxed text-lg">
              We reserve the right to suspend or terminate access to our platform immediately, without prior notice, 
              for any conduct that we, in our sole discretion, believe violates these Terms or is harmful to other 
              users or the SolveMPire brand.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
            <h2 className="text-xl font-bold text-text-light mb-4">Governing Law</h2>
            <p className="text-sm leading-relaxed text-text-light/50">
              These Terms shall be governed and construed in accordance with the laws of the applicable jurisdiction, 
              reflecting our commitment to ethical engineering and transparent platform management.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
