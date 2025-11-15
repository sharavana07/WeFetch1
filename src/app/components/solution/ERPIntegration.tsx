export default function ERPIntegration() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-teal-50">
      <div className="max-w-5xl w-full mx-auto py-12 sm:py-16">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 bg-teal-100 text-[#008B75] text-sm font-semibold rounded-full">
              Enterprise Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#008B75] mb-4 sm:mb-6">
            ERP & System Integration
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Real-time synchronization with enterprise systems while maintaining data
            security and regulatory compliance.
          </p>
        </div>

        {/* Integration Cards */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
            Key Integrations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#008B75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Enterprise ERP</h4>
              <p className="text-gray-600 text-sm">SAP, Oracle, HANA</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#008B75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Cloud Platforms</h4>
              <p className="text-gray-600 text-sm">Salesforce, Workday, Custom DBs</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#008B75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">API Connectivity</h4>
              <p className="text-gray-600 text-sm">REST API Connectors</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}