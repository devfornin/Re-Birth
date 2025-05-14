
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Step Into the World of <span className="purple-gradient-text text-glow">Re-Birth</span>
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              Re-Birth isn't just a productivity app — it's a portal into a gamified universe where every step you take in real life powers up your in-game self. Inspired by iconic anime like Solo Leveling, Re-Birth transforms your daily goals into quests, your habits into heroic skills, and your growth into a personal saga.
            </p>
            <p className="text-white/80 mb-6 leading-relaxed">
              Whether you're conquering a to-do list, leveling up your fitness, or forging new routines, Re-Birth turns your journey into a narrative-driven RPG. With immersive storytelling, XP systems, and habit tracking wrapped in a fantasy world, you're no longer just managing life — you're mastering it.
            </p>
            <a href="#features">
              <button className="inline-flex items-center text-brand-purple hover:text-brand-purple-light transition-colors font-medium">
                Explore Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </a>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-2xl blur opacity-75 animate-pulse-glow"></div>
              <div className="glass-card p-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1280" 
                  alt="App Dashboard Mockup" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
