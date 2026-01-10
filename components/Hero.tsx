
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block py-1 px-3 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-semibold tracking-wide uppercase">
              Now in Private Beta
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] tracking-tight">
              The decision layer <br />
              <span className="text-cyan text-glow italic">for your camera.</span>
            </h1>
            <p className="text-xl text-lightgrey max-w-xl mx-auto lg:mx-0">
              FrameCoach translates your creative goals into prioritized camera settings. Stop guessing. Start filming.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-cyan text-charcoal font-bold py-4 px-8 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] active:scale-95">
                Get Early Access
              </button>
              <button className="w-full sm:w-auto bg-darkgrey text-white border border-white/10 font-bold py-4 px-8 rounded-xl transition-all hover:bg-white/5 active:scale-95">
                See How It Works
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 accent-gradient blur-3xl opacity-10 rounded-full"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 glass-card">
              <img 
                src="https://placehold.co/800x600/0F1115/FFFFFF?text=FrameCoach+Live+View+UI" 
                alt="FrameCoach UI Overlay on Camera Screen"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="bg-amber/90 text-charcoal px-3 py-1 rounded text-xs font-bold animate-pulse">CLIPPING DETECTED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
