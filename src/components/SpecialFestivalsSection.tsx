import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Calculator,
  Info
} from 'lucide-react';
import { FESTIVAL_HIGHLIGHTS } from '../data/packages';
import { TourPackage } from '../types';

interface SpecialFestivalsSectionProps {
  onSelectPackage: (pkg: TourPackage, openCalculatorDirectly?: boolean) => void;
  allPackages: TourPackage[];
  currency: 'INR' | 'USD';
}

export const SpecialFestivalsSection: React.FC<SpecialFestivalsSectionProps> = ({
  onSelectPackage,
  allPackages,
  currency
}) => {
  const formatPrice = (inr: number) => {
    if (currency === 'USD') {
      const usd = Math.round(inr / 85);
      return `$${usd.toLocaleString()}`;
    }
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  return (
    <section id="special-festivals-section" className="py-16 bg-gradient-to-b from-stone-900 to-stone-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              North East Signature Celebrations
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Hornbill, Dzukou Valley & Ziro Special Departures
            </h2>
            <p className="mt-2 text-stone-400 text-sm sm:text-base max-w-2xl">
              Hand-crafted expeditions for the North East’s three most celebrated cultural spectacles. 
              Complete with confirmed permits, prime camping/homestay slots, and native tribal guides.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 px-3.5 py-2 rounded-xl border border-emerald-800/40">
            <Info className="w-4 h-4 shrink-0" />
            <span>Slots for Dec Hornbill & Sept Ziro are limited due to permit quotas</span>
          </div>
        </div>

        {/* 3 Featured Spotlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FESTIVAL_HIGHLIGHTS.map((item) => {
            const linkedTour = allPackages.find((p) => p.id === item.linkedPackageId);
            const basePrice = linkedTour ? linkedTour.basePricePerPerson : 24000;

            return (
              <div 
                key={item.id}
                id={`special-card-${item.id}`}
                className="group flex flex-col rounded-2xl bg-stone-800/80 border border-stone-700/80 hover:border-emerald-500/60 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Header with Badges */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1 border border-white/20">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      {item.state}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-bold shadow-md">
                      Special Edition
                    </span>
                  </div>

                  {/* Month / Dates bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-stone-200 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="flex items-center gap-1.5 font-medium text-amber-300">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.month}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-medium text-emerald-300 mt-0.5">
                      {item.tagline}
                    </p>

                    <p className="mt-3 text-stone-300 text-xs leading-relaxed">
                      {item.description}
                    </p>

                    {/* Quick Stats Grid */}
                    <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-stone-300">
                      {item.quickStats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 bg-stone-700/50 p-2 rounded-lg">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="truncate">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action CTA */}
                  <div className="mt-6 pt-4 border-t border-stone-700 flex flex-col gap-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[11px] text-stone-400 block">Starting Estimate</span>
                        <span className="text-xl font-black text-white font-mono">
                          {formatPrice(basePrice)}
                        </span>
                        <span className="text-[11px] text-stone-400 ml-1">/ person</span>
                      </div>
                      {linkedTour && linkedTour.originalPricePerPerson && (
                        <span className="text-xs text-stone-500 line-through">
                          {formatPrice(linkedTour.originalPricePerPerson)}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        id={`special-view-plan-${item.id}`}
                        onClick={() => linkedTour && onSelectPackage(linkedTour, false)}
                        className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Compass className="w-3.5 h-3.5 text-emerald-400" />
                        View Tour Plan
                      </button>

                      <button
                        id={`special-est-price-${item.id}`}
                        onClick={() => linkedTour && onSelectPackage(linkedTour, true)}
                        className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        Estimate Price
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Combo Tour Banner: Hornbill + Dzukou Combo */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-amber-950/60 via-stone-800 to-emerald-950/60 border border-amber-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              Ultimate 8-Day Combo Expedition
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Can't choose? Combine Hornbill Festival + Dzukou Valley Trek!
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Experience 3 days of high-octane tribal warrior celebrations at Kisama followed directly by 3 days of high-altitude camping in the peaceful silence of Dzukou Valley.
            </p>
          </div>

          <button
            id="special-combo-btn"
            onClick={() => {
              const combo = allPackages.find(p => p.id === 'hornbill-dzukou-combo');
              if (combo) onSelectPackage(combo);
            }}
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm flex items-center gap-2 shadow-lg transition-all cursor-pointer"
          >
            <span>View 8-Day Combo Itinerary</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
