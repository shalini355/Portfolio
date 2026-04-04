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
            I&apos;m a Computer Science student passionate about combining AI
            and web development to build intelligent systems. I enjoy turning
            complex ideas into usable products and exploring how Generative AI
            can improve real-world applications.
          </p>

          <div className="mt-8 space-y-4 text-left">
            <div>
              <p className="font-semibold text-white">What I build</p>
              <p className="text-gray-400 mt-2 text-sm">
                Interactive web apps powered by AI, from smart assistants to
                ML-backed prediction tools.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">How I approach it</p>
              <p className="text-gray-400 mt-2 text-sm">
                I blend clean front-end UX, reliable backend services, and
                data-driven AI models to deliver recruiter-ready solutions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}