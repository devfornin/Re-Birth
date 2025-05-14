
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold purple-gradient-text">Re-Birth</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#video" className="text-white/80 hover:text-white transition-colors">Video</a>
          <a href="#waitlist" className="text-white/80 hover:text-white transition-colors">Join Waitlist</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#features" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#video" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Video</a>
            <a href="#waitlist" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Join Waitlist</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
