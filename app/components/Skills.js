export default function Skills() {
  const skills = [
    "React.js",
    "Node.js",
    "Express",
    "Python",
    "TensorFlow",
    "Generative AI",
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-purple-600 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}