"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 w-full z-50
        backdrop-blur-xl bg-black/40
        border-b border-white/10
      "
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide text-white">
  Shalini.dev
</h1>

        {/* Nav Links */}
        <div className="flex items-center gap-8 text-gray-300 font-medium">
          
          <a href="#projects" className="relative group">
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full"></span>
          </a>

          <a href="#contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
          </a>

          {/* CTA Button */}
          <a
            href="#contact"
            className="
              px-4 py-2 rounded-xl
              bg-gradient-to-r from-purple-500 to-blue-500
              text-white text-sm font-semibold
              hover:scale-105 transition duration-300
              shadow-lg
            "
          >
            Hire Me
          </a>

        </div>
      </div>
    </motion.nav>
  );
}