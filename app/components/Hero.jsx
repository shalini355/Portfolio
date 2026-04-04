"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (

    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-150 h-150 bg-purple-600/20 blur-[140px] rounded-full -top-37.5 -left-37.5" />
      <div className="absolute w-125 h-125 bg-blue-600/20 blur-[120px] rounded-full -bottom-30 -right-30" />

      {/* Content */}
      <div className="relative text-center max-w-3xl">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          <span className="text-white">Hi, I&apos;m Shalini Yadav</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-3xl md:text-4xl font-semibold text-purple-300"
        >
          AI-Focused Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          I build intelligent web applications using React, Node.js, and
          Generative AI to create meaningful user experiences.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto"
        >
          Building AI-powered web applications that combine intelligent systems
          with modern user experiences.
        </motion.p>

        {/* Highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { value: "5+", label: "Launch-ready projects" },
            { value: "AI", label: "Expertise area" },
            { value: "Impact", label: "Recruiter-ready focus" },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-left shadow-lg shadow-slate-900/20"
            >
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center"
        >
          <a
            href="#projects"
            className="relative inline-flex w-full max-w-60 items-center justify-center px-10 py-4 rounded-3xl font-semibold text-white overflow-hidden bg-linear-to-r from-purple-600 to-blue-500 shadow-lg shadow-purple-500/30 transition duration-300 hover:-translate-y-1 sm:w-auto"
          >
            View Projects →
          </a>

          <a
            href="/resume.pdf"
            className="inline-flex w-full max-w-60 items-center justify-center px-10 py-4 rounded-3xl font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300 sm:w-auto"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}