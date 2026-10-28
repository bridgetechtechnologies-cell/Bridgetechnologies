'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/data';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActiveLink(href.replace('#', ''));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="#home" onClick={() => setActiveLink('home')}>
            <div className="flex items-center gap-2.5">
              {/* Logo mark */}
              <div className="w-10 h-10 flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-sm">
                <Image
                  src="/logo.jpeg"
                  alt="Bridge Technology"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className={`font-extrabold text-lg tracking-tight ${
                    scrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  Bridge
                </span>
                <span
                  className={`font-medium text-xs tracking-widest uppercase ${
                    scrolled ? 'text-blue-600' : 'text-blue-300'
                  }`}
                >
                  Technology
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeLink === link.href.replace('#', '')
                    ? scrolled
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-white bg-white/10'
                    : scrolled
                    ? 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#register"
              className="ml-3 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Enroll Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block px-4 py-2.5 text-gray-700 font-medium rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#register"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 px-4 py-2.5 bg-blue-600 text-white font-semibold text-center rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
