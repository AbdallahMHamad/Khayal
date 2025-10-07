import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$9/mo",
      desc: "Essential tools for individuals.",
      features: [
        "Access to basic AI tools",
        "Standard image generation",
        "Limited cloud storage (2GB)",
        "Community support",
      ],
      color: "from-blue-900 via-black-900 to-black",
    },
    {
      name: "Professional",
      price: "$29/mo",
      desc: "Enhanced quality & faster speeds.",
      features: [
        "HD image generation",
        "Priority rendering queue",
        "10GB cloud storage",
        "Email support",
        "Custom style presets",
      ],
      color: "from-blue-900 via-black-900 to-black",
    },
    {
      name: "Genius",
      price: "$59/mo",
      desc: "Full control and advanced AI tools.",
      features: [
        "4K AI generation",
        "Prompt optimization tools",
        "50GB storage",
        "Early access to new models",
        "Dedicated support",
      ],
      color: "from-blue-900 via-black-900 to-black",
    },
    {
      name: "Business",
      price: "$99/mo",
      desc: "Team collaboration & 8K processing.",
      features: [
        "8K ultra-fast AI rendering",
        "Team collaboration tools",
        "200GB secured storage",
        "API access",
        "24/7 premium support",
      ],
      color: "from-blue-900 via-black-900 to-black",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-24 text-center text-white overflow-hidden bg-black"
    >
      {/* Subtle galaxy background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-blue-950 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40"></div>

      {/* Floating lights */}
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <div className="relative z-10">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-black-400 bg-clip-text text-transparent mb-16">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 px-6 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative group rounded-2xl p-8 bg-gradient-to-b ${plan.color} border border-blue-500/20 shadow-2xl hover:shadow-black-500/30 transition-all duration-300`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black-700/30 to-blue-700/30 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-blue-300 mb-2">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold mb-3">{plan.price}</p>
                <p className="text-gray-300 mb-6">{plan.desc}</p>

                <ul className="text-gray-400 text-left mb-8 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm hover:text-gray-200 transition"
                    >
                      <span className="text-blue-400">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-blue-600 to-black-600 hover:from-blue-500 hover:to-black-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-400/40">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
