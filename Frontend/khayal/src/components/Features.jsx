export default function Features() {
  const features = [
    { title: "Enhance Images", desc: "Boost details and natural lighting." },
    {
      title: "Increase Sharpness",
      desc: "Eliminate blur and noise instantly.",
    },
    {
      title: "Smart Filters",
      desc: "Apply realistic AI-based clarity filters.",
    },
  ];

  return (
    <section id="features" className="py-24 text-center">
      <h2 className="text-4xl font-bold text-gradient mb-12">Main Features</h2>
      <div className="grid md:grid-cols-3 gap-10 px-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-blue-950/30 border border-blue-700/30 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">
              {f.title}
            </h3>
            <p className="text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
