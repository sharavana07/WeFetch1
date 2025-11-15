import { BarChart3, Zap, Palette, FileDown } from 'lucide-react';

export default function DashboardsAnalytics() {
  return (
    <section className="min-h-screen h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-teal-50/30 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#008B75] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-5xl w-full mx-auto relative z-10">
        <div className="space-y-8 md:space-y-10">
          
          {/* Header with animated accent */}
          <div className="space-y-4">
            <div className="inline-block">
              <div className="h-1 w-16 bg-gradient-to-r from-[#008B75] to-teal-400 rounded-full mb-4"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#008B75] leading-tight">
              Dashboards & Analytics
            </h2>
          </div>
          {/* Description with better typography */}
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-3xl leading-relaxed">
            Track emissions, energy use, and SDG progress in real time with
            custom dashboards for teams.
          </p>
          {/* Feature cards in grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
            {[
              { icon: BarChart3, title: "500+ Sustainability Metrics", desc: "Comprehensive tracking" },
              { icon: Zap, title: "Real-time Updates", desc: "Instant data refresh" },
              { icon: Palette, title: "Unlimited Custom Views", desc: "Tailored to your needs" },
              { icon: FileDown, title: "Export to PDF / PPT", desc: "Share with stakeholders" }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-teal-100 hover:border-[#008B75] hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-[#008B75] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Optional CTA */}
          <div className="pt-6">
            <button className="group inline-flex items-center gap-2 bg-[#008B75] hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 hover:scale-105">
              Explore Dashboard
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}