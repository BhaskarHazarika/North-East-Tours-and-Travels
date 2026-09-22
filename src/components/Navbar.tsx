import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  PhoneCall, 
  MessageCircle, 
  Sparkles, 
  FileText, 
  Menu, 
  X,
  Search,
  Lock,
  Layers,
  Info,
  Send,
  Package
} from 'lucide-react';
import { isSupabaseConfigured } from '../lib/supabase';

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

  const navItems: { id: NavTab; label: string; icon?: React.ReactNode; isBadge?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'packages', label: 'Tour Packages' },
    { id: 'festivals', label: 'Festivals & Experiences', isBadge: true },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact & Inquire' },
    { id: 'admin', label: 'Admin', icon: <Lock className="w-3 h-3 text-stone-400" /> }
  ];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="site-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all shadow-xs">
      {/* Top Notification Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full font-bold border border-amber-400/30 text-[10px]">
              <Sparkles className="w-3 h-3 text-amber-300" />
              Main Highlights: 5D Meghalaya • 13D Grand Circuit • 9D Kaziranga-Tawang
            </span>
            <span className="hidden lg:inline text-stone-400">|</span>
            <span className="text-stone-300 truncate text-[11px] hidden lg:inline">
              Hornbill Festival, Dzukou Valley, Ziro & All 8 North-East States
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button 
              id="header-ilp-guide-btn"
              onClick={onOpenPermitGuide}
              className="hover:text-white underline decoration-emerald-500/60 underline-offset-2 flex items-center gap-1 cursor-pointer text-[11px]"
            >
              <FileText className="w-3 h-3" />
              ILP Permit Rules
            </button>
            <span className="text-emerald-800 hidden sm:inline">|</span>
            <a 
              href="tel:+919395109412" 
              className="flex items-center gap-1 hover:text-white font-medium transition-colors text-[11px]"
            >
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span>+91 93951 09412 / +91 8095650076</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group shrink-0 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-900 text-white flex items-center justify-center shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <span className="font-black text-xl tracking-tight text-stone-900 block leading-none">
                North East <span className="text-emerald-700">Odyssey</span>
              </span>
              <span className="text-[10px] font-bold tracking-wider uppercase text-stone-500 block mt-0.5">
                Seven Sisters & Sikkim Expeditions
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-bold text-stone-700">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : item.id === 'admin'
                      ? 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
                      : 'text-stone-700 hover:text-emerald-800 hover:bg-stone-100'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.isBadge && !isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Currency + Quote CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Currency selector */}
            <div className="flex items-center bg-stone-100 rounded-lg p-0.5 border border-stone-200 text-xs font-bold text-stone-600">
              <button 
                id="currency-inr-btn"
                onClick={() => setCurrency('INR')}
                className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                  currency === 'INR' ? 'bg-white text-stone-900 shadow-xs' : 'hover:text-stone-900'
                }`}
              >
                ₹ INR
              </button>
              <button 
                id="currency-usd-btn"
                onClick={() => setCurrency('USD')}
                className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                  currency === 'USD' ? 'bg-white text-stone-900 shadow-xs' : 'hover:text-stone-900'
                }`}
              >
                $ USD
              </button>
            </div>

            {/* Inquire CTA Button */}
            <button
              onClick={onOpenCustomQuote}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Plan Trip</span>
            </button>
          </div>

          {/* Mobile menu hamburger toggle button */}
          <button 
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-stone-200 space-y-2">
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`p-3 rounded-xl text-xs font-bold text-left flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-emerald-800 text-white'
                        : 'text-stone-800 hover:bg-stone-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {item.isBadge && (
                      <span className={`px-2 py-0.5 rounded text-[10px] ${isActive ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'}`}>
                        Special
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 flex items-center justify-between border-t border-stone-200">
              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-500 font-semibold">Currency:</span>
                <button 
                  onClick={() => setCurrency('INR')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-bold ${currency === 'INR' ? 'bg-emerald-800 text-white' : 'bg-stone-100 text-stone-700'}`}
                >
                  ₹ INR
                </button>
                <button 
                  onClick={() => setCurrency('USD')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-bold ${currency === 'USD' ? 'bg-emerald-800 text-white' : 'bg-stone-100 text-stone-700'}`}
                >
                  $ USD
                </button>
              </div>

              <button 
                onClick={() => { onOpenCustomQuote(); setMobileMenuOpen(false); }}
                className="text-xs font-bold text-emerald-800 hover:underline"
              >
                Plan Custom Trip →
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
