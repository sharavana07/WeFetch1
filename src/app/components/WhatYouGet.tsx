import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, FileText, TrendingDown, Users, Zap } from "lucide-react";

export default function WhatYouGet(): JSX.Element {
  // State to track the currently active feature
  const [activeIndex, setActiveIndex] = useState(0);

  // Feature data with icons and detailed content
  const features = [
    {
      number: "01",
      title: "Real-Time Dashboards",
      description: "Live emissions & SDG tracking",
      icon: Activity,
      detailedDescription: "Monitor your sustainability metrics in real-time with intuitive dashboards that provide instant insights into emissions, energy consumption, and SDG progress. Get actionable data at your fingertips.",
      metric: "99.9%",
      metricLabel: "Data Accuracy"
    },
    {
      number: "02",
      title: "Automated & Custom Reporting",
      description: "Global-standard + custom formats",
      icon: FileText,
      detailedDescription: "Generate comprehensive reports that comply with global standards like GRI, TCFD, and CDP. Customize report formats to match your stakeholder requirements and automate delivery schedules.",
      metric: "50+",
      metricLabel: "Report Templates"
    },
    {
      number: "03",
      title: "Data-Backed Reduction Strategies",
      description: "Verified insights",
      icon: TrendingDown,
      detailedDescription: "Leverage AI-powered analytics to identify high-impact reduction opportunities. Get science-based recommendations backed by verified data to accelerate your net-zero journey.",
      metric: "35%",
      metricLabel: "Avg. Reduction"
    },
    {
      number: "04",
      title: "Dedicated Analyst Oversight",
      description: "Continuous expert support",
      icon: Users,
      detailedDescription: "Work with experienced sustainability analysts who provide ongoing support, validation, and strategic guidance. Your dedicated team ensures data quality and regulatory compliance.",
      metric: "24/7",
      metricLabel: "Expert Support"
    },
    {
      number: "05",
      title: "Scalable Solution",
      description: "Works for SMEs and enterprises",
      icon: Zap,
      detailedDescription: "From startups to Fortune 500 companies, our platform scales with your needs. Flexible architecture supports single-site operations to complex multi-national deployments.",
      metric: "500+",
      metricLabel: "Organizations"
    }
  ];

  const activeFeature = features[activeIndex];
  const ActiveIcon = activeFeature.icon;

  return (
    // Main container - full viewport height with gradient background
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="w-full max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
            Measurable Sustainability
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 font-light">
            Without Extra Work
          </p>
        </motion.div>

        {/* Two-column layout: Feature list (left) + Content card (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          
          {/* LEFT COLUMN - Feature list navigation */}
          <div className="lg:col-span-2 space-y-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeIndex === index;
              
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left transition-all duration-300 rounded-xl p-4 sm:p-5 relative group ${
                    isActive
                      ? 'bg-white shadow-lg border-l-4 border-teal-600'
                      : 'bg-white/50 hover:bg-white/80 hover:shadow-md border-l-4 border-transparent'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Feature number badge */}
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-400 group-hover:bg-gray-300'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      {/* Feature title */}
                      <h3 className={`text-base sm:text-lg font-bold mb-1 transition-colors ${
                        isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-800'
                      }`}>
                        {feature.title}
                      </h3>
                      
                      {/* Feature short description */}
                      <p className={`text-sm transition-colors ${
                        isActive ? 'text-gray-600' : 'text-gray-500'
                      }`}>
                        {feature.description}
                      </p>
                    </div>

                    {/* Number indicator */}
                    <div className={`text-2xl font-bold transition-colors ${
                      isActive ? 'text-teal-600' : 'text-gray-300'
                    }`}>
                      {feature.number}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT COLUMN - Active feature content card */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-between min-h-[400px] lg:min-h-[500px]"
              >
                {/* Icon and number header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg">
                    <ActiveIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-100">
                    {activeFeature.number}
                  </div>
                </div>

                {/* Feature title */}
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {activeFeature.title}
                  </h3>

                  {/* Detailed description */}
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                    {activeFeature.detailedDescription}
                  </p>
                </div>

                {/* Key metric display */}
                <div className="mt-auto pt-6 border-t border-gray-200">
                  <div className="flex items-end gap-3">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">
                      {activeFeature.metric}
                    </div>
                    <div className="text-lg sm:text-xl text-gray-600 pb-2">
                      {activeFeature.metricLabel}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}