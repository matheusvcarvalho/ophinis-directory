import React from 'react';
import { Github, Twitter, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="h-6 w-6 text-neon-cyan" />
              <span className="font-display font-bold text-xl text-white">OPHINIS</span>
            </div>
            <p className="text-gray-500 font-sans text-sm">
              DevOps, SAP Automation, and AI Integration.
              <br />Building the infrastructure of tomorrow.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-500 font-sans">
              <li><a href="#services" className="hover:text-neon-cyan transition-colors">Services</a></li>
              <li><a href="#workflows" className="hover:text-neon-cyan transition-colors">Workflows</a></li>
              <li><a href="#contact-section" className="hover:text-neon-cyan transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-display text-white font-bold mb-4">Connect</h4>
             <div className="flex space-x-4 mb-4">
               <a href="#" className="text-gray-500 hover:text-neon-cyan transition-colors"><Github size={20} /></a>
               <a href="#" className="text-gray-500 hover:text-neon-cyan transition-colors"><Twitter size={20} /></a>
             </div>
             <div className="space-y-1 text-sm text-gray-500 font-sans">
                <p>contact@ophinis.com</p>
                <p>support@ophinis.com</p>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 text-center">
          <p className="text-gray-600 text-xs font-mono">
            © {new Date().getFullYear()} OPHINIS. ALL SYSTEMS OPERATIONAL.
          </p>
        </div>
      </div>
    </footer>
  );
};
