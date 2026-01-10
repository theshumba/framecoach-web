
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="accent-gradient rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-charcoal opacity-10 group-hover:opacity-5 transition-opacity"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-charcoal tracking-tight">
              Stop fixing it in post.
            </h2>
            <p className="text-xl text-charcoal/80 font-medium max-w-xl mx-auto">
              Get the shot right, right now. Join the decision layer for the next generation of cinema.
            </p>
            <div className="pt-4">
              <button className="bg-charcoal text-white font-extrabold py-5 px-12 rounded-2xl text-lg hover:scale-105 transition-transform active:scale-95 shadow-xl">
                Request Beta Access
              </button>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
