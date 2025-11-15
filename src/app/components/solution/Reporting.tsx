import { FileCheck, Zap, Search, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Reporting() {
  const features = [
    { icon: FileCheck, text: '15+ Reporting Frameworks', color: 'text-emerald-600' },
    { icon: Zap, text: 'Auto-Mapping of Data', color: 'text-blue-600' },
    { icon: Search, text: 'Real-Time Gap Analysis', color: 'text-purple-600' },
    { icon: ShieldCheck, text: 'Built-in Audit Compliance', color: 'text-orange-600' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50 snap-start">
      <div className="max-w-6xl w-full mx-auto py-12 sm:py-16 lg:py-20">
        
        {/* Main Content */}
        <div className="space-y-8 lg:space-y-10">
          
          {/* Header */}
          <div className="space-y-4 lg:space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                Reporting Excellence
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Custom & Global Standard{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008B75] to-emerald-600">
                Reporting
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
              Generate audit-ready reports for BRSR, GRI, CDP, TCFD, SASB, and more
              with automatic mapping and gap analysis.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
                >
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gray-50 group-hover:bg-emerald-50 transition-colors duration-300 mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  
                  {/* Text */}
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-[#008B75] transition-colors duration-300">
                    {feature.text}
                  </h3>
                  
                  {/* Hover Arrow */}
                  <ChevronRight className="absolute top-6 right-6 w-5 h-5 text-emerald-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  
                  {/* Decorative Element */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#008B75] to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3 bg-[#008B75] text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
              Explore Frameworks
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-emerald-300">
              View Demo Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}