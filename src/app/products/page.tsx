"use client";

import { JSX } from "react";
import { motion } from "framer-motion";
import { Hourglass, Clock } from "lucide-react";

export default function ComingSoon(): JSX.Element {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="w-full max-w-4xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Product Page
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 font-light mt-2">
            Something powerful is on the way.
          </p>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-10 sm:p-12 flex flex-col items-center text-center"
        >
          {/* Icon */}
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg mb-8">
            <Hourglass className="w-12 h-12 text-white" />
          </div>

          {/* Main Title */}
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h3>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
            We’re crafting an advanced sustainability product experience that 
            delivers real-time insights, automated reporting, and powerful strategic intelligence.
            Stay tuned  the future of sustainability data is almost here.
          </p>

          {/* Launch Badge */}
          <div className="mt-6 flex items-center gap-3 text-teal-700 bg-teal-50 px-6 py-3 rounded-full border border-teal-200 shadow-sm">
            <Clock className="w-5 h-5" />
            <span className="text-lg font-semibold">Launching Soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
