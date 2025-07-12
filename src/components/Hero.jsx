import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      
      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(99, 102, 241, 0.1) 50%, transparent 60%)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-indigo-500 rounded-full opacity-15 blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <div className="space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white border-opacity-20">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              Leading Digital Transformation in Africa
            </div>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                  StackShift
                </span>
              </h1>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                Consulting
              </h2>
            </div>
            
            {/* Tagline */}
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Digital Transformation for African Enterprises
            </p>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We help African businesses and institutions modernize their operations through strategic digital transformation, process automation, and AI adoption.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <a href="#contact" className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/25 inline-flex items-center">
                Get a Quote
                <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
              </a>
              <a href="#services" className="group border-2 border-white border-opacity-30 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-110 backdrop-blur-sm inline-flex items-center">
                Explore Services
                <i className="fas fa-chevron-right ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white border-opacity-30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 