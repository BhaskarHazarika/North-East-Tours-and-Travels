import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Mountain, 
  CheckCircle2, 
  Users, 
  Award,
  ChevronRight,
  Flame,
  Crown
} from 'lucide-react';
import { TourPackage, NorthEastState } from '../types';
import { MainHighlightsSection } from '../components/MainHighlightsSection';
import { SpecialFestivalsSection } from '../components/SpecialFestivalsSection';
import { TourCard } from '../components/TourCard';
import { ALL_DESTINATIONS } from '../data/destinations';
import { CAMERA_IMAGES } from '../assets/images';

interface HomeViewProps {
  onNavigate: (tab: 'destinations' | 'packages' | 'festivals' | 'about' | 'contact') => void;
  onSelectSpecialTour: (tag: string) => void;
  onSelectStateForPackages: (state: NorthEastState) => void;
  onSelectTour: (tour: TourPackage, openCalculator?: boolean) => void;
  onOpenPermitGuide: () => void;
  onOpenCustomQuote: () => void;
  featuredPackages: TourPackage[];
  currency: 'INR' | 'USD';
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectSpecialTour,
  onSelectStateForPackages,
  onSelectTour,
  onOpenPermitGuide,
  onOpenCustomQuote,
  featuredPackages,
  currency
}) => {
  return (
    <div id="home-view" className="w-full">
      
      {/* 1. Hero Section with Large Photography & Premium North-East Aesthetics */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-stone-950 text-white">
        {/* Hero Background Image with Atmospheric Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={CAMERA_IMAGES.heroMountains} 
            alt="North East India mountains, valleys and forests"
            className="w-full h-full object-cover opacity-55 scale-105 transform animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Indigenous North-East India Travel Specialist</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] max-w-4xl text-white">
            Journey Into the Mystical Frontier of North-East India
          </h1>

          <p className="mt-6 text-base sm:text-lg text-stone-200 max-w-2xl font-normal leading-relaxed">
            Exclusive expeditions across <span className="text-emerald-300 font-semibold">Assam, Meghalaya, Arunachal, Nagaland, Manipur, Mizoram, Tripura, and Sikkim</span>. Experience ancient tribal rituals, living root bridges, and pristine Himalayan valleys with 100% native guides.
          </p>

          {/* Quick Highlight Feature Pills in Hero */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-stone-300 font-medium mr-1 flex items-center gap-1">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              Main Highlights:
            </span>
            <button
              onClick={() => onSelectSpecialTour('5 days')}
              className="px-3 py-1.5 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-500/40 font-semibold transition-colors cursor-pointer"
            >
              5D/4N Meghalaya Trip
            </button>
            <button
              onClick={() => onSelectSpecialTour('13 days')}
              className="px-3 py-1.5 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-500/40 font-semibold transition-colors cursor-pointer"
            >
              13D/12N Meghalaya-Assam-Arunachal
            </button>
            <button
              onClick={() => onSelectSpecialTour('kaziranga - tawang')}
              className="px-3 py-1.5 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-500/40 font-semibold transition-colors cursor-pointer"
            >
              9D/8N Kaziranga-Tawang
            </button>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => {
                const el = document.getElementById('main-highlights-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onNavigate('packages');
              }}
              className="px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/40 transition-all cursor-pointer flex items-center gap-2"
            >
              <Crown className="w-4 h-4 text-amber-300" />
              <span>Explore Main Highlights</span>
            </button>

            <button
              onClick={() => onSelectSpecialTour('Hornbill Festival')}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Hornbill & Festivals</span>
            </button>

            <button
              onClick={onOpenCustomQuote}
              className="px-5 py-3.5 rounded-xl bg-stone-900/80 hover:bg-stone-900 text-stone-200 font-bold text-xs sm:text-sm border border-stone-700 transition-all cursor-pointer"
            >
              Custom Trip Planner
            </button>
          </div>

          {/* Quick Metrics & Badges */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl pt-8 border-t border-white/15 text-left text-xs">
            <div className="p-3 rounded-xl bg-white/5 backdrop-blur-xs">
              <strong className="block text-xl sm:text-2xl font-black text-emerald-400">8 States</strong>
              <span className="text-stone-300 text-[11px]">Seven Sisters & Sikkim</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 backdrop-blur-xs">
              <strong className="block text-xl sm:text-2xl font-black text-amber-400">100%</strong>
              <span className="text-stone-300 text-[11px]">Indigenous Local Guides</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 backdrop-blur-xs">
              <strong className="block text-xl sm:text-2xl font-black text-teal-400">ILP & PAP</strong>
              <span className="text-stone-300 text-[11px]">Hassle-Free Clearances</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 backdrop-blur-xs">
              <strong className="block text-xl sm:text-2xl font-black text-white">4.9 / 5</strong>
              <span className="text-stone-300 text-[11px]">Verified Traveler Reviews</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Main Highlights Section: 5D Meghalaya, 13D Meghalaya-Assam-Arunachal, 9D Kaziranga-Tawang */}
      <MainHighlightsSection 
        allPackages={featuredPackages}
        onSelectPackage={onSelectTour}
        currency={currency}
      />

      {/* 3. Special Dedicated Section: Hornbill Festival, Dzukou Valley, Ziro Festival */}
      <SpecialFestivalsSection 
        onSelectPackage={onSelectTour}
        allPackages={featuredPackages}
        currency={currency}
      />

      {/* 3. Featured Tour Packages Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Handcrafted Circuits
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">
              Featured Regional Expeditions
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-2xl">
              Authentic multi-day journeys covering wildlife safaris, misty living root bridges, Buddhist monasteries, and high alpine trails.
            </p>
          </div>

          <button
            onClick={() => onNavigate('packages')}
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 hover:text-emerald-900 group cursor-pointer"
          >
            <span>View All Tour Packages</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredPackages.slice(0, 6).map((tour) => (
            <TourCard 
              key={tour.id}
              tour={tour}
              onSelect={onSelectTour}
              currency={currency}
            />
          ))}
        </div>
      </section>

      {/* 4. Eight States Showcase Bento Grid */}
      <section className="py-16 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              Complete Regional Coverage
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">
              Choose Your North-East Destination
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600">
              Each state possesses distinct tribal customs, endemic flora, and mountain geography.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ALL_DESTINATIONS.map((dest) => (
              <div
                key={dest.id}
                onClick={() => onSelectStateForPackages(dest.name)}
                className="group relative h-48 rounded-2xl overflow-hidden shadow-xs cursor-pointer border border-stone-200 hover:border-emerald-500 transition-all"
              >
                <img 
                  src={dest.hero_image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] text-emerald-300 font-semibold uppercase tracking-wider block">
                    {dest.capital}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {dest.name}
                  </h3>
                  <div className="mt-1 flex items-center justify-between text-[11px] text-stone-300">
                    <span className="truncate">{dest.permit_type.includes('ILP') ? 'ILP Required' : 'No ILP'}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('destinations')}
              className="px-6 py-3 rounded-xl bg-white border border-stone-300 hover:border-emerald-700 text-stone-900 font-bold text-xs shadow-xs transition-all cursor-pointer"
            >
              Explore Detailed State Travel Guides →
            </button>
          </div>

        </div>
      </section>

      {/* 5. Trust & Operator Credibility Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 border border-stone-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-400/30">
                <ShieldCheck className="w-4 h-4" />
                Specialized North East Tour Operator
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                Why Discerning Travelers Choose North East Odyssey
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 mt-3 leading-relaxed">
                Traveling through the mountain frontiers requires dependable local access, government ILP authorizations, and vehicles built for Himalayan curves. We remove the uncertainty so you can immerse yourself in tribal culture and wilderness beauty.
              </p>

              <div className="mt-6 space-y-3 text-xs text-stone-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Direct Village Partnerships:</strong> Exclusive homestay access in Kisama, Kigwema, Khonoma, Nongriat, and Ziro Valley.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Full ILP & PAP Documentation:</strong> We manage state permit clearances before you board your flight.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Transparent Live Pricing:</strong> Calculate realistic costs adjusted for group size and vehicle choices online.</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenCustomQuote}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  Request a Tailor-Made Route
                </button>
                <button
                  onClick={onOpenPermitGuide}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-stone-200 border border-white/15 font-bold text-xs transition-all cursor-pointer"
                >
                  Inner Line Permit (ILP) Guide
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-stone-950/60 p-5 rounded-2xl border border-stone-800">
                <Mountain className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="text-sm font-bold text-white">4x4 Mountain Fleet</h4>
                <p className="text-[11px] text-stone-400 mt-1">
                  Private Scorpios and Bolero 4x4s driven by veteran hill chauffeurs.
                </p>
              </div>

              <div className="bg-stone-950/60 p-5 rounded-2xl border border-stone-800">
                <Award className="w-6 h-6 text-amber-400 mb-2" />
                <h4 className="text-sm font-bold text-white">Official ILP Partner</h4>
                <p className="text-[11px] text-stone-400 mt-1">
                  Direct submission with Nagaland, Arunachal, and Manipur administrations.
                </p>
              </div>

              <div className="bg-stone-950/60 p-5 rounded-2xl border border-stone-800">
                <Users className="w-6 h-6 text-teal-400 mb-2" />
                <h4 className="text-sm font-bold text-white">Native Angami & Khasi</h4>
                <p className="text-[11px] text-stone-400 mt-1">
                  Guides born and raised in the mountain villages you visit.
                </p>
              </div>

              <div className="bg-stone-950/60 p-5 rounded-2xl border border-stone-800">
                <Compass className="w-6 h-6 text-emerald-300 mb-2" />
                <h4 className="text-sm font-bold text-white">Guwahati & Kohima</h4>
                <p className="text-[11px] text-stone-400 mt-1">
                  Permanent physical base operations hubs in Assam and Nagaland.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
