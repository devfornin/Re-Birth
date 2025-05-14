
import React from 'react';
import { Award, BookOpen, Backpack, UserRound } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-12 w-12 text-brand-purple" />,
    title: "Earn XP & Level Up",
    description: "Every task completed brings you closer to your next level. Watch your character grow stronger as you build better habits."
  },
  {
    icon: <BookOpen className="h-12 w-12 text-brand-purple" />,
    title: "Build Habits Through Quests",
    description: "Transform mundane tasks into exciting quests with storylines and rewards. Stay motivated with narrative-driven goals."
  },
  {
    icon: <Backpack className="h-12 w-12 text-brand-purple" />,
    title: "Customizable Avatar & Inventory",
    description: "Personalize your character and collect unique items as you progress through your journey of self-improvement."
  },
  {
    icon: <UserRound className="h-12 w-12 text-brand-purple" />,
    title: "Narrative-Driven Progression",
    description: "Immerse yourself in an evolving story where your real-life achievements unlock new chapters and character abilities."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-brand-dark to-brand-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-white/70 max-w-2xl mx-auto">Discover how Re-Birth transforms your daily routine into an epic adventure</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="mb-5 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
              <p className="text-white/70 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
