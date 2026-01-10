
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-cyan flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-charcoal"></div>
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-white">
              FrameCoach
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-lightgrey hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-lightgrey hover:text-white transition-colors">How it Works</a>
            <a href="#faq" className="text-lightgrey hover:text-white transition-colors">FAQ</a>
          </div>

          <div>
            <button className="bg-cyan hover:bg-cyan/90 text-charcoal font-bold py-2.5 px-6 rounded-full transition-all active:scale-95">
              Join Beta
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
