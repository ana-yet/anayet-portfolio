import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GitHub from "@/components/GitHub";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { githubStats } from "@/lib/data";

export default function Home() {
  // Using static data for SSG
  const { repositories, stars } = githubStats;

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <GitHub repos={repositories} forks={20} stars={20} />
      <Contact />
      <Footer />
    </main>
  );
}
