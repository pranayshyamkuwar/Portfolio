import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import DataFlowBackground from "./DataFlowBackground";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DataFlowBackground />

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground font-body tracking-wider uppercase mb-6"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tight mb-6"
        >
          <span className="text-gradient-hero">Pranay</span>
          <br />
          <span className="text-gradient-primary">Shyamkuwar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-primary text-lg font-body tracking-wider">
            Data Engineer
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed"
        >
          Building robust data pipelines & engineering scalable solutions.
          <br className="hidden md:block" />
          4+ years transforming raw data into business intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <a href="#experience" className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-heading font-medium hover:opacity-90 transition-opacity">
            View Work
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-foreground/20 text-foreground font-heading font-medium hover:border-foreground/40 transition-colors">
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
