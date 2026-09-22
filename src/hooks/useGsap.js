import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const useGsap = (scopeRef, animation, deps = []) => {
  useEffect(() => {
    if (!scopeRef.current || prefersReducedMotion()) return undefined;

    const context = gsap.context(() => {
      animation({ gsap, ScrollTrigger });
    }, scopeRef);

    return () => context.revert();
  }, deps);
};
