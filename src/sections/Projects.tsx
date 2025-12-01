import type { FC } from "react";
import { projects } from "../data/projects";
import { motion, type Variants } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Projects: FC = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-400 inline-block">
            Proyectos Destacados
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 rounded-full" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 max-w-2xl text-lg"
        >
          Una selección de mis trabajos más recientes, enfocados en crear
          experiencias web modernas y funcionales.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={itemVariants}
            className="group relative flex flex-col h-full bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl overflow-hidden hover:border-sky-500/50 transition-colors duration-300"
          >
            {/* Gradient Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative p-6 flex flex-col h-full z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-slate-800/50 text-sky-400 group-hover:text-sky-300 transition-colors">
                  <Code2 size={24} />
                </div>
                <div className="flex gap-2">
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                      title="Ver código"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-slate-800/50 text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-all"
                      title="Ver demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800/50 flex items-center justify-between text-xs text-slate-500">
                  <span>{project.stack}</span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
