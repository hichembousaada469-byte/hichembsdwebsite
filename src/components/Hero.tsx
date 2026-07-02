import React from "react";
import { MessageSquare, ArrowDown, Eye, Mail } from "lucide-react";
import profileImg from "../assets/images/hichem_profile.png";

interface HeroProps {
  currentLang: string;
  t: (key: string) => string;
}

export default function Hero({ currentLang, t }: HeroProps) {
  const isRTL = currentLang === "ar";

  // Abstract digital art logo/illustration with glassmorphism cards and neon glowing grids
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 pt-24 md:pt-32 pb-16 md:pb-20 bg-[#050505]"
    >
      {/* Glow overlays */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_20%,rgba(99,102,241,0.08)_0%,transparent_70%),radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Side: Text and Buttons */}
        <div className={`flex flex-col ${isRTL ? "text-right" : "text-left"} items-center lg:items-start`}>
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/5 text-gray-200 text-xs md:text-sm font-semibold py-1.5 px-4 rounded-full mb-6 select-none relative">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t("hero.tag")}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black leading-tight tracking-tighter mb-4 text-white">
            {currentLang === "ar" ? (
              <>
                <span className="bg-gradient-to-tr from-indigo-400 via-indigo-200 to-emerald-400 bg-clip-text text-transparent">
                  الحلول الرقمية
                </span>{" "}
                الراقية لمشاريعكم
              </>
            ) : (
              <>
                {t("hero.h1a")} <br />
                <span className="bg-gradient-to-tr from-indigo-400 via-indigo-200 to-emerald-400 bg-clip-text text-transparent">
                  {t("hero.h1b")}
                </span>{" "}
                <br />
                {t("hero.h1c")}
              </>
            )}
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-indigo-400 font-semibold mb-3 tracking-wide">
            {t("hero.sub")}
          </p>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-lg mb-8">
            {t("hero.desc")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start w-full">
            <a
              href="https://wa.me/qr/F3BE2QCKYJQ6J1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold py-3.5 px-7 rounded-xl text-sm md:text-base shadow-lg shadow-emerald-950/20 hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t("hero.cta1")}</span>
            </a>
            <a
              href="#services"
              className="bg-transparent hover:bg-white/[0.03] border border-white/10 hover:border-indigo-500/50 text-white font-bold py-3.5 px-7 rounded-xl text-sm md:text-base transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              <span>{t("hero.cta2")}</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://wa.me/qr/F3BE2QCKYJQ6J1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/5 hover:border-emerald-500 bg-white/5 text-gray-400 hover:text-emerald-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              title="WhatsApp"
            >
              <MessageSquare className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.facebook.com/Bousaada.hichem2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/5 hover:border-indigo-500 bg-white/5 text-gray-400 hover:text-indigo-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              title="Facebook"
            >
              <span className="font-extrabold text-sm select-none">FB</span>
            </a>
            <a
              href="mailto:hichembousaada469@gmail.com"
              className="w-10 h-10 rounded-full border border-white/5 hover:border-red-500 bg-white/5 text-gray-400 hover:text-red-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              title="Email"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Right Side: Futuristic Illustration */}
        <div className="relative flex items-center justify-center w-full min-h-[320px] lg:min-h-[500px]">
          {/* Main glowing sphere background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 to-emerald-500/15 rounded-full blur-[80px] animate-pulse" />

          {/* Central Creative Portrait Display Container */}
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-full bg-black border border-white/10 overflow-hidden relative z-10 shadow-2xl shadow-indigo-950/30 animate-[float_6s_ease-in-out_infinite] group">
            {/* Glowing borders around card */}
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-indigo-500 to-emerald-400 rounded-full opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500" />

            {/* Profile Image */}
            <img 
              src={profileImg} 
              alt="Hichem Bousaada" 
              className="w-full h-full object-cover select-none relative z-10 transition-all duration-700 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
