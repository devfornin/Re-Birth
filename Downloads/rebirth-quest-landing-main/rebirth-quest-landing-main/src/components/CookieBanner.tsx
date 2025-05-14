
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if the user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
    toast({
      title: "Cookies accepted",
      description: "Thank you for accepting our cookies."
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-dark/95 backdrop-blur-md z-50 border-t border-white/10 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm">
            We use cookies to improve your experience and track basic analytics. By continuing to browse, you agree to our use of cookies.
            <Link to="/cookie-policy" className="ml-1 text-brand-purple hover:underline">
              Learn more in our Cookie Policy
            </Link>
          </p>
          <div className="flex gap-3">
            <Link to="/cookie-policy">
              <Button variant="outline">Learn More</Button>
            </Link>
            <Button onClick={acceptCookies} className="glow-button">Accept</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
