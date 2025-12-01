import type { FC } from "react";
import { certifications } from "../data/certifications";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const Certifications: FC = () => {
  return (
    <section
      id="certifications"
      className="max-w-5xl mx-auto px-4 py-20 border-t border-slate-800/30"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Certificaciones</h2>
      </motion.div>

      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl border border-slate-800/60 bg-slate-900/20 hover:bg-slate-800/40 hover:border-sky-500/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-slate-800/50 text-sky-400 group-hover:text-sky-300 group-hover:bg-sky-500/10 transition-colors">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-sky-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 px-3 py-1.5 rounded-full bg-slate-800/30 border border-slate-800 group-hover:border-slate-700 transition-colors self-start sm:self-auto">
              <Calendar size={14} />
              <span>{cert.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
