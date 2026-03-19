import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Mission & Team | SolveMPire',
  description: 'SolveMPire exists to build what others only talk about. Meet the team of engineers architecting real solutions for real problems.',
  openGraph: {
    title: 'Our Mission & Team | SolveMPire',
    description: 'Explore the SolveMPire manifesto, our "Choose Yourself" philosophy, and the builders behind the brand.',
    url: 'https://solvempire.com/about',
    siteName: 'SolveMPire',
    type: 'website',
  },
};

const team = {
  founders: [
    { name: "Hanish Jyosyabhatla", role: "Founder", initial: "H" },
    { name: "Lohith Medisetti", role: "Co-founder", initial: "L" },
    { name: "Teja Mandapalli", role: "Co-founder", initial: "T" },
  ],
  members: [
    { name: "Illa Chandra Virat", role: "Team Member", initial: "V" },
    { name: "Nalla Manasa Surya Subrahmanyeswari", role: "Team Member", initial: "M" },
    { name: "Kalimireddy Bala Sumukhi", role: "Team Member", initial: "S" },
    { name: "Chintalapudi Bhuvana Sarika", role: "Team Member", initial: "B" },
    { name: "Kolli Leela Prasad", role: "Team Member", initial: "P" },
  ]
};

const values = [
  { title: "Execution over ideas", desc: "Ideas are free. Execution is rare. We judge ourselves by what gets built, not what gets planned.", icon: "01" },
  { title: "Honesty over comfort", desc: "We tell clients what they need to hear, not what they want to hear. If your approach is wrong, we'll fix it.", icon: "02" },
  { title: "Initiative over instruction", desc: "We don't wait to be told. We identify the gap, propose the solution, and move.", icon: "03" },
  { title: "Outcomes over outputs", desc: "We measure success by whether the problem is solved. A beautiful product that solves nothing is a failure.", icon: "04" },
  { title: "Builders only", desc: "No passengers. No spectators. We work with people who are building something real.", icon: "05" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-dark pt-32 pb-20 selection:bg-primary/30 selection:text-text-light">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        
        {/* Hero Section */}
        <section className="mb-32 animate-slide-up">
          <h2 className="text-[11px] font-black text-primary uppercase tracking-[0.4em] mb-6">
            Our Mission
          </h2>
          <h1 className="font-bebas text-5xl md:text-8xl text-text-light tracking-tight leading-[0.9] mb-10">
            WE EXIST TO BUILD WHAT <br />
            OTHERS <span className="text-secondary italic">ONLY TALK ABOUT.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-light/40 max-w-3xl leading-relaxed font-medium">
            SolveMPire was not built to sell services. It was created because real problems kept going 
            unsolved — not from lack of ideas, but from lack of execution.
          </p>
        </section>

        {/* Vision & Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.08] backdrop-blur-3xl animate-fade-in">
            <h3 className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-6">Vision</h3>
            <p className="text-2xl font-bold text-text-light leading-tight mb-6">
              A world where the gap between a problem and a solution is measured in weeks — not years.
            </p>
            <p className="text-sm text-text-light/40 leading-relaxed">
              We envision a future where businesses and individuals don&apos;t have to settle for average 
              technology or wait for large corporations to notice their problems.
            </p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-primary/[0.03] border border-primary/10 backdrop-blur-3xl animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-6">Philosophy</h3>
            <p className="text-2xl font-bold text-text-light leading-tight mb-6 italic">
              &quot;Don&apos;t wait to be chosen. Choose yourself.&quot;
            </p>
            <p className="text-sm text-text-light/40 leading-relaxed">
              SolveMPire was built on a decision — made before the right time, before the right resources, 
              and before anyone gave permission. That decision is our philosophy.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="mb-32 animate-slide-up">
           <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="flex-1">
                 <h2 className="text-[11px] font-black text-text-light/20 uppercase tracking-[0.4em] mb-8">Who We Are</h2>
                 <p className="text-lg text-text-light/70 leading-relaxed font-medium mb-8">
                   SolveMPire is a technology company built by engineers who stopped waiting. 
                   Founded in 2025 during the final year of an engineering degree, it was registered 
                   not as a career backup plan, but as a deliberate bet — that real problems deserve real builders.
                 </p>
                 <p className="text-lg text-text-light/70 leading-relaxed font-medium">
                   We work at the intersection of software, hardware, and intelligent systems. We are a small, 
                   intentional team. We don&apos;t scale headcount to appear bigger. We scale capability to deliver better.
                 </p>
              </div>
              <div className="w-full md:w-80 p-8 bg-white/[0.01] border border-white/[0.06] rounded-3xl">
                 <h4 className="text-[10px] font-black text-secondary uppercase tracking-widest mb-6">Core Focus</h4>
                 <ul className="space-y-4">
                    {['Software & Platforms', 'AI Solutions', 'IoT & Embedded', 'Robotics', 'Digital Strategy'].map((focus) => (
                      <li key={focus} className="flex items-center gap-3 text-sm font-bold text-text-light/40 uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {focus}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </section>

        {/* Values Section */}
        <section className="mb-48">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-[11px] font-black text-primary uppercase tracking-[0.4em]">Our Values</h2>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-primary/20 transition-all animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <span className="text-primary font-black text-2xl mb-6 block opacity-20 group-hover:opacity-100 transition-opacity">{v.icon}</span>
                <h4 className="text-[14px] font-black text-text-light uppercase tracking-widest mb-4 leading-tight group-hover:text-secondary transition-colors">
                  {v.title}
                </h4>
                <p className="text-[12px] text-text-light/30 leading-relaxed font-medium">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-48">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-[11px] font-black text-accent uppercase tracking-[0.4em] mb-4">The Builders</h2>
            <h3 className="font-bebas text-4xl md:text-6xl text-text-light tracking-tight">The Team Behind the Brand</h3>
          </div>

          <div className="space-y-24">
            {/* Founders */}
            <div>
              <h4 className="text-[10px] font-black text-text-light/20 uppercase tracking-[0.3em] mb-10 text-center">Founding Architects</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {team.founders.map((member) => (
                  <div key={member.name} className="flex flex-col items-center group">
                    <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-accent to-primary p-[1px] mb-6 group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                      <div className="w-full h-full bg-bg-dark rounded-[2rem] flex items-center justify-center">
                        <span className="text-3xl font-black text-white group-hover:text-accent transition-colors">{member.initial}</span>
                      </div>
                    </div>
                    <div className="text-[16px] font-black text-text-light uppercase tracking-widest mb-1">{member.name}</div>
                    <div className="text-[11px] font-bold text-text-light/30 uppercase tracking-[0.2em]">{member.role}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Members */}
            <div className="pt-20 border-t border-white/[0.06]">
              <h4 className="text-[10px] font-black text-text-light/20 uppercase tracking-[0.3em] mb-12 text-center">Engineering Corps</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {team.members.map((member) => (
                  <div key={member.name} className="flex flex-col items-center group">
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <span className="text-xl font-bold text-text-light/40 group-hover:text-text-light transition-colors">{member.initial}</span>
                    </div>
                    <div className="text-[11px] font-black text-text-light/80 uppercase tracking-widest mb-1 text-center leading-tight">{member.name}</div>
                    <div className="text-[9px] font-bold text-text-light/20 uppercase tracking-[0.15em]">{member.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Note */}
        <section className="py-32 border-y border-white/[0.06] animate-fade-in">
           <div className="max-w-2xl mx-auto">
              <div className="flex items-center gap-6 mb-12">
                 <div className="w-16 h-[1px] bg-primary/40" />
                 <h2 className="text-[14px] font-black text-text-light uppercase tracking-[0.25em]">A Letter from the Founder</h2>
              </div>
              <div className="prose prose-invert prose-zinc max-w-none text-xl md:text-2xl text-text-light/60 font-medium leading-relaxed italic space-y-10">
                 <p>
                    &quot;I started SolveMPire before I graduated because I got tired of a very specific feeling.
                 </p>
                 <p>
                    The feeling of watching a real problem exist — something that genuinely affected people — while 
                    the &quot;solutions&quot; around it were either overpriced, half-built, or completely missing. 
                 </p>
                 <p>
                    I didn&apos;t start SolveMPire because I had everything figured out. I started it because 
                    waiting for the right moment was costing more than the risk of moving.
                 </p>
                 <p>
                    This company is built on one belief: that the people closest to a problem — the ones who feel 
                    it daily — deserve a team that will actually build the solution with them.&quot;
                 </p>
              </div>
              <div className="mt-16 flex items-center gap-6">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-sm font-black text-white shadow-lg">H</div>
                 <div>
                    <div className="text-sm font-black text-text-light uppercase tracking-[0.2em] mb-1">Hanish Jyosyabhatla</div>
                    <div className="text-[10px] font-bold text-text-light/25 uppercase tracking-widest">Founder, SolveMPire Pvt Ltd</div>
                 </div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="pt-32 text-center pb-20">
           <h3 className="font-bebas text-4xl md:text-7xl text-text-light tracking-tight mb-10">
              HAVE A REAL PROBLEM?
           </h3>
           <a href="/contact" className="inline-flex items-center px-12 py-5 bg-primary text-white text-xs font-black uppercase tracking-[0.25em] rounded-full hover:bg-secondary hover:shadow-[0_8px_40px_rgba(33,72,186,0.5)] transition-all active:scale-95 duration-300">
              Bring Us Your Problem
           </a>
        </section>

      </div>
    </div>
  );
}
