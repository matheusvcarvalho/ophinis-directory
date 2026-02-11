import React from 'react';
import { Database, LayoutTemplate, MessageCircle, Server, BrainCircuit, Network } from 'lucide-react';
import { Card } from './ui/Card';

const services = [
  {
    id: 'banking-sap',
    title: 'Banking & SAP',
    description: 'Specialized integration for financial systems and SAP. Secure handling of sensitive data, RFC calls, and banking protocols.',
    icon: <Database className="w-8 h-8 text-neon-cyan" />,
    color: 'cyan'
  },
  {
    id: 'gui-automation',
    title: 'GUI & Web Automation',
    description: 'Proprietary libraries for rapid desktop and web automation. We automate interactions where APIs don\'t exist.',
    icon: <LayoutTemplate className="w-8 h-8 text-neon-purple" />,
    color: 'purple'
  },
  {
    id: 'node-workflows',
    title: 'Custom Node Flows',
    description: 'Complex, event-driven architectures. We build proprietary logic flows that adapt to your specific business rules.',
    icon: <Network className="w-8 h-8 text-neon-green" />,
    color: 'green'
  },
  {
    id: 'chatops',
    title: 'Chat Integrations',
    description: 'Seamless bi-directional control via WhatsApp, Slack, and Telegram. Trigger workflows and receive alerts instantly.',
    icon: <MessageCircle className="w-8 h-8 text-neon-cyan" />,
    color: 'cyan'
  },
  {
    id: 'ai-processes',
    title: 'AI Decision Engines',
    description: 'Intelligent document processing and decision support systems embedded directly into your operational pipeline.',
    icon: <BrainCircuit className="w-8 h-8 text-neon-purple" />,
    color: 'purple'
  },
  {
    id: 'hosting',
    title: 'Hybrid Hosting',
    description: 'Flexible deployment. We provide managed hosting for your automations or configure self-hosted environments on your infra.',
    icon: <Server className="w-8 h-8 text-neon-green" />,
    color: 'green'
  }
] as const;

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-bg relative">
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            ENGINEERING <span className="text-neon-cyan">CAPABILITIES</span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto font-sans">
            From banking infrastructure to rapid GUI automation, we provide the full stack of operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} title={service.title} glowColor={service.color as any} className="h-full transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit">
                {service.icon}
              </div>
              <p className="text-gray-400 font-sans leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
