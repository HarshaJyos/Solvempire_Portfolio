import Hero from "@/components/Hero";
import Team from "@/components/Team";
import MissionVision from "@/components/MissionVision";
import CtaBanner from "@/components/CtaBanner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Team />
      <MissionVision />
      <CtaBanner />
      <About />
      <Projects />
      <CtaBanner />
      <Contact />
    </>
  );
}
