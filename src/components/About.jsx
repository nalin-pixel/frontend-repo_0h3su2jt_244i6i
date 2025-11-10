import React from 'react';
import { motion } from 'framer-motion';
import {
  FunctionSquare,
  ServerCog,
  Atom,
  Flame,
  Boxes,
  Cloud,
  Search,
  Brain,
  Bot,
  Database,
  Link2
} from 'lucide-react';

const skillLogos = [
  { name: 'Python', Icon: FunctionSquare, colors: 'from-amber-300 to-orange-500' },
  { name: 'FastAPI', Icon: ServerCog, colors: 'from-emerald-300 to-teal-500' },
  { name: 'React', Icon: Atom, colors: 'from-cyan-300 to-sky-500' },
  { name: 'PyTorch', Icon: Flame, colors: 'from-rose-300 to-orange-500' },
  { name: 'TensorFlow', Icon: Boxes, colors: 'from-yellow-300 to-amber-500' },
  { name: 'LangChain', Icon: Link2, colors: 'from-teal-300 to-cyan-500' },
  { name: 'Docker', Icon: Boxes, colors: 'from-blue-300 to-indigo-500' },
  { name: 'AWS', Icon: Cloud, colors: 'from-orange-300 to-yellow-500' },
  { name: 'Vector Search', Icon: Search, colors: 'from-fuchsia-300 to-violet-500' },
  { name: 'LLMs', Icon: Brain, colors: 'from-lime-300 to-emerald-500' },
];

const LogoBadge = ({ Icon, label, colors }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 140 }}
    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
  >
    <div className={`grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br ${colors} shadow-[0_0_30px_rgba(34,211,238,0.15)]`}> 
      <Icon className="text-slate-900" size={18} />
    </div>
    <span className="text-sm text-slate-200">{label}</span>
  </motion.div>
);

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
            <h3 className="text-lg font-medium text-slate-100">Skill Logos</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skillLogos.map((s) => (
                <LogoBadge key={s.name} Icon={s.Icon} label={s.name} colors={s.colors} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
