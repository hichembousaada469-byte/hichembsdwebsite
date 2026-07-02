import React from "react";
import { TECHNOLOGIES } from "../data";

interface TechnologiesProps {
  t: (key: string) => string;
}

export default function Technologies({ t }: TechnologiesProps) {
  return (
    <section id="technologies" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Head */}
        <div className="text-center mb-16">
          <div className="section-tag mb-4 text-sm font-semibold tracking-wider text-indigo-400">
            {t("tech.tag")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black leading-tight tracking-tight text-white mb-6">
            {t("tech.title")}
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t("tech.sub")}
          </p>
        </div>

        {/* Flex wrap Bento Pill Grid */}
        <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-3 bg-[#0f0f0f] border border-white/5 rounded-full px-5 py-3 text-sm md:text-base font-semibold text-gray-300 hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/5 hover:-translate-y-0.5 transform select-none transition-all duration-200 cursor-default shadow-md"
            >
              <span className="text-xl md:text-2xl">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
