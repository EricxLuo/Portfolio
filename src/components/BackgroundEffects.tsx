import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export default function BackgroundEffects() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 120, damping: 24, mass: 0.35 });
  const smoothY = useSpring(cursorY, { stiffness: 120, damping: 24, mass: 0.35 });
  const purpleX = useTransform(smoothX, [-0.5, 0.5], [-28, 28]);
  const purpleY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  const blueX = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const blueY = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const gridX = useTransform(smoothX, [-0.5, 0.5], [-42, 42]);
  const gridY = useTransform(smoothY, [-0.5, 0.5], [-34, 34]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      cursorX.set(event.clientX / window.innerWidth - 0.5);
      cursorY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-white">
      <motion.div
        style={{ x: purpleX, y: purpleY }}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-gray-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-60"
      />
      <motion.div
        style={{ x: blueX, y: blueY }}
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, -60, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/3 w-[40vw] h-[40vw] bg-gray-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-50"
      />
      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-[60px] bg-white/40" />
      <motion.div
        style={{ x: gridX, y: gridY }}
        className="absolute -inset-12 opacity-[0.12]"
        aria-hidden="true"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(76, 51, 110, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(76, 51, 110, 0.2) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 10%, transparent 78%)",
          }}
        />
      </motion.div>
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(75, 48, 110, 0.1) 0 1px, transparent 1px 8px), repeating-linear-gradient(90deg, rgba(75, 48, 110, 0.06) 0 1px, transparent 1px 8px), radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.18) 0 1px, transparent 2px)",
          backgroundSize: "100% 100%, 100% 100%, 22px 22px",
        }}
      />
    </div>
  );
}
