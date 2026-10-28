'use client';

import { useState } from 'react';
import { COMPANY, COURSES } from '@/lib/data';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CheckCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  qualification: string;
  message: string;
}

const initialData: FormData = {
  name: '',
  email: '',
  phone: '',
  course: '',
  qualification: '',
  message: '',
};

export default function RegistrationSection() {
  const [form, setForm] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.phone || !form.course) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error('Server error');
      setSubmitted(true);
      setForm(initialData);
    } catch {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <div>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
                  Get Started Today
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                  Enroll & Transform Your Career
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Take the first step towards a rewarding tech career. Fill in the form and our
                  counsellor will reach out within 24 hours to guide you through the enrollment
                  process.
                </p>
              </div>

              {/* Benefits list */}
              <ul className="space-y-3">
                {[
                  'Free one-on-one career counselling session',
                  'Personalised course recommendation',
                  'Flexible payment plans and EMI options',
                  'Early-bird discount for new enrollees',
                  'Demo class access before committing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Contact info */}
              <div className="border-t border-gray-100 pt-6 space-y-2">
                <p className="text-sm font-semibold text-gray-700">Prefer to call us directly?</p>
                {COMPANY.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:+91${phone.replace(/\s/g, '')}`}
                    className="block text-blue-600 font-semibold text-sm hover:underline"
                  >
                    📞 +91 {phone}
                  </a>
                ))}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="block text-blue-600 font-semibold text-sm hover:underline"
                >
                  ✉️ {COMPANY.email}
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection direction="right" delay={100}>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Registration Successful! 🎉
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Thank you for registering with Bridge Technology. Our counsellor will call you
                  within 24 hours to discuss your course enrollment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 text-sm font-semibold hover:underline"
                >
                  Submit another registration
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-8 space-y-5 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900">Student Registration Form</h3>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="10-digit mobile number"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Course Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                    required
                  >
                    <option value="">Select a course</option>
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Highest Qualification
                  </label>
                  <select
                    name="qualification"
                    value={form.qualification}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select qualification</option>
                    {[
                      '10th Standard',
                      '12th Standard',
                      'Diploma',
                      "Bachelor's Degree",
                      "Master's Degree",
                      'Other',
                    ].map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Message / Query (optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any specific queries or requirements..."
                    rows={3}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3.5 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Registration'
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  By submitting you agree to our{' '}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    Terms
                  </a>{' '}
                  and{' '}
                  <a href="/privacy-policy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

