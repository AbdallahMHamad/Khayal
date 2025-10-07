export default function Examples() {
  return (
    <section
      id="examples"
      className="py-24 text-center bg-blue text-white relative overflow-hidden"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-black-400 bg-clip-text text-transparent">
        Before & After
      </h2>

      {/* ======= Before & After Preview ======= */}
      <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_40px_-10px_rgba(88,28,135,0.5)] border border-purple-500/30">
        {/* Before Image */}
        <img
          src="/before.jpg"
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* After Overlay */}
        <div className="absolute inset-0 w-1/2 overflow-hidden border-r border-purple-400/60 transition-all duration-700 hover:w-3/4">
          <img
            src="/after.jpg"
            alt="After"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/70 text-white text-xs md:text-sm px-3 py-1 rounded-md border border-gray-700 backdrop-blur-sm">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-purple-500/70 text-white text-xs md:text-sm px-3 py-1 rounded-md border border-purple-400 backdrop-blur-sm">
          After
        </div>
      </div>

      {/* ======= Example Details ======= */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto">
        <div className="p-6 rounded-xl bg-[#12111f] border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-md">
          <h3 className="text-purple-300 font-semibold text-lg mb-2">
            Humanize AI Portraits
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Bring emotion and warmth to AI-generated faces using natural color
            correction and fine-tuned lighting.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#12111f] border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-md">
          <h3 className="text-purple-300 font-semibold text-lg mb-2">
            Refine Artistic Creations
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Enhance clarity, fix details, and balance tones for more realistic
            and visually appealing AI art.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#12111f] border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-md">
          <h3 className="text-purple-300 font-semibold text-lg mb-2">
            Perfect Skin Textures
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Remove imperfections while keeping natural detail — ideal for
            portraits and creative AI edits.
          </p>
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/10 blur-3xl rounded-full -z-10"></div>
    </section>
  );
}
