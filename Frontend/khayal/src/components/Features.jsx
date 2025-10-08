import { useTranslation } from "react-i18next";

export default function Features() {
  const { t } = useTranslation();

  // Pull the whole array from i18n
  const features = t("features", { returnObjects: true });

  return (
    <section id="features" className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
