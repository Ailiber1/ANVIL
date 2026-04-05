"use client";

import { useState, useCallback } from "react";
import Loader from "./Loader";
import ScrollProgress from "./ScrollProgress";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  const handleComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <Loader onComplete={handleComplete} />}
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
