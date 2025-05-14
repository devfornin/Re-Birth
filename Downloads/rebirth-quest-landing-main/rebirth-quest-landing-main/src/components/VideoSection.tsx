
import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section id="video" className="section-padding bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Step Into the World of Re-Birth</h2>
          <p className="text-white/70 max-w-2xl mx-auto">Watch how Re-Birth transforms your to-do list into a hero's journey</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 relative rounded-xl overflow-hidden glass-card">
            <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/50">
              <button className="p-4 rounded-full bg-brand-purple/90 text-white hover:bg-brand-purple transition-colors">
                <Play className="h-10 w-10" />
              </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1280" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-center text-white/60 italic">*Teaser coming soon - Join waitlist for early access to videos</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
