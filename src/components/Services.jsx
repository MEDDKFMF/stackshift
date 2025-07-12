import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-chart-line',
      title: 'Digital Strategy & Roadmapping',
      description: 'Comprehensive digital transformation roadmaps tailored to your organization\'s unique needs and goals.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Process Automation Consulting',
      description: 'Streamline operations with intelligent automation solutions that reduce manual work and improve efficiency.'
    },
    {
      icon: 'fas fa-robot',
      title: 'AI Adoption for Business',
      description: 'Integrate cutting-edge AI solutions to enhance decision-making, customer service, and operational insights.'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Infrastructure Optimization',
      description: 'Modernize your IT infrastructure with scalable cloud solutions that improve performance and reduce costs.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Training & Change Management',
      description: 'Ensure successful digital adoption with comprehensive training programs and change management strategies.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Custom Digital Tools Development',
      description: 'Build bespoke digital solutions and automation tools specifically designed for your unique business processes.'
    }
  ];

  return (
    <section id="services" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white border-opacity-20 mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            Our Expertise
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital transformation solutions designed specifically for African enterprises
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl border border-white border-opacity-10 p-8 hover:bg-opacity-10 transition-all duration-700 transform hover:-translate-y-4 relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-blue-500/25">
                  <i className={`${service.icon} text-4xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 