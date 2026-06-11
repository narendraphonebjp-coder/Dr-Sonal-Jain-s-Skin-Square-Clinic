import { TabType } from '../types';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; tab: TabType }[] = [
    { label: 'INDEX', tab: 'INDEX' },
    { label: 'BIOGRAPHY', tab: 'BIOGRAPHY' },
    { label: 'SERVICES & PORTFOLIO', tab: 'SERVICES' },
    { label: 'CONTACT', tab: 'CONTACT' },
  ];

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md border-b border-brand-border/60 px-6 py-4 md:px-12 transition-all duration-200">
      <div id="header-container" className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand/Logo */}
        <button 
          id="brand-logo"
          onClick={() => handleNavClick('INDEX')}
          className="font-serif text-xl tracking-tight text-brand-primary font-medium hover:opacity-80 transition-opacity"
        >
          Midas Skin Clinic<span className="text-brand-accent">.</span>
        </button>

        {/* Center Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              id={`nav-item-${item.tab.toLowerCase()}`}
              key={item.tab}
              onClick={() => handleNavClick(item.tab)}
              className={`text-[11px] tracking-[0.2em] font-medium transition-colors duration-200 relative py-1 hover:text-brand-primary ${
                activeTab === item.tab ? 'text-brand-primary font-semibold' : 'text-brand-secondary'
              }`}
            >
              {item.label}
              {activeTab === item.tab && (
                <span id={`active-line-${item.tab.toLowerCase()}`} className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-primary transition-all duration-300" />
              )}
            </button>
          ))}
        </nav>

        {/* Right CTA / Action Button */}
        <div id="header-cta-container" className="hidden md:flex items-center">
          <button
            id="header-consultation-btn"
            onClick={() => handleNavClick('CONTACT')}
            className={`text-[11px] tracking-[0.15em] font-medium text-brand-primary uppercase border-b-2 transition-all duration-200 pb-0.5 ${
              activeTab === 'CONTACT' ? 'border-brand-primary' : 'border-brand-primary/20 hover:border-brand-primary'
            }`}
          >
            CONSULTATION
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-primary hover:opacity-80 focus:outline-none"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer/Dropdown */}
      {isOpen && (
        <div id="mobile-nav-menu" className="md:hidden absolute top-full left-0 right-0 bg-brand-bg border-b border-brand-border px-6 py-6 space-y-4 shadow-lg animate-fadeIn">
          {navItems.map((item) => (
            <button
              id={`mobile-nav-item-${item.tab.toLowerCase()}`}
              key={item.tab}
              onClick={() => handleNavClick(item.tab)}
              className={`block w-full text-left text-xs tracking-widest font-medium py-2 border-b border-brand-border/40 ${
                activeTab === item.tab ? 'text-brand-primary font-bold' : 'text-brand-secondary'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            id="mobile-consultation-btn"
            onClick={() => handleNavClick('CONTACT')}
            className="block w-full text-center text-xs tracking-widest font-semibold bg-brand-primary text-brand-bg py-3 rounded-xs uppercase hover:bg-brand-accent-hover transition-colors"
          >
            REQUEST A CONSULTATION
          </button>
        </div>
      )}
    </header>
  );
}
