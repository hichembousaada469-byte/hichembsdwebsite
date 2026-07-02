import React, { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
  text: string;
}

export default function Preloader({ onComplete, text }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 600); // Allow fade animation to finish
          }, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      id="loader"
      className={`fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        fadeOut ? "opacity-0 invisible pointer-events-none scale-105" : "opacity-100 visible"
      }`}
    >
      <div className="text-center px-4">
        {/* Animated Brand Logo */}
        <div className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-4 animate-pulse select-none bg-gradient-to-tr from-indigo-600 to-emerald-500 bg-clip-text text-transparent">
          HB
        </div>
        
        {/* Subtitle with typing feel */}
        <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide mb-8 h-6 select-none opacity-80">
          {text}
        </p>

        {/* Futuristic Progress Bar */}
        <div className="w-48 h-[3px] bg-white/5 border border-white/5 rounded-full overflow-hidden mx-auto shadow-inner shadow-black/40">
          <div
            className="h-full bg-gradient-to-r from-indigo-600 to-emerald-500 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="mt-3 text-xs font-mono text-zinc-500 tracking-widest select-none">
          {progress}%
        </div>
      </div>
    </div>
  );
}
