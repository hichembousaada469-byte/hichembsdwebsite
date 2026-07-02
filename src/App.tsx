import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Process from "./components/Process";
import WhyMe from "./components/WhyMe";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceModal from "./components/ServiceModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { translations, SERVICES_DATA } from "./data";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentLang, setCurrentLang] = useState("fr");
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = (key: string): string => {
    return translations[currentLang]?.[key] || translations["fr"]?.[key] || key;
  };

  const setLang = (lang: string) => {
    setCurrentLang(lang);
    const isRTL = lang === "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  };

  const handleSelectService = (id: string) => {
    setSelectedServiceId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedServiceId(null);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-gray-200 font-sans selection:bg-emerald-500/30 selection:text-white">
      {/* Preloader */}
      {isLoading && (
        <Preloader
          onComplete={() => setIsLoading(false)}
          text={t("preloader.text")}
        />
      )}

      {/* Main content */}
      {!isLoading && (
        <div className="animate-[fadeIn_0.8s_ease-out_forwards]">
          <Navbar currentLang={currentLang} setLang={setLang} t={t} />
          
          <Hero currentLang={currentLang} t={t} />
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          
          <About currentLang={currentLang} t={t} />
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          
          <Services currentLang={currentLang} t={t} onSelectService={handleSelectService} />
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          
          <Portfolio currentLang={currentLang} t={t} />
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          
          <Technologies t={t} />
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          
          <Process currentLang={currentLang} t={t} />
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          
          <WhyMe currentLang={currentLang} t={t} />
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          
          <FAQ currentLang={currentLang} t={t} />
          
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          
          <Contact currentLang={currentLang} t={t} />
          
          <Footer currentLang={currentLang} t={t} />

          {/* Floating WhatsApp Button */}
          <FloatingWhatsApp currentLang={currentLang} />

          {/* Service Detail Modal */}
          <ServiceModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            serviceId={selectedServiceId}
            services={SERVICES_DATA}
            currentLang={currentLang}
            t={t}
          />
        </div>
      )}
    </div>
  );
}

