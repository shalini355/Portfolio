export default function Projects() {
  const projects = [
    {
      name: "Kai — Empathetic AI Agent",
      desc: "AI assistant enabling multilingual contextual conversations.",
    },
    {
      name: "Skin Cancer Detection",
      desc: "TensorFlow model trained on HAM10000 dataset.",
    },
    {
      name: "Quiz Buddy",
      desc: "Responsive programming quiz platform.",
    },
  ];

  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-gray-400 mt-3">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}