
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto glass-card p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-white/60 mb-6">Effective Date: May 2, 2025</p>
          
          <div className="space-y-6 text-white/80">
            <p>
              By accessing or using Re-Birth, you agree to be bound by these Terms & Conditions. Use of the app is at your own risk. You must be 13 years or older to use Re-Birth. All content, features, and services provided are the intellectual property of Re-Birth unless otherwise stated.
            </p>
            
            <p>
              Users may not copy, distribute, or republish any part of the service without prior consent. Re-Birth reserves the right to change these terms at any time with notice via this website.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using Re-Birth in any capacity, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use the application.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">2. User Eligibility</h2>
            <p>
              You must be at least 13 years of age to use Re-Birth. If you are under 18, you represent that you have obtained your parent or guardian's consent to use the application and agree to these terms.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">3. User Accounts</h2>
            <p>
              When creating an account, you agree to provide accurate and complete information. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
            <p>
              All content, features, and functionality of Re-Birth, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are owned by Re-Birth or its licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">5. Contact Information</h2>
            <p>
              If you have any questions about these terms, please contact us at support@rebirth-app.com.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
