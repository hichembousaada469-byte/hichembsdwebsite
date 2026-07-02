import React from "react";
import { MessageSquare } from "lucide-react";

interface FloatingWhatsAppProps {
  currentLang: string;
}

export default function FloatingWhatsApp({ currentLang }: FloatingWhatsAppProps) {
  const isRTL = currentLang === "ar";

  const waText = encodeURIComponent(
    currentLang === "ar"
      ? "مرحبًا، أريد الاستفسار عن مشروع..."
      : currentLang === "en"
      ? "Hello, I want to inquire about a project..."
      : "Bonjour, je souhaite en savoir plus sur vos services..."
  );

  return (
    <a
      href={`https://wa.me/qr/F3BE2QCKYJQ6J1?text=${waText}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 ${
        isRTL ? "left-6" : "right-6"
      } z-[999] w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg shadow-green-950/30 hover:shadow-green-500/50 hover:scale-110 transform active:scale-95 transition-all duration-300 animate-[bounce_3s_infinite_ease-in-out] cursor-pointer`}
      title="WhatsApp"
      aria-label="Contact on WhatsApp"
    >
      <MessageSquare className="w-6.5 h-6.5" />
    </a>
  );
}
