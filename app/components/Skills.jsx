"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST API Development"],
    },
    {
      title: "AI / ML",
      items: [
        "TensorFlow",
        "Machine Learning",
        "Generative AI APIs",
        "Prompt Engineering",
      ],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Vercel", "Postman", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="relative py-28 px-6 text-center">

      {/* background glow */}
      <div className="absolute w-125 h-125 bg-blue-600/10 blur-[140px] rounded-full -z-10 right-0" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-14"
      >
        My <span className="text-purple-400">Skills</span>
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid gap-6 max-w-5xl mx-auto sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 p-6 text-left shadow-xl shadow-slate-950/10"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-4">
              {category.title}
            </p>
            <div className="space-y-3">
              {category.items.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-purple-400">•</span>
                  <span className="text-gray-200">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}