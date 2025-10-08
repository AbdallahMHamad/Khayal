import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-bg min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-100 -z-0"></div>

      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight relative z-10">
        {t("hero.title")
          .split("AI")
          .map((part, i) => (
            <span key={i}>
              {i > 0 ? <span className="text-gradient">AI</span> : null}
              {part}
            </span>
          ))}
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl relative z-10">
        {t("hero.subtitle")}
      </p>

      <div className="mt-8 flex gap-4 relative z-10">
        <button
          onClick={() => scrollToSection("pricing")}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
        >
          {t("hero.btnEnhance")}
        </button>

        <button
          onClick={() => scrollToSection("examples")}
          className="border border-blue-400 hover:bg-blue-800/30 px-6 py-3 rounded-lg font-semibold"
        >
          {t("hero.btnExamples")}
        </button>
      </div>

      <p className="text-sm text-gray-400 mt-8 relative z-10">
        {t("hero.footer")}
      </p>
    </section>
  );
}
