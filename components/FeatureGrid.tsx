
import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Protect Highlights",
    description: "Detect clipping risks before you hit record. Our neural engine monitors the highest luminance values in real-time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707" />
      </svg>
    )
  },
  {
    title: "Natural Skin Tones",
    description: "Keep complexions accurate in mixed lighting. Automatically shifts WB bias to preserve skin texture and warmth.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Shot Consistency",
    description: "Match exposure and color across varying takes. Perfect for narrative projects where consistency is everything.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    title: "Clean Shadows",
    description: "Prioritize mechanical fixes to reduce ISO noise. FrameCoach suggests aperture and shutter tweaks before digital gain.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )
  }
];

const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Don’t think in settings. <br />
            <span className="text-lightgrey italic">Think in outcomes.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-darkgrey border border-white/5 hover:border-cyan/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center text-cyan mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-lightgrey leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
