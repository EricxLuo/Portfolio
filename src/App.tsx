import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import BackgroundEffects from "./components/BackgroundEffects";
import Project from "./components/Project";
import AnimatedText from "./components/AnimatedText";
import HobbyVideo from "./components/HobbyVideo";
import HobbiesConnect from "./components/HobbiesConnect";
import Experience from "./components/Experience";
import SectionDivider from "./components/SectionDivider";

const socialLinks = [
  { Icon: Github, href: "https://github.com/EricxLuo", label: "GitHub", detail: "github.com/EricxLuo" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/eric-luo-a56859276/", label: "LinkedIn", detail: "linkedin.com/in/eric-luo" },
  { Icon: Mail, href: "mailto:ericluoo12@gmail.com", label: "Email", detail: "ericluoo12@gmail.com" },
];

export default function App() {
  const { scrollY } = useScroll();
  const compactNameOpacity = useTransform(scrollY, [420, 620], [0, 1]);
  const heroNameOpacity = useTransform(scrollY, [400, 700], [1, 0.08]);
  const heroNameY = useTransform(scrollY, [0, 700], [0, 100]);

  return (
    <div className="site-shell relative overflow-clip bg-[#f2f0ea] text-[#121212] selection:bg-[#4b2683] selection:text-white">
      <BackgroundEffects />
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-10 lg:px-16">
        <motion.a href="#top" style={{ opacity: compactNameOpacity }} className="font-display absolute left-1/2 -translate-x-1/2 text-xl font-black uppercase tracking-[-0.06em]">
          Eric Luo
        </motion.a>
        <nav className="glass-nav ml-auto flex items-center gap-1 rounded-full p-1 text-[11px] font-bold uppercase tracking-[0.14em] sm:text-xs">
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#hobbies">Hobbies</a>
        </nav>
      </header>

      <main id="top" className="relative z-10">
        <section className="relative flex min-h-screen flex-col justify-between px-5 pb-8 pt-32 md:px-10 md:pb-10 lg:px-16">
          <motion.div style={{ opacity: heroNameOpacity, y: heroNameY }} className="relative my-auto py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-black/45 md:ml-2">Software engineer · class of 2027</p>
            <h1 className="font-display text-[23vw] font-black uppercase leading-[0.72] tracking-[-0.09em] md:text-[18vw] lg:text-[16vw]">
              <AnimatedText text="Eric" delay={0.1} stagger={0.05} />
              <br />
              <span className="ml-[11vw] text-outline"><AnimatedText text="Luo." delay={0.35} stagger={0.07} /></span>
            </h1>
          </motion.div>

          <div className="grid items-end gap-8 border-t border-black/20 pt-6 md:grid-cols-[1fr_auto_1fr]">
            <p className="max-w-xl text-xl font-medium leading-snug tracking-[-0.03em] md:text-2xl">
              Computer Science at <span className="laurier-glow">Wilfrid Laurier University</span>, with a Financial Mathematics minor.
            </p>
            <a href="#work" className="scroll-cue mx-auto hidden h-16 w-16 items-center justify-center rounded-full border border-black/30 md:flex" aria-label="Scroll to selected work"><ArrowDown size={21} /></a>
            <div className="flex justify-start gap-5 md:justify-end">
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noreferrer" className="social-button" aria-label={label}><Icon size={21} strokeWidth={1.8} /></a>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="px-5 md:px-10 lg:px-16">
          <SectionDivider label="Projects" index="01" />
          <div className="flex flex-col">
            <Project title="MediVision" description="A smart medication integration tool that uses Gemini Vision AI to turn discharge summaries and pill bottles into one safer daily schedule." tags={["React", "TypeScript", "Gemini Vision", "OCR"]} demoUrl="https://www.youtube.com/watch?v=S8nmoNMzqTs" repositoryUrl="https://github.com/EricxLuo/MediVision" />
            <Project title="Cutpilot" description="An automated editing tool that analyzes, trims, and stitches footage with AI—so creators can spend more time shaping the story." tags={["React", "FastAPI", "Python", "Cohere", "FFmpeg"]} demoUrl="https://youtu.be/KEsxyBuzYfA" repositoryUrl="https://github.com/EricxLuo/cutpilot" reverse />
            <Project title="Face & Image Analyzer" description="A serverless AWS experience that detects facial emotions, age, and gender from live webcam captures or uploaded images." tags={["AWS S3", "Lambda", "API Gateway", "Rekognition"]} repositoryUrl="https://github.com/EricxLuo/facial-image-analyzer" hideVisual />
          </div>
        </section>

        <section id="experience" className="px-5 md:px-10 lg:px-16">
          <SectionDivider label="Experience" index="02" />
          <Experience />
        </section>

        <section id="hobbies">
          <HobbyVideo />
          <HobbiesConnect />
        </section>

        <footer className="relative z-10 flex min-h-[75vh] flex-col justify-between bg-[#f2f0ea] px-5 pb-8 pt-24 text-[#121212] md:px-10 lg:px-16">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-black/45">Have a project or opportunity?</p>
            <h2 className="font-display text-[18vw] font-black uppercase leading-[0.76] tracking-[-0.08em] md:text-[12vw]">Let&apos;s<br /><span className="text-outline">connect.</span></h2>
            <div className="mt-16 grid border-t border-black/20 md:grid-cols-3">
              {socialLinks.map(({ Icon, href, label, detail }) => (
                <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noreferrer" className="connect-link group flex items-center gap-4 border-b border-black/20 py-6 md:border-r md:px-6 md:last:border-r-0">
                  <Icon size={24} strokeWidth={1.7} />
                  <span><strong className="block text-sm uppercase tracking-[0.16em]">{label}</strong><span className="mt-1 block text-sm text-black/45">{detail}</span></span>
                  <ArrowUpRight className="ml-auto transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-3 border-t border-black/20 pt-6 text-xs uppercase tracking-[0.2em] text-black/45 sm:flex-row">
            <p>© {new Date().getFullYear()} Eric Luo</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
