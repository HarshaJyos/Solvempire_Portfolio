import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SolveMPire | AI & Engineering Insights',
  description: 'Learn about SolveMPire, a platform dedicated to software engineering excellence, AI craftsmanship, and digital innovation by Hanish Jyosyabhatla.',
  openGraph: {
    title: 'About SolveMPire | AI & Engineering Insights',
    description: 'Learn about SolveMPire, a platform dedicated to software engineering excellence, AI craftsmanship, and digital innovation by Hanish Jyosyabhatla.',
    url: 'https://solvempire.com/about',
    siteName: 'SolveMPire',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-dark pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-bebas text-4xl md:text-5xl text-text-light tracking-tight leading-tight mb-10 animate-slide-up">
          About SolveMPire
        </h1>
        
        <div className="prose prose-invert prose-zinc max-w-none text-text-light/60 animate-fade-in">
          <p className="text-xl leading-relaxed mb-10 text-text-light/80">
            SolveMPire is a digital sanctum for software engineering excellence, AI craftsmanship, and high-performance development. 
            Founded by Hanish Jyosyabhatla, our mission is to provide a clean, insightful space where complex ideas are distilled into 
            elegant, high-impact knowledge.
          </p>

          <h2 className="text-2xl font-bold text-text-light mt-16 mb-6 tracking-tight uppercase border-l-4 border-primary pl-6">
            Our Vision
          </h2>
          <p className="mb-8 leading-relaxed text-lg">
            We believe that the future of technology belongs to those who can master both the art of code and the intelligence of AI. 
            SolveMPire strips away the noise, focusing entirely on architectural depth, readability, and the leading edge of digital innovation.
          </p>

          <h2 className="text-2xl font-bold text-text-light mt-16 mb-6 tracking-tight uppercase border-l-4 border-secondary pl-6">
            The Philosophy
          </h2>
          <p className="mb-8 leading-relaxed text-lg">
            Built with modern architecture including Next.js, TypeScript, and Lexical, SolveMPire is optimized for the speed 
            and clarity required by top-tier engineers. We don't just build software; we architect solutions that define the 
            future of the SolveMPire brand.
          </p>

          <div className="mt-20 p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
             <p className="text-sm font-medium italic text-text-light/40 text-center">
               "Empowering the next generation of engineers through clarity, precision, and relentless innovation."
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
