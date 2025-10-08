import React from "react";
import { useTranslation } from "react-i18next";

export default function PlanCard({ plan }) {
  const { t } = useTranslation();

  const planData = t(`plans.${plan.id}`, { returnObjects: true });

  return (
    <div
      className={`relative group rounded-2xl p-8 border border-blue-500/20 shadow-2xl transition-all duration-300
      ${plan.popular ? "scale-105 border-purple-400 shadow-purple-700/50" : ""}
      bg-gradient-to-b ${plan.color}`}
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          {t("mostPopular")}
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-tr from-black-700/30 to-blue-700/30 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>

      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-blue-300 mb-2">
          {plan.name}
        </h3>
        <p className="text-4xl font-bold mb-3">{plan.price}</p>
        <p className="text-gray-300 mb-6">{planData.desc}</p>

        <ul className="text-gray-400 text-left mb-8 space-y-2">
          {planData.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-sm hover:text-gray-200 transition"
            >
              <span className="text-blue-400">✦</span>
              {feature}
            </li>
          ))}
        </ul>

        <button
          className={`w-full text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg ${
            plan.popular
              ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/40 hover:from-purple-500 hover:to-blue-500"
              : "bg-gradient-to-r from-blue-600 to-black-600 hover:from-blue-500 hover:to-black-500 shadow-green-500/20 hover:shadow-green-400/40"
          }`}
        >
          {t("choosePlan")}
        </button>
      </div>
    </div>
  );
}
