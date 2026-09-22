import { Moon, Sun } from "lucide-react";

const ThemeToggle = ({ theme, setTheme }) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200 dark:hover:text-emerald-300"
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
};

export default ThemeToggle;
