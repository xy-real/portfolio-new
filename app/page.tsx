
import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-60 rounded-md bg-lime px-4 py-2 font-semibold text-ink focus:not-sr-only"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
