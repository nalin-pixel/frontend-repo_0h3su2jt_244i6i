import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, ShieldCheck, BookOpen } from 'lucide-react';

const projects = [
  {
    title: 'TaxBot (AI Tax Assistant)',
    desc: 'LangChain + Transformers + RAG; delivers 90–95% query accuracy.',
    stack: ['LangChain', 'Transformers', 'RAG', 'FastAPI'],
    icon: Cpu,
    link: '#',
  },
  {
    title: 'SnoopTrade (Insider Trading Detection)',
    desc: 'Anomaly detection with PyTorch and PostgreSQL for pattern discovery.',
    stack: ['PyTorch', 'PostgreSQL', 'Python'],
    icon: ShieldCheck,
    link: '#',
  },
  {
    title: 'Canvas-Go (Learning Management)',
    desc: 'FastAPI + React + AWS; JWT-secured backend and scalable services.',
    stack: ['FastAPI', 'React', 'AWS', 'JWT'],
    icon: Layers,
    link: '#',
  },
  {
    title: 'Quantum ML Research',
    desc: 'Quanvolutional Neural Networks for image classification tasks.',
    stack: ['QML', 'PyTorch', 'NumPy'],
    icon: BookOpen,
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0B1020] px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-cyan-300 sm:text-3xl"
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(60% 80% at 50% 0%, rgba(34,211,238,0.15), transparent 70%)' }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-300">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100">{p.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] text-cyan-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
                  <p className="mt-3 text-xs text-slate-400">Hover to explore — the card subtly glows like a neural net firing.</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
