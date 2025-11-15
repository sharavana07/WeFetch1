import { FileText, Upload, CheckCircle2, Database } from 'lucide-react';

export default function DocumentHandling() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-5xl mx-auto py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#008B75] rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#008B75] mb-4">
            Document Handling & Uploads
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Extract info from invoices, reports, and energy bills quickly.
            Maintain accuracy with continuous validation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Bulk Excel Uploads */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Upload className="w-6 h-6 text-[#008B75]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Bulk Excel Uploads
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Map Excel formats to sustainability standards automatically with
                  real-time error validation.
                </p>
              </div>
            </div>
          </div>

          {/* Intelligent Extraction */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#008B75]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Intelligent Extraction
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  AI-powered data extraction with automatic field detection and
                  validation for maximum accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Formats & Systems */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <Database className="w-7 h-7 text-[#008B75]" />
            <h3 className="text-2xl font-semibold text-gray-900">
              Supported Formats & Systems
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-[#008B75] uppercase tracking-wide mb-3">
                File Formats
              </h4>
              <div className="flex flex-wrap gap-2">
                {['PDF', 'CSV', 'Excel', 'ERP Exports'].map((format) => (
                  <span
                    key={format}
                    className="px-4 py-2 bg-emerald-50 text-[#008B75] rounded-lg text-sm font-medium"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-[#008B75] uppercase tracking-wide mb-3">
                Integrations
              </h4>
              <div className="flex flex-wrap gap-2">
                {['SAP HANA', 'Oracle ERP', 'Salesforce', 'Workday', 'Legacy Systems'].map((system) => (
                  <span
                    key={system}
                    className="px-4 py-2 bg-emerald-50 text-[#008B75] rounded-lg text-sm font-medium"
                  >
                    {system}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}