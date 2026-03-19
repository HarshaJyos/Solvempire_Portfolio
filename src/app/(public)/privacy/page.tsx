import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SolveMPire',
  description: 'Read the SolveMPire Privacy Policy. Learn how we collect, use, store, and protect your personal data and respect your privacy rights.',
  openGraph: {
    title: 'Privacy Policy | SolveMPire',
    description: 'Read the SolveMPire Privacy Policy. Learn how we collect, use, store, and protect your personal data and respect your privacy rights.',
    url: 'https://solvempire.com/privacy',
    siteName: 'SolveMPire',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-bg-dark pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-bebas text-4xl md:text-5xl text-text-light tracking-tight leading-tight mb-8 animate-slide-up">
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert prose-zinc max-w-none text-text-light/60 space-y-12 animate-fade-in">
          <p className="text-sm font-bold tracking-widest text-text-light/20 uppercase">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-text-light mb-6 tracking-tight border-l-4 border-primary pl-6 uppercase">1. Introduction</h2>
            <p className="leading-relaxed text-lg">
              Welcome to SolveMPire. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our 
              platform and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-light mb-6 tracking-tight border-l-4 border-secondary pl-6 uppercase">2. The Data We Collect</h2>
            <p className="leading-relaxed text-lg">
              We may collect, use, store and transfer different kinds of personal data about you which we have 
              grouped together as follows:
            </p>
            <ul className="list-none mt-6 space-y-4 text-text-light/80">
              <li className="flex gap-4">
                <span className="text-primary font-bold">»</span>
                <span><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-secondary font-bold">»</span>
                <span><strong>Contact Data:</strong> includes email address for authentication and newsletters.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-bold">»</span>
                <span><strong>Technical Data:</strong> includes IP address, login data, browser type and version.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-light mb-6 tracking-tight border-l-4 border-tertiary pl-6 uppercase">3. Data Usage</h2>
            <p className="leading-relaxed text-lg">
              We will only use your personal data when the law allows us to. Most commonly, we will use your 
              personal data to manage your account, provide secure access to the SolveMPire Journal, and 
              improve our platform engineering insights.
            </p>
          </section>

          <section className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
            <h2 className="text-xl font-bold text-text-light mb-4">Security Promise</h2>
            <p className="text-sm leading-relaxed text-text-light/50">
              We have put in place appropriate security measures to prevent your personal data from being 
              accidentally lost, used or accessed in an unauthorised way, altered or disclosed. SolveMPire 
              uses industry-standard encryption and secure cloud infrastructure.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
