import React, { useState } from "react";
import { Mail, MessageSquare } from "lucide-react";
import { SERVICES_DATA } from "../data";

interface ContactProps {
  currentLang: string;
  t: (key: string) => string;
}

export default function Contact({ currentLang, t }: ContactProps) {
  const [formData, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

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
      case "print":
        return currentLang === "ar" ? "خدمات الطباعة" : currentLang === "en" ? "Printing Services" : "Services d'Impression";
      case "cv":
        return currentLang === "ar" ? "السيرة الذاتية" : currentLang === "en" ? "Professional CV" : "CV Professionnel";
      case "transcription":
        return currentLang === "ar" ? "تفريغ التسجيلات" : currentLang === "en" ? "Audio Transcription" : "Transcription Audio";
      default:
        return "";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      // Reset form after sending
      setFormState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
      });
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact info cards */}
          <div className={`${isRTL ? "text-right" : "text-left"}`}>
            <div className="section-tag mb-4 text-sm font-semibold tracking-wider text-indigo-400">
              {t("contact.tag")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black leading-tight tracking-tight text-white mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              {t("contact.sub")}
            </p>

            <div className="flex flex-col gap-4">
              {/* WhatsApp Link Card */}
              <a
                href="https://wa.me/qr/F3BE2QCKYJQ6J1"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 bg-[#0f0f0f] border border-white/5 rounded-2xl p-5 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 ${
                  isRTL ? "flex-row-reverse text-right" : "flex-row text-left"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl flex-shrink-0">
                  💬
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-0.5">{t("contact.wa")}</div>
                  <div className="text-xs font-mono text-zinc-400">+213 656 113 974</div>
                </div>
              </a>

              {/* Facebook Link Card */}
              <a
                href="https://www.facebook.com/Bousaada.hichem2"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 bg-[#0f0f0f] border border-white/5 rounded-2xl p-5 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all duration-300 ${
                  isRTL ? "flex-row-reverse text-right" : "flex-row text-left"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl flex-shrink-0 font-black">
                  FB
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-0.5">Facebook</div>
                  <div className="text-xs font-mono text-zinc-400">Bousaada Hichem</div>
                </div>
              </a>

              {/* Email Link Card */}
              <a
                href="mailto:hichembousaada469@gmail.com"
                className={`flex items-center gap-4 bg-[#0f0f0f] border border-white/5 rounded-2xl p-5 hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-300 ${
                  isRTL ? "flex-row-reverse text-right" : "flex-row text-left"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center text-xl flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-0.5">Email</div>
                  <div className="text-xs font-mono text-zinc-400">hichembousaada469@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`bg-[#0f0f0f] border border-white/5 rounded-[24px] p-8 md:p-10 shadow-2xl flex flex-col gap-5 ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-2">{t("form.title")}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder={t("form.namePh")}
                  className={`bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none transition-colors ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {t("form.phone")}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+213 ..."
                  className={`bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none transition-colors ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                {t("form.email")}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t("form.emailPh")}
                className={`bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none transition-colors ${
                  isRTL ? "text-right" : "text-left"
                }`}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                {t("form.service")}
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={`bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none transition-colors cursor-pointer ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <option value="" disabled className="bg-[#0f0f0f] text-gray-400">
                  {currentLang === "ar" ? "اختر خدمة" : currentLang === "en" ? "Select a service" : "Sélectionnez un service"}
                </option>
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.id} className="bg-[#0f0f0f] text-white">
                    {getServiceTitle(s.id)}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                {t("form.message")}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder={t("form.msgPh")}
                rows={4}
                className={`bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none transition-colors resize-y ${
                  isRTL ? "text-right" : "text-left"
                }`}
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className={`w-full py-4 rounded-xl text-sm md:text-base font-bold text-white shadow-lg transition-all duration-300 transform active:translate-y-0 cursor-pointer ${
                status === "sent"
                  ? "bg-gradient-to-r from-emerald-500 to-green-600 shadow-emerald-500/20"
                  : "bg-gradient-to-tr from-indigo-600 to-emerald-500 hover:opacity-95 hover:-translate-y-0.5 shadow-indigo-950/20 hover:shadow-indigo-500/30"
              }`}
            >
              {status === "sending"
                ? t("form.sending")
                : status === "sent"
                ? t("form.sent")
                : t("form.send")}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
