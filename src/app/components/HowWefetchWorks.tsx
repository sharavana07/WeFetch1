"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

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

export default function HowWefetchWorks(): JSX.Element {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-white via-emerald-50/30 to-white">
      <div className="w-full max-w-6xl py-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center text-[#008B75]"
        >
          A Simple, Data-Driven Approach
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03,
                borderColor: "#00C095",
                transition: { duration: 0.2 }
              }}
              className="relative border-l-4 border-[#00C095] pl-6 py-4 bg-white/50 rounded-r-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#00C095] to-[#008B75]"
              />
              
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.15 + 0.4 }}
                className="text-xl lg:text-2xl font-semibold text-[#008B75] mb-3"
              >
                {item.title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.15 + 0.5 }}
                className="text-gray-600 text-sm lg:text-base leading-relaxed"
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}