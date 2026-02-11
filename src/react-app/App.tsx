import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WorkflowFeature } from './components/WorkflowFeature';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-neon-cyan selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WorkflowFeature />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
