import React, { useState, useRef } from "react";
export default function Examples() {
  const [sliderPos, setSliderPos] = useState(50); // Default: middle
  const containerRef = useRef(null);

  // Handle slider movement
  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    let x = ((e.clientX - rect.left) / rect.width) * 100;
    x = Math.max(0, Math.min(x, 100)); // Clamp between 0 and 100
    setSliderPos(x);
  };

  return (
    <section
      id="examples"
      className="py-24 text-center bg-black text-white relative overflow-hidden"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Before & After
      </h2>

      {/* ======= Before & After Slider ======= */}
      <div
        ref={containerRef}
        onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
        onClick={handleMove}
        className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] border border-purple-500/30 cursor-ew-resize select-none"
      >
        {/* Before Image */}
        <img
          src="/after.png"
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* After Image with clipping */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src="/after.png"
            alt="After"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-blue-400 to-pink-400"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        ></div>

        {/* Slider Button */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full shadow-lg border border-white/40 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/70 text-white text-xs md:text-sm px-3 py-1 rounded-md border border-gray-700 backdrop-blur-sm">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-purple-500/70 text-white text-xs md:text-sm px-3 py-1 rounded-md border border-purple-400 backdrop-blur-sm">
          After
        </div>
      </div>

      {/* ======= Description Cards ======= */}
      <div className="mt-20 grid md:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto">
        <div className="p-6 rounded-xl bg-[#12111f] border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-md">
          <h3 className="text-purple-300 font-semibold text-lg mb-2">
            Humanize AI Portraits
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Add warmth and depth to AI-generated faces using fine-tuned color
            correction and adaptive lighting.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#12111f] border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-md">
          <h3 className="text-purple-300 font-semibold text-lg mb-2">
            Refine Artistic Creations
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Sharpen textures, enhance clarity, and fix imperfections for a
            clean, artistic finish.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#12111f] border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-md">
          <h3 className="text-purple-300 font-semibold text-lg mb-2">
            Perfect Skin Textures
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Balance smoothness and realism with AI-assisted texture correction
            for portraits.
          </p>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-500/10 blur-3xl rounded-full -z-10"></div>
    </section>
  );
}
