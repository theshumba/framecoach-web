import React from 'react';
import { ModalProvider } from './context/ModalContext';
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
import { BetaSignupModal } from './components/BetaSignupModal';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <div className="min-h-screen font-sans selection:bg-scarlet selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <LossAversion />
          <Benefits />
          <Process />
          <FeatureGrid />
          {/* <Pricing /> - Hidden during free beta */}
          {/* <Testimonials /> - Hidden until we have real testimonials */}
          <CTA />
          <FAQ />
        </main>
        <Footer />
        <BetaSignupModal />
      </div>
    </ModalProvider>
  );
};

export default App;
