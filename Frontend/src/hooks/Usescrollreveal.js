import { useEffect, useRef } from "react";

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          if (!options.repeat) observer.unobserve(el);
        } else if (options.repeat) {
          el.classList.remove("visible");
        }
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || "0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useChildReveal(selector = ".reveal, .reveal-left, .reveal-right") {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item, i) => {
      item.style.transitionDelay = `${i * 0.08}s`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return containerRef;
}