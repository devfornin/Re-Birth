
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import VideoSection from '@/components/VideoSection';
import BenefitsSection from '@/components/BenefitsSection';
import WaitlistSection from '@/components/WaitlistSection';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <VideoSection />
      <BenefitsSection />
      <WaitlistSection />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
