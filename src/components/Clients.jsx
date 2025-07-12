import React from 'react';

const Clients = () => {
  const clientSegments = [
    {
      icon: 'fas fa-landmark',
      title: 'County Governments',
      description: 'Digital transformation for public services and administrative efficiency'
    },
    {
      icon: 'fas fa-university',
      title: 'SACCOs & Banks',
      description: 'Modernizing financial services and customer experience'
    },
    {
      icon: 'fas fa-hospital',
      title: 'Hospitals & Clinics',
      description: 'Healthcare digitization and patient management systems'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Schools & Universities',
      description: 'Educational technology and administrative automation'
    },
    {
      icon: 'fas fa-building',
      title: 'Midsize Companies',
      description: 'Digital transformation for organizations with 30–500 staff'
    },
    {
      icon: 'fas fa-industry',
      title: 'Manufacturing & Logistics',
      description: 'Supply chain optimization and production process automation'
    }
  ];

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white border-opacity-20 mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            Our Clients
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Target Clients
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We serve diverse sectors across Africa, helping organizations modernize and thrive in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientSegments.map((segment, index) => (
            <div 
              key={index}
              className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl border border-white border-opacity-10 p-8 hover:bg-opacity-10 transition-all duration-700 transform hover:-translate-y-4 relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-blue-500/25">
                  <i className={`${segment.icon} text-4xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">
                  {segment.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {segment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-16 max-w-5xl mx-auto shadow-2xl border border-white border-opacity-20">
            <h3 className="text-4xl md:text-5xl font-black mb-8">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-blue-100 mb-10 text-xl leading-relaxed max-w-3xl mx-auto">
              Whether you're a government institution, financial organization, healthcare provider, educational institution, growing business, or manufacturing company, we have the expertise to guide your digital transformation journey.
            </p>
            <a href="#contact" className="group bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all duration-500 transform hover:scale-110 inline-flex items-center shadow-2xl">
              Start Your Transformation
              <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto shadow-lg border border-white border-opacity-10">
            <h4 className="text-xl font-bold text-white mb-4">
              Not Among These Target Sectors?
            </h4>
            <p className="text-gray-400 mb-6 text-lg">
              We work with organizations across all industries. If your sector isn't listed above, we'd love to understand your unique challenges and explore how digital transformation can benefit your organization.
            </p>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 text-lg">
              Reach Out to Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients; 