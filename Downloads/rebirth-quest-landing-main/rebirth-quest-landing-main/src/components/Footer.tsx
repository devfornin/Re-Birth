
import React from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-brand-black pt-16 pb-6 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 purple-gradient-text">Re-Birth</h3>
            <p className="text-white/60">
              Transform your daily habits into an epic RPG adventure.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <li><a href="#features" className="text-white/60 hover:text-white transition-colors">Features</a></li>
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="#waitlist" className="text-white/60 hover:text-white transition-colors">Join Waitlist</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-white/60 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          
           
             
          
        </div>
        
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {currentYear} Re-Birth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
