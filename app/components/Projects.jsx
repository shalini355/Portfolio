"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Kai — AI Wellness Assistant",
      highlight: "Feature project",
      problem: "Users need a conversational AI assistant that can understand emotional context and support wellness tasks.",
      solution: "A multilingual AI agent built with conversational state, context awareness, and generative responses for meaningful support.",
      architecture: "Next.js frontend, Node.js backend, OpenAI API integration, and a responsive chat interface.",
      tech: ["Next.js", "Node.js", "OpenAI", "Tailwind CSS"],
      demo: "Conversational UI with wellness prompts, session memory, and a polished mobile-ready layout.",
      linkLabel: "Live demo",
      linkHref: "#contact",
    },
    {
      name: "Skin Cancer Detection",
      highlight: "AI / ML showcase",
      problem: "Detecting complex skin lesion patterns with limited manual review.",
      solution: "A TensorFlow model trained on HAM10000 to classify dermatology images with high accuracy.",
      architecture: "Image preprocessing pipeline, CNN model training, and prediction dashboard for sample cases.",
      tech: ["TensorFlow", "Python", "CNN", "Keras"],
      demo: "Prediction flow, dataset workflow, and accuracy insights for medical image classification.",
      linkLabel: "Model details",
      linkHref: "#contact",
    },
    {
      name: "Quiz Buddy",
      highlight: "Frontend proof",
      problem: "Learners need an engaging quiz platform with instant feedback and responsive design.",
      solution: "A modern quiz app with score tracking, adaptive UI, and fast user interactions.",
      architecture: "React frontend, Express API, MongoDB storage, and responsive design throughout.",
      tech: ["React", "Express", "MongoDB", "Tailwind CSS"],
      demo: "Clean UI, multiple quiz modes, and mobile-friendly exam flows.",
      linkLabel: "View UI",
      linkHref: "#contact",
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 text-center">

      {/* Background glow */}
      <div className="absolute w-152 h-152 bg-purple-600/10 blur-[140px] rounded-full -z-10 left-0" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16"
      >
        Featured <span className="text-purple-400">Projects</span>
      </motion.h2>

      {/* Project Grid */}
      <div className="grid gap-8 max-w-6xl mx-auto sm:grid-cols-2 xl:grid-cols-3">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className={
              `group relative rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 p-7 text-left transition-all duration-300 hover:-translate-y-3 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/20 ${
                i === 0 ? "sm:col-span-2 xl:col-span-2" : ""
              }`
            }
          >

            {/* Label */}
            <span className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
              {p.highlight}
            </span>

            {/* Title */}
            <h3 className="mt-4 text-2xl font-semibold text-white">
              {p.name}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mt-4 leading-relaxed text-sm md:text-base">
              {p.problem}
            </p>

            <div className="mt-6 space-y-4 text-gray-300 text-sm md:text-base">
              <div>
                <p className="font-semibold text-white">Solution</p>
                <p className="mt-2 text-gray-400">{p.solution}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Architecture</p>
                <p className="mt-2 text-gray-400">{p.architecture}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Demo</p>
                <p className="mt-2 text-gray-400">{p.demo}</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-6">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="https://github.com/shalini355"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-white rounded-full bg-purple-600/20 px-4 py-2 transition hover:bg-purple-500/30"
              >
                GitHub
              </a>
              <a
                href={p.linkHref}
                className="text-sm font-semibold text-gray-300 rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10"
              >
                {p.linkLabel}
              </a>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}