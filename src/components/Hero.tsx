import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Mountain, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Compass,
  Calculator,
  Image as ImageIcon
} from 'lucide-react';
import { NorthEastState } from '../types';
import { CAMERA_IMAGES } from '../assets/images';

interface HeroProps {
  onSelectSpecial: (tag: string) => void;
  selectedState: NorthEastState | 'All';
  setSelectedState: (state: NorthEastState | 'All') => void;
  onExploreClick: () => void;
  onOpenCustomQuote?: () => void;
}

const STATES_LIST: (NorthEastState | 'All')[] = [
  'All',
  'Nagaland',
  'Arunachal Pradesh',
  'Meghalaya',
  'Assam',
  'Sikkim',
  'Manipur'
];

interface HeroSceneryOption {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  accent: string;
}

const SCENERY_OPTIONS: HeroSceneryOption[] = [
  {
    id: 'vibrant_sunrise',
    name: 'Himalayan Sunrise',
    location: 'Eastern Himalayas',
    imageUrl: CAMERA_IMAGES.heroVibrant,
    accent: 'emerald'
  },
  {
    id: 'meghalaya_roots',
    name: 'Living Root Bridges',
    location: 'Cherrapunjee, Meghalaya',
    imageUrl: CAMERA_IMAGES.rootBridge,
    accent: 'emerald'
  },
  {
    id: 'tawang_snow',
    name: 'Tawang Valley & Peaks',
    location: 'Tawang, Arunachal',
    imageUrl: CAMERA_IMAGES.tawangMonastery,
    accent: 'amber'
  },
  {
    id: 'dawki_waters',
    name: 'Crystal Dawki River',
    location: 'Umngot, Meghalaya',
    imageUrl: CAMERA_IMAGES.dawkiRiver,
    accent: 'cyan'
  }
];

