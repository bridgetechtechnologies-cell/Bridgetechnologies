'use client';

import { TESTIMONIALS } from '@/lib/data';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Student Success Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Hear From Our Graduates
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real stories from real students who transformed their careers with Bridge Technology.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 80} direction="up">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 h-full">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">
                      {t.role} — {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

