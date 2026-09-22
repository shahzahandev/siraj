import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle.jsx";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/80 bg-stone-50/90 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/85"
          : "bg-transparent"
      }`}
    >
      <nav className="container-shell flex h-[var(--nav-height)] items-center justify-between">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="focus-ring rounded-lg font-display text-lg font-bold tracking-normal text-zinc-950 dark:text-white"
        >
          Shahzahan<span className="text-emerald-600 dark:text-emerald-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className="focus-ring rounded-md text-sm font-semibold text-zinc-600 transition hover:text-emerald-700 dark:text-zinc-300 dark:hover:text-emerald-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setIsOpen((value) => !value)}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:border-emerald-400 hover:text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200 dark:hover:text-emerald-300 md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="container-shell pb-5 md:hidden">
          <div className="glass-panel grid gap-2 rounded-2xl p-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="focus-ring rounded-xl px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-emerald-500/10 hover:text-emerald-700 dark:text-zinc-200 dark:hover:text-emerald-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
