import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white border-opacity-20 mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            Get In Touch
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Start Your Digital Transformation
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ready to modernize your organization? Get in touch for a free consultation and digital audit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl border border-white border-opacity-10 p-8">
            <h3 className="text-3xl font-bold text-white mb-8">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-bold text-white mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-white border-opacity-20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white bg-opacity-5 text-white placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-bold text-white mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-white border-opacity-20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white bg-opacity-5 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-lg font-bold text-white mb-3">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-white border-opacity-20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white bg-opacity-5 text-white placeholder-gray-400"
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-bold text-white mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-white border-opacity-20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white bg-opacity-5 text-white placeholder-gray-400"
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg font-bold text-white mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 border border-white border-opacity-20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white bg-opacity-5 text-white placeholder-gray-400"
                  placeholder="Tell us about your digital transformation needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 px-8 rounded-2xl font-bold text-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-500 transform hover:scale-105 shadow-2xl"
              >
                Send Message
                <i className="fas fa-paper-plane ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Get in touch</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Ready to transform your organization? We're here to help you navigate your digital transformation journey with expertise and local understanding.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl shadow-blue-500/25">
                    <i className="fas fa-envelope text-2xl text-white"></i>
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white mb-2">Email</h4>
                  <a href="mailto:info@stackshift.consulting" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-lg">
                    info@stackshift.consulting
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl shadow-blue-500/25">
                    <i className="fas fa-phone text-2xl text-white"></i>
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white mb-2">Phone</h4>
                  <a href="tel:+254741212450" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-lg">
                    +254 741 212 450
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl shadow-blue-500/25">
                    <i className="fas fa-map-marker-alt text-2xl text-white"></i>
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white mb-2">Location</h4>
                  <p className="text-gray-400 text-lg">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl border border-white border-opacity-10 p-8">
              <h4 className="text-xl font-bold text-white mb-4">Response Time</h4>
              <p className="text-gray-400 mb-6 text-lg">
                We typically respond to inquiries within 24 hours during business days.
              </p>
              <a
                href="https://wa.me/254741212450?text=Hi! I'm interested in StackShift Consulting's digital transformation services."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-2xl font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-500 transform hover:scale-105 shadow-2xl"
              >
                <i className="fab fa-whatsapp mr-3 text-xl"></i>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 