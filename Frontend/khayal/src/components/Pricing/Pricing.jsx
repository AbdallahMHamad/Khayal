import React from "react";
import { plans } from "./plansData";
import PlanCard from "./PlanCard";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <section
      id="pricing"
      className="relative py-24 text-center text-white overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-b-950 to-blue-950 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <div className="relative z-10">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-black-400 bg-clip-text text-transparent mb-16">
          {t("pricingPlans")}
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 px-6 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
