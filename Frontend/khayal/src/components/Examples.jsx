export default function Examples() {
  return (
    <section id="examples" className="py-24 text-center">
      <h2 className="text-4xl font-bold text-gradient mb-12">Before & After</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
          <img
            src="/before.jpg"
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-blue-500">
            <img
              src="/after.jpg"
              alt="After"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6 px-8">
        <div>
          <h3 className="text-blue-400 font-semibold">
            Humanize Your AI Influencers
          </h3>
        </div>
        <div>
          <h3 className="text-blue-400 font-semibold">Fix Your AI Art</h3>
        </div>
        <div>
          <h3 className="text-blue-400 font-semibold">Enhance Skin Details</h3>
        </div>
      </div>
    </section>
  );
}
