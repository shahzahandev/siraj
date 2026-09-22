import { useRef } from "react";
import { ArrowRight, Download, Send } from "lucide-react";
import { useGsap } from "../hooks/useGsap.js";
import HeroModel from "./HeroModel.jsx";

const Hero = () => {
  const heroRef = useRef(null);

  useGsap(heroRef, ({ gsap }) => {
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(".hero-label", { y: 18, opacity: 0, duration: 0.7 })
      .from(".hero-title", { y: 28, opacity: 0, duration: 0.85 }, "-=0.45")
      .from(".hero-copy", { y: 22, opacity: 0, duration: 0.7 }, "-=0.45")
      .from(".hero-actions a", { y: 20, opacity: 0, duration: 0.55, stagger: 0.12 }, "-=0.35")
      .from(".hero-model", { x: 34, opacity: 0, duration: 0.9 }, "-=0.65");
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden pt-[calc(var(--nav-height)+58px)] md:pt-[calc(var(--nav-height)+76px)]"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-60" aria-hidden="true" />
      <div className="container-shell relative grid min-h-[calc(100vh-76px)] items-center gap-14 pb-24 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <span className="hero-label eyebrow">MERN Stack Developer</span>
          <h1 className="hero-title mt-6 font-display text-5xl font-bold tracking-normal text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
            Hi, I'm Md. Shahzahan Siraj
          </h1>
          <p className="hero-copy mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300 md:text-xl">
            I build modern, responsive and scalable web applications using React, Node.js,
            Express.js and MongoDB.
          </p>

          <div className="hero-actions mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-1 hover:bg-emerald-700"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-bold text-zinc-800 transition hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-emerald-300"
            >
              Contact Me <Send size={18} />
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 text-sm sm:grid-cols-3">
            {["React", "Node.js", "MongoDB"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 font-semibold text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-200"
              >
                <Download className="mb-2 text-emerald-600 dark:text-emerald-300" size={17} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-model pb-12 lg:pb-0">
          <HeroModel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
