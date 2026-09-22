import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Mountain, 
  CheckCircle2, 
  ArrowRight,
  Flame
} from 'lucide-react';
import { NorthEastState } from '../types';
import { CAMERA_IMAGES } from '../assets/images';

interface HeroProps {
  onSelectSpecial: (tag: string) => void;
  selectedState: NorthEastState | 'All';
  setSelectedState: (state: NorthEastState | 'All') => void;
  onExploreClick: () => void;
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

export const Hero: React.FC<HeroProps> = ({
  onSelectSpecial,
  selectedState,
  setSelectedState,
  onExploreClick
}) => {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-stone-900 text-white">
      {/* Background with deep dark gradient overlay on North East misty mountain imagery */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('${CAMERA_IMAGES.heroMountains}')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-900/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-24">
        
        {/* Badges & Trust Header */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wide backdrop-blur-xs">
            <Mountain className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dedicated Solely to North East India</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wide backdrop-blur-xs">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Festival Specialists: Hornbill • Dzukou • Ziro</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Journey into the <span className="text-emerald-400 underline decoration-emerald-500/50 decoration-wavy">Seven Sisters</span> & Pristine Himalayas
          </h1>
          
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
            Custom-crafted tour plans across Nagaland, Arunachal Pradesh, Meghalaya, Assam, and Sikkim. 
            Click any package to explore day-by-day itineraries, verified tribal stays, and calculate live estimated prices.
          </p>
        </div>

        {/* Quick Action Feature Cards: The 3 Special Destinations requested */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          
          {/* Hornbill Card */}
          <button
            id="hero-quick-hornbill"
            onClick={() => onSelectSpecial('Hornbill Festival')}
            className="group relative p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-amber-400/60 backdrop-blur-md text-left transition-all cursor-pointer shadow-lg"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-amber-300 tracking-wide uppercase flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Nagaland Special
              </span>
              <span className="text-[11px] bg-amber-500/20 text-amber-200 px-1.5 py-0.5 rounded font-mono">Dec 01 - 10</span>
            </div>
            <h3 className="font-bold text-stone-100 text-sm group-hover:text-amber-300 transition-colors">
              Hornbill Festival
            </h3>
            <p className="text-xs text-stone-400 mt-1 line-clamp-1">
              17 tribes, Kisama morungs & rock festival
            </p>
          </button>

          {/* Dzukou Card */}
          <button
            id="hero-quick-dzukou"
            onClick={() => onSelectSpecial('Dzukou Valley')}
            className="group relative p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-emerald-400/60 backdrop-blur-md text-left transition-all cursor-pointer shadow-lg"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-emerald-300 tracking-wide uppercase flex items-center gap-1">
                <Mountain className="w-3.5 h-3.5" />
                High Altitude Trek
              </span>
              <span className="text-[11px] bg-emerald-500/20 text-emerald-200 px-1.5 py-0.5 rounded font-mono">2,452m</span>
            </div>
            <h3 className="font-bold text-stone-100 text-sm group-hover:text-emerald-300 transition-colors">
              Dzukou Valley
            </h3>
            <p className="text-xs text-stone-400 mt-1 line-clamp-1">
              Rolling dwarf bamboo, lilies & wild camping
            </p>
          </button>

          {/* Ziro Card */}
          <button
            id="hero-quick-ziro"
            onClick={() => onSelectSpecial('Ziro Festival')}
            className="group relative p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 hover:border-teal-400/60 backdrop-blur-md text-left transition-all cursor-pointer shadow-lg"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-teal-300 tracking-wide uppercase flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Arunachal Indie
              </span>
              <span className="text-[11px] bg-teal-500/20 text-teal-200 px-1.5 py-0.5 rounded font-mono">September</span>
            </div>
            <h3 className="font-bold text-stone-100 text-sm group-hover:text-teal-300 transition-colors">
              Ziro Festival of Music
            </h3>
            <p className="text-xs text-stone-400 mt-1 line-clamp-1">
              Apatani bamboo architecture & pine camping
            </p>
          </button>
        </div>

        {/* State Filter Chips Bar */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
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
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-emerald-500 text-white shadow-md shadow-emerald-900/30'
                        : 'bg-white/10 text-stone-300 hover:bg-white/20 hover:text-white border border-white/10'
                    }`}
                  >
                    {state}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trust Factors Banner */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-stone-300 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Native Local Naga & Khasi Guides</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Authorized ILP & Border Permit Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Handpicked Homestays & 4x4 Mountain Transport</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Zero Hidden Costs & Instant Transparent Quotes</span>
          </div>
        </div>

      </div>
    </section>
  );
};
