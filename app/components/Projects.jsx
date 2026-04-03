"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Kai — Empathetic AI Agent",
      desc: "AI assistant enabling multilingual contextual conversations powered by Generative AI.",
      tech: ["Next.js", "OpenAI", "Node.js"],
    },
    {
      name: "Skin Cancer Detection",
      desc: "Deep learning model trained on HAM10000 dataset for medical image classification.",
      tech: ["TensorFlow", "Python", "CNN"],
    },
    {
      name: "Quiz Buddy",
      desc: "Responsive programming quiz platform with real-time scoring and clean UI.",
      tech: ["React", "Express", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="relative py-28 px-6 text-center">

      {/* background glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/10 blur-[140px] rounded-full -z-10 left-0" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16"
      >
        Featured <span className="text-purple-400">Projects</span>
      </motion.h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="
              group relative
              rounded-2xl
              bg-white/5
              backdrop-blur-lg
              border border-white/10
              p-7
              text-left
              transition-all duration-300
              hover:-translate-y-3
              hover:border-purple-400
              hover:shadow-xl hover:shadow-purple-500/20
            "
          >

            {/* gradient top line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition" />

            {/* title */}
            <h3 className="text-xl font-semibold text-white">
              {p.name}
            </h3>

            {/* description */}
            <p className="text-gray-400 mt-3 leading-relaxed">
              {p.desc}
            </p>

            {/* tech stack */}
            <div className="flex flex-wrap gap-2 mt-5">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* buttons */}
            <div className="flex gap-4 mt-6">
              <button className="text-sm text-purple-400 hover:text-purple-300 transition">
                Live →
              </button>

              <button className="text-sm text-gray-400 hover:text-white transition">
                GitHub →
              </button>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}