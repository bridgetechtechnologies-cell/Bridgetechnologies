'use client';

import { useState } from 'react';
import { COURSES, Course } from '@/lib/data';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Clock, BarChart2, ChevronRight } from 'lucide-react';

const LEVEL_COLORS: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
};

const BADGE_COLORS: Record<string, string> = {
  'Most Popular': 'bg-blue-600 text-white',
  Trending: 'bg-purple-600 text-white',
  New: 'bg-emerald-600 text-white',
  'High Demand': 'bg-orange-600 text-white',
  Popular: 'bg-blue-500 text-white',
  'Best for Beginners': 'bg-teal-600 text-white',
};

function CourseCard({ course, delay }: { course: Course; delay: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection delay={delay} direction="up">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
        {/* Card Header */}
        <div className="p-6 flex-1">
          {/* Category + Badge */}
          <div className="flex items-start justify-between gap-2 mb-4">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide bg-blue-50 px-2.5 py-1 rounded-md">
              {course.category}
            </span>
            {course.badge && (
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                  BADGE_COLORS[course.badge] || 'bg-gray-700 text-white'
                }`}
              >
                {course.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{course.title}</h3>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-4">{course.description}</p>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
              <Clock size={13} />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BarChart2 size={13} className="text-gray-500" />
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${LEVEL_COLORS[course.level]}`}>
                {course.level}
              </span>
            </div>
          </div>

          {/* Modules */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors mb-2"
          >
            <ChevronRight
              size={14}
              className={`transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}
            />
            {expanded ? 'Hide' : 'View'} Curriculum
          </button>

          {expanded && (
            <ul className="space-y-1.5 mt-2">
              {course.modules.map((mod) => (
                <li key={mod} className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                  {mod}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA */}
        <div className="px-6 pb-6">
          <a
            href="#register"
            className="block text-center bg-blue-600 text-white font-semibold text-sm py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Enroll in This Course
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function CoursesSection() {
  const categories = ['All', ...new Set(COURSES.map((c) => c.category))];
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? COURSES : COURSES.filter((c) => c.category === active);

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Courses
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Learn Skills That Get You Hired
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose from 30+ industry-aligned courses designed by experts. Build real projects and
            earn certificates recognised by top companies.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  active === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course, i) => (
            <CourseCard key={course.id} course={course} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

