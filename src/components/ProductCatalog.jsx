import React from 'react';

const ProductCatalog = () => {
  const products = [
    {
      id: 1,
      name: 'Procurement Flow Builder',
      description: 'Automates purchase approvals and budgeting workflows with intelligent routing and approval chains.',
      features: [
        'Automated approval workflows',
        'Budget tracking & alerts',
        'Vendor management system',
        'Purchase order automation',
        'Real-time status tracking'
      ],
      targetSector: 'Government, Corporates, NGOs',
      pricing: 'KES 50K – 200K',
      tools: 'Airtable, Google Sheets, AppSheet'
    },
    {
      id: 2,
      name: 'SACCO Operations Dashboard',
      description: 'Real-time view of member growth, loans, liquidity, and financial performance metrics.',
      features: [
        'Member growth tracking',
        'Loan portfolio analytics',
        'Liquidity monitoring',
        'Financial reporting',
        'Performance dashboards'
      ],
      targetSector: 'SACCOs, Microfinance',
      pricing: 'KES 30K – 150K',
      tools: 'Google Data Studio, Google Sheets'
    },
    {
      id: 3,
      name: 'HR Onboarding Automation Kit',
      description: 'Digital forms, staff records, and automated checklist flow for seamless employee onboarding.',
      features: [
        'Digital onboarding forms',
        'Automated checklist flow',
        'Document management',
        'Staff record keeping',
        'Compliance tracking'
      ],
      targetSector: 'All Organizations',
      pricing: 'KES 25K – 100K',
      tools: 'Google Workspace, Power Automate'
    },
    {
      id: 4,
      name: 'School Digitization Starter Kit',
      description: 'Student records, fee tracking, report cards, and administrative automation for educational institutions.',
      features: [
        'Student record management',
        'Fee tracking system',
        'Report card generation',
        'Attendance tracking',
        'Parent communication'
      ],
      targetSector: 'Schools, Universities',
      pricing: 'KES 20K – 80K',
      tools: 'Notion, Google Forms, Sheets'
    },
    {
      id: 5,
      name: 'AI Support Assistant for SACCOs',
      description: 'Custom GPT that answers member queries instantly, reducing call center load and improving service.',
      features: [
        '24/7 member support',
        'Instant query resolution',
        'Multi-language support',
        'Integration with existing systems',
        'Analytics & insights'
      ],
      targetSector: 'SACCOs, Banks, Insurance',
      pricing: 'KES 100K – 500K',
      tools: 'OpenAI GPT, WhatsApp/website integration'
    },
    {
      id: 6,
      name: 'Clinic Inventory & Expiry Tracker',
      description: 'Track medicines, reorder levels, and expiry alerts to ensure patient safety and cost efficiency.',
      features: [
        'Medicine inventory tracking',
        'Expiry date alerts',
        'Reorder level notifications',
        'Cost analysis',
        'Supplier management'
      ],
      targetSector: 'Hospitals, Clinics, Pharmacies',
      pricing: 'KES 40K – 180K',
      tools: 'Airtable or PowerApps'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white border-opacity-20 mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            Digital Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Our Digital Tools
            </span>
            <br />
            <span className="text-white">& Starter Kits</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ready-to-deploy digital transformation solutions designed specifically for African enterprises
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl border border-white border-opacity-10 overflow-hidden hover:bg-opacity-10 transition-all duration-700 transform hover:-translate-y-4"
            >
              {/* Product Header */}
              <div className="p-8 border-b border-white border-opacity-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>
                
                {/* Target Sector Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
                  {product.targetSector}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-8">
                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <i className="fas fa-check text-blue-400 mr-3 mt-1 flex-shrink-0"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Used */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">
                    Tools Used
                  </h4>
                  <p className="text-gray-400 text-lg">
                    {product.tools}
                  </p>
                </div>

                {/* Get Quote */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">
                    Get a Quote
                  </h4>
                  <p className="text-gray-400 text-lg">
                    Contact us for custom pricing based on your needs
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className="group w-full py-5 px-8 rounded-2xl font-bold text-xl text-white transition-all duration-500 transform hover:scale-105 inline-block text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-2xl hover:shadow-blue-500/25 inline-flex items-center justify-center"
                >
                  Get a Quote
                  <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl shadow-2xl p-16 max-w-5xl mx-auto border border-white border-opacity-20">
            <h3 className="text-4xl md:text-5xl font-black mb-8">
              Need a Custom Solution?
            </h3>
            <p className="text-blue-100 mb-10 text-xl leading-relaxed max-w-3xl mx-auto">
              Don't see exactly what you need? We can customize any of these tools or build a completely new solution tailored to your specific requirements.
            </p>
            <a
              href="#contact"
              className="group bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all duration-500 transform hover:scale-110 inline-flex items-center shadow-2xl"
            >
              Request Custom Solution
              <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog; 