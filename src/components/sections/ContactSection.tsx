'use client';

import { COMPANY } from '@/lib/data';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-14">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Contact Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have questions? Our team is here to help you choose the right course and start your
            tech career journey.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Email */}
          <AnimatedSection delay={0} direction="up">
            <div className="bg-gray-800 rounded-xl p-7 text-center border border-gray-700 hover:border-blue-600/50 transition-colors">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-400" size={22} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">Email Us</h3>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors break-all"
              >
                {COMPANY.email}
              </a>
            </div>
          </AnimatedSection>

          {/* Phone */}
          <AnimatedSection delay={100} direction="up">
            <div className="bg-gray-800 rounded-xl p-7 text-center border border-gray-700 hover:border-blue-600/50 transition-colors">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-400" size={22} />
              </div>
              <h3 className="text-sm font-bold text-white mb-3">Call Us</h3>
              <div className="space-y-1.5">
                {COMPANY.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:+91${phone.replace(/\s/g, '')}`}
                    className="block text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
                  >
                    +91 {phone}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Location */}
          <AnimatedSection delay={200} direction="up">
            <div className="bg-gray-800 rounded-xl p-7 text-center border border-gray-700 hover:border-blue-600/50 transition-colors">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-400" size={22} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">Location</h3>
              <p className="text-gray-400 text-sm">{COMPANY.address}</p>
              <p className="text-gray-500 text-xs mt-2">Mon–Sat, 9 AM – 7 PM IST</p>
            </div>
          </AnimatedSection>
        </div>

        {/* CTA Banner */}
        <AnimatedSection delay={300} direction="up" className="mt-12">
          <div className="bg-blue-600 rounded-2xl p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-extrabold text-white mb-3">
              Ready to Start Your Tech Career?
            </h3>
            <p className="text-blue-100 text-sm mb-6 max-w-lg mx-auto">
              Join thousands of students who have already made the leap. Enroll today and take the
              first step towards a future-proof career in technology.
            </p>
            <a
              href="#register"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Register for Free Counselling
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

