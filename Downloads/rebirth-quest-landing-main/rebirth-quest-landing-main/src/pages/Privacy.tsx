
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto glass-card p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-white/60 mb-6">Effective Date: May 2, 2025</p>
          
          <div className="space-y-6 text-white/80">
            <h2 className="text-xl font-bold mb-4">What We Collect</h2>
            <p>
              We collect email addresses via our waitlist signup form. We do not collect personal information unless explicitly submitted by the user.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">How We Use It</h2>
            <p>
              Emails are used to provide updates about the Re-Birth app, beta invites, and promotional content. We will never sell or share your data with third parties.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Cookies & Analytics</h2>
            <p>
              This site uses cookies to improve performance and user experience. You can disable cookies via your browser settings.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">User Rights</h2>
            <p>
              You may request to delete your data or unsubscribe at any time via the unsubscribe link in our emails or by contacting us.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Contact Information</h2>
            <p>
              For questions regarding this privacy policy, please contact us at privacy@rebirth-app.com.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
