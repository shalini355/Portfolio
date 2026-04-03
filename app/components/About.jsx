"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 flex justify-center"
    >
      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full -z-10" />

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
        <div className="
          bg-white/5
          backdrop-blur-lg
          border border-white/10
          rounded-2xl
          p-8
          shadow-lg
        ">
          <p className="text-gray-300 leading-relaxed text-lg">
            Computer Science undergraduate passionate about building
            <span className="text-purple-300"> AI-powered applications </span>
            that solve real-world problems. I work across the full stack —
            from responsive interfaces to REST APIs and
            <span className="text-blue-300"> Generative AI integrations</span>,
            focusing on scalable and impactful products.
          </p>
        </div>
      </motion.div>
    </section>
  );
}