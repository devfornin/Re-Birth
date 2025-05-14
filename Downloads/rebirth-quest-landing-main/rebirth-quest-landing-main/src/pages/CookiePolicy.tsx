
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-brand-black">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto glass-card p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-white/60 mb-6">Effective Date: May 2, 2025</p>
          
          <div className="space-y-6 text-white/80">
            <p>
              This Cookie Policy explains how Re-Birth uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">What are cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Why do we use cookies?</h2>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for analytics and other purposes.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">How can you control cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Contact Information</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at cookies@rebirth-app.com.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
