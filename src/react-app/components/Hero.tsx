import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-neon-cyan/30 mb-8 animate-fade-in-up">
          <div className="w-2 h-2 rounded-full bg-neon-cyan animate-ping"></div>
          <span className="font-sans text-sm tracking-widest text-neon-cyan uppercase">Systems Operational</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tighter">
          ARCHITECTS OF <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple neon-text-cyan">
            AUTOMATION
          </span>
        </h1>

        <p className="font-sans text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Ophinis is your development partner for advanced system integration. 
          From SAP architectures to custom AI-driven node workflows, we build the engine of your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth'})}>
            Our Expertise <ArrowRight className="inline-block ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth'})}>
            Contact Us <Mail className="inline-block ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </section>
  );
};
