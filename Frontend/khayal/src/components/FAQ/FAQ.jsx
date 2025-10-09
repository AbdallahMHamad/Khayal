import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "./faqData";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const rtl = i18n.language === "ar";

  return (  
    <section
      id="faq"
      dir={rtl ? "rtl" : "ltr"}
      className="relative py-24 text-center text-white overflow-hidden bg-black"
    >
      {/* Smooth gradient background with blur */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-br from-black via-blue-950 to-blue-1000 opacity-90 backdrop-blur-sm"></div>

      {/* FAQ content */}
      <div className="relative z-10">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-16">
          {t("Common Question")}
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 px-6 text-left">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-[#0f0c29]/80 to-[#000000]/80 backdrop-blur-md border border-blue-500/20 rounded-2xl shadow-md transition-all duration-300 hover:border-blue-400/40"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-blue-200">
                  {t(`faqs.${f.id}.q`, f.q)}
                </h3>
                {openIndex === i ? (
                  <ChevronUp className="text-blue-400 w-5 h-5" />
                ) : (
                  <ChevronDown className="text-blue-400 w-5 h-5" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === i
                    ? "max-h-40 opacity-100 p-6 pt-0"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t(`faqs.${f.id}.a`, f.a)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
