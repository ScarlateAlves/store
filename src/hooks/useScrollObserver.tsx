import { useEffect, useRef, useState } from "react";

export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
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
      setIsInView(entry.isIntersecting);
    }, defaultOptions);

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { elementRef, isInView };
};
