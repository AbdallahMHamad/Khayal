export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
        Transform Your AI{" "}
        <span className="text-gradient">Images to Perfection</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl">
        Advanced AI technology that fixes artificial patterns and enhances skin
        textures while preserving your image's original character.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
          Start Enhancing Free
        </button>
        <button className="border border-blue-400 hover:bg-blue-800/30 px-6 py-3 rounded-lg font-semibold">
          View Examples
        </button>
      </div>
      <p className="text-sm text-gray-400 mt-8">
        ✨ Compatible with Midjourney, DALL-E, Stable Diffusion & more
      </p>
    </section>
  );
}
