import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Python', 'FastAPI', 'React', 'Node.js', 'TypeScript', 'PyTorch', 'TensorFlow', 'LangChain', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'GCP', 'LLMs', 'Vector Search', 'RAG', 'Git', 'CI/CD'
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0B1020] px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-cyan-300 sm:text-3xl"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base"
        >
          I turn complex data problems into intuitive, intelligent systems — from AI-powered chatbots to anomaly
          detection engines. I’m currently pursuing my M.S. in Software Engineering at San Jose State University
          (2024–2025) and previously completed a B.E. in Computer Science at NMIT, Bangalore (2018–2022).
        </motion.p>

        {/* Simple, non-card layout */}
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-medium text-slate-100"
            >
              Education
            </motion.h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold text-cyan-300">M.S. Software Engineering</span> – San Jose State
                University (2024–2025)
              </li>
              <li>
                <span className="font-semibold text-cyan-300">B.E. Computer Science</span> – NMIT, Bangalore
                (2018–2022)
              </li>
            </ul>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-medium text-slate-100"
            >
              Skills
            </motion.h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
