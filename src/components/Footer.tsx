import React from "react";
import { Mail, MessageSquare } from "lucide-react";
import { SERVICES_DATA } from "../data";

interface FooterProps {
  currentLang: string;
  t: (key: string) => string;
}

export default function Footer({ currentLang, t }: FooterProps) {
  const isRTL = currentLang === "ar";

  const getServiceTitle = (id: string) => {
    switch (id) {
      case "web":
        return t("pf.cat.web");
      case "android":
        return t("pf.cat.mobile");
      case "design":
        return t("pf.cat.design");
      case "ppt":
        return t("pf.cat.ppt");
      case "academic":
        return t("pf.cat.academic");
      case "brand":
        return t("pf.cat.brand");
      default:
        return "";
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 mb-12">
          
          {/* Brand Info */}
          <div className={`lg:col-span-5 flex flex-col ${isRTL ? "items-end text-right" : "items-start text-left"}`}>
            <a
              href="#hero"
              className="text-3xl font-black bg-gradient-to-tr from-indigo-600 to-emerald-500 bg-clip-text text-transparent tracking-tighter mb-4 select-none"
            >
              HB
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              {t("footer.brand")}
            </p>
            {/* Social connections */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/qr/F3BE2QCKYJQ6J1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/5 hover:border-emerald-500 bg-white/5 text-gray-400 hover:text-emerald-400 flex items-center justify-center transition-all duration-200"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/Bousaada.hichem2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/5 hover:border-indigo-500 bg-white/5 text-gray-400 hover:text-indigo-400 flex items-center justify-center transition-all duration-200"
                title="Facebook"
              >
                <span className="font-extrabold text-xs select-none">FB</span>
              </a>
              <a
                href="mailto:hichembousaada469@gmail.com"
                className="w-9 h-9 rounded-full border border-white/5 hover:border-red-500 bg-white/5 text-gray-400 hover:text-red-400 flex items-center justify-center transition-all duration-200"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className={`lg:col-span-3 flex flex-col ${isRTL ? "items-end text-right" : "items-start text-left"}`}>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              {t("footer.nav")}
            </h4>
            <ul className="flex flex-col gap-3 list-none p-0">
              <li>
                <a href="#hero" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                  {t("nav.portfolio")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links Column */}
          <div className={`lg:col-span-4 flex flex-col ${isRTL ? "items-end text-right" : "items-start text-left"}`}>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              {t("footer.servicesTitle")}
            </h4>
            <ul className="flex flex-col gap-3 list-none p-0">
              {SERVICES_DATA.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                    {getServiceTitle(s.id)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright details and Back-to-top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-sm text-gray-500">
          <span>{t("footer.copy")}</span>
          <a
            href="#hero"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/5 text-gray-300 hover:text-indigo-400 hover:border-indigo-500/50 flex items-center justify-center shadow-md shadow-black/40 hover:-translate-y-1 transform transition-all duration-200"
            title="Back to top"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
