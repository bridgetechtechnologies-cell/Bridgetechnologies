import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY.name}`,
  description: `Privacy Policy for ${COMPANY.name}`,
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link href="/" className="text-blue-600 text-sm font-medium hover:underline mb-8 block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none space-y-6 text-sm leading-relaxed text-gray-700">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">1. Information We Collect</h2>
            <p>
              When you register or enroll in a course at Bridge Technology, we collect personal
              information including your name, email address, phone number, and educational
              qualification. This information is used solely to process your enrollment and provide
              you with our educational services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">2. How We Use Your Information</h2>
            <p>
              Your information is used to: process course enrollments, provide placement assistance,
              send course-related updates, and improve our services. We do not sell or rent your
              personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">3. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal
              data against unauthorised access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">4. Contact</h2>
            <p>
              For privacy-related queries, contact us at{' '}
              <a href={`mailto:${COMPANY.email}`} className="text-blue-600 hover:underline">
                {COMPANY.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

