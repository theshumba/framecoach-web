import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "I used to spend the first 20 minutes of every shoot second-guessing my settings. Now I describe the look I want, and FrameCoach handles the technical stuff. Game changer.",
      name: "Marcus Chen",
      role: "Documentary Filmmaker",
      avatar: "MC",
    },
    {
      quote: "Shot my first short film with zero blown highlights. My colorist literally asked what changed. FrameCoach changed.",
      name: "Sarah Rodriguez",
      role: "Indie Director",
      avatar: "SR",
    },
    {
      quote: "The shot matching feature alone is worth the subscription. Maintaining consistency across a 3-day shoot used to be a nightmare. Not anymore.",
      name: "James Okonkwo",
      role: "Wedding Videographer",
      avatar: "JO",
    },
    {
      quote: "Finally, an app that speaks cinematographer. I say 'moody noir' and it actually knows what I mean. My clients are thrilled with the results.",
      name: "Elena Vasquez",
      role: "Commercial DP",
      avatar: "EV",
    },
    {
      quote: "Went from YouTube tutorials to confident shooting in a week. FrameCoach is like having a seasoned DP in your pocket.",
      name: "David Park",
      role: "Content Creator",
      avatar: "DP",
    },
    {
      quote: "The real-time analysis saved me on a sunset shoot. It caught the changing light before I did and adjusted recommendations on the fly.",
      name: "Amara Johnson",
      role: "Travel Filmmaker",
      avatar: "AJ",
    },
  ];

  // Split testimonials into two rows
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-[400px] p-6 rounded-2xl bg-shadow-light border border-white/10 mx-3">
      {/* Quote icon */}
      <div className="text-scarlet mb-4">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>

      {/* Quote */}
      <blockquote className="text-alabaster/90 leading-relaxed mb-6 text-sm">
        {testimonial.quote}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-scarlet to-scarlet-dark flex items-center justify-center text-white text-sm font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-semibold text-white text-sm">{testimonial.name}</div>
          <div className="text-xs text-alabaster/50">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-scarlet/30 bg-scarlet/10 mb-6">
          <svg className="w-4 h-4 text-scarlet" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-scarlet font-semibold text-sm">Trusted by 500+ Filmmakers</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
          What Creators Are Saying
        </h2>
      </div>

      {/* Marquee Row 1 - Left to Right */}
      <div className="relative mb-6">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-shadow to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-shadow to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee-left">
          {/* Original set */}
          {row1.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
          {/* Duplicate for seamless loop */}
          {row1.map((testimonial, idx) => (
            <TestimonialCard key={`dup-${idx}`} testimonial={testimonial} />
          ))}
          {/* Third set for wider screens */}
          {row1.map((testimonial, idx) => (
            <TestimonialCard key={`dup2-${idx}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right to Left */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-shadow to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-shadow to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee-right">
          {/* Original set */}
          {row2.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
          {/* Duplicate for seamless loop */}
          {row2.map((testimonial, idx) => (
            <TestimonialCard key={`dup-${idx}`} testimonial={testimonial} />
          ))}
          {/* Third set for wider screens */}
          {row2.map((testimonial, idx) => (
            <TestimonialCard key={`dup2-${idx}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
