import type { FC } from "react";
import { skills } from "../data/skills";
import { motion } from "framer-motion";

const Skills: FC = () => {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-4 py-20 border-t border-slate-800/30"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Habilidades</h2>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative rounded-xl border border-slate-800/60 bg-slate-900/40 px-4 py-3 text-sm text-slate-300 hover:text-white hover:border-sky-500/50 hover:bg-slate-800/60 transition-all duration-300 cursor-default"
          >
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-sky-500/50 group-hover:bg-sky-400 transition-colors" />
              <span className="font-medium">{skill}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
