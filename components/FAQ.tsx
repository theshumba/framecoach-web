import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What cameras does FrameCoach support?",
      answer: "We support all major cinema and mirrorless cameras including RED, ARRI, Sony, Blackmagic, Canon, Panasonic, and Fujifilm. If your camera outputs a video signal, we can analyze it.",
    },
    {
      question: "Do I need an internet connection on set?",
      answer: "Nope. FrameCoach works entirely offline once installed. Your footage and settings never leave your device. We take privacy seriously—your creative work is yours.",
    },
    {
      question: "Will this replace my DP or camera assistant?",
      answer: "Absolutely not. FrameCoach is a tool, not a replacement for human expertise. Think of it as a really smart second opinion that never gets tired and never forgets the settings from your last take.",
    },
    {
      question: "How accurate are the AI recommendations?",
      answer: "Our recommendations are based on analysis of over 2 million professional shots. In blind tests, colorists couldn't distinguish between footage shot with FrameCoach guidance and footage from seasoned DPs.",
    },
    {
      question: "Can I try it before committing?",
      answer: "Yes! Our Hobbyist tier is free forever with basic features. Creator and Pro plans come with a 14-day free trial and 30-day money-back guarantee. Zero risk.",
    },
    {
      question: "What if I already know my camera inside out?",
      answer: "Great—you'll get even more value. FrameCoach isn't training wheels. It's a co-pilot. Even pros use us for the shot-matching and consistency features that save hours in post.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Header */}
          <div>
            <p className="text-scarlet font-semibold uppercase tracking-widest text-sm mb-4">
              Frequent Questions
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
              Got Questions?
              <br />
              <span className="text-alabaster/60">We've Got Answers.</span>
            </h2>
            <p className="text-alabaster/60 mb-8">
              Can't find what you're looking for? Hit us up at{' '}
              <a href="mailto:support@framecoach.ai" className="text-scarlet hover:underline">
                support@framecoach.ai
              </a>
            </p>
          </div>

          {/* Right: FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-shadow-light flex items-center justify-center transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4 text-alabaster" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-alabaster/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
