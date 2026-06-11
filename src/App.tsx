import { useState, useEffect } from 'react';
import { TabType } from './types';
import Header from './components/Header';
import IndexSection from './components/IndexSection';
import Biography from './components/Biography';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('INDEX');

  // Handle back-to-top on state toggles
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeTab]);

  return (
    <div id="app-root-container" className="min-h-screen bg-brand-bg text-brand-primary font-sans antialiased overflow-x-hidden selection:bg-brand-border selection:text-brand-primary">
      {/* 1. Global Navigation Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. Main content pages inside Framer Motion AnimatePresence */}
      <main id="app-main-content">
        <AnimatePresence mode="wait">
          {activeTab === 'INDEX' && (
            <IndexSection 
              key="index"
              onConsultationClick={() => setActiveTab('CONTACT')}
              onExploreServicesClick={() => setActiveTab('SERVICES')}
            />
          )}
          {activeTab === 'BIOGRAPHY' && (
            <Biography key="biography" />
          )}
          {activeTab === 'SERVICES' && (
            <Works 
              key="works"
              onConsultationClick={() => setActiveTab('CONTACT')}
            />
          )}
          {activeTab === 'CONTACT' && (
            <Contact key="contact" />
          )}
        </AnimatePresence>
      </main>

      {/* 3. Global Coordinates Footer */}
      <Footer onNavClick={(tab) => setActiveTab(tab)} />
    </div>
  );
}
