import React from "react";
import { X, Check } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string | null;
  services: any[];
  currentLang: string;
  t: (key: string) => string;
}

export default function ServiceModal({
  isOpen,
  onClose,
  serviceId,
  services,
  currentLang,
  t
}: ServiceModalProps) {
  if (!isOpen || !serviceId) return null;

  const s = services.find((x) => x.id === serviceId);
  if (!s) return null;

  const d = s[currentLang] || s.fr;
  const isRTL = currentLang === "ar";

  const waText = encodeURIComponent(
    (currentLang === "ar"
      ? "مرحبًا، أريد الاستفسار عن خدمة: "
      : currentLang === "en"
      ? "Hello, I want to inquire about: "
      : "Bonjour, je souhaite en savoir plus sur : ") + d.title
  );

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#0f0f0f] border border-white/5 rounded-[24px] max-w-[640px] w-full max-h-[85vh] overflow-y-auto transform transition-all duration-300 ease-out relative p-6 md:p-10 scrollbar-thin shadow-2xl ${
          isOpen ? "translate-y-0 scale-100" : "translate-y-4 scale-95"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 md:top-6 ${
            isRTL ? "left-4 md:left-6" : "right-4 md:right-6"
          } w-9 h-9 rounded-full border border-white/5 bg-[#121212] text-gray-400 hover:text-white hover:border-indigo-500/50 flex items-center justify-center transition-all duration-200 cursor-pointer`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div
          className="w-16 h-16 rounded-[16px] flex items-center justify-center text-3xl mb-6 shadow-lg border"
          style={{
            background: `rgba(${s.rgb}, 0.12)`,
            borderColor: `rgba(${s.rgb}, 0.25)`
          }}
        >
          {s.icon}
        </div>

        {/* Title & Description */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">
          {d.title}
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
          {d.desc}
        </p>

        {/* Features List */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">
            {t("modal.features")}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {d.features ? (
              d.features.map((feat: string, index: number) => (
                <div key={index} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{feat}</span>
                </div>
              ))
            ) : (
              // Fallback default features if none declared dynamically
              <>
                <div className="flex items-center gap-2.5 text-sm text-gray-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Qualité & Finition Professionnelle</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Respect des Délais et Suivi</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Tools Used */}
        <div className="mb-8">
          <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">
            {t("modal.tools")}
          </h4>
          <div className="flex flex-wrap gap-2">
            {d.tools ? (
              d.tools.map((tool: string, index: number) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1.5 rounded-full font-semibold border"
                  style={{
                    background: `rgba(${s.rgb}, 0.08)`,
                    borderColor: `rgba(${s.rgb}, 0.15)`,
                    color: s.color
                  }}
                >
                  {tool}
                </span>
              ))
            ) : (
              <span
                className="text-xs px-3 py-1.5 rounded-full font-semibold border"
                style={{
                  background: `rgba(${s.rgb}, 0.08)`,
                  borderColor: `rgba(${s.rgb}, 0.15)`,
                  color: s.color
                }}
              >
                Figma & Adobe Tools
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3.5 pt-2 border-t border-white/5">
          <a
            href={`https://wa.me/qr/F3BE2QCKYJQ6J1?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[200px] text-center bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-950/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 inline-flex items-center justify-center gap-2"
          >
            <span className="text-lg">💬</span>
            <span>{t("modal.cta1")}</span>
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="flex-1 min-w-[200px] text-center bg-[#121212] hover:bg-[#161616] text-white border border-white/5 font-bold py-3.5 px-6 rounded-xl hover:border-indigo-500/50 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 inline-flex items-center justify-center"
          >
            {t("modal.cta2")}
          </a>
        </div>
      </div>
    </div>
  );
}
