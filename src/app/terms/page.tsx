import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Terms of Service | ${COMPANY.name}`,
  description: `Terms of Service for ${COMPANY.name}`,
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link href="/" className="text-blue-600 text-sm font-medium hover:underline mb-8 block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="space-y-6 text-sm leading-relaxed text-gray-700">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">1. Acceptance of Terms</h2>
            <p>
              By enrolling in any course offered by Bridge Technology, you agree to be bound by
              these Terms of Service. If you do not agree to these terms, please do not use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">2. Course Enrollment</h2>
            <p>
              Upon successful enrollment and payment, you will receive access to the course
              materials. Course access is for personal, non-commercial use only. You may not share
              your credentials or course materials with others.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">3. Refund Policy</h2>
            <p>
              Refunds are available within 7 days of enrollment if you have not accessed more than
              20% of the course content. Please contact our support team to initiate a refund
              request.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">4. Certification</h2>
            <p>
              Certificates are issued upon successful completion of all course requirements
              including assignments, projects, and assessments as specified in each course.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">5. Contact</h2>
            <p>
              For queries regarding these terms, contact us at{' '}
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

