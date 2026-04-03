"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (

    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />

      {/* Content */}
      <div className="relative text-center max-w-3xl">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          <span className="text-white">
            Shalini Yadav
          </span>
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-xl md:text-2xl text-purple-300 font-medium"
        >
          <TypeAnimation
            sequence={[
              "AI Developer",
              2000,
              "Full Stack Engineer",
              2000,
              "Generative AI Builder",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-gray-400 text-lg leading-relaxed"
        >
          I build intelligent web applications powered by Generative AI,
          scalable backend architecture, and modern user experiences
          designed for real-world impact.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >

          {/* VIEW PROJECTS */}
          <a
            href="#projects"
            className="
      relative px-10 py-4 rounded-xl font-semibold
      text-white overflow-hidden group
      bg-gradient-to-r from-purple-600 to-blue-500
      transition-all duration-300
      shadow-lg shadow-purple-500/30
      hover:shadow-purple-500/60 hover:-translate-y-1
    "
          >
            <span className="relative z-10">
              View Projects →
            </span>
            {/* <h1 className="text-red-500 text-6xl">
  TEST
</h1> */}

            {/* animated shine */}
            <span className="
      absolute inset-0 opacity-0 group-hover:opacity-100
      transition duration-500
      bg-gradient-to-r from-transparent via-white/20 to-transparent
      translate-x-[-100%] group-hover:translate-x-[100%]
    "/>
          </a>

          {/* RESUME BUTTON */}
          <a
            href="/resume.pdf"
            className="
      px-10 py-4 rounded-xl font-medium
      border border-white/20
      backdrop-blur-md
      bg-white/5
      hover:bg-white/10
      hover:-translate-y-1
      transition-all duration-300
    "
          >
            Download Resume
          </a>

        </motion.div>
      </div>
    </section>
  );
}