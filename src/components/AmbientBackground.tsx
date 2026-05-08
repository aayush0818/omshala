import { motion } from "framer-motion";

/**
 * Sitewide ambient layer — slow drifting blurred orbs to give pages a
 * subtle "breathing" feel. Pointer-events disabled, low opacity, very slow loops.
 */
const AmbientBackground = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-clay/[0.06] blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 42, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-earth/[0.07] blur-[140px]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 55, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] left-[40%] w-[35vw] h-[35vw] rounded-full bg-clay/[0.04] blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AmbientBackground;