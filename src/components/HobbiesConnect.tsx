import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export default function HobbiesConnect() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const plateRotate = useTransform(smoothProgress, [0, 0.4, 1], [-180, 0, 360]);
  const plateY = useTransform(smoothProgress, [0, 1], [90, -90]);

  return (
    <section ref={sectionRef} id="gym" className="gym-section relative min-h-[145vh] overflow-hidden bg-[#f2f0ea] text-[#121212]">
      <div className="sticky top-0 grid min-h-screen items-center gap-12 overflow-hidden px-5 py-24 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-15%" }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="relative z-10">
          <h3 className="font-display text-[27vw] font-black uppercase leading-[0.7] tracking-[-0.09em] sm:text-[20vw] lg:text-[13vw]">Gym.</h3>
          <p className="mt-12 max-w-2xl text-xl leading-relaxed text-black/60 md:text-3xl">Training is where I reset: showing up, tracking progress, and getting a little stronger every session.</p>
        </motion.div>

        <div className="relative flex min-h-[20rem] items-center justify-center md:min-h-[30rem]">
          <motion.div style={{ rotate: plateRotate, y: plateY }} className="weight-plate" aria-label="A 45 pound weight plate rotating as the page scrolls">
            <svg className="plate-markings" viewBox="0 0 400 400" aria-hidden="true">
              <defs>
                <path id="plate-top-arc" d="M 66 200 A 134 134 0 0 1 334 200" />
                <path id="plate-bottom-arc" d="M 334 200 A 134 134 0 0 1 66 200" />
              </defs>
              <text className="plate-curved-text"><textPath href="#plate-top-arc" startOffset="50%" textAnchor="middle">ERIC LUO</textPath></text>
              <text className="plate-curved-text"><textPath href="#plate-bottom-arc" startOffset="50%" textAnchor="middle">ERIC LUO</textPath></text>
              <g className="plate-weight-text" textAnchor="middle">
                <text x="105" y="205">45</text>
                <text className="plate-unit" x="105" y="230">LB</text>
                <text x="295" y="205">45</text>
                <text className="plate-unit" x="295" y="230">LB</text>
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
