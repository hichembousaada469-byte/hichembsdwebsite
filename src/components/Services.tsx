import React from "react";
import { SERVICES_DATA } from "../data";

interface ServicesProps {
  currentLang: string;
  t: (key: string) => string;
  onSelectService: (id: string) => void;
}

export default function Services({ currentLang, t, onSelectService }: ServicesProps) {
  const isRTL = currentLang === "ar";

  // Translate dynamically based on id key reference
  const getServiceData = (id: string) => {
    switch (id) {
      case "web":
        return {
          title: t("pf.cat.web"),
          short: currentLang === "ar" 
            ? "مواقع ويب حديثة ومتجاوبة وعالية الأداء. مواقع عرض، تجارة إلكترونية، صفحات هبوط أو تطبيقات ويب."
            : currentLang === "en"
            ? "Modern, responsive, high-performance websites. Showcase, e-commerce, landing pages or complex web apps."
            : "Sites web modernes, responsifs et performants. Vitrine, e-commerce, landing pages ou applications web complexes."
        };
      case "android":
        return {
          title: t("pf.cat.mobile"),
          short: currentLang === "ar"
            ? "تطبيقات موبايل أندرويد مخصصة، بديهية وعالية الأداء لمستخدميك."
            : currentLang === "en"
            ? "Custom, intuitive and high-performance Android mobile apps for your users."
            : "Applications mobiles Android sur mesure, intuitives et performantes pour vos utilisateurs."
        };
      case "design":
        return {
          title: t("pf.cat.design"),
          short: currentLang === "ar"
            ? "شعارات، ملصقات، منشورات، لافتات وكل تصميم بصري يعكس هويتك."
            : currentLang === "en"
            ? "Logos, posters, flyers, banners and all visual creations that reflect your identity."
            : "Logos, affiches, flyers, bannières et toute création visuelle qui reflète votre identité."
        };
      case "ppt":
        return {
          title: t("pf.cat.ppt"),
          short: currentLang === "ar"
            ? "عروض تقديمية احترافية ومؤثرة للمناقشات والاجتماعات والعروض والمؤتمرات."
            : currentLang === "en"
            ? "Professional, impactful presentations for defenses, meetings, pitches and conferences."
            : "Présentations professionnelles et percutantes pour soutenances, réunions, pitchs et conférences."
        };
      case "academic":
        return {
          title: t("pf.cat.academic"),
          short: currentLang === "ar"
            ? "مذكرات، تقارير، بحوث موثقة، ملخصات وتفريغ صوتي بدقة أكاديمية."
            : currentLang === "en"
            ? "Theses, reports, documented research, summaries and transcriptions with academic rigor."
            : "Mémoires, rapports, recherches documentées, résumés et transcriptions avec rigueur académique."
        };
      case "brand":
        return {
          title: t("pf.cat.brand"),
          short: currentLang === "ar"
            ? "إنشاء هويات بصرية متكاملة — شعار، دليل هوية، بطاقات أعمال ومطبوعات."
            : currentLang === "en"
            ? "Complete visual identity creation — logo, brand guide, business cards and print materials."
            : "Création d'identités visuelles complètes — logo, charte graphique, cartes de visite et supports print."
        };
      case "print":
        return {
          title: currentLang === "ar" ? "خدمات الطباعة" : currentLang === "en" ? "Printing Services" : "Services d'Impression",
          short: currentLang === "ar"
            ? "طباعة احترافية للمذكرات والوثائق والملصقات وجميع المطبوعات الورقية."
            : currentLang === "en"
            ? "Professional printing of theses, documents, posters and all paper materials."
            : "Impression professionnelle de mémoires, documents, affiches et tout support papier soigné."
        };
      case "cv":
        return {
          title: currentLang === "ar" ? "السيرة الذاتية" : currentLang === "en" ? "Professional CV" : "CV Professionnel",
          short: currentLang === "ar"
            ? "تصميم سيرة ذاتية وبورتفوليو احترافيين يبرزان مسيرتك المهنية."
            : currentLang === "en"
            ? "Design of professional CVs and portfolios that highlight your career."
            : "Conception de CVs et portfolios professionnels qui valorisent votre parcours."
        };
      case "transcription":
        return {
          title: currentLang === "ar" ? "تفريغ التسجيلات" : currentLang === "en" ? "Audio Transcription" : "Transcription Audio",
          short: currentLang === "ar"
            ? "تفريغ وتنسيق احترافي لتسجيلاتك الصوتية بدقة وسرعة."
            : currentLang === "en"
            ? "Professional transcription and formatting of your audio recordings with precision."
            : "Transcription et mise en forme professionnelle de vos enregistrements audio avec précision."
        };
      default:
        return { title: "", short: "" };
    }
  };

  return (
    <section id="services" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Head */}
        <div className="text-center mb-16">
          <div className="section-tag mb-4 text-sm font-semibold tracking-wider text-indigo-400">
            {t("services.tag")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black leading-tight tracking-tight text-white mb-6">
            {t("services.title")}
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t("services.sub")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((s) => {
            const data = getServiceData(s.id);
            return (
              <div
                key={s.id}
                onClick={() => onSelectService(s.id)}
                className="group p-8 rounded-[24px] border border-white/5 bg-[#0f0f0f] hover:border-indigo-500/30 hover:bg-[#121212] transform hover:-translate-y-1.5 transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-[16px] flex items-center justify-center text-2xl mb-6 shadow-md border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: `rgba(${s.rgb}, 0.12)`,
                      borderColor: `rgba(${s.rgb}, 0.25)`
                    }}
                  >
                    {s.icon}
                  </div>
                  
                  {/* Text */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-400 transition-colors">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {data.short}
                  </p>
                </div>

                {/* More Link */}
                <div className={`mt-6 pt-4 border-t border-white/5 flex ${isRTL ? "justify-end" : "justify-start"}`}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(s.id);
                    }}
                    className="text-sm font-bold flex items-center gap-1.5 hover:opacity-80 transition-all cursor-pointer bg-transparent border-none p-0 focus:outline-none"
                    style={{ color: s.color }}
                  >
                    <span>{t("services.more")}</span>
                    <span>{isRTL ? "←" : "→"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
