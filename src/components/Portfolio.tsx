import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../data";

interface PortfolioProps {
  currentLang: string;
  t: (key: string) => string;
}

export default function Portfolio({ currentLang, t }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const isRTL = currentLang === "ar";

  const filters = [
    { key: "all", label: t("pf.all") },
    { key: "web", label: t("pf.cat.web") },
    { key: "design", label: t("pf.cat.design") },
    { key: "ppt", label: t("pf.cat.ppt") },
    { key: "brand", label: t("pf.cat.brand") },
    { key: "academic", label: t("pf.cat.academic") },
    { key: "mobile", label: t("pf.cat.mobile") }
  ];

  const getProjectTranslation = (id: number) => {
    switch (id) {
      case 1:
        return {
          title: t("pf.p1.title"),
          desc: t("pf.p1.desc"),
          thumb: "🌐",
          grad: "from-blue-500/10 to-cyan-500/10"
        };
      case 2:
        return {
          title: t("pf.p2.title"),
          desc: t("pf.p2.desc"),
          thumb: "🎨",
          grad: "from-pink-500/10 to-purple-500/10"
        };
      case 3:
        return {
          title: t("pf.p3.title"),
          desc: t("pf.p3.desc"),
          thumb: "🖥️",
          grad: "from-orange-500/10 to-red-500/10"
        };
      case 4:
        return {
          title: t("pf.p4.title"),
          desc: t("pf.p4.desc"),
          thumb: "🆔",
          grad: "from-amber-500/10 to-yellow-500/10"
        };
      case 5:
        return {
          title: t("pf.p5.title"),
          desc: t("pf.p5.desc"),
          thumb: "🎓",
          grad: "from-blue-600/10 to-indigo-600/10"
        };
      case 6:
        return {
          title: t("pf.p6.title"),
          desc: t("pf.p6.desc"),
          thumb: "📱",
          grad: "from-purple-600/10 to-pink-600/10"
        };
      default:
        return { title: "", desc: "", thumb: "📁", grad: "" };
    }
  };

  const filteredProjects = PORTFOLIO_DATA.filter(
    (p) => activeFilter === "all" || p.cat === activeFilter
  );

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Head */}
        <div className="text-center mb-16">
          <div className="section-tag mb-4 text-sm font-semibold tracking-wider text-indigo-400">
            {t("portfolio.tag")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black leading-tight tracking-tight text-white mb-6">
            {t("portfolio.title")}
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t("portfolio.sub")}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold border transition-all duration-200 cursor-pointer ${
                activeFilter === f.key
                  ? "bg-gradient-to-tr from-indigo-600 to-emerald-500 text-white border-transparent shadow-lg shadow-indigo-950/20"
                  : "bg-transparent text-gray-400 border-white/5 hover:border-indigo-500/30 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => {
            const data = getProjectTranslation(p.id);
            return (
              <div
                key={p.id}
                className="group bg-[#0f0f0f] border border-white/5 rounded-[24px] overflow-hidden flex flex-col justify-between hover:border-indigo-500/30 hover:bg-[#121212] transform hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                {/* Image / Icon container */}
                <div className={`w-full aspect-video flex items-center justify-center text-6xl relative select-none bg-gradient-to-tr ${data.grad}`}>
                  <div className="transform group-hover:scale-110 transition-transform duration-500">
                    {data.thumb}
                  </div>
                </div>

                {/* Info */}
                <div className={`p-6 md:p-8 flex flex-col flex-1 justify-between ${isRTL ? "text-right" : "text-left"}`}>
                  <div>
                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2.5">
                      {t(`pf.cat.${p.cat}`)}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">
                      {data.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      {data.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 ${isRTL ? "justify-end" : "justify-start"}`}>
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full border border-indigo-500/10 bg-indigo-500/5 text-indigo-400 select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
