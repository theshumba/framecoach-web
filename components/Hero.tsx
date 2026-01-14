import React from 'react';
import { useModal } from '@/context/ModalContext';

const Hero: React.FC = () => {
  const { openModal } = useModal();
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Split screen layout */}
      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* Left: Content */}
        <div className="flex items-center px-6 sm:px-12 lg:px-16 xl:px-24 py-32 lg:py-0 relative z-10">
          <div className="max-w-2xl">

            {/* Eyebrow with animation */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-scarlet/10 border border-scarlet/20 mb-8">
                <span className="w-2 h-2 bg-scarlet rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-alabaster/90 tracking-wide uppercase">
                  Now in Private Beta
                </span>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="animate-fade-in-up animation-delay-100">
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[0.95] tracking-tight">
                Stop Guessing.
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[0.95] tracking-tight">
                <span className="text-scarlet text-glow">Start Shooting.</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-in-up animation-delay-200 text-lg sm:text-xl text-alabaster/60 max-w-lg mt-8 leading-relaxed">
              AI that analyses your scene and tells you exactly which settings to dial in—<span className="text-white font-medium">before you hit record</span>.
            </p>

            {/* Social proof */}
            <div className="animate-fade-in-up animation-delay-300 flex items-center gap-3 mt-8">
              <div className="flex -space-x-3">
                {['MC', 'SR', 'JO', 'AK'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-scarlet/40 to-scarlet/20 border-2 border-shadow flex items-center justify-center text-xs font-bold text-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-alabaster/60 text-sm">Trusted by indie filmmakers • Built by BFI Alumni</span>
            </div>

            {/* CTAs */}
            <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row items-start gap-4 mt-10">
              <button
                onClick={openModal}
                className="group relative bg-scarlet hover:bg-scarlet-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_50px_rgba(223,41,53,0.4)] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Early Access
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
          {/* x<button className="flex items-center gap-3 text-alabaster hover:text-white font-semibold py-4 px-2 transition-colors group">
                <div className="w-12 h-12 rounded-full border border-alabaster/30 group-hover:border-scarlet group-hover:bg-scarlet/10 flex items-center justify-center transition-all">
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                Watch Demo
              </button> */}
            </div>

          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative hidden lg:flex items-center justify-center">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-l from-scarlet/10 via-transparent to-transparent"></div>

          {/* Animated glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-scarlet/20 rounded-full blur-[120px] animate-pulse"></div>

          {/* Main visual container */}
          <div className="animate-scale-in animation-delay-300 relative z-10 w-full max-w-lg mx-8">

            {/* Floating UI card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 glass-card animate-float">
              {/* Video/Image placeholder with gradient */}
              <div className="aspect-[4/3] bg-gradient-to-br from-shadow-light via-shadow to-shadow-light relative overflow-hidden">
                {/* Simulated camera viewfinder grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-4 border border-white/30"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20"></div>
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20"></div>
                  {/* Rule of thirds */}
                  <div className="absolute top-1/3 left-0 right-0 h-px bg-white/10"></div>
                  <div className="absolute top-2/3 left-0 right-0 h-px bg-white/10"></div>
                  <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/10"></div>
                  <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/10"></div>
                </div>

                {/* Center focus indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 border-2 border-scarlet/50 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-scarlet rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Cinematic bars */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-black/50"></div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-black/50"></div>
              </div>

              {/* Alert badge
              <div className="absolute top-12 right-4">
                <div className="bg-scarlet text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-lg animate-pulse-glow">
                  ⚠ CLIPPING DETECTED
                </div>
              </div>*/}

              {/* AI recommendation overlay */}
              <div className="absolute bottom-12 left-4 right-4">
                <div className="bg-shadow/90 backdrop-blur-md rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-xs font-semibold">AI RECOMMENDATION</span>
                  </div>
                  <p className="text-white text-sm font-medium">Reduce ISO to 640 • Open aperture to f/2.0</p>
                  <p className="text-alabaster/50 text-xs mt-1">This will recover 1.2 stops of highlight detail</p>
                </div>
              </div>

              {/* Bottom stats bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="text-alabaster/50 block">ISO</span>
                    <span className="text-white font-mono font-bold">800</span>
                  </div>
                  <div>
                    <span className="text-alabaster/50 block">f/</span>
                    <span className="text-white font-mono font-bold">2.8</span>
                  </div>
                  <div>
                    <span className="text-alabaster/50 block">SS</span>
                    <span className="text-white font-mono font-bold">1/50</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-400 font-medium">REC</span>
                </div>
              </div>
            </div>

            {/* Floating elements around card */}
            <div className="absolute -top-4 -right-4 bg-shadow-light border border-white/10 rounded-lg px-3 py-2 text-xs animate-fade-in animation-delay-500">
              <span className="text-alabaster/50">Local Time</span>
              <span className="text-white font-mono ml-2">14:23:07</span>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-shadow-light border border-white/10 rounded-lg px-3 py-2 animate-fade-in animation-delay-600">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-scarlet/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-scarlet" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-xs font-medium">Settings optimised</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-shadow to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
