import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0B1020] font-[Inter] text-slate-100">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-cyan-300">NGK</a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#experience" className="hover:text-cyan-300">Experience</a>
            <a href="#projects" className="hover:text-cyan-300">Projects</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </nav>
        </div>
        <motion.div layoutId="progress" className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
