'use client';

import { FEATURES } from '@/lib/data';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We combine the best instructors, curriculum, and support system to ensure your learning
            journey leads to a rewarding tech career.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {FEATURES.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 80} direction="up">
              <div className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Hiring Partners Banner */}
        <AnimatedSection delay={200} direction="up" className="mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-extrabold text-white mb-3">
              Trusted by 200+ Hiring Partners
            </h3>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto text-sm">
              Our graduates work at India's leading IT companies, startups, and MNCs. Your career
              is our success.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['TCS', 'Infosys', 'Wipro', 'HCL', 'Cognizant', 'Accenture', 'Tech Mahindra', 'Capgemini'].map(
                (company) => (
                  <span
                    key={company}
                    className="bg-white/10 text-white text-sm font-semibold px-5 py-2 rounded-full border border-white/20"
                  >
                    {company}
                  </span>
                )
              )}
            </div>
            <a
              href="#register"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Start Your Career Journey
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

