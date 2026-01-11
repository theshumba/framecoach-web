import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: 'Hobbyist',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'For creators just getting started',
      features: [
        'Basic scene analysis',
        '10 AI recommendations/month',
        'Single camera support',
        'Community support',
      ],
      cta: 'Start Free',
      featured: false,
    },
    {
      name: 'Creator',
      monthlyPrice: 29,
      yearlyPrice: 23,
      description: 'For serious indie filmmakers',
      features: [
        'Advanced AI scene analysis',
        'Unlimited recommendations',
        'Multi-camera support',
        'Shot matching & consistency',
        'Priority email support',
        'Export settings presets',
      ],
      cta: 'Start 14-Day Trial',
      featured: true,
    },
    {
      name: 'Pro',
      monthlyPrice: 79,
      yearlyPrice: 63,
      description: 'For production teams',
      features: [
        'Everything in Creator',
        'Team collaboration (5 seats)',
        'Custom LUT integration',
        'API access',
        'Dedicated account manager',
        'On-set support calls',
      ],
      cta: 'Contact Sales',
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 rounded-full border border-scarlet/30 bg-scarlet/10 mb-6">
            <p className="text-scarlet font-semibold uppercase tracking-widest text-sm">
              Pricing
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
            Choose Your Plan
          </h2>
          <p className="text-lg text-alabaster/60">
            No hidden fees. No long-term contracts. Just tools that help you shoot better footage.
          </p>
        </div>

        {/* Monthly/Yearly Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <div className="inline-flex items-center p-1.5 rounded-full bg-shadow-light border border-white/10">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isYearly
                  ? 'bg-scarlet text-white'
                  : 'text-alabaster/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                isYearly
                  ? 'bg-scarlet text-white'
                  : 'text-alabaster/60 hover:text-white'
              }`}
            >
              Yearly
              <span className={`bg-white/20 text-white text-xs px-2 py-0.5 rounded-full transition-all duration-300 ${
                isYearly ? 'opacity-100 scale-100' : 'opacity-0 scale-75 hidden'
              }`}>
                Save 20%
              </span>
            </button>
          </div>
          {/* Handwritten annotation - only shows when yearly is selected */}
          <div className={`hidden md:flex items-center text-scarlet transition-all duration-500 ${
            isYearly
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-4 pointer-events-none'
          }`}>
            <svg className="w-8 h-8 -mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L3 13M3 13L7 9M3 13H16C18.7614 13 21 10.7614 21 8V7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-lg italic" style={{ fontFamily: 'cursive' }}>2 months free</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const monthlyPrice = plan.monthlyPrice;
            const isFree = price === 0;

            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-scarlet/10 group ${
                  plan.featured
                    ? 'bg-shadow-light border-2 border-scarlet'
                    : 'bg-shadow-light/50 border border-white/10 hover:border-white/20'
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Glow effect on hover for featured card */}
                {plan.featured && (
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-scarlet/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-display font-bold text-white">{plan.name}</h3>
                    {plan.featured && (
                      <span className="bg-scarlet/20 text-scarlet text-xs font-semibold px-3 py-1 rounded-full border border-scarlet/30 animate-pulse">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-alabaster/50 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6 h-20">
                  {isFree ? (
                    <span className="text-5xl font-display font-extrabold text-white">Free</span>
                  ) : (
                    <div className="relative">
                      {/* Yearly price */}
                      <div className={`transition-all duration-500 ${
                        isYearly
                          ? 'opacity-100 transform translate-y-0'
                          : 'opacity-0 transform -translate-y-4 absolute inset-0'
                      }`}>
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-display font-extrabold text-white">${plan.yearlyPrice}</span>
                          <span className="text-alabaster/50">/ month</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-alabaster/40 line-through">${monthlyPrice}/mo</span>
                          <span className="text-xs text-scarlet font-semibold">Save ${(monthlyPrice - plan.yearlyPrice) * 12}/yr</span>
                        </div>
                      </div>
                      {/* Monthly price */}
                      <div className={`transition-all duration-500 ${
                        !isYearly
                          ? 'opacity-100 transform translate-y-0'
                          : 'opacity-0 transform translate-y-4 absolute inset-0'
                      }`}>
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-display font-extrabold text-white">${monthlyPrice}</span>
                          <span className="text-alabaster/50">/ month</span>
                        </div>
                        <p className="text-sm text-alabaster/40 mt-1">Billed monthly</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 active:scale-[0.98] mb-8 ${
                    plan.featured
                      ? 'bg-scarlet hover:bg-scarlet-dark text-white hover:shadow-lg hover:shadow-scarlet/30'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-3 text-alabaster/80 text-sm group-hover:text-alabaster transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 text-scarlet flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-alabaster/40 text-sm mt-12">
          All plans include a 30-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
