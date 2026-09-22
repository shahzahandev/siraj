import { useRef, useState } from "react";
import { ExternalLink, Github, Mail, Send } from "lucide-react";
import { useGsap } from "../hooks/useGsap.js";

const contactLinks = [
  {
    label: "Email",
    value: "shahzahansiraj516@gmail.com",
    href: "mailto:shahzahansiraj516@gmail.com",
    icon: Mail
  },
  {
    label: "GitHub",
    value: "github.com/shahzahandev",
    href: "https://github.com/shahzahandev",
    icon: Github
  },
  {
    label: "Facebook",
    value: "facebook.com/share/1KJkqwPErt",
    href: "https://www.facebook.com/share/1KJkqwPErt/",
    icon: ExternalLink
  }
];

const initialForm = {
  name: "",
  email: "",
  message: ""
};

const Contact = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  useGsap(sectionRef, ({ gsap }) => {
    gsap.from(".contact-reveal", {
      y: 30,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%"
      }
    });
  }, []);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus("");
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Use a valid email address.";
    if (form.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters.";
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setForm(initialForm);
      setStatus("Thank you. Your message is ready for backend integration.");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-white dark:bg-zinc-900/50">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="contact-reveal">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title mt-5">Let's Build Something Together</h2>
            <p className="section-copy">
              I'm open to junior web development opportunities, collaborations and interesting
              projects.
            </p>

            <div className="mt-8 grid gap-4">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noreferrer"}
                  className="focus-ring group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-stone-50 p-4 transition hover:-translate-y-1 hover:border-emerald-500/50 dark:border-white/10 dark:bg-white/[0.045]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                      {label}
                    </span>
                    <span className="block truncate font-semibold text-zinc-900 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="contact-reveal rounded-3xl border border-zinc-200 bg-stone-50 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.055] sm:p-8"
            noValidate
          >
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  className="focus-ring rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 dark:border-white/10 dark:bg-zinc-950/70 dark:text-white"
                  placeholder="Your name"
                />
                {errors.name && <span className="text-sm font-medium text-red-500">{errors.name}</span>}
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  className="focus-ring rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 dark:border-white/10 dark:bg-zinc-950/70 dark:text-white"
                  placeholder="you@example.com"
                />
                {errors.email && <span className="text-sm font-medium text-red-500">{errors.email}</span>}
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="5"
                  className="focus-ring resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 dark:border-white/10 dark:bg-zinc-950/70 dark:text-white"
                  placeholder="Tell me about your project or opportunity."
                />
                {errors.message && (
                  <span className="text-sm font-medium text-red-500">{errors.message}</span>
                )}
              </label>

              <button
                type="submit"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-1 hover:bg-emerald-700"
              >
                Send Message <Send size={18} />
              </button>

              {status && (
                <p className="rounded-2xl bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
