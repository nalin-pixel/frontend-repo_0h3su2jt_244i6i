import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Python',
  'FastAPI',
  'React',
  'PyTorch',
  'TensorFlow',
  'LangChain',
  'Docker',
  'AWS',
  'Vector Search',
  'LLMs',
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

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
          >
            <h3 className="text-lg font-medium text-slate-100">Education</h3>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-medium text-slate-100">Skill Cloud</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, type: 'spring', stiffness: 120 }}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
