import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp } from 'lucide-react';

const experiences = [
  {
    role: 'Data Analyst Intern',
    company: 'CXAnywhere',
    impact: 'Automated analytics pipelines; improved insights latency by 40%',
    metrics: 80,
    period: '2023 – 2024',
  },
  {
    role: 'Software Developer',
    company: 'The Sparks Foundation',
    impact: 'Built full‑stack features and dashboards for learning apps',
    metrics: 70,
    period: '2021 – 2022',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-[#0A0F1E] px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-cyan-300 sm:text-3xl"
        >
          Experience
        </motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-cyan-300">
                    <Briefcase size={16} />
                    <span className="text-sm font-medium">{exp.company}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-slate-100">{exp.role}</h3>
                  <p className="mt-2 text-sm text-slate-300">{exp.impact}</p>
                  <p className="mt-1 text-xs text-slate-400">{exp.period}</p>
                </div>
                <TrendingUp className="text-cyan-300" size={20} />
              </div>
              <div className="relative z-10 mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
                  style={{ width: `${exp.metrics}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
