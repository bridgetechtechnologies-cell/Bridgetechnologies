'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/data';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Everything you need to know about learning with Bridge Technology.
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <AnimatedSection key={faq.q} delay={i * 40} direction="up">
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left focus:outline-none group"
                >
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                      open === i ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300} className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            Still have questions?{' '}
            <a href="#contact" className="text-blue-600 font-semibold hover:underline">
              Contact our team
            </a>{' '}
            — we reply within 24 hours.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

