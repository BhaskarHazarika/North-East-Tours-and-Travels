import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { DestinationsView } from './views/DestinationsView';
import { TourPackagesView } from './views/TourPackagesView';
import { FestivalsView } from './views/FestivalsView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { AdminView } from './views/AdminView';

import { TourDetailModal } from './components/TourDetailModal';
import { PermitAdvisoryModal } from './components/PermitAdvisoryModal';
import { CustomQuoteModal } from './components/CustomQuoteModal';

import { tourService } from './services/tourService';
import { TourPackage, NorthEastState } from './types';

export default function App() {
  // Main Navigation State
  const [activeTab, setActiveTab] = useState<NavTab>('home');

  // Shared Data States
  const [allPackages, setAllPackages] = useState<TourPackage[]>([]);
  const [loadingPackages, setLoadingPackages] = useState(true);
  const [packageStateFilter, setPackageStateFilter] = useState<NorthEastState | 'All'>('All');

  // Currency State
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Modal States
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<'itinerary' | 'price'>('itinerary');
  const [isPermitModalOpen, setIsPermitModalOpen] = useState(false);
  const [isCustomQuoteOpen, setIsCustomQuoteOpen] = useState(false);

  // Load packages dynamically from tourService (which queries Supabase if configured)
  useEffect(() => {
    async function loadData() {
      setLoadingPackages(true);
      const res = await tourService.getTourPackages();
      setAllPackages(res.data);
      setLoadingPackages(false);
    }
    loadData();
  }, []);

  // Quick select a special tour (5D Meghalaya, 13D Circuit, 9D Kaziranga-Tawang, Hornbill, etc.)
  const handleSelectSpecialTour = (specialTag: string) => {
    const q = specialTag.toLowerCase();
    const matched = allPackages.find(p => 
      (p.specialTag && p.specialTag.toLowerCase().includes(q)) ||
      p.title.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q)
    );

    if (matched) {
      setSelectedTour(matched);
      setModalInitialTab('itinerary');
    } else {
      // Switch to packages view with filter
      setActiveTab('packages');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Select a state from DestinationsView to filter in TourPackagesView
  const handleSelectStateForPackages = (state: NorthEastState) => {
    setPackageStateFilter(state);
    setActiveTab('packages');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open tour detail or price estimator modal
  const handleOpenTour = (tour: TourPackage, openCalculator: boolean = false) => {
    setSelectedTour(tour);
    setModalInitialTab(openCalculator ? 'price' : 'itinerary');
  };

  // Change active tab and scroll to top
  const handleNavigate = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-stone-900 font-sans selection:bg-emerald-600 selection:text-white">
      
      {/* 1. Global Navigation Bar */}
      <Navbar 
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenPermitGuide={() => setIsPermitModalOpen(true)}
        onOpenCustomQuote={() => setIsCustomQuoteOpen(true)}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* 2. Main View Container */}
      <main className="flex-1 w-full">
        {activeTab === 'home' && (
          <HomeView 
            onNavigate={handleNavigate}
            onSelectSpecialTour={handleSelectSpecialTour}
            onSelectStateForPackages={handleSelectStateForPackages}
            onSelectTour={handleOpenTour}
            onOpenPermitGuide={() => setIsPermitModalOpen(true)}
            onOpenCustomQuote={() => setIsCustomQuoteOpen(true)}
            featuredPackages={allPackages}
            currency={currency}
          />
        )}

        {activeTab === 'destinations' && (
          <DestinationsView 
            onSelectStateForPackages={handleSelectStateForPackages}
            onOpenCustomQuote={() => setIsCustomQuoteOpen(true)}
          />
        )}

        {activeTab === 'packages' && (
          <TourPackagesView 
            initialStateFilter={packageStateFilter}
            onSelectTour={handleOpenTour}
            onOpenCustomQuote={() => setIsCustomQuoteOpen(true)}
            currency={currency}
          />
        )}

        {activeTab === 'festivals' && (
          <FestivalsView 
            onSelectSpecialTour={handleSelectSpecialTour}
            onOpenCustomQuote={() => setIsCustomQuoteOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutView 
            onOpenPermitGuide={() => setIsPermitModalOpen(true)}
            onOpenCustomQuote={() => setIsCustomQuoteOpen(true)}
            onNavigateToPackages={() => handleNavigate('packages')}
          />
        )}

        {activeTab === 'contact' && (
          <ContactView 
            onOpenPermitGuide={() => setIsPermitModalOpen(true)}
          />
        )}

        {activeTab === 'admin' && (
          <AdminView />
        )}
      </main>

      {/* 3. Detailed Tour Modal (Day-by-Day Itinerary + Live Price Calculator + Booking) */}
      <TourDetailModal 
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        currency={currency}
        initialTab={modalInitialTab}
      />

      {/* 4. Travel Permit (ILP) Advisory Modal */}
      <PermitAdvisoryModal 
        isOpen={isPermitModalOpen}
        onClose={() => setIsPermitModalOpen(false)}
      />

      {/* 5. Custom Route Quote Modal */}
      <CustomQuoteModal 
        isOpen={isCustomQuoteOpen}
        onClose={() => setIsCustomQuoteOpen(false)}
        currency={currency}
      />

      {/* 6. Footer */}
      <Footer 
        onSelectSpecial={handleSelectSpecialTour}
        onOpenPermitGuide={() => setIsPermitModalOpen(true)}
        onOpenCustomQuote={() => setIsCustomQuoteOpen(true)}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
