"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ message: string; id: number } | null>(null);

  const showToast = useCallback((message: string) => {
    const id = Date.now();
    setToast({ message, id });
    setTimeout(() => setToast((prev) => (prev?.id === id ? null : prev)), 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div
          key={toast.id}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[200] animate-toast-in"
        >
          <div className="bg-charcoal border border-gold/30 px-6 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <p className="text-offwhite text-[13px] tracking-[0.03em] whitespace-nowrap">
              {toast.message}
            </p>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
}

/**
 * Demo-safe LINE button — shows toast instead of navigating
 */
export function DemoLineButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { showToast } = useToast();

  return (
    <button
      type="button"
      onClick={() => showToast("デモサイトのため、LINE連携は設定されていません")}
      className={className}
    >
      {children}
    </button>
  );
}

/**
 * Demo-safe phone button — shows toast instead of calling
 */
export function DemoPhoneButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { showToast } = useToast();

  return (
    <button
      type="button"
      onClick={() => showToast("デモサイトのため、電話機能は設定されていません")}
      className={className}
    >
      {children}
    </button>
  );
}
