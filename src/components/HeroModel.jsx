import { useRef } from "react";
import { useGsap } from "../hooks/useGsap.js";

const HERO_IMAGE_SRC = "/images/hero-placeholder.svg";

const HeroModel = () => {
  const wrapperRef = useRef(null);
  const modelRef = useRef(null);

  useGsap(wrapperRef, ({ gsap }) => {
    gsap.fromTo(
      modelRef.current,
      { x: -18 },
      {
        x: 26,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.6
        }
      }
    );
  }, []);

  return (
    <div ref={wrapperRef} className="relative mx-auto w-full max-w-[430px] lg:max-w-[500px]">
      <div className="absolute inset-0 translate-y-8 rounded-[36px] border border-emerald-500/20 bg-emerald-500/10 blur-2xl" />
      <div className="glass-panel relative overflow-hidden rounded-[34px] p-4">
        <div className="absolute inset-0 hero-grid opacity-70" aria-hidden="true" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-zinc-100 dark:bg-zinc-900">
          <img
            ref={modelRef}
            src={HERO_IMAGE_SRC}
            alt="Portrait placeholder for Md. Shahzahan Siraj"
            className="h-full w-full scale-105 object-cover object-center"
            draggable="false"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950/30 to-transparent" />
        </div>
      </div>
      <div className="absolute -bottom-5 left-6 right-6 rounded-2xl border border-zinc-200 bg-white/90 px-5 py-4 shadow-soft backdrop-blur dark:border-white/10 dark:bg-zinc-950/85 dark:shadow-soft-dark">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
          Portrait slot
        </p>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
          Replace one image path in HeroModel.jsx when your 3D portrait is ready.
        </p>
      </div>
    </div>
  );
};

export default HeroModel;
