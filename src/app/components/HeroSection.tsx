"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // ✅ Using Next.js Image component
import React from "react";
import gif from "../../../public/hero.gif";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between py-32 px-6 bg-linear-to-br from-slate-50 via-emerald-50/30 to-slate-50 overflow-hidden">

      {/* 🔵 Animated blurred background blobs (purely decorative) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right blob */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-700/5 rounded-full blur-3xl"
        />
        {/* Bottom-left blob */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-800/5 rounded-full blur-3xl"
        />
      </div>

      {/* ================= LEFT SIDE — TEXT / HERO COPY ================= */}
      <div className="relative z-10 max-w-xl text-left">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/10 border border-emerald-700/20 rounded-full text-emerald-900 text-sm font-medium">
            <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
            Sustainability Platform
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
        >
          Turning Data Points into{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-linear-to-r from-emerald-700 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              Sustainable Actions
            </span>

            {/* Underline animation */}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-2 left-0 h-3 bg-emerald-200/50 z-0"
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10"
        >
          Wefetch helps industries measure, monitor, and reduce their carbon
          footprint while tracking SDG progress — all in one platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-row gap-4"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-semibold shadow-lg shadow-emerald-900/20 hover:shadow-xl transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Free Demo
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>

            {/* Hover animation background sweep */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-emerald-600 to-emerald-700"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white hover:bg-slate-50 text-emerald-800 border-2 border-emerald-700 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* ================= RIGHT SIDE — GIF/IMAGE ================= */}
      {/* NOTE TO TEAM: /hero.gif → replace with final optimized product animation */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mt-16 md:mt-0 md:ml-10"
      >
        <Image
          src={gif}
          alt="Sustainability Analytics GIF"
          width={500}
          height={500}
          priority  // ⚡ Improves LCP / loads instantly
          className="w-[400px] md:w-[500px] rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
