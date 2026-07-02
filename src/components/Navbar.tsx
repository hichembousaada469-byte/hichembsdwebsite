import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  currentLang: string;
  setLang: (lang: string) => void;
  t: (key: string) => string;
}

export default function Navbar({ currentLang, setLang, t }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", key: "nav.home" },
    { href: "#about", key: "nav.about" },
    { href: "#services", key: "nav.services" },
    { href: "#portfolio", key: "nav.portfolio" },
    { href: "#technologies", key: "nav.tech" },
    { href: "#faq", key: "nav.faq" },
    { href: "#contact", key: "nav.contact" }
  ];

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  const isRTL = currentLang === "ar";

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-[500] py-5 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-3.5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="text-2xl font-black bg-gradient-to-tr from-indigo-600 to-emerald-500 bg-clip-text text-transparent tracking-tighter hover:opacity-90 transition-opacity"
          >
            HB
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-1.5 list-none">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-indigo-400 px-3.5 py-2 rounded-xl hover:bg-white/[0.03] transition-all duration-200"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex gap-0.5 bg-white/5 border border-white/10 rounded-full p-1">
              {["fr", "en", "ar"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLang(lang)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full uppercase transition-all duration-200 cursor-pointer ${
                    currentLang === lang
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-950/20"
                      : "text-gray-400 hover:text-indigo-400 hover:bg-white/[0.03]"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/qr/F3BE2QCKYJQ6J1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f0f0f] text-emerald-400 border border-white/10 hover:border-emerald-500/30 hover:bg-white/[0.03] px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 flex items-center gap-1"
            >
              <span>{t("hero.cta1")}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-white hover:text-indigo-400 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[490] bg-[#050505]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6 transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileOpen
            ? "translate-x-0"
            : isRTL
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 list-none text-center">
          {navLinks.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Language Switcher */}
        <div className="flex gap-1.5 mt-4 bg-white/5 border border-white/10 rounded-full p-1.5">
          {["fr", "en", "ar"].map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLang(lang);
                handleLinkClick();
              }}
              className={`text-sm font-extrabold px-5 py-2.5 rounded-full uppercase transition-all duration-200 cursor-pointer ${
                currentLang === lang
                  ? "bg-indigo-600 text-white"
                  : "text-gray-400 hover:text-indigo-400"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Mobile CTA */}
        <a
          href="https://wa.me/qr/F3BE2QCKYJQ6J1"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="mt-6 bg-gradient-to-tr from-indigo-600 to-emerald-500 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg flex items-center gap-2"
        >
          <span>{t("hero.cta1")}</span>
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </>
  );
}
