import { Database, Shield, Upload, Link, CheckCircle, Clock, TrendingUp } from 'lucide-react';

export default function GuidedDataEntry() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-teal-50/30 to-gray-50">
      <div className="w-full max-w-5xl space-y-8 sm:space-y-12 py-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#008B75] to-[#00a589] shadow-lg mb-4">
            <Database className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#008B75] to-[#00a589] bg-clip-text text-transparent">
            Guided Data Entry
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Enter data once; our platform validates it against global and
            company-specific standards. Automatic gap detection ensures no missing
            information. Every entry is timestamped, every change tracked.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#008B75]/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#008B75]/10 flex items-center justify-center group-hover:bg-[#008B75] transition-colors duration-300">
                <Clock className="w-6 h-6 text-[#008B75] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  100% Data Traceability
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Track every change with complete audit trails and timestamps
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#008B75]/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#008B75]/10 flex items-center justify-center group-hover:bg-[#008B75] transition-colors duration-300">
                <Link className="w-6 h-6 text-[#008B75] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Complete Evidence Linkage
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Connect supporting documentation directly to data entries
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#008B75]/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#008B75]/10 flex items-center justify-center group-hover:bg-[#008B75] transition-colors duration-300">
                <CheckCircle className="w-6 h-6 text-[#008B75] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Manual & Automated Data Entry
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Flexible input methods to match your workflow preferences
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#008B75]/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#008B75]/10 flex items-center justify-center group-hover:bg-[#008B75] transition-colors duration-300">
                <Upload className="w-6 h-6 text-[#008B75] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Bulk Upload Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Process large datasets efficiently with validation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        
      </div>
    </section>
  );
}