import { useTranslation } from "react-i18next";

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("features.enhanceImagesTitle"),
      desc: t("features.enhanceImagesDesc"),
    },
    {
      title: t("features.increaseSharpnessTitle"),
      desc: t("features.increaseSharpnessDesc"),
    },
    {
      title: t("features.smartFiltersTitle"),
      desc: t("features.smartFiltersDesc"),
    },
  ];

  return (
    <section
      id="features"
      className="relative py-24 text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50"
        style={{ backgroundRepeat: "repeat" }}
      ></div>

      {/* Section content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-gradient mb-12">
          {t("features.mainTitle")}
        </h2>
        <div className="grid md:grid-cols-3 gap-10 px-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-blue-950/30 border border-blue-700/30 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                {f.title}
              </h3>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
