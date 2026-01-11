import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import LossAversion from './components/LossAversion';
import Benefits from './components/Benefits';
import Process from './components/Process';
import FeatureGrid from './components/FeatureGrid';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-scarlet selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <LossAversion />
        <Benefits />
        <Process />
        <FeatureGrid />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
