import type { Metadata } from 'next';
import { COMPANY } from '@/lib/data';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import CoursesSection from '@/components/sections/CoursesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import RegistrationSection from '@/components/sections/RegistrationSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: `${COMPANY.name} | ${COMPANY.tagline}`,
  description: COMPANY.description,
  keywords: [
    'Bridge Technology',
    'tech courses India',
    'full stack development course',
    'data science course Bengaluru',
    'learn coding India',
    'placement guarantee tech course',
    'IT training Bengaluru',
    'online tech education',
    'software development course',
    'React Node.js course',
  ],
  openGraph: {
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description: COMPANY.description,
    type: 'website',
    url: COMPANY.website,
    siteName: COMPANY.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description: COMPANY.description,
  },
  alternates: {
    canonical: COMPANY.website,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CoursesSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <RegistrationSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
