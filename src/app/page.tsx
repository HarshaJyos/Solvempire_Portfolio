import Hero from "@/components/Hero";
import Founder from "@/components/Founder";
import MissionVision from "@/components/MissionVision";
import CtaBanner from "@/components/CtaBanner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Founder />
      <MissionVision />
      <CtaBanner />
      <About />
      <Projects />
      <CtaBanner />
      <Contact />
    </>
  );
}
