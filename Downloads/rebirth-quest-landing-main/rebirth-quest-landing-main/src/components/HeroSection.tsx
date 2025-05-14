
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center min-h-screen flex items-center">
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="purple-gradient-text text-glow">Re-Birth</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Gamify Your Life with Re-Birth
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Turn real-life tasks into RPG-style quests. Inspired by anime like Solo Leveling. 
            Earn XP. Level up. Build habits.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="#waitlist">
              <button className="glow-button group">
                Get Started
                <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </button>
            </a>
          </div>
          
          <div className="flex justify-center gap-6 mt-8">
            <div className="flex flex-col items-center opacity-60 hover:opacity-80 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-10" />
              <span className="text-xs mt-1 text-white/60">Coming Soon</span>
            </div>
            <div className="flex flex-col items-center opacity-60 hover:opacity-80 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="h-10" />
              <span className="text-xs mt-1 text-white/60">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
