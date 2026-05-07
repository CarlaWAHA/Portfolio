import Navbar from "../src/components/navbar";
import Hero from "../src/components/hero";
import About from "../src/components/about";
import Skills from "../src/components/skills";
import Projects from "../src/components/projects";
import Experience from "../src/components/experience";
import Contact from "../src/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}