export const Hero: React.FC<HeroProps> = ({
  onSelectSpecial,
  selectedState,
  setSelectedState,
  onExploreClick,
  onOpenCustomQuote
}) => {
  const [activeScenery, setActiveScenery] = useState<HeroSceneryOption>(SCENERY_OPTIONS[0]);

  return (
    <section id="hero-section" className="relative overflow-hidden bg-stone-950 text-white min-h-[640px] lg:min-h-[720px] flex flex-col justify-between">
      {/* 
        Background Layer: High-resolution vibrant North East imagery 
        with rich color saturation and dramatic atmospheric depth 
      */}
      <div 
        key={activeScenery.id}
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 ease-out transform scale-100 filter brightness-95 contrast-105"
        style={{
          backgroundImage: `url('${activeScenery.imageUrl}')`
        }}
      />

      {/* Atmospheric dynamic gradient overlays for maximum contrast and catchy warmth */}
      {/* 1. Left-heavy gradient for readable text while leaving scenic right side vibrant */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-stone-950/95 via-stone-950/75 to-stone-950/25 sm:via-stone-950/70 sm:to-transparent" />
      
      {/* 2. Top-down subtle vignette */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-stone-950/80 via-transparent to-stone-950/95" />
      
      {/* 3. Golden sunrise warm glow at top right */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none z-1" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none z-1" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 w-full flex-1 flex flex-col justify-between">
        
        <div>
          {/* Top Pill & Scenery Selector Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-200 text-xs font-semibold tracking-wide backdrop-blur-md shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <Mountain className="w-3.5 h-3.5 text-emerald-300" />
                <span>North East India B2B & FIT Specialist</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs font-semibold tracking-wide backdrop-blur-md">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Hornbill • Dzukou • Ziro Festival Expeditions</span>
              </div>
            </div>

            {/* Quick Scenic Background Switcher */}
            <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-black/40 border border-white/15 backdrop-blur-md">
              <span className="text-[11px] font-semibold text-stone-300 px-2 flex items-center gap-1">
                <ImageIcon className="w-3 h-3 text-emerald-400" />
                Scenery:
              </span>
              {SCENERY_OPTIONS.map((scenery) => (
                <button
                  key={scenery.id}
                  onClick={() => setActiveScenery(scenery)}
                  className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-all cursor-pointer ${
                    activeScenery.id === scenery.id
                      ? 'bg-emerald-500 text-white shadow-sm font-semibold'
                      : 'text-stone-300 hover:text-white hover:bg-white/10'
                  }`}
                  title={scenery.location}
                >
                  {scenery.name}
                </button>
              ))}
            </div>
          </div>

          {/* Main Hero Headline & Copy */}
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Unveil the Untamed Beauty of <br />
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
                The Seven Sisters
              </span>
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              Authentic expeditions through Meghalaya&apos;s emerald waterfalls, Arunachal&apos;s snow passes, 
              Nagaland&apos;s vibrant tribal heritage, and Assam&apos;s wildlife sanctuaries. 
              Verified B2B tariffs, vetted stays, and commercial mountain transport.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                id="hero-explore-btn"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-950/50 cursor-pointer active:scale-95"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Curated Circuits</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              {onOpenCustomQuote && (
                <button
                  id="hero-quote-btn"
                  onClick={onOpenCustomQuote}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white font-semibold text-sm backdrop-blur-md transition-all cursor-pointer shadow-md active:scale-95"
                >
                  <Calculator className="w-4 h-4 text-amber-300" />
                  <span>Build Custom Package</span>
                </button>
              )}

              <div className="flex items-center gap-2 text-xs text-stone-300 ml-1 py-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Rates Updated for 2026-2027 Season</span>
              </div>
            </div>
          </div>

          {/* Quick Action Feature Cards: The 3 Special Destinations requested */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
            
            {/* Hornbill Card */}
            <button
              id="hero-quick-hornbill"
              onClick={() => onSelectSpecial('Hornbill Festival')}
              className="group relative p-4 rounded-xl bg-stone-900/60 hover:bg-stone-900/80 border border-amber-500/30 hover:border-amber-400 backdrop-blur-md text-left transition-all cursor-pointer shadow-xl hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-300 tracking-wide uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Nagaland Special
                </span>
                <span className="text-[11px] bg-amber-500/25 border border-amber-400/30 text-amber-200 px-2 py-0.5 rounded-full font-mono font-medium">Dec 01 - 10</span>
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors">
                Hornbill Festival
              </h3>
              <p className="text-xs text-stone-300 mt-1 line-clamp-1">
                17 indigenous tribes, Kisama morungs & rock festival
              </p>
            </button>

            {/* Dzukou Card */}
            <button
              id="hero-quick-dzukou"
              onClick={() => onSelectSpecial('Dzukou Valley')}
              className="group relative p-4 rounded-xl bg-stone-900/60 hover:bg-stone-900/80 border border-emerald-500/30 hover:border-emerald-400 backdrop-blur-md text-left transition-all cursor-pointer shadow-xl hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-300 tracking-wide uppercase flex items-center gap-1.5">
                  <Mountain className="w-3.5 h-3.5" />
                  High Altitude Trek
                </span>
                <span className="text-[11px] bg-emerald-500/25 border border-emerald-400/30 text-emerald-200 px-2 py-0.5 rounded-full font-mono font-medium">2,452m</span>
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-emerald-300 transition-colors">
                Dzukou Valley
              </h3>
              <p className="text-xs text-stone-300 mt-1 line-clamp-1">
                Rolling dwarf bamboo, seasonal lilies & wilderness camping
              </p>
            </button>

            {/* Ziro Card */}
            <button
              id="hero-quick-ziro"
              onClick={() => onSelectSpecial('Ziro Festival')}
              className="group relative p-4 rounded-xl bg-stone-900/60 hover:bg-stone-900/80 border border-teal-500/30 hover:border-teal-400 backdrop-blur-md text-left transition-all cursor-pointer shadow-xl hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-teal-300 tracking-wide uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Arunachal Indie
                </span>
                <span className="text-[11px] bg-teal-500/25 border border-teal-400/30 text-teal-200 px-2 py-0.5 rounded-full font-mono font-medium">September</span>
              </div>
              <h3 className="font-bold text-white text-base group-hover:text-teal-300 transition-colors">
                Ziro Music Festival
              </h3>
              <p className="text-xs text-stone-300 mt-1 line-clamp-1">
                Apatani valley culture, bamboo architecture & pine camping
              </p>
            </button>
          </div>
        </div>

        {/* State Filter Chips Bar */}
        <div className="mt-8 pt-6 border-t border-white/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs font-semibold text-stone-300 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Filter by North East State:
            </span>

            <div className="flex flex-wrap items-center gap-1.5">
              {STATES_LIST.map((state) => {
                const isActive = selectedState === state;
                return (
                  <button
                    key={state}
                    id={`state-filter-${state.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => {
                      setSelectedState(state);
                      onExploreClick();
                    }}
                    className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-emerald-500 text-white shadow-md shadow-emerald-900/50 font-semibold ring-2 ring-emerald-300/40'
                        : 'bg-white/10 text-stone-200 hover:bg-white/20 hover:text-white border border-white/15'
                    }`}
                  >
                    {state}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Trust Factors Banner */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-stone-300 pt-5 border-t border-white/10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Native Local Naga & Khasi Guides</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Authorized ILP & PAP Permit Desk</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100+ Verified Hotels & Homestays</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Commercial Mountain Vehicle Fleet</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
