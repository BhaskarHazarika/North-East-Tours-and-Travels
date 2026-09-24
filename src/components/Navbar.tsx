import React, { useState } from 'react';
import { 
  PhoneCall, 
  Menu, 
  X,
  Send
} from 'lucide-react';

export type NavTab = 
  | 'home' 
  | 'destinations' 
  | 'packages' 
  | 'festivals' 
  | 'about' 
  | 'contact' 
  | 'admin';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenPermitGuide: () => void;
  onOpenCustomQuote: () => void;
  currency: 'INR' | 'USD';
  setCurrency: (c: 'INR' | 'USD') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenPermitGuide,
  onOpenCustomQuote,
  currency,
  setCurrency
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'packages', label: 'Curated Expeditions' },
    { id: 'destinations', label: 'Regional Guides' },
    { id: 'festivals', label: 'Festivals & Passes' },
    { id: 'about', label: 'Who We Are' },
    { id: 'contact', label: 'Consultation & Desk' }
  ];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="site-header" className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E2DA] transition-all">
      {/* Top Dispatch Bar */}
      <div className="bg-[#14231B] text-stone-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#22392C]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-stone-300 font-medium tracking-wide">
              Direct Route Operations Desk · Guwahati, Assam
            </span>
            <span className="hidden md:inline text-stone-600" aria-hidden="true">/</span>
            <span className="hidden md:inline text-stone-400">
              Government ILP & Protected Area Clearances Managed In-House
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button 
              id="header-ilp-guide-btn"
              onClick={onOpenPermitGuide}
              className="text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              ILP & Permit Protocol
            </button>
            <span className="text-stone-600" aria-hidden="true">/</span>
            <a 
              href="tel:+919395109412" 
              className="flex items-center gap-1.5 text-stone-200 hover:text-white font-medium transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#C5A059]" />
              <span>+91 93951 09412</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand & Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo - Editorial Typography */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-baseline gap-2.5 text-left group shrink-0 cursor-pointer"
          >
            <div>
              <span className="font-serif text-2xl sm:text-2xl font-bold tracking-tight text-[#17261E] block leading-none">
                North East Odyssey
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#6B7870] font-medium block mt-1">
                Private Himalayan & Tribal Expeditions
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium tracking-wide text-stone-700">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-2 transition-colors cursor-pointer relative ${
                    isActive
                      ? 'text-[#14231B] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#1E382B]'
                      : 'text-stone-600 hover:text-[#14231B]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Currency + Quote CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Currency selector */}
            <div className="flex items-center bg-stone-200/70 rounded-md p-0.5 text-xs text-stone-600 font-medium">
              <button 
                id="currency-inr-btn"
                onClick={() => setCurrency('INR')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  currency === 'INR' ? 'bg-white text-stone-900 shadow-xs' : 'hover:text-stone-900'
                }`}
              >
                ₹ INR
              </button>
              <button 
                id="currency-usd-btn"
                onClick={() => setCurrency('USD')}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  currency === 'USD' ? 'bg-white text-stone-900 shadow-xs' : 'hover:text-stone-900'
                }`}
              >
                $ USD
              </button>
            </div>

            {/* Inquire CTA Button */}
            <button
              onClick={onOpenCustomQuote}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#1E382B] hover:bg-[#14261D] text-white font-medium text-xs tracking-wide transition-all cursor-pointer shadow-xs"
            >
              <Send className="w-3 h-3 text-[#C5A059]" />
              <span>Curate a Journey</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-700 hover:bg-stone-200/50 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E7E2DA] px-5 py-6 space-y-4 animate-fade-in shadow-xl">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeTab === item.id 
                    ? 'bg-[#1E382B] text-white' 
                    : 'text-stone-700 hover:bg-stone-200/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E7E2DA] flex items-center justify-between">
            <div className="flex items-center bg-stone-200/70 rounded-md p-0.5 text-xs text-stone-600 font-medium">
              <button 
                onClick={() => setCurrency('INR')}
                className={`px-2.5 py-1 rounded ${currency === 'INR' ? 'bg-white text-stone-900' : ''}`}
              >
                ₹ INR
              </button>
              <button 
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded ${currency === 'USD' ? 'bg-white text-stone-900' : ''}`}
              >
                $ USD
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomQuote();
              }}
              className="px-4 py-2 rounded-md bg-[#1E382B] text-white text-xs font-medium"
            >
              Curate a Journey
            </button>
          </div>

          <div className="pt-2 text-xs text-stone-600 flex items-center justify-between">
            <a href="tel:+919395109412" className="flex items-center gap-1 text-[#1E382B] font-medium">
              <PhoneCall className="w-3.5 h-3.5" />
              +91 93951 09412
            </a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPermitGuide();
              }}
              className="text-stone-600 hover:text-stone-900 underline underline-offset-2"
            >
              Permit Protocol
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
