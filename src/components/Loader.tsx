"use client";

import { useState, useEffect } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    // Count up 0 → 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Ease-out acceleration
        const increment = prev < 60 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Hold briefly at 100, then reveal
      const t1 = setTimeout(() => setPhase("reveal"), 400);
      const t2 = setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 1200);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [progress, onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center transition-all duration-700 ${
        phase === "reveal" ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Brand name */}
      <div className="relative mb-10">
        <span
          className={`font-[family-name:var(--font-cormorant)] text-gold text-[2.5rem] md:text-[3.5rem] font-bold tracking-[0.3em] transition-all duration-1000 ${
            progress >= 100 ? "tracking-[0.5em]" : ""
          }`}
        >
          ANVIL
        </span>
        <span className="font-[family-name:var(--font-cormorant)] text-gold/30 text-[2.5rem] md:text-[3.5rem]">.</span>
      </div>

      {/* Progress bar */}
      <div className="w-32 md:w-48 h-px bg-warmgray/10 relative overflow-hidden">
        <div
          className="h-full bg-gold/60 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Counter */}
      <p className="font-[family-name:var(--font-cormorant)] text-warmgray/30 text-[11px] tracking-[0.3em] mt-4">
        {progress}
      </p>
    </div>
  );
}
