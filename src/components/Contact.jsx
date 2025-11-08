import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileDown, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0A0F1E] px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-cyan-300 sm:text-3xl"
        >
          Let’s Collaborate on the Future of AI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base"
        >
          Open to internships, research collaborations, and building intelligent products that make a real impact.
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="mailto:nagaraj@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-[0_0_20px_rgba(34,211,238,0.35)] transition hover:bg-cyan-400"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50 hover:bg-white/10"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-200 transition hover:border-cyan-400/50 hover:bg-white/10"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm text-cyan-200 transition hover:bg-cyan-400/20"
          >
            <FileDown size={16} /> Resume
          </a>
        </div>

        <p className="mt-10 text-xs text-slate-400">© {new Date().getFullYear()} Nagaraj Gireppa Kanni. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
