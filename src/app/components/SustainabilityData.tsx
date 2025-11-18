"use client";

import { motion } from "framer-motion";
import { BarChart3, Target, Users, FileCheck } from "lucide-react";

export default function ImpactStepsSection() {
  const steps = [
    {
      title: "Monitor",
      desc: "Track carbon footprint and SDG progress continuously.",
      icon: <BarChart3 className="w-8 h-8 text-emerald-700" />,
    },
    {
      title: "Optimize",
      desc: "Identify high-impact reduction opportunities using verified data.",
      icon: <Target className="w-8 h-8 text-emerald-700" />,
    },
    {
      title: "Implement",
      desc: "Execute strategies with Wefetch analysts and trusted partners.",
      icon: <Users className="w-8 h-8 text-emerald-700" />,
    },
    {
      title: "Report",
      desc: "Generate automated, custom, and global-standard sustainability reports anytime.",
      icon: <FileCheck className="w-8 h-8 text-emerald-700" />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* ================= Section Heading ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-slate-900 mb-14 text-center"
        >
          Turn Sustainability Data into{" "}
          <span className="text-emerald-700">Real Impact</span>
        </motion.h2>

        {/* ================= Steps Grid ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-6 bg-slate-50 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

       <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  className="mt-16 flex justify-center"
>
  <a
    href="https://calendly.com/balajiselvarajofficial/wefetch-demo"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-semibold shadow-lg transition-all"
  >
    Book a Free Consultation
  </a>
</motion.div>


      </div>
    </section>
  );
}
