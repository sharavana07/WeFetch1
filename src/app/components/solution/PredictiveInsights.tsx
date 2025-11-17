import { AlertCircle, TrendingUp, LineChart, Target } from 'lucide-react';

export default function PredictiveInsights() {
  const features = [
    { 
      title: "Emissions Anomaly Detection", 
      icon: AlertCircle,
      description: "Real-time spike detection",
      color: "text-red-500"
    },
    { 
      title: "Energy & Resource Forecasting", 
      icon: LineChart,
      description: "Predictive consumption models",
      color: "text-blue-500"
    },
    { 
      title: "Trend Analysis", 
      icon: TrendingUp,
      description: "Historical pattern insights",
      color: "text-green-500"
    },
    { 
      title: "Scenario Planning", 
      icon: Target,
      description: "Long-term strategy simulation",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 sm:px-6 lg:px-8 snap-start snap-always overflow-hidden">
      <div className="max-w-5xl w-full mx-auto py-8 sm:py-12">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#008B75] leading-tight px-4">
            Predictive Insights &<br className="sm:hidden" /> Anomaly Detection
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Detect spikes, benchmark performance, forecast consumption, and
            simulate long term strategies with AI powered analytics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 max-w-4xl mx-auto">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="group bg-white rounded-2xl p-5 sm:p-6 lg:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-[#008B75]/20"
              >
                <div className={`${item.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={40} strokeWidth={1.5} className="sm:w-11 sm:h-11 lg:w-12 lg:h-12" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-[#008B75] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}