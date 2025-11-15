"use client";

import { AlertTriangle, Hourglass, DollarSign, Eye } from "lucide-react";
import { JSX } from "react";

export default function WhySustainability(): JSX.Element {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Outdated Reports",
      description: "Reports become outdated before management sees them.",
    },
    {
      icon: Hourglass,
      title: "Time-Consuming Processes",
      description: "Manual data collection drains team resources.",
    },
    {
      icon: DollarSign,
      title: "High Costs",
      description: "Consultants or sustainability teams are expensive.",
    },
    {
      icon: Eye,
      title: "Limited Visibility",
      description: "No real-time insights to track progress.",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl w-full">
        {/* SECTION TITLE */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 text-gray-900 px-4">
            Simplifying Sustainability for Busy Teams
          </h2>
          <div className="w-20 lg:w-24 h-1 bg-gradient-to-r from-green-700 to-green-600 mx-auto rounded-full"></div>
        </div>

        {/* PROBLEM GRID */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-10 px-2">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-700"
              >
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FINAL STATEMENT */}
        <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-xl lg:rounded-2xl p-6 lg:p-10 text-center shadow-lg mx-2">
          <p className="text-lg sm:text-xl lg:text-2xl text-white font-semibold leading-relaxed">
            Wefetch turns scattered sustainability data into continuous, actionable insights.
          </p>
        </div>
      </div>
    </section>
  );
}