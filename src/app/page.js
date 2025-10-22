import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GitHub from "@/components/GitHub";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Skills />
      <Experience />
      <GitHub />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
