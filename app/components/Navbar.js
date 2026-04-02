"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed w-full backdrop-blur-md bg-black/30 z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <h1 className="font-bold text-lg">Shalini.dev</h1>

        <div className="space-x-6 text-gray-300">
          <a href="#projects" className="hover:text-purple-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-purple-400">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}