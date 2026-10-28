'use client';

import { useInView } from '@/hooks/useInView';
import React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({ threshold: 0.08 });

  const directionMap = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: '-translate-x-10',
    right: 'translate-x-10',
    none: '',
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${
        inView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionMap[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

