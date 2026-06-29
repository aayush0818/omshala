import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import guidePortrait from "@/assets/guide-portrait.jpg";

const ShrutikaIntro = () => {
  const reduce = useReducedMotion();

  return (
    <section className="py-28 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={guidePortrait}
                alt="Shrutika — founder of Om Shala"
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1200ms]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-clay/20 -z-10" />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 lg:pl-8"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-clay block mb-8">
              Founder
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mb-10">
              Shrutika
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg max-w-xl">
              <p>
                A Meditation Teacher and Indian Classical Singer practicing Nada Yoga —
                the yoga of sound and music — as a pathway to the inner life.
              </p>
              <p>
                She creates Sound Healing Experiences using Crystal Singing Bowls and the
                instrument of Voice, supported by breathwork and guided relaxation.
              </p>
              <blockquote className="pl-6 border-l-2 border-clay/40 italic text-foreground/80">
                "Pure sound pulls you inward and brings deep relaxation. In this state, the
                body is grounded, mind is open and emotions are free. Everything feels perfect,
                as it is."
              </blockquote>
            </div>
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-3 text-sm text-foreground hover:text-clay transition-colors duration-300"
            >
              <span className="link-underline">Read more</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShrutikaIntro;