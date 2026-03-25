import { motion } from "framer-motion";

const DataFlowBackground = () => {
  const columns = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.07]">
      {columns.map((col) => (
        <motion.div
          key={col}
          className="absolute w-px bg-gradient-to-b from-transparent via-primary to-transparent"
          style={{
            left: `${(col + 1) * (100 / 13)}%`,
            height: "200px",
            top: "-200px",
          }}
          animate={{
            top: ["- 200px", "120%"],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default DataFlowBackground;
