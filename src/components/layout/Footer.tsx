'use client';

import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, NAV_LINKS, COURSES } from '@/lib/data';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const categories = [...new Set(COURSES.map((c) => c.category))].slice(0, 5);

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 flex-shrink-0 overflow-hidden rounded-lg bg-white">
                <Image
                  src="/logo.jpeg"
                  alt="Bridge Technology"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-white text-base leading-tight">Bridge Technology</p>
                <p className="text-xs text-blue-400 tracking-wide">{COMPANY.tagline}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering the next generation of tech professionals with industry-ready skills and
              real-world experience since {COMPANY.founded}.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href={COMPANY.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors">
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3.3 5.8H1v8h2.3v-8ZM2.15 1.8a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7ZM14.8 9.2c0-2.4-1.3-3.5-3-3.5a2.6 2.6 0 0 0-2.4 1.3V5.8H7.1v8h2.3v-4c0-1.1.2-2.2 1.6-2.2s1.5 1.3 1.5 2.3v3.9h2.3V9.2Z" />
                </svg>
              </a>
              <a href={COMPANY.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition-colors">
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href={COMPANY.socialLinks.youtube} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors">
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                </svg>
              </a>
              <a href={COMPANY.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-500 transition-colors">
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.4 6.9L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#register" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Our Courses</h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link href="#courses" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#courses" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  View All Courses →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
              {COMPANY.phones.map((phone) => (
                <li key={phone} className="flex items-start gap-3">
                  <Phone size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <a
                    href={`tel:+91${phone.replace(/\s/g, '')}`}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    +91 {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Bridge Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
