import React from 'react';

const WhyUs = () => {
  const advantages = [
    {
      icon: 'fas fa-globe-africa',
      title: 'Local Context, Global Standards',
      description: 'We understand African business challenges while delivering world-class digital solutions and best practices.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Reusable Automation IP',
      description: 'Leverage our proven automation frameworks and tools that can be customized for your specific needs.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Fast Results',
      description: 'Our proven methodologies and templates enable rapid implementation and quick wins for your organization.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Google & Microsoft Partnership Ready',
      description: 'We maintain partnerships with leading technology providers to ensure you get the best solutions and support.'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white border-opacity-20 mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            Why Choose Us
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Why Choose StackShift?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We combine local expertise with global best practices to deliver exceptional digital transformation results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl border border-white border-opacity-10 p-8 hover:bg-opacity-10 transition-all duration-700 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              
              <div className="relative flex items-start">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-blue-500/25">
                    <i className={`${advantage.icon} text-2xl text-white`}></i>
                  </div>
                </div>
                <div className="ml-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl shadow-2xl p-16 max-w-5xl mx-auto border border-white border-opacity-20">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-black mb-8">
              Ready to Transform Your Business?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-3">Fresh</div>
                <div className="text-blue-100 text-lg">Perspective & Innovation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-3">Modern</div>
                <div className="text-blue-100 text-lg">Approaches & Tools</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-3">Dedicated</div>
                <div className="text-blue-100 text-lg">Personal Attention</div>
              </div>
            </div>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              As a new consultancy, we bring fresh perspectives, modern approaches, and dedicated personal attention to every project. We're committed to building our reputation through exceptional results.
            </p>
            <a href="#contact" className="group bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all duration-500 transform hover:scale-110 inline-flex items-center shadow-2xl">
              Start Your Journey
              <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 