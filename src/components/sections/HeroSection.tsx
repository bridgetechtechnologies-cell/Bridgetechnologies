'use client';

import Link from 'next/link';
import { ChevronRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Subtle decorative shapes — no glow, no glassmorphism */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-800/10 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              India's Fastest Growing Tech Education Platform
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Bridge the Gap Between
              <span className="block text-blue-400 mt-2">Learning & Industry</span>
            </h1>

            {/* Sub headline */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Master in-demand tech skills with hands-on projects, expert mentors, and dedicated
              placement support. Join 5,000+ students who have already transformed their careers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Explore Courses
                <ChevronRight size={18} />
              </a>
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:border-white/60 hover:bg-white/5 transition-colors duration-200"
              >
                <Play size={16} className="fill-white" />
                Free Demo Class
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-6 pt-2">
              {['5000+ Students', '30+ Courses', '95% Placement', '200+ Hiring Partners'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right — floating card UI */}
          <div className="relative hidden lg:flex justify-center">
            <div className="relative w-full max-w-md space-y-4">
              {/* Main card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                      Featured Course
                    </p>
                    <h3 className="text-lg font-bold text-gray-900">Full Stack Web Development</h3>
                    <p className="text-sm text-gray-500 mt-1">6 Months · Beginner Friendly</p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {['React', 'Node.js', 'MongoDB'].map((tech) => (
                    <div key={tech} className="bg-gray-50 rounded-lg p-2 text-center">
                      <p className="text-xs font-semibold text-gray-700">{tech}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {['PS', 'RV', 'AK', 'KM'].map((initials) => (
                      <div
                        key={initials}
                        className="w-7 h-7 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      >
                        {initials[0]}
                      </div>
                    ))}
                    <div className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-600 text-xs font-semibold">
                      +
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">1,200+ enrolled</p>
                </div>

                <a
                  href="#register"
                  className="mt-4 block text-center bg-blue-600 text-white font-semibold text-sm py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Enroll Now
                </a>
              </div>

              {/* Stats floating card */}
              <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Placement Guaranteed</p>
                  <p className="text-xs text-gray-500">95% students placed in 3 months</p>
                </div>
              </div>

              {/* Enrollment alert */}
              <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm">
                  🔥
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Limited Seats Available</p>
                  <p className="text-xs text-gray-500">Next batch starts in 7 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-white/20 rounded-full overflow-hidden">
          <div className="w-full h-1/2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

