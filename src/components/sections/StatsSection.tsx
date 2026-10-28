'use client';

import { STATS } from '@/lib/data';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useEffect, useRef, useState } from 'react';

function CountUpNumber({ target, suffix = '' }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useCounterInView();

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function useCounterInView() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

export default function StatsSection() {
  return (
    <section className="bg-blue-600 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => {
            const numericPart = parseInt(stat.value.replace(/\D/g, ''), 10);
            const suffix = stat.value.replace(/[0-9]/g, '');
            return (
              <AnimatedSection key={stat.label} delay={i * 100} direction="up">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-extrabold text-white">
                    <CountUpNumber target={numericPart} suffix={suffix} />
                  </p>
                  <p className="text-blue-100 text-sm font-medium mt-2">{stat.label}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

