
import React from 'react';

const SocialProof: React.FC = () => {
  const partners = ["RED", "ARRI", "SONY VENICE", "BLACKMAGIC", "PANAVISION"];
  
  return (
    <section className="py-12 border-y border-white/5 bg-charcoal/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-lightgrey mb-10 uppercase tracking-widest">
          Compatible with modern cinema tools
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((name) => (
            <span key={name} className="text-2xl md:text-3xl font-display font-extrabold text-white">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
