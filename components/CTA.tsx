import React from 'react';
import { useModal } from '@/context/ModalContext';

const CTA: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="py-16 md:py-20 bg-shadow-light/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden glass-card">
          {/* Subtle gradient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-scarlet/10 rounded-full blur-[100px]"></div>

          {/* Content */}
          <div className="relative px-6 py-12 md:px-12 md:py-16 text-center">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-4">
              Ready to Stop Guessing?
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-alabaster/60 max-w-xl mx-auto mb-8">
              Join 2,400+ filmmakers who've transformed their workflow with AI-powered camera guidance.
            </p>

            {/* CTA Button */}
            <button
              onClick={openModal}
              className="group bg-scarlet hover:bg-scarlet-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(223,41,53,0.4)] active:scale-[0.98]"
            >
              <span className="flex items-center gap-2">
                Get Early Access
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-alabaster/40">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card required
              </span>
              <span className="text-alabaster/20">•</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free tier available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
