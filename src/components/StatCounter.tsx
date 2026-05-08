import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const StatCounter = ({ value, suffix = "", label, duration = 2 }: StatCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [inView, value, duration, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <div className="font-serif text-4xl md:text-5xl text-clay font-light">
        {display}
        <span>{suffix}</span>
      </div>
      <p className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
        {label}
      </p>
    </motion.div>
  );
};

export default StatCounter;