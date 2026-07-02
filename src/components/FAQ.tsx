import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  currentLang: string;
  t: (key: string) => string;
}

export default function FAQ({ currentLang, t }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = t("faq.items");
  if (!Array.isArray(items)) return null;

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isRTL = currentLang === "ar";

  return (
    <section id="faq" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Head */}
        <div className="text-center mb-16">
          <div className="section-tag mb-4 text-sm font-semibold tracking-wider text-indigo-400">
            {t("faq.tag")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black leading-tight tracking-tight text-white mb-6">
            {t("faq.title")}
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t("faq.sub")}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {items.map(([q, a], index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-indigo-500/50 bg-indigo-500/5" : "border-white/5 bg-[#0f0f0f]"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleIndex(index)}
                  className={`w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer transition-colors hover:bg-white/5 gap-4 ${
                    isRTL ? "flex-row-reverse text-right" : "flex-row text-left"
                  }`}
                >
                  <span className="text-sm md:text-base font-bold text-white leading-snug">
                    {q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <p className={`p-5 md:p-6 text-xs md:text-sm text-gray-400 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
                    {a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
