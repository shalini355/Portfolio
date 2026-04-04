"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "AI-Focused Full Stack Developer",
  "Software Developer",
  "Product-driven Full Stack Engineer",
  "AI Application Builder",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const updateText = isDeleting
      ? currentRole.slice(0, text.length - 1)
      : currentRole.slice(0, text.length + 1);

    const timer = setTimeout(() => {
      setText(updateText);

      if (!isDeleting && updateText === currentRole) {
        setIsDeleting(true);
        setSpeed(1500);
      } else if (isDeleting && updateText === "") {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
        setSpeed(500);
      } else {
        setSpeed(isDeleting ? 60 : 120);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, speed]);

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
          className="mt-6 text-2xl md:text-3xl font-semibold text-purple-300"
        >
          <span className="block">
            <span className="text-white">{text}</span>
            <span className="inline-block ml-2 text-white opacity-80 animate-pulse">|</span>
          </span>
          <span className="block mt-2 text-xs md:text-sm text-gray-400 uppercase tracking-[0.25em]">
            AI Developer · Software Developer · Full Stack Engineer
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          I build intelligent web applications by combining modern web
          technologies with Generative AI. My work focuses on creating
          responsive, user-centric systems powered by real-world machine
          learning and scalable backend architecture.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto"
        >
          Currently pursuing B.Tech in Computer Science and actively seeking
          Software Development and AI Internship opportunities.
        </motion.p>


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
            href="/api/resume"
            className="inline-flex w-full max-w-60 items-center justify-center px-10 py-4 rounded-3xl font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300 sm:w-auto"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}