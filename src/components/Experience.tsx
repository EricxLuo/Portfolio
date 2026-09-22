import { motion } from "motion/react";
import { Cloud, Code2, Lightbulb } from "lucide-react";

const highlights = [
  { Icon: Cloud, title: "Cloud strategy", text: "Architected an AWS migration approach using S3 and CloudFront for scalable delivery." },
  { Icon: Code2, title: "Product engineering", text: "Designed and developed the company website with performance and user experience in focus." },
  { Icon: Lightbulb, title: "Startup collaboration", text: "Built alongside an early-stage AI team using data-driven ideas to help reduce food waste." },
];

export default function Experience() {
  return (
    <div className="pb-32 pt-8 md:pb-44 md:pt-16">
      <motion.article initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-12%" }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="relative text-[#121212]">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-black/55"><span className="h-2 w-2 rounded-full bg-black" />Jan 2026 — Apr 2026</div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-black/45">Web Developer · Waterloo, ON</p>
            <h3 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.055em] md:text-7xl">Verdanza<br />Tech</h3>
            <div className="mt-7 inline-flex items-center rounded-full border border-black/25 px-4 py-2 text-sm font-semibold">Within Enactus Laurier</div>
          </div>
          <div className="grid gap-4 self-end">
            {highlights.map(({ Icon, title, text }, index) => (
              <motion.div key={title} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 * index, duration: 0.65 }} className="experience-row group grid gap-5 border-t border-black/20 py-6 sm:grid-cols-[auto_10rem_1fr] sm:items-start">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/25 transition-colors group-hover:bg-black group-hover:text-[#f2f0ea]"><Icon size={19} /></span>
                <h4 className="text-base font-bold">{title}</h4>
                <p className="max-w-xl leading-relaxed text-black/55">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  );
}
