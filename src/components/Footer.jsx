import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black text-white mb-6">
                StackShift Consulting
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Leading digital transformation consultancy for African enterprises. We help organizations modernize operations, automate processes, and adopt cutting-edge technologies.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://wa.me/254741212450" target="_blank" rel="noopener noreferrer" className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110" title="Chat with us on WhatsApp">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/25 group-hover:shadow-green-500/50">
                  <i className="fab fa-whatsapp text-xl"></i>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/stackshift-consulting" target="_blank" rel="noopener noreferrer" className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110" title="Follow us on LinkedIn">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25 group-hover:shadow-blue-500/50">
                  <i className="fab fa-linkedin text-xl"></i>
                </div>
              </a>
              <a href="https://www.facebook.com/stackshiftconsulting" target="_blank" rel="noopener noreferrer" className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110" title="Like us on Facebook">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25 group-hover:shadow-blue-500/50">
                  <i className="fab fa-facebook text-xl"></i>
                </div>
              </a>
              <a href="https://twitter.com/stackshift_ke" target="_blank" rel="noopener noreferrer" className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110" title="Follow us on Twitter">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-400/25 group-hover:shadow-blue-400/50">
                  <i className="fab fa-twitter text-xl"></i>
                </div>
              </a>
              <a href="https://www.instagram.com/stackshift_consulting" target="_blank" rel="noopener noreferrer" className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110" title="Follow us on Instagram">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-pink-500/25 group-hover:shadow-pink-500/50">
                  <i className="fab fa-instagram text-xl"></i>
                </div>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400 text-lg">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Digital Strategy & Roadmapping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Process Automation Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  AI Adoption for Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Cloud Infrastructure Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Training & Change Management
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-white mb-6">Contact Us</h4>
            <div className="space-y-4 text-gray-400 text-lg">
              <div className="flex items-center">
                <i className="fas fa-envelope text-blue-400 mr-3"></i>
                <a href="mailto:info@stackshift.consulting" className="hover:text-white transition-colors duration-300">
                  info@stackshift.consulting
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-blue-400 mr-3"></i>
                <a href="tel:+254741212450" className="hover:text-white transition-colors duration-300">
                  +254 741 212 450
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-blue-400 mr-3"></i>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            
            <div className="pt-6">
              <a href="#contact" className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-500 transform hover:scale-105 inline-flex items-center shadow-2xl">
                Get a Quote
                <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-lg">
              © 2025 StackShift Consulting. All rights reserved.
            </div>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-lg transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-lg transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-lg transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 