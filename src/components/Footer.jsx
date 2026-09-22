import { ExternalLink, Github, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-stone-50 py-10 dark:border-white/10 dark:bg-zinc-950">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-bold text-zinc-950 dark:text-white">
            Md. Shahzahan Siraj
          </p>
          <p className="mt-1 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
            MERN Stack Developer
          </p>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {year} Md. Shahzahan Siraj. All rights reserved.
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="https://github.com/shahzahandev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200 dark:hover:text-emerald-300"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.facebook.com/share/1KJkqwPErt/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200 dark:hover:text-emerald-300"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href="mailto:shahzahansiraj516@gmail.com"
            aria-label="Email"
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200 dark:hover:text-emerald-300"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
