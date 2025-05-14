
import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-brand-black to-brand-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Re-Birth?</h2>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-brand-purple/20 p-2 rounded-md mr-4">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Make progress feel powerful</h3>
                  <p className="text-white/70">Experience tangible growth as your character evolves with each completed task</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-brand-purple/20 p-2 rounded-md mr-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Build habits that stick</h3>
                  <p className="text-white/70">Our reward system keeps you motivated long after traditional methods fail</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-brand-purple/20 p-2 rounded-md mr-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Be the main character of your life</h3>
                  <p className="text-white/70">Immerse yourself in a heroic narrative where you're the protagonist</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-brand-purple/20 p-2 rounded-md mr-4">
                  <span className="text-2xl">🎮</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Designed for anime & RPG lovers</h3>
                  <p className="text-white/70">Created by fans who understand what makes games and anime truly engaging</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="glass-card p-8 animate-float">
            <div className="text-center">
               
              
              <blockquote className="text-xl italic font-medium text-white/80 mb-6">
                "Re-Birth transformed how I approach my daily tasks. Now I'm excited to complete my to-do list because it feels like I'm leveling up in real life!"
              </blockquote>
              
              <div>
                <div className="font-bold">My Self (VARUN)</div>
                <div className="text-white/60 text-sm">Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
