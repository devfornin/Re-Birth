import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const SERVICE_ID = 'service_1pe48kf';
const TEMPLATE_ID = 'template_2gzwvcs';
const PUBLIC_KEY = '9ofqEd0c1eQx5ZSjC';

const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showThankYou, setShowThankYou] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: name || 'Adventurer', email },
        PUBLIC_KEY
      );

      setShowThankYou(true);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. Check your email for confirmation.",
      });

      setEmail('');
      setName('');
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Submission error",
        description: "There was a problem adding you to the waitlist. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showThankYou) {
    return (
      <section id="waitlist" className="section-padding bg-brand-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center glass-card p-10">
            <div className="bg-brand-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✉️</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">You've Been Chosen!</h2>
            <p className="text-white/80 mb-6">
              Your Re-Birth journey begins now. We've sent a welcome email to your inbox with a special link to complete your registration.
            </p>

            <div className="mb-8 p-4 border border-brand-purple/30 rounded-lg bg-brand-purple/10">
              <p className="text-sm text-white/70">
                <strong>Important:</strong> Please check your email (including spam/promotions folders) for a message from{" "}
                <span className="text-brand-cyan">2300090189csithelge@gmail.com</span> with your Google Form link.
              </p>
            </div>

            <Button onClick={() => setShowThankYou(false)} className="glow-button">
              Return to Waitlist
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="section-padding bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be First to Enter the Dungeon</h2>
          <p className="text-white/70 mb-8">
            Join our waitlist to get early access and exclusive in-game rewards
          </p>

          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/10 border-white/20"
              />
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 border-white/20"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full glow-button"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
            <p className="mt-4 text-sm text-white/60">
              After signing up, you'll receive an email with a Google Form to complete your registration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
