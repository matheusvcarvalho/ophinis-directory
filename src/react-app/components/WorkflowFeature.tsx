import React from 'react';
import { Card } from './ui/Card';
import { GitMerge, Cpu, Share2, Layers } from 'lucide-react';

export const WorkflowFeature: React.FC = () => {
  return (
    <section id="workflows" className="py-24 bg-dark-card relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              PROPRIETARY <span className="text-neon-purple">WORKFLOW ENGINE</span>
            </h2>
            <div className="w-20 h-1 bg-neon-purple mb-8"></div>
            
            <p className="font-sans text-xl text-gray-300 mb-6 font-light">
              We utilize our own rapid-deployment libraries to bridge the gap between legacy banking systems and modern interfaces.
            </p>
            
            <ul className="space-y-6 font-sans text-gray-400">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-neon-cyan/10 rounded mt-1">
                  <GitMerge className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <strong className="text-white block mb-1">Visual Logic Flows</strong>
                  Custom node architectures that map perfectly to your business rules, handling complex conditions and loops.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-neon-purple/10 rounded mt-1">
                  <Cpu className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <strong className="text-white block mb-1">Banking & SAP Modules</strong>
                  Pre-built, secure nodes for RFC calls, IDoc processing, and financial transaction handling.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-neon-green/10 rounded mt-1">
                  <Share2 className="w-5 h-5 text-neon-green" />
                </div>
                <div>
                  <strong className="text-white block mb-1">Omnichannel Output</strong>
                  Trigger actions in Slack, WhatsApp, or Telegram directly from the automation core.
                </div>
              </li>
            </ul>
          </div>

          {/* Visual Representation */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
             <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-20 blur-3xl -z-10"></div>
             
             {/* 
               Diagram Container 
               Fixed aspect ratio 6:4 to match the 600x400 coordinate system.
             */}
             <div className="relative w-full aspect-[6/4] bg-black/40 border border-neon-cyan/20 rounded-lg overflow-hidden shadow-2xl">
                
                {/* SVG Layer: Connecting Lines */}
                {/* The viewBox "0 0 600 400" sets the coordinate system for the paths */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 400">
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00f3ff" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#bc13fe" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>

                    {/* Left Top (120, 100) -> Center (300, 200) */}
                    <path d="M 120 100 C 210 100, 210 200, 300 200" stroke="url(#grad1)" strokeWidth="2" fill="none" className="animate-pulse" />
                    
                    {/* Left Bottom (120, 300) -> Center (300, 200) */}
                    <path d="M 120 300 C 210 300, 210 200, 300 200" stroke="#bc13fe" strokeWidth="2" fill="none" strokeOpacity="0.5" />
                    
                    {/* Center (300, 200) -> Right Top (480, 100) */}
                    <path d="M 300 200 C 390 200, 390 100, 480 100" stroke="#0aff00" strokeWidth="2" fill="none" strokeOpacity="0.5" />
                    
                    {/* Center (300, 200) -> Right Bottom (480, 300) */}
                    <path d="M 300 200 C 390 200, 390 300, 480 300" stroke="#00f3ff" strokeWidth="2" fill="none" strokeOpacity="0.5" />
                </svg>

                {/* Nodes Layer: Positioned with percentages matching SVG coordinates */}
                
                {/* Node: Trigger (20%, 25%) */}
                <div className="absolute left-[20%] top-[25%] -translate-x-1/2 -translate-y-1/2 w-[170px] z-10">
                    <Card glowColor="cyan" className="!p-4 !bg-black/90 !border-neon-cyan/40 !rounded-lg shadow-[0_0_15px_rgba(0,243,255,0.1)]">
                        <div className="flex justify-between items-center mb-3 border-b border-white/5 pb-2">
                            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">TRIGGER</span>
                            <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_#00f3ff]"></div>
                        </div>
                        <div className="flex items-center gap-2 text-white font-display text-sm font-semibold">
                            <Layers size={16} className="text-neon-cyan" />
                            <span>GUI_EVENT</span>
                        </div>
                    </Card>
                </div>

                {/* Node: Finance (20%, 75%) */}
                <div className="absolute left-[20%] top-[75%] -translate-x-1/2 -translate-y-1/2 w-[170px] z-10">
                    <Card glowColor="purple" className="!p-4 !bg-black/90 !border-neon-purple/40 !rounded-lg shadow-[0_0_15px_rgba(188,19,254,0.1)]">
                        <div className="flex justify-between items-center mb-3 border-b border-white/5 pb-2">
                            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">FINANCE</span>
                            <div className="w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_8px_#bc13fe]"></div>
                        </div>
                        <div className="flex items-center gap-2 text-white font-display text-sm font-semibold mb-2">
                            <Layers size={16} className="text-neon-purple" />
                            <span>SAP_RFC_CALL</span>
                        </div>
                        <div className="bg-white/5 p-1.5 rounded text-[10px] font-mono text-gray-400 border border-white/5 truncate">
                            &gt; BAPI_USER_GET
                        </div>
                    </Card>
                </div>

                {/* Node: Core (50%, 50%) */}
                <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        {/* Core Glow */}
                        <div className="absolute inset-0 rounded-full bg-neon-purple/5 blur-xl"></div>
                        
                        {/* Rings */}
                        <div className="absolute inset-0 border border-white/10 rounded-full bg-black/80 backdrop-blur-md"></div>
                        <div className="absolute inset-0 border-t border-neon-cyan rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
                        <div className="absolute inset-2 border-b border-neon-purple rounded-full animate-spin" style={{animationDuration: '5s'}}></div>
                        
                        {/* Icon & Text */}
                        <div className="flex flex-col items-center z-10 relative">
                           <Cpu size={32} className="text-white mb-1" />
                           <span className="font-display font-bold text-white tracking-widest text-xs">OPN_CORE</span>
                           <span className="font-mono text-[9px] text-neon-cyan animate-pulse mt-1">Processing...</span>
                        </div>
                    </div>
                </div>

                {/* Node: Notify (80%, 25%) */}
                <div className="absolute left-[80%] top-[25%] -translate-x-1/2 -translate-y-1/2 w-[170px] z-10">
                    <Card glowColor="green" className="!p-4 !bg-black/90 !border-neon-green/40 !rounded-lg shadow-[0_0_15px_rgba(10,255,0,0.1)]">
                       <div className="flex justify-between items-center mb-3 border-b border-white/5 pb-2">
                            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">NOTIFY</span>
                            <div className="w-2 h-2 rounded-full bg-neon-green shadow-[0_0_8px_#0aff00]"></div>
                        </div>
                        <div className="text-white font-display text-sm font-semibold">
                            WHATSAPP_API
                        </div>
                    </Card>
                </div>

                {/* Node: Persist (80%, 75%) */}
                <div className="absolute left-[80%] top-[75%] -translate-x-1/2 -translate-y-1/2 w-[170px] z-10">
                    <Card glowColor="cyan" className="!p-4 !bg-black/90 !border-neon-cyan/40 !rounded-lg shadow-[0_0_15px_rgba(0,243,255,0.1)]">
                       <div className="flex justify-between items-center mb-3 border-b border-white/5 pb-2">
                            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">PERSIST</span>
                            <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_#00f3ff]"></div>
                        </div>
                        <div className="text-white font-display text-sm font-semibold">
                            HOST_DB_SYNC
                        </div>
                    </Card>
                </div>

             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
