import React, { useEffect, useRef, useState } from 'react';

const Process: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const steps = [
    {
      step: 1,
      title: 'Describe Your Vision',
      description: 'Tell FrameCoach what you\'re going for. "Moody low-light interview" or "bright, airy outdoor portrait"—speak naturally.',
    },
    {
      step: 2,
      title: 'Point Your Camera',
      description: 'Our AI analyses your scene in real-time. Lighting conditions, dynamic range, potential hazards—we see it all.',
    },
    {
      step: 3,
      title: 'Get Prioritised Settings',
      description: 'We don\'t just dump numbers on you. You get ranked recommendations: what to change first, what matters most, and why.',
    },
    {
      step: 4,
      title: 'Shoot With Confidence',
      description: 'Hit record knowing your technical choices match your creative intent. No more "fix it in post" prayers.',
    },
  ];

  // Intersection Observer for scroll-triggered animations
  // Animations play only once per page load
  useEffect(() => {
    const observers = stepRefs.current.map((ref, idx) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add to visible steps
              setVisibleSteps((prev) => new Set(prev).add(idx));
              // Immediately unobserve to prevent re-triggering
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Mockup components for each step
  const StepMockup = ({ step }: { step: number }) => {
    switch (step) {
      case 1:
        return (
          <div className="bg-shadow-light rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-scarlet/60 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-alabaster/20"></div>
              <div className="w-3 h-3 rounded-full bg-alabaster/20"></div>
            </div>
            <div className="space-y-3">
              <div className="text-xs text-alabaster/40 uppercase tracking-wider animate-fade-in animation-delay-200">Describe your shot</div>
              <div className="bg-shadow rounded-lg p-3 border border-white/5 hover:border-white/10 transition-all duration-300 animate-fade-in animation-delay-300">
                <p className="text-alabaster/80 text-sm typing-animation">"Moody low-light interview, cinematic feel"</p>
              </div>
              <div className="flex items-center gap-2 text-scarlet text-xs animate-fade-in animation-delay-500 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" />
                </svg>
                <span>Or use voice input</span>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-shadow-light rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="relative aspect-video bg-shadow rounded-lg overflow-hidden border border-white/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-scarlet/60 rounded-lg animate-pulse-glow scanning-animation"></div>
              </div>
              <div className="absolute top-2 left-2 bg-scarlet/90 text-white text-xs px-2 py-1 rounded animate-pulse">
                ANALYZING
              </div>
              <div className="absolute bottom-2 left-2 right-2 bg-shadow/80 backdrop-blur rounded p-2 animate-fade-in-up animation-delay-400">
                <div className="flex justify-between text-xs">
                  <span className="text-alabaster/60 animate-fade-in animation-delay-500">Light: Low</span>
                  <span className="text-alabaster/60 animate-fade-in animation-delay-600">DR: High</span>
                  <span className="text-scarlet animate-fade-in animation-delay-700 font-semibold">ISO: Check</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-shadow-light rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="text-xs text-alabaster/40 uppercase tracking-wider mb-3 animate-fade-in">Recommended Settings</div>
            <div className="space-y-2">
              {[
                { label: 'ISO', value: '3200', priority: 'high' },
                { label: 'Aperture', value: 'f/1.8', priority: 'high' },
                { label: 'Shutter', value: '1/50', priority: 'medium' },
                { label: 'WB', value: '3200K', priority: 'low' },
              ].map((setting, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-shadow rounded-lg p-2 border border-white/5 hover:border-white/10 hover:scale-[1.02] transition-all duration-200 cursor-pointer animate-fade-in-right"
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      setting.priority === 'high' ? 'bg-scarlet animate-pulse' :
                      setting.priority === 'medium' ? 'bg-amber-500' : 'bg-alabaster/40'
                    }`}></div>
                    <span className="text-alabaster/60 text-sm">{setting.label}</span>
                  </div>
                  <span className="text-white text-sm font-medium">{setting.value}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="bg-shadow-light rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="relative aspect-video bg-shadow rounded-lg overflow-hidden border border-white/5 group">
              <div className="absolute inset-0 bg-gradient-to-br from-shadow-light to-shadow"></div>
              <div className="absolute top-2 right-2 flex items-center gap-1 bg-green-500/90 text-white text-xs px-2 py-1 rounded animate-fade-in animation-delay-200">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                REC
              </div>
              <div className="absolute bottom-2 left-2 right-2 animate-fade-in-up animation-delay-400">
                <div className="flex items-center justify-center gap-2 text-green-400 text-sm group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 animate-scale-in animation-delay-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">Settings Optimised</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 rounded-full border border-scarlet/30 bg-scarlet/10 mb-6 animate-scale-in">
            <p className="text-scarlet font-semibold uppercase tracking-widest text-sm">
              How It Works
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4 animate-fade-in-up animation-delay-200">
            From Vision to Footage
            <br />
            <span className="text-alabaster/60">in 4 Simple Steps</span>
          </h2>
          <p className="text-alabaster/60 text-lg animate-fade-in animation-delay-400">
            No complicated menus. No guesswork. Just tell us what you want and start shooting.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Vertical Timeline Line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-scarlet/50 via-scarlet/30 to-scarlet/50 -translate-x-1/2 animate-fade-in animation-delay-500"></div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isVisible = visibleSteps.has(idx);

              return (
                <div
                  key={idx}
                  ref={(el) => (stepRefs.current[idx] = el)}
                  className="relative"
                  style={{ willChange: isVisible ? 'auto' : 'opacity, transform' }}
                >
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <div
                      className={`w-4 h-4 rounded-full bg-scarlet border-4 border-shadow animate-pulse-glow transition-opacity duration-500 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                    ></div>
                  </div>

                  {/* Content Grid */}
                  <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${isEven ? '' : 'md:direction-rtl'}`}>
                    {/* Text Content */}
                    <div
                      className={`space-y-4 ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16 md:order-2'}`}
                      style={{
                        direction: 'ltr',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : `translateX(${isEven ? '3rem' : '-3rem'})`,
                        transition: 'opacity 700ms ease-out 150ms, transform 700ms ease-out 150ms',
                        willChange: isVisible ? 'auto' : 'opacity, transform'
                      }}
                    >
                      <div className={`inline-block px-3 py-1 rounded-full border border-alabaster/20 bg-shadow-light hover:border-alabaster/40 transition-colors duration-300 ${isEven ? 'md:float-right' : ''}`}>
                        <span className="text-alabaster/60 text-sm font-medium">Step {item.step}</span>
                      </div>
                      <div className="clear-both"></div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white hover:text-glow-subtle transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-alabaster/60 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>

                    {/* Mockup */}
                    <div
                      className={`${isEven ? 'md:pl-16 md:order-2' : 'md:pr-16'}`}
                      style={{
                        direction: 'ltr',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : `translateX(${isEven ? '-3rem' : '3rem'})`,
                        transition: 'opacity 700ms ease-out 300ms, transform 700ms ease-out 300ms',
                        willChange: isVisible ? 'auto' : 'opacity, transform'
                      }}
                    >
                      <div className="relative group">
                        {/* Glow effect behind mockup */}
                        <div className="absolute -inset-4 bg-scarlet/5 rounded-2xl blur-xl group-hover:bg-scarlet/10 transition-all duration-500"></div>
                        <div className="relative transform group-hover:scale-[1.02] transition-transform duration-500">
                          <StepMockup step={item.step} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
