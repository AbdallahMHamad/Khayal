import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How does Enhancor's AI technology work?",
      a: "Enhancor uses advanced machine learning trained on millions of premium-quality images to enhance textures, balance lighting, and preserve natural realism.",
    },
    {
      q: "Will it work with my AI-generated images?",
      a: "Absolutely! Enhancor is fully compatible with AI art from Midjourney, DALL·E, Stable Diffusion, Leonardo AI, and other platforms.",
    },
    {
      q: "How long does the enhancement take?",
      a: "Most images are processed in under 10 seconds, depending on file size, chosen enhancement level, and server load.",
    },
    {
      q: "What image formats and sizes are supported?",
      a: "We currently support PNG, JPEG, and WebP. Free tier supports up to 4K; enterprise users can upload up to 8K resolution.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="py-24 text-center relative bg-blue-70 text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-blue-400 to-black-400 bg-clip-text text-transparent">
        Common Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4 text-left px-6">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="bg-[#0f0c29]/60 backdrop-blur-md border border-green-500/20 rounded-xl shadow-md transition-all duration-300 hover:border-blue-400/40"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <h3 className="text-lg md:text-xl font-semibold text-blue-200">
                {f.q}
              </h3>
              {openIndex === i ? (
                <ChevronUp className="text-blue-400 w-5 h-5" />
              ) : (
                <ChevronDown className="text-blue-400 w-5 h-5" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === i
                  ? "max-h-40 opacity-100 p-5 pt-0"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-300 text-sm leading-relaxed">{f.a}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Soft glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-3xl rounded-full -z-10"></div>
    </section>
  );
}
``;
