"use client";

import { useState, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";
import ScrollProgress from "./ScrollProgress";

const LOADER_KEY = "anvil-loaded";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Show loader only on first visit to home page in this session
  const [showLoader, setShowLoader] = useState(false);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    if (isHome && !sessionStorage.getItem(LOADER_KEY)) {
      setShowLoader(true);
      setLoaded(false);
    }
  }, [isHome]);

  const handleComplete = useCallback(() => {
    setLoaded(true);
    setShowLoader(false);
    sessionStorage.setItem(LOADER_KEY, "1");
  }, []);

  return (
    <>
      {showLoader && <Loader onComplete={handleComplete} />}
      <ScrollProgress />
      <div
        className={`transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
