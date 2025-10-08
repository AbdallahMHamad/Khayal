import React from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import DescriptionCard from "./DescriptionCard";
import { useTranslation } from "react-i18next";

export default function Examples() {
  const { t, i18n } = useTranslation();
  const rtl = i18n.language === "ar";

  // Automatically get cards from en JSON
  const cardKeys = ["card1", "card2", "card3"];
  const cards = cardKeys.map((key) => ({
    title: t(`examples.${key}.title`),
    description: t(`examples.${key}.description`),
  }));

  return (
    <section
      id="examples"
      dir={rtl ? "rtl" : "ltr"}
      className="py-24 text-center bg-black text-white relative overflow-hidden"
    >
      {/* Subtle texture background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-100"></div>

      {/* Section title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        {t("examples.title")}
      </h2>

      {/* Before/After slider */}
      <BeforeAfterSlider before="/before.png" after="/after.png" rtl={rtl} />

      {/* Description cards */}
      <div className="mt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <DescriptionCard key={i} {...card} />
        ))}
      </div>

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-500/10 blur-3xl rounded-full -z-10"></div>
    </section>
  );
}
