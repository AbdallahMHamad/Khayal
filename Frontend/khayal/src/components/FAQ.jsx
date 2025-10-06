export default function FAQ() {
  const faqs = [
    {
      q: "How does Enhancor's AI technology work?",
      a: "Enhancor uses machine learning trained on millions of high-quality images to enhance textures while preserving natural details.",
    },
    {
      q: "Will it work with my AI-generated images?",
      a: "Yes! Compatible with Midjourney, DALL-E, Stable Diffusion, and more.",
    },
    {
      q: "How long does the enhancement take?",
      a: "Most images are processed within seconds depending on size and level.",
    },
    {
      q: "What image formats and sizes are supported?",
      a: "PNG, JPEG, WebP up to 8K for Enterprise, 4K for Standard.",
    },
  ];

  return (
    <section id="faq" className="py-24 text-center">
      <h2 className="text-4xl font-bold text-gradient mb-12">
        Common Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-6 text-left px-6">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="bg-blue-950/30 p-6 rounded-lg border border-blue-800/30"
          >
            <h3 className="text-lg font-semibold text-blue-300 mb-2">{f.q}</h3>
            <p className="text-gray-300">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
