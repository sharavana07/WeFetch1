"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WhyCompaniesWork() {
  const features = [
    "Always Accurate Data – Real-time tracking eliminates outdated reports.",
    "Unified Platform – Measurement, strategy, and reporting in a single system.",
    "Hands-On Expertise – Analysts manage your sustainability journey end-to-end.",
    "Compliance Ready – Continuous tracking ensures audit-ready reporting.",
    "End-to-End Service – From data collection to execution, everything is handled by Wefetch.",
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* ================= Heading ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-slate-900 mb-12"
        >
          Why Companies Work With{" "}
          <span className="text-emerald-700">Wefetch</span>
        </motion.h2>

        {/* ================= Features List ================= */}
        <div className="space-y-5">
          {features.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * index, duration: 0.6 }}
              className="flex items-start gap-3"
            >
              {/* Icon */}
              <CheckCircle className="w-6 h-6 text-emerald-600 mt-1" />

              {/* Feature text */}
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= CTA Section ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14"
        >
          <button
            className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Take the Next Step
          </button>
        </motion.div>
      </div>
    </section>
  );
}
