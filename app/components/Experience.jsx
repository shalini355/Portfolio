"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const items = [
    {
      role: "Campus Ambassador",
      org: "Unstop",
      detail: "Promoted technical events and built community engagement across campus.",
    },
    {
      role: "Tech Club Member",
      org: "College Tech Club",
      detail: "Collaborated on workshops and peer projects in AI, web development, and cloud.",
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute w-100 h-100 bg-blue-600/10 blur-[140px] rounded-full -z-10 right-0 top-24" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Experience <span className="text-purple-400">& Activities</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 p-7 text-left shadow-xl shadow-slate-950/10"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-purple-300">{item.role}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.org}</h3>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
