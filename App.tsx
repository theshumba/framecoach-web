
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import SocialProof from './components/SocialProof';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-cyan selection:text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <FeatureGrid />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
