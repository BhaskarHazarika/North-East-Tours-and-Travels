import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  Compass,
  FileCheck
} from 'lucide-react';
import { TourPackage } from '../types';

interface TourCardProps {
  tour: TourPackage;
  onSelect: (tour: TourPackage, openCalculator?: boolean) => void;
  currency: 'INR' | 'USD';
}

export const TourCard: React.FC<TourCardProps> = ({ tour, onSelect, currency }) => {
  const formatPrice = (inr: number) => {
    if (currency === 'USD') {
      const usd = Math.round(inr / 85);
      return `$${usd.toLocaleString()}`;
    }
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  return (
    <div 
      id={`tour-card-${tour.id}`}
      className="group flex flex-col bg-white rounded-2xl border border-stone-200 hover:border-emerald-500/50 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Card Image */}
      <div className="relative h-56 w-full overflow-hidden bg-stone-100">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-1 rounded-md bg-stone-900/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1 border border-white/10">
            <MapPin className="w-3 h-3 text-emerald-400" />
            {tour.state}
          </span>

          {tour.tier && (
            <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold shadow-xs ${
              tour.tier.includes('Deluxe') 
                ? 'bg-purple-900/90 text-purple-200 border border-purple-400/30'
                : tour.tier.includes('Standard')
                ? 'bg-blue-900/90 text-blue-200 border border-blue-400/30'
                : 'bg-emerald-900/90 text-emerald-200 border border-emerald-400/30'
            }`}>
              {tour.tier}
            </span>
          )}

          {tour.specialTag && (
            <span className="px-2.5 py-1 rounded-md bg-amber-500 text-stone-950 text-xs font-bold shadow-xs">
              {tour.specialTag}
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-stone-900 text-xs font-bold flex items-center gap-1 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-stone-600" />
            {tour.durationDays}D / {tour.durationNights}N
          </span>
        </div>

        {/* Bottom overlay: Rating & Difficulty */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-bold">{tour.rating}</span>
            <span className="text-stone-300">({tour.reviewsCount})</span>
          </div>

          <span className="text-[11px] font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
            {tour.difficulty} Grade
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
            {tour.title}
          </h3>
          <p className="text-xs text-stone-500 font-medium mt-0.5 line-clamp-1">
            {tour.subtitle}
          </p>

          {/* Highlights pills */}
          <div className="mt-3.5 space-y-1.5">
            {tour.highlights.slice(0, 3).map((hl, i) => (
              <div key={i} className="flex items-start gap-1.5 text-xs text-stone-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>

          {/* Quick info row */}
          <div className="mt-4 pt-3 border-t border-stone-100 grid grid-cols-2 gap-2 text-xs text-stone-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span className="truncate">{tour.bestSeason}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span className="truncate">{tour.permitRequired ? 'ILP Required (We Process)' : 'No Permit Required'}</span>
            </div>
          </div>
        </div>

        {/* Price & Action Area */}
        <div className="mt-5 pt-4 border-t border-stone-200">
          <div className="flex items-baseline justify-between mb-1.5">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-emerald-800 font-bold block">
                {tour.tier ? `${tour.tier} Land Package` : 'Land Package'}
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black text-stone-900 font-mono">
                  {formatPrice(tour.basePricePerPerson)}
                </span>
                <span className="text-xs text-stone-500">/ person</span>
              </div>
            </div>

            <div className="text-right">
              {tour.priceRange ? (
                <span className="text-[11px] font-semibold text-stone-500 block">
                  Range: ₹{tour.priceRange.min.toLocaleString('en-IN')} – ₹{tour.priceRange.max.toLocaleString('en-IN')}
                </span>
              ) : tour.originalPricePerPerson ? (
                <span className="text-xs text-stone-400 line-through block">
                  {formatPrice(tour.originalPricePerPerson)}
                </span>
              ) : null}
              <span className="text-[10px] text-stone-400">Twin sharing • Ex-Guwahati</span>
            </div>
          </div>

          {tour.inclusionsSummary && (
            <p className="text-[11px] text-stone-600 bg-stone-50 rounded-lg px-2 py-1 mb-3 line-clamp-1 border border-stone-200/60">
              <span className="font-semibold text-stone-700">Includes:</span> {tour.inclusionsSummary}
            </p>
          )}

          <div className="grid grid-cols-2 gap-2">
            <button
              id={`card-view-details-${tour.id}`}
              onClick={() => onSelect(tour, false)}
              className="w-full py-2.5 px-3 rounded-xl border border-stone-300 hover:border-emerald-600 text-stone-700 hover:text-emerald-700 text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tour Details</span>
            </button>

            <button
              id={`card-view-price-${tour.id}`}
              onClick={() => onSelect(tour, true)}
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Calculate Price</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
