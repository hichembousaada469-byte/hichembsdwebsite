import React from "react";

interface ProcessProps {
  currentLang: string;
  t: (key: string) => string;
}

export default function Process({ currentLang, t }: ProcessProps) {
  const isRTL = currentLang === "ar";

  const steps = [
    { num: 1, key: "process.s1" },
    { num: 2, key: "process.s2" },
    { num: 3, key: "process.s3" },
    { num: 4, key: "process.s4" },
    { num: 5, key: "process.s5" },
    { num: 6, key: "process.s6" }
  ];

  return (
    <section id="process" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Head */}
        <div className="text-center mb-16">
          <div className="section-tag mb-4 text-sm font-semibold tracking-wider text-indigo-400">
            {t("process.tag")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black leading-tight tracking-tight text-white mb-6">
            {t("process.title")}
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t("process.sub")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`p-8 rounded-[24px] border border-white/5 bg-[#0f0f0f] hover:border-indigo-500/50 hover:bg-indigo-500/5 transform hover:-translate-y-1 transition-all duration-300 ease-in-out select-none flex flex-col justify-between ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              <div>
                {/* Step number badge */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-emerald-500 text-white font-black text-lg flex items-center justify-center mb-6 shadow-md shadow-indigo-950/20 ${
                  isRTL ? "ml-auto" : "mr-auto"
                }`}>
                  {step.num}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">
                  {t(`${step.key}.title`)}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {t(`${step.key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
