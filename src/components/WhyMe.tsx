import React from "react";

interface WhyMeProps {
  currentLang: string;
  t: (key: string) => string;
}

export default function WhyMe({ currentLang, t }: WhyMeProps) {
  const isRTL = currentLang === "ar";

  const cards = [
    { icon: "🏆", key: "why.c1" },
    { icon: "⚡", key: "why.c2" },
    { icon: "💬", key: "why.c3" },
    { icon: "💡", key: "why.c4" },
    { icon: "💰", key: "why.c5" },
    { icon: "🔄", key: "why.c6" }
  ];

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Head */}
        <div className="text-center mb-16">
          <div className="section-tag mb-4 text-sm font-semibold tracking-wider text-indigo-400">
            {t("why.tag")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black leading-tight tracking-tight text-white mb-6">
            {t("why.title")}
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t("why.sub")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.key}
              className={`p-8 rounded-[24px] border border-white/5 bg-[#0f0f0f] hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:-translate-y-1 transform select-none transition-all duration-300 ease-in-out flex flex-col justify-between ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              <div>
                {/* Icon */}
                <div className="text-4xl mb-5 select-none">
                  {card.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">
                  {t(`${card.key}.t`)}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {t(`${card.key}.d`)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
