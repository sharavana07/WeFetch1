import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface WorkItem {
  title: string;
  desc: string;
}

const items: WorkItem[] = [
  {
    title: "Centralize Your Data",
    desc: "Energy, waste, production, logistics, and resources in one platform.",
  },
  {
    title: "Continuous Oversight",
    desc: "Analysts validate and monitor emissions in real time.",
  },
  {
    title: "Actionable Insights",
    desc: "Identify reduction opportunities backed by real data.",
  },
  {
    title: "Implementation Support",
    desc: "Connect with trusted partners to execute reduction strategies.",
  },
  {
    title: "Custom & Global Standard Reporting",
    desc: "Automated ESG, BRSR, CDP reports and custom company-specific reporting.",
  },
];

function WorkCard({ item, index, isActive, onClick }: { 
  item: WorkItem; 
  index: number; 
  isActive: boolean;
  onClick: () => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  function resetMouse() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      style={{
        rotateX: isActive ? rotateX : 0,
        rotateY: isActive ? rotateY : 0,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      onClick={onClick}
      className="cursor-pointer relative group"
    >
      <motion.div
        animate={{
          scale: isActive ? 1.05 : 1,
          backgroundColor: isActive ? "rgba(0, 192, 149, 0.05)" : "rgba(255, 255, 255, 0.8)",
        }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm border-2 transition-colors"
        style={{
          borderColor: isActive ? "#00C095" : "#e5e7eb",
          boxShadow: isActive 
            ? "0 20px 40px rgba(0, 192, 149, 0.2)" 
            : "0 4px 6px rgba(0, 0, 0, 0.05)"
        }}
      >
        {/* Number Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
          className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
          style={{
            background: isActive 
              ? "linear-gradient(135deg, #00C095 0%, #008B75 100%)"
              : "linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)",
            color: isActive ? "white" : "#6b7280",
            transform: "translateZ(20px)"
          }}
        >
          {index + 1}
        </motion.div>

        {/* Animated Background Blob */}
        <motion.div
          animate={{
            scale: isActive ? [1, 1.2, 1] : 1,
            opacity: isActive ? [0.3, 0.5, 0.3] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl"
          style={{
            background: "linear-gradient(135deg, #00C095 0%, #008B75 100%)",
          }}
        />

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isActive ? "100%" : "0%" }}
          transition={{ duration: 0.4 }}
          className="absolute top-0 left-0 h-1 rounded-full"
          style={{
            background: "linear-gradient(90deg, #00C095 0%, #008B75 100%)",
          }}
        />

        <div style={{ transform: "translateZ(30px)" }}>
          <motion.h3 
            animate={{
              color: isActive ? "#008B75" : "#1f2937",
            }}
            className="text-xl lg:text-2xl font-bold mb-3 pr-14"
          >
            {item.title}
          </motion.h3>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={isActive ? "active" : "inactive"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-gray-600 leading-relaxed"
              style={{
                fontSize: isActive ? "1rem" : "0.95rem",
              }}
            >
              {item.desc}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Corner Accent */}
        <motion.div
          animate={{
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 w-16 h-16 rounded-tr-full"
          style={{
            background: "linear-gradient(45deg, #00C095 0%, transparent 100%)",
            opacity: 0.2,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HowWefetchWorks() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-white via-emerald-50/30 to-sky-50/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, #00C095 0%, transparent 70%)",
        }}
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, #008B75 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="px-6 py-2 rounded-full text-sm font-semibold text-[#008B75] border-2 border-[#00C095] bg-white/80 backdrop-blur-sm">
              How It Works
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#008B75] to-[#00C095] bg-clip-text text-transparent">
            A Simple, Data-Driven Approach
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <WorkCard
              key={i}
              item={item}
              index={i}
              isActive={activeIndex === i}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Interactive Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-12"
        >
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-gray-500 text-sm"
          >
            Click on any card to explore ✨
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}