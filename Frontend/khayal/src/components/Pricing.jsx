export default function Pricing() {
  const plans = [
    { name: "Basic", price: "$9", desc: "Essential tools for individuals." },
    {
      name: "Professional",
      price: "$29",
      desc: "Enhanced quality & faster speeds.",
    },
    {
      name: "Genius",
      price: "$59",
      desc: "Full control and advanced AI tools.",
    },
    {
      name: "Business",
      price: "$99",
      desc: "Team collaboration & 8K processing.",
    },
  ];

  return (
    <section id="pricing" className="py-24 text-center">
      <h2 className="text-4xl font-bold text-gradient mb-12">Pricing Plans</h2>
      <div className="grid md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="p-6 bg-blue-950/30 border border-blue-700/30 rounded-xl"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">
              {plan.name}
            </h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <p className="text-gray-400">{plan.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
