"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full left-1/2 -translate-x-1/2 top-10 -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Let&apos;s Build Something{" "}
        <span className="text-purple-400">Together</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-400 max-w-xl mx-auto mb-12"
      >
        Have an idea, project, or collaboration in mind?
        I’m always excited to work on impactful AI and
        full-stack applications.
      </motion.p>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="
          max-w-md mx-auto
          bg-white/5
          backdrop-blur-lg
          border border-white/10
          rounded-2xl
          p-10
          shadow-xl shadow-purple-500/10
        "
      >
        <p className="text-gray-300 mb-6">
          Reach me directly via email:
        </p>

        {/* Email */}
        <p className="text-purple-400 font-medium mb-8">
          syhalini@gmail.com
        </p>

        {/* Button */}
        <a
          href="mailto:syhalini@gmail.com"
          className="
            inline-block
            px-10 py-4
            rounded-xl
            font-semibold
            bg-gradient-to-r from-purple-600 to-blue-500
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-lg hover:shadow-purple-500/40
          "
        >
          Contact Me →
        </a>
      </motion.div>
    </section>
  );
}