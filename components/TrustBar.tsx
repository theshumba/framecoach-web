import React from 'react';

const TrustBar: React.FC = () => {
  const brands = ['SONY', 'Canon'];

  return (
    <section className="py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-alabaster/40 uppercase tracking-widest mb-8">
          Compatible with the cameras you already own
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-alabaster/30 hover:text-alabaster/60 transition-colors font-display font-bold text-xl tracking-wide"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
