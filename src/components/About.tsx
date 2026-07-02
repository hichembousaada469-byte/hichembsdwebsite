import React from "react";
import { Check, Facebook, MessageSquare } from "lucide-react";
import profileImg from "../assets/images/hichem_profile.png";

interface AboutProps {
  currentLang: string;
  t: (key: string) => string;
}

export default function About({ currentLang, t }: AboutProps) {
  const isRTL = currentLang === "ar";

  const values = ["about.v1", "about.v2", "about.v3", "about.v4", "about.v5", "about.v6"];

  return (
    <section id="about" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Photo with glow backdrop */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            {/* Glowing background card effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-emerald-500/10 rounded-full blur-[60px] opacity-30 animate-pulse" />
            
            {/* Styled Illustration Card */}
            <div className="relative w-full max-w-[400px] aspect-square rounded-full border border-white/10 overflow-hidden shadow-2xl group bg-[#020202]">
              <img 
                src={profileImg} 
                alt="Hichem Bousaada Portfolio" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Side: Copywriting & Values Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag */}
            <div className={`section-tag mb-4 text-sm font-semibold tracking-wider text-indigo-400 ${isRTL ? "text-right" : "text-left"}`}>
              {t("about.tag")}
            </div>

            {/* Title */}
            <h2 className={`text-3xl sm:text-4xl md:text-[44px] font-black leading-tight tracking-tight text-white mb-6 ${isRTL ? "text-right" : "text-left"}`}>
              {t("about.title")}
            </h2>

            {/* Description */}
            <p className={`text-base md:text-lg text-gray-300 font-medium leading-relaxed mb-4 ${isRTL ? "text-right" : "text-left"}`}>
              {t("about.sub")}
            </p>
            <p className={`text-sm md:text-base text-gray-400 leading-relaxed mb-8 ${isRTL ? "text-right" : "text-left"}`}>
              {t("about.body")}
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {values.map((v) => (
                <div
                  key={v}
                  className={`flex items-center gap-3 text-sm md:text-base text-gray-300 font-medium ${
                    isRTL ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shadow-md">
                    <Check className="w-4 h-4" />
                  </span>
                  <span>{t(v)}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 w-full justify-center sm:justify-start">
              <a
                href="https://wa.me/qr/F3BE2QCKYJQ6J1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold py-3.5 px-8 rounded-xl text-sm md:text-base shadow-lg shadow-emerald-950/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t("about.cta1")}</span>
              </a>
              <a
                href="https://www.facebook.com/Bousaada.hichem2"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white/[0.03] border border-white/10 hover:border-indigo-500/50 text-white font-bold py-3.5 px-8 rounded-xl text-sm md:text-base transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2"
              >
                <Facebook className="w-5 h-5" />
                <span>{t("about.cta2")}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
