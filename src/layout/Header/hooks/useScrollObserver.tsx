import { useEffect, useRef, useState } from "react";

export const useScrollObserver = (options = {}) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const defaultOptions = {
    threshold: [0, 1],
    rootMargin: "0px 0px -95% 0px",
    ...options,
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsScrolling(entry.isIntersecting);
    }, defaultOptions);

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { elementRef, isScrolling };
};
