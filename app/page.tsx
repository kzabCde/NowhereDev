import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative overflow-x-clip bg-gradient-to-b from-black via-surface to-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Socials />
      <Contact />
      <Footer />
    </main>
  );
}
