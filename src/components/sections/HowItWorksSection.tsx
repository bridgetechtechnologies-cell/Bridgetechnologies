'use client';

import { STEPS } from '@/lib/data';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function HowItWorksSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From enrolling to getting placed — our structured process makes your career
            transformation smooth and efficient.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-100" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {STEPS.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 150} direction="up">
                <div className="text-center relative">
                  {/* Step circle */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-extrabold text-xl mb-6 shadow-md">
                    {step.step}
                    {i < STEPS.length - 1 && (
                      <span className="hidden lg:block absolute -right-[calc(50%+2rem)] top-1/2 -translate-y-1/2 text-gray-300 text-2xl">
                        →
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

