import React from 'react';

const Monetization = () => {
  const pricingTiers = [
    {
      title: 'Roadmaps',
      price: 'KES 100K – 800K',
      description: 'Comprehensive digital transformation roadmaps',
      features: ['Strategic planning', 'Technology assessment', 'Implementation timeline', 'ROI projections']
    },
    {
      title: 'Retainers',
      price: 'KES 50K – 300K',
      description: 'Ongoing consulting and support services',
      features: ['Monthly consulting', 'Technical support', 'Progress monitoring', 'Strategy adjustments']
    },
    {
      title: 'Implementation Builds',
      price: 'Project-based',
      description: 'Custom development and system implementation',
      features: ['Custom development', 'System integration', 'Testing & deployment', 'Training & handover']
    },
    {
      title: 'Executive Trainings',
      price: 'KES 25K – 150K',
      description: 'Leadership and team training programs',
      features: ['Digital leadership', 'Change management', 'Technology workshops', 'Best practices']
    },
    {
      title: 'White-Label Tools',
      price: 'Licensing fees',
      description: 'Customizable automation and management tools',
      features: ['Custom branding', 'Scalable solutions', 'Ongoing updates', 'Technical support']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Monetization Models
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options to meet your organization's digital transformation needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.title}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {tier.price}
                </div>
                <p className="text-gray-600 mb-6">
                  {tier.description}
                </p>
              </div>
              
              <ul className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 text-center">
                <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-block">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Monetization; 