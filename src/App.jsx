import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductCatalog from './components/ProductCatalog';
import Clients from './components/Clients';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Services />
      <ProductCatalog />
      <Clients />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 