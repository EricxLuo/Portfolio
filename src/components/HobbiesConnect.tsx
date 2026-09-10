import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { Icon: Github, label: "GitHub", href: "https://github.com/EricxLuo" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/eric-luo-a56859276/" },
  { Icon: Mail, label: "Email", href: "mailto:ericluoo12@gmail.com" },
];

export default function HobbiesConnect() {
  return (
    <section className="flex min-h-screen flex-col justify-between py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-15%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
          Outside of work
        </p>
        <h2 className="mb-10 text-5xl font-medium leading-none tracking-tighter md:text-7xl">
          Other hobbies.
        </h2>
        <h3 className="text-3xl font-medium tracking-tight md:text-5xl">Gym</h3>
        <p className="mt-4 max-w-2xl text-xl leading-relaxed text-gray-600 md:text-2xl">
          I enjoy going to the gym and prioritize maintaining my physical health.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-15%" }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-gray-200 pt-12"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-5xl font-medium leading-none tracking-tighter md:text-7xl">
            Let&apos;s connect
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-10 text-center md:gap-16">
          {links.map(({ Icon, label, href }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <a
                href={href}
                aria-label={label}
                className="text-gray-400 transition-colors hover:text-black"
              >
                <Icon size={42} strokeWidth={1.5} />
              </a>
              {label === "GitHub" && (
                <a href={href} className="text-lg text-gray-500 transition-colors hover:text-black">
                  github.com/EricxLuo
                </a>
              )}
              {label === "Email" && (
                <a href={href} className="text-lg text-gray-500 transition-colors hover:text-black">
                  ericluoo12@gmail.com
                </a>
              )}
              {label === "LinkedIn" && (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-gray-500 transition-colors hover:text-black"
                >
                  linkedin.com/in/eric-luo-a56859276
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
