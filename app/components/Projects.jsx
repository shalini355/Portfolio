"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Kai — AI Wellness Assistant",
      highlight: "Feature project",
      description:
        "Kai is an AI-powered conversational assistant designed to provide empathetic and contextual interactions for mood tracking and wellness support.",
      problem:
        "Many digital assistants lack emotional awareness and natural conversational flow. The goal was to design an AI system capable of contextual and human-like interaction.",
      solution:
        "Built a full-stack AI application that processes user inputs in real time, communicates with a Generative AI model, and delivers responsive conversational experiences.",
      features: [
        "Real-time AI conversations",
        "Multilingual interaction support",
        "REST API-based backend",
        "Responsive modern UI",
        "Context-aware responses",
      ],
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Generative AI",
      ],
      linkLabel: "Live demo",
      linkHref: "#contact",
    },
    {
      name: "Skin Cancer Detection System",
      highlight: "AI / ML showcase",
      description:
        "A machine learning application developed to classify skin lesions using medical image datasets.",
      problem:
        "Medical image diagnosis often requires faster, more accurate support for clinicians and patients.",
      solution:
        "The model was trained using the HAM10000 dataset with preprocessing and normalization techniques to improve prediction accuracy. A Flask API was implemented to serve predictions in real time.",
      contributions: [
        "Image preprocessing and normalization",
        "Model training using TensorFlow",
        "Medical dataset handling",
        "Deployment via Flask API",
      ],
      tech: ["Python", "TensorFlow", "Flask", "Machine Learning"],
      linkLabel: "Model details",
      linkHref: "#contact",
    },
    {
      name: "Quiz Buddy — Programming Practice Platform",
      highlight: "Frontend proof",
      description:
        "Quiz Buddy is a responsive programming quiz platform designed to help users practice coding concepts across multiple difficulty levels.",
      problem:
        "Learners need an engaging quiz platform with instant feedback and seamless interaction.",
      solution:
        "The project focuses on dynamic UI rendering, score tracking, and seamless frontend interaction integrated with backend services.",
      features: [
        "Dynamic question rendering",
        "Real-time score tracking",
        "Multi-level quizzes",
        "Mobile-friendly responsive design",
      ],
      tech: ["HTML5", "CSS3", "JavaScript (ES6)"],
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
              {p.description}
            </p>

            <div className="mt-6 space-y-4 text-gray-300 text-sm md:text-base">
              <div>
                <p className="font-semibold text-white">Problem</p>
                <p className="mt-2 text-gray-400">{p.problem}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Solution</p>
                <p className="mt-2 text-gray-400">{p.solution}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-white">Key {p.contributions ? "Contributions" : "Features"}</p>
              <ul className="mt-3 grid gap-2 text-gray-400 text-sm md:text-base list-disc list-inside">
                {(p.contributions || p.features).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
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

          </motion.div>
        ))}

      </div>
    </section>
  );
}