import React from 'react';
import { useModal } from '@/context/ModalContext';

const Navbar: React.FC = () => {
  const { openModal } = useModal();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-shadow/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="FrameCoach" className="w-9.5 h-8" />
            <span className="text-4xl font-display font-bold tracking-tight text-white">
              FrameCoach
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-alabaster/70 hover:text-white transition-colors">Features</a>
            <a href="#faq" className="text-alabaster/70 hover:text-white transition-colors">FAQ</a>
          </div>

          {/* CTA */}
          <div>
            <button
              onClick={openModal}
              className="bg-scarlet hover:bg-scarlet-dark text-white font-bold py-2.5 px-6 rounded-full transition-all active:scale-95"
            >
              Join Beta
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
