"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 w-full z-50 overflow-hidden backdrop-blur-xl bg-black/40 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4 px-4 sm:px-6 py-4">
        <h1 className="text-lg font-bold tracking-wide text-white">Shalini.dev</h1>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400 sm:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          {open ? "Close" : "Menu"}
        </button>

        <div
          className={`w-full sm:w-auto sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-4 text-gray-300 font-medium sm:gap-8 ${open ? "block" : "hidden"}`}
        >
          <a href="#skills" className="relative group block py-2 sm:py-0">
            Skills
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
          </a>

          <a href="#projects" className="relative group block py-2 sm:py-0">
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
          </a>

          <a href="#about" className="relative group block py-2 sm:py-0">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </a>

          <a href="#experience" className="relative group block py-2 sm:py-0">
            Experience
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}