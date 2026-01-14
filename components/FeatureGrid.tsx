import React from 'react';
import { Feature } from '../types';


{/* {
  title: "Real-Time Clipping Alerts",
  description: "See exactly where highlights are blowing out before you record. Our neural engine monitors the hottest pixels in your frame.",
  icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  )
},*/}

const features: Feature[] = [

  {
    title: "AI Scene Analysis",
    description: "Point and shoot. We instantly detect lighting conditions, contrast ratios, and colour temperatures to recommend optimal settings.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Natural Language Input",
    description: '"Cinematic sunset interview" or "clean corporate talking head"—describe what you want in plain English. We handle the rest.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: "Priority-Ranked Recommendations",
    description: "Get exactly 3 actions ranked by impact. No overwhelming settings menus. Just the changes that matter most for your creative goal, in order.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
      </svg>
    )
  },
  {
    title: "Adaptive Coaching Depth",
    description: "New to exposure? Get step-by-step explanations. Experienced shooter? Get concise technical adjustments. The app learns your skill level and adjusts explanation depth accordingly.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    )
  },
  {
    title: "Skin Tone Protection",
    description: "Advanced detection ensures all subjects are properly exposed, regardless of skin tone. We flag when darker skin tones risk losing detail before it's too late.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },

  {
    title: "Shot Matching",
    description: "Switching angles? Changing locations? We remember your baseline and help you maintain consistency across your entire shoot.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  }
];

const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-shadow-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-scarlet font-semibold uppercase tracking-widest text-sm mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
            Built for How
            <br />
            <span className="text-alabaster/60">You Actually Shoot.</span>
          </h2>
          <p className="text-xl text-alabaster/60">
            Built by cinematographers who were tired of losing shots. Every feature exists because we needed it ourselves.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-shadow border border-white/5 hover:border-scarlet/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-scarlet/10 border border-scarlet/20 flex items-center justify-center text-scarlet mb-6 group-hover:bg-scarlet group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-alabaster/60 leading-relaxed">
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
