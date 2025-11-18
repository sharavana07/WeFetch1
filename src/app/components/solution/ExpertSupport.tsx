import { CheckCircle2, Users, TrendingDown, Sparkles } from 'lucide-react';

export default function ExpertSupport() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Data Validation",
      description: "Thorough verification of all sustainability metrics"
    },
    {
      icon: TrendingDown,
      title: "Reduction Strategies",
      description: "Custom plans tailored to your business goals"
    },
    {
      icon: Sparkles,
      title: "Smooth Implementation",
      description: "Seamless integration with your operations"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 via-teal-50/30 to-gray-50 snap-start">
      <div className="w-full max-w-6xl py-12 sm:py-16 lg:py-20">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100/60 rounded-full mb-4">
            <Users className="w-4 h-4 text-[#008B75]" />
            <span className="text-sm font-medium text-[#008B75]">Dedicated Support</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#008B75] leading-tight">
            Expert Support
          </h2>

          <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            A dedicated Wefetch sustainability analyst validates data, creates
            reduction strategies, and ensures smooth implementation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-linear-to-br from-[#008B75] to-teal-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="https://calendly.com/balajiselvarajofficial/wefetch-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#008B75] hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get Expert Guidance
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
}
