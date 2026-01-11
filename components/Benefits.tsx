import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Nail Exposure Every Time',
      description: 'Our AI monitors your scene in real-time and tells you exactly when highlights are about to clip—before you hit record.',
      result: '94% reduction in blown highlights',
    },
    {
      title: 'Skin Tones That Pop',
      description: 'Mixed lighting used to mean orange faces or green shadows. FrameCoach auto-adjusts white balance bias to keep skin looking natural.',
      result: 'Broadcast-quality color in any light',
    },
    {
      title: 'Match Shots Across Takes',
      description: 'Consistency is what separates pros from amateurs. We track your exposure and color across every take so your edit flows seamlessly.',
      result: '3x faster color grading in post',
    },
    {
      title: 'Clean Shadows, Low Noise',
      description: 'Before cranking ISO, we suggest aperture and shutter tweaks. Mechanical fixes first, digital gain last.',
      result: 'Usable footage at 2 stops higher',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-shadow-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-scarlet font-semibold uppercase tracking-widest text-sm mb-4">
            Real Results
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            Stop thinking in settings.
            <br />
            <span className="text-alabaster/60">Start thinking in outcomes.</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-shadow border border-white/5 hover:border-scarlet/30 transition-all duration-300"
            >
              {/* Number indicator */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-scarlet/10 border border-scarlet/20 flex items-center justify-center text-scarlet font-display font-bold text-xl group-hover:bg-scarlet group-hover:text-white transition-all">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-alabaster/60 leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-scarlet font-semibold text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {benefit.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
