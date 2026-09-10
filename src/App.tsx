import { motion, useScroll, useTransform } from "motion/react";
import BackgroundEffects from "./components/BackgroundEffects";
import Project from "./components/Project";
import AnimatedText from "./components/AnimatedText";
import HobbyVideo from "./components/HobbyVideo";
import HobbiesConnect from "./components/HobbiesConnect";
import SectionDivider from "./components/SectionDivider";
import { Github, Linkedin, Mail } from "lucide-react";

export default function App() {
  const { scrollY } = useScroll();
  const centeredNameOpacity = useTransform(scrollY, [450, 700], [0, 1]);
  const heroNameOpacity = useTransform(scrollY, [450, 700], [1, 0]);

  return (
    <div className="bg-white text-black font-sans selection:bg-gray-200 relative">
      <BackgroundEffects />
      <motion.div
        style={{ opacity: centeredNameOpacity }}
        className="pointer-events-none fixed left-1/2 top-5 z-30 -translate-x-1/2 text-xl font-medium tracking-tighter md:text-2xl"
      >
        Eric Luo.
      </motion.div>
      
      {/* Main Content Container - Full Width */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-24">
        
        {/* Header / Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex items-center gap-4 text-sm md:text-base font-medium text-gray-500 tracking-widest uppercase mb-10"
          >
            <span>Software Engineer</span>
            <span className="w-12 h-[1px] bg-gray-300"></span>
            <span>Class of 2027</span>
          </motion.div>
          
          <motion.h1
            style={{ opacity: heroNameOpacity }}
            className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-medium tracking-tighter mb-6 leading-[0.95] -ml-2"
          >
            <AnimatedText text="Eric Luo." delay={0.2} stagger={0.06} />
          </motion.h1>
          
          <div className="text-2xl md:text-4xl lg:text-5xl text-gray-00 max-w-6xl leading-[1.4] mb-14 tracking-tight">
            <AnimatedText text="Computer Science student @ " delay={0.9} stagger={0.02} />
            <motion.span
              animate={{
                color: ["inherit", "#a855f7", "inherit", "#a855f7", "inherit", "#a855f7"],
                textShadow: [
                  "0 0 0 rgba(168, 85, 247, 0)",
                  "0 0 14px rgba(168, 85, 247, 0.45)",
                  "0 0 0 rgba(168, 85, 247, 0)",
                  "0 0 14px rgba(168, 85, 247, 0.45)",
                  "0 0 0 rgba(168, 85, 247, 0)",
                  "0 0 14px rgba(168, 85, 247, 0.45)",
                ],
              }}
              transition={{ delay: 3.3, duration: 2.2, times: [0, 0.15, 0.3, 0.45, 0.6, 1] }}
            >
              <AnimatedText text="Wilfrid Laurier University" delay={1.35} stagger={0.02} />
            </motion.span>
            <AnimatedText text="Financial Mathematics Minor." delay={1.85} stagger={0.02} />
          </div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 2.8 }
              }
            }}
            className="flex gap-8"
          >
            {[
              { Icon: Github, href: "https://github.com/EricxLuo", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/eric-luo-a56859276/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:ericluoo12@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <motion.a 
                key={label}
                href={href}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 10, stiffness: 200 } }
                }}
                className="text-gray-400 hover:text-black transition-colors"
              >
                <Icon size={36} strokeWidth={1.5} />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <SectionDivider label="Projects" />
        <div className="flex flex-col">
          <Project 
            title="MediVision"
            description="A smart medication integration tool bridging the gap during care transitions. Gemini Vision AI reads discharge summaries and pill bottles to generate a safe, unified daily schedule."
            tags={["React", "TypeScript", "Google Gemini Vision", "OCR"]}
            hasVideo={true}
            demoUrl="https://www.youtube.com/watch?v=S8nmoNMzqTs"
            repositoryUrl="https://github.com/EricxLuo/MediVision"
          />

          <Project 
            title="Cutpilot"
            description="A fully automated video editing tool. Analyzes video frames, trims, and stitches content together seamlessly using AI, helping creators focus purely on storytelling."
            tags={["React", "FastAPI", "Python", "Cohere", "FFmpeg"]}
            hasVideo={true}
            demoUrl="https://youtu.be/KEsxyBuzYfA"
            repositoryUrl="https://github.com/EricxLuo/cutpilot"
          />

          <Project 
            title="Face & Image Analyzer"
            description="A serverless AWS application utilizing AI to detect facial emotions, age, and gender from webcam feeds or uploaded images."
            tags={["AWS S3", "Lambda", "API Gateway", "Amazon Rekognition", "Serverless"]}
            hasVideo={false}
            repositoryUrl="https://github.com/EricxLuo/facial-image-analyzer"
          />
        </div>

        {/* Hobbies Section */}
        <HobbyVideo />
        <HobbiesConnect />

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="pt-24 border-t border-gray-200 text-gray-500 text-xl flex justify-between items-center"
        >
          <p>© {new Date().getFullYear()} Eric Luo.</p>
        </motion.footer>

      </div>
    </div>
  );
}
