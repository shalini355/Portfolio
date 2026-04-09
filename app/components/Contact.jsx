"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative py-24 px-4 sm:px-6 text-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-130 h-130 bg-purple-600/20 blur-[140px] rounded-full left-1/2 -translate-x-1/2 top-10 -z-10" />

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
        I am actively seeking Software Development and AI Internship opportunities.
        If you are working on exciting ideas or innovative products, I would love to contribute and collaborate.
      </motion.p>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-xl shadow-purple-500/10"
      >
        <p className="text-gray-300 mb-6">
          Reach me directly via email or explore my work online.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 mb-8 text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Email</p>
            <p className="text-purple-400 font-medium">syhalini@gmail.com</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">GitHub</p>
            <a href="https://github.com/shalini355" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">
              github.com/shalini355
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">LinkedIn</p>
            <a href="https://www.linkedin.com/in/shalini-yadav-355abc" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition">
              linkedin.com/in/shalini-yadav-355abc
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
