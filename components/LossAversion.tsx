import React from 'react';

const LossAversion: React.FC = () => {
  const painPoints = [
    {
      stat: '73%',
      description: 'of indie footage is unusable due to technical errors',
    },
    {
      stat: '4.2hrs',
      description: 'average time wasted per shoot on settings trial-and-error',
    },
    {
      stat: '$2,400',
      description: 'average cost of a reshoot you could have avoided',
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            <span className="text-white">Your Vision Deserves</span>
            <br />
            <span className="text-scarlet text-glow">Better Than Guesswork</span>
          </h2>
          <p className="text-xl text-alabaster/60 leading-relaxed">
            Every time you fumble with settings, you're not just losing footage.
            You're losing the moment. The light. The performance. <span className="text-white">Gone forever.</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="text-center p-8 rounded-2xl bg-shadow-light/50 border border-white/5 hover:border-scarlet/20 transition-colors"
            >
              <div className="text-5xl md:text-6xl font-display font-extrabold text-scarlet mb-4">
                {point.stat}
              </div>
              <p className="text-alabaster/70 text-lg">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-2xl md:text-3xl font-display font-semibold text-white mb-2">
            What if you never lost another shot?
          </p>
          <p className="text-alabaster/50">
            That's not a dream. That's FrameCoach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LossAversion;
