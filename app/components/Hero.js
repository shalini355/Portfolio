"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold"
      >
        Shalini Yadav
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-xl text-gray-300"
      >
        AI-Driven Full Stack Developer
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 max-w-xl text-gray-400"
      >
        I build intelligent web applications using Generative AI,
        scalable backend systems, and modern user experiences.
      </motion.p>

      <div className="mt-10 flex gap-6">
        <a
          href="#projects"
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 glow hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="px-8 py-3 rounded-lg border border-purple-500 hover:bg-purple-600/20 transition"
        >
          Resume
        </a>
      </div>
    </section>
  );
}