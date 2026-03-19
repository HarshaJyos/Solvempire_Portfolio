"use client";

import Image from "next/image";

const partners = [
  { name: "Google", logo: "/partners/google-cloud.png" },
  { name: "Azure", logo: "/partners/azure.png" },
  { name: "AWS", logo: "/partners/aws.png" },
  { name: "Oracle", logo: "/partners/oracle.png" },
  { name: "MongoDB", logo: "/partners/mongodb.png" },
  { name: "NVIDIA", logo: "/partners/nvidia.png" },
  { name: "OpenAI", logo: "/partners/openai.png" },
  { name: "Pinecone", logo: "/partners/pinecone.png" },
  { name: "Anthropic", logo: "/partners/anthropic.png" },
];

export default function Partners() {
  return (
    <section className="py-24 bg-bg-dark border-y border-white/[0.06] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center mb-16 px-4">
          <h2 className="text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-4">
            Our Ecosystem
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-text-light text-center max-w-2xl leading-tight">
            SolveMPire works with the world’s leading technology platforms to architect your solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110"
              title={partner.name}
            >
              <div className="h-8 md:h-12 w-auto relative">
                 <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
