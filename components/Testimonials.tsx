
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Doc Director",
    quote: "I used to ruin shots moving between indoor and outdoor light. FrameCoach acts like a pro DoP in my pocket.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Marcus Chen",
    role: "Solo Creator",
    quote: "Finally, I can trust my exposure without staring at a histogram I don't fully understand. It's a game changer.",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-darkgrey/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Trusted by independent crews
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-10 rounded-3xl glass-card relative">
              <div className="absolute -top-4 left-10 text-6xl text-cyan/20 font-serif">“</div>
              <p className="text-lg md:text-xl text-white italic leading-relaxed mb-8 relative z-10">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-cyan text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
