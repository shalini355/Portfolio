"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 flex justify-center"
    >
      {/* Glow background */}
      <div className="absolute w-125 h-125 bg-purple-600/10 blur-[140px] rounded-full -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          About <span className="text-purple-400">Me</span>
        </h2>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl shadow-slate-950/20">
          <p className="text-gray-300 leading-relaxed text-lg">
            I am a Computer Science undergraduate passionate about building
            intelligent digital experiences that merge Artificial Intelligence
            with modern web development.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg mt-6">
            My journey started with frontend development using React.js and
            gradually expanded into backend systems and machine learning. I
            enjoy transforming complex ideas into practical applications — from
            AI conversational assistants to real-world image classification
            systems.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg mt-6">
            I am particularly interested in Generative AI, full-stack
            architecture, and designing applications that are both technically
            strong and user-friendly.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg mt-6">
            When I am not coding, I actively participate in technical
            communities, hackathons, and learning new technologies shaping the
            future of software development.
          </p>
        </div>
      </motion.div>
    </section>
  );
}