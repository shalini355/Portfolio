"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "React.js",
    "Node.js",
    "Express",
    "Python",
    "TensorFlow",
    "Generative AI",
  ];

  return (
    <section id="skills" className="relative py-28 px-6 text-center">

      {/* background glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full -z-10 right-0" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-14"
      >
        My <span className="text-purple-400">Skills</span>
      </motion.h2>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="
              px-8 py-4
              rounded-xl
              bg-white/5
              backdrop-blur-lg
              border border-white/10
              text-gray-200
              font-medium
              cursor-default
              transition-all duration-300
              hover:-translate-y-2
              hover:border-purple-400
              hover:shadow-lg hover:shadow-purple-500/30
            "
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}