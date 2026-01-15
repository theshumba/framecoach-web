import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What cameras does FrameCoach support?",
      answer: "We're currently developing camera profiles starting with Sony and Canon support. More cameras will be added based on beta user feedback.",
    },
    {
      question: "What makes FrameCoach different from tutorials?",
      answer: "Tutorials teach general principles. FrameCoach provides camera-aware decisions in the moment, based on your specific intent, constraints, and gear.",
    },
    {
      question: "Will this work for beginners and advanced users?",
      answer: "Yes. Beginners get structured guidance and rationale that builds understanding. Advanced users get faster iteration and continuity support that saves time.",
    },
    {
      question: "Does it replace a DP or cinematographer?",
      answer: "No. FrameCoach supports better decisions and faster execution. It raises the floor for small crews and speeds up workflow for experienced teams, but craft and creative judgement remain yours.",
    },
    {
      question: "Do I need special equipment?",
      answer: "No. FrameCoach is designed to work with the gear you already have, including minimal lighting setups. It helps you maximise what you own.",
    },
    {
      question: "Do I need an internet connection on set?",
      answer: "Yes, for now. FrameCoach currently requires an internet connection to process your scene. As AI capabilities advance, we plan to bring processing fully on-device so you can work offline.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Massive FAQ Title */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-9xl md:text-10xl lg:text-12xl font-display font-bold text-white leading-none mb-6">
              FAQ
            </h2>
            <p className="text-alabaster/60 text-base md:text-lg max-w-md">
              Can't find what you're looking for? Hit us up at{' '}
              <a href="mailto:contact@framecoach.io" className="text-scarlet hover:underline">
                contact@framecoach.io
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
