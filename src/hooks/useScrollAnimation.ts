"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Basic scroll-triggered animation (adds 'visible' class)
 * - threshold: 0 for maximum reliability (any pixel triggers it)
 * - rootMargin: "50px" to fire slightly before element enters viewport
 * - fallback: forces 'visible' after timeout if observer fails
 */
export function useScrollAnimation<T extends HTMLElement>(
  threshold = 0
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let revealed = false;

    const reveal = () => {
      if (!revealed) {
        revealed = true;
        el.classList.add("visible");
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "80px 0px" }
    );

    observer.observe(el);

    // Fallback: if element is already in or above viewport on mount, reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      // Element is near or in viewport — give animation time, then force
      const fallbackTimer = setTimeout(reveal, 800);
      return () => {
        clearTimeout(fallbackTimer);
        observer.disconnect();
      };
    }

    // Safety fallback: reveal after 5 seconds no matter what
    const safetyTimer = setTimeout(() => {
      if (!revealed) {
        reveal();
      }
    }, 5000);

    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, [threshold]);

  return ref;
}

/**
 * Stagger children animation — each child gets 'visible' with delay
 */
export function useStaggerAnimation<T extends HTMLElement>(
  childSelector: string,
  staggerDelay = 0.12,
  threshold = 0
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = el.querySelectorAll(childSelector);
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add("visible");
            }, i * staggerDelay * 1000);
          });
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [childSelector, staggerDelay, threshold]);

  return ref;
}

/**
 * Count-up animation triggered on scroll
 */
export function useCountUp(
  end: number,
  duration = 2000,
  decimals = 0
) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * end;

            if (el) {
              el.textContent = decimals > 0
                ? current.toFixed(decimals)
                : Math.floor(current).toLocaleString();
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3, rootMargin: "50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, decimals]);

  return ref;
}

/**
 * Parallax-like scroll effect (CSS transform based)
 */
export function useParallax<T extends HTMLElement>(speed = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const windowH = window.innerHeight;
          if (rect.top < windowH && rect.bottom > 0) {
            const center = rect.top + rect.height / 2;
            const offset = (center - windowH / 2) * speed;
            el.style.transform = `translateY(${offset}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}

/**
 * Text split animation — wraps each character in a span
 */
export function useSplitText(text: string, visible: boolean, baseDelay = 0) {
  return text.split("").map((char, i) => ({
    char: char === " " ? "\u00A0" : char,
    style: {
      transitionDelay: `${baseDelay + i * 0.04}s`,
    },
    className: `char-reveal ${visible ? "visible" : ""}`,
  }));
}
