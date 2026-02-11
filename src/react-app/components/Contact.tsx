import React, { useState } from 'react';
import { Mail, MessageSquare, Terminal, Send } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    type: 'Automation',
    message: ''
  });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SENT'>('IDLE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');
    // Simulate network request
    setTimeout(() => {
      setStatus('SENT');
      setFormState({ name: '', email: '', type: 'Automation', message: '' });
      setTimeout(() => setStatus('IDLE'), 3000);
    }, 2000);
  };

  return (
    <section id="contact-section" className="py-24 bg-dark-bg relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            INITIATE <span className="text-neon-cyan">COMMUNICATION</span>
          </h2>
          <p className="text-gray-400 font-sans">
            Ready to automate your future? Reach out to our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Info Columns */}
          <div className="space-y-6">
            <Card glowColor="cyan" className="flex flex-col items-center text-center py-8">
              <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="font-display text-xl text-white mb-1">New Projects</h3>
              <p className="text-gray-500 text-sm mb-4 px-4">
                For automation inquiries, banking integration, and development quotes.
              </p>
              <a href="mailto:contact@ophinis.com" className="w-full max-w-[200px]">
                <Button variant="outline" className="w-full text-sm py-2">
                  contact@ophinis.com
                </Button>
              </a>
            </Card>

            <Card glowColor="purple" className="flex flex-col items-center text-center py-8">
              <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-neon-purple" />
              </div>
              <h3 className="font-display text-xl text-white mb-1">Technical Support</h3>
              <p className="text-gray-500 text-sm mb-4 px-4">
                Existing clients, hosting support, and system maintenance.
              </p>
              <a href="mailto:support@ophinis.com" className="w-full max-w-[200px]">
                <Button variant="outline" className="w-full text-sm py-2 !border-neon-purple !text-neon-purple hover:!bg-neon-purple/10">
                  support@ophinis.com
                </Button>
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="h-full">
            <Card glowColor="green" className="h-full">
              <h3 className="font-display text-xl text-white mb-6 flex items-center gap-2">
                <Mail className="text-neon-green" size={20}/> Direct Transmission
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-neon-green/80 uppercase">Identity / Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-black/50 border border-gray-800 rounded p-3 text-white focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-neon-green/80 uppercase">Contact Frequency / Email</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-black/50 border border-gray-800 rounded p-3 text-white focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-neon-green/80 uppercase">System Type</label>
                  <select 
                    value={formState.type}
                    onChange={(e) => setFormState({...formState, type: e.target.value})}
                    className="w-full bg-black/50 border border-gray-800 rounded p-3 text-white focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green transition-all"
                  >
                    <option>SAP / Banking Integration</option>
                    <option>GUI / Web Automation</option>
                    <option>Custom Node Workflow</option>
                    <option>Hosting & Infrastructure</option>
                    <option>ChatBot / ChatOps</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-neon-green/80 uppercase">Message Payload</label>
                  <textarea 
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-black/50 border border-gray-800 rounded p-3 text-white focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green transition-all resize-none"
                    placeholder="Describe your system requirements..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  className="w-full mt-2 bg-neon-green text-black hover:bg-white hover:shadow-[0_0_20px_rgba(10,255,0,0.7)]"
                  disabled={status === 'SENDING' || status === 'SENT'}
                >
                  {status === 'SENDING' ? 'Transmitting...' : status === 'SENT' ? 'Transmission Successful' : 'Send Transmission'} 
                  {status === 'IDLE' && <Send size={18} className="ml-2" />}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
