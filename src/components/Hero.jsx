import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0B1020] via-[#0B132B] to-[#0B1020] text-slate-100">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient/mesh overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(0,174,255,0.20),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(99,102,241,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-cyan-300 ring-1 ring-cyan-400/30 backdrop-blur"
        >
          <Rocket size={14} className="text-cyan-300" /> Where Code Meets Creativity
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-balance bg-gradient-to-br from-slate-100 via-cyan-100 to-slate-300 bg-clip-text text-3xl font-semibold leading-tight text-transparent sm:text-4xl md:text-5xl"
        >
          “Solutions that feel just right don't start that way — they’re born from curiosity and code.”
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-3xl text-pretty text-sm text-slate-300 sm:text-base"
        >
          Hi, I’m <span className="font-semibold text-cyan-300">Nagaraj Gireppa Kanni</span>, a Software Engineer exploring the edge of AI,
          Data Science, and scalable systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://www.linkedin.com/in/nagsgk"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-[0_0_20px_rgba(34,211,238,0.35)] transition hover:bg-cyan-400"
          >
            <Linkedin size={16} /> Let’s Connect
          </a>
          <a
            href="https://github.com/Nags-gk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50 hover:bg-white/10"
          >
            <Github size={16} /> GitHub
          </a>
        </motion.div>
      </div>

      {/* bottom indicator */}
      <div className="relative z-10 mx-auto mt-16 flex max-w-6xl justify-center px-6 pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-10 w-px bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
