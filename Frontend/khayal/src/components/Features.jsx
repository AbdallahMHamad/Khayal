import React from "react";
import { useTranslation } from "react-i18next";

export default function Features() {
  const { t, i18n } = useTranslation();
  const rtl = i18n.language === "ar";

  // Pull the full features object from i18n
  const data = t("features", { returnObjects: true });

  // Manually structure the features based on your JSON keys
  const features = [
    {
      title: data.enhanceImagesTitle,
      desc: data.enhanceImagesDesc,
    },
    {
      title: data.increaseSharpnessTitle,
      desc: data.increaseSharpnessDesc,
    },
    {
      title: data.smartFiltersTitle,
      desc: data.smartFiltersDesc,
    },
  ];

  return (
    <section
      id="features"
      dir={rtl ? "rtl" : "ltr"}
      className="relative py-24 text-white bg-black overflow-hidden"
    >
      {/* Soft background gradient */}

      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-100 -z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main title */}
        <h2 className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {data.mainTitle}
        </h2>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-[#0f0c29]/80 to-[#000000]/80 backdrop-blur-md border border-blue-500/20 rounded-2xl p-8 shadow-md hover:border-blue-400/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-300">
                {f.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
