import React from 'react';
import { 
  Crown, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  Compass, 
  Sparkles, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { TourPackage } from '../types';
import { MAIN_HIGHLIGHTS_INFO, MAIN_HIGHLIGHT_PACKAGES_IDS } from '../data/packages';

interface MainHighlightsSectionProps {
  allPackages: TourPackage[];
  onSelectPackage: (pkg: TourPackage, openCalculatorDirectly?: boolean) => void;
  currency: 'INR' | 'USD';
}

export const MainHighlightsSection: React.FC<MainHighlightsSectionProps> = ({
  allPackages,
  onSelectPackage,
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
    <section id="main-highlights-section" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-extrabold uppercase tracking-wider border border-emerald-300 shadow-xs">
                <Crown className="w-4 h-4 text-amber-600 fill-amber-500" />
                <span>Signature Flagship Expeditions</span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight leading-tight">
              Main Highlights of North East India
            </h2>
            
            <p className="mt-3 text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
              Our three most requested, highly recommended signature routes. From the cloud canyons and living root bridges of Meghalaya to Kaziranga’s wild rhino grasslands and the snow-dusted Himalayan passes of Tawang.
            </p>
          </div>

          {/* Guarantee Pill & Quick Brochure Button */}
          <div className="flex flex-col gap-2.5 shrink-0 lg:max-w-xs w-full sm:w-auto">
            <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900">All-Inclusive Guarantee</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Private 4x4 vehicles, ILP permits, indigenous guides & verified stays.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Main Highlight Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MAIN_HIGHLIGHTS_INFO.map((item, index) => {
            const tour = allPackages.find((p) => p.id === item.id);
            const basePrice = tour ? tour.basePricePerPerson : item.basePriceINR;
            const originalPrice = tour?.originalPricePerPerson;

            return (
              <div 
                key={item.id}
                id={`main-highlight-card-${item.id}`}
                className="group flex flex-col rounded-3xl bg-white border-2 border-stone-200 hover:border-emerald-600 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              >
                {/* Ranking Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 rounded-xl bg-stone-900/90 backdrop-blur-md text-amber-300 text-xs font-black tracking-wide flex items-center gap-1.5 border border-white/20 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Highlight #{index + 1}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-black shadow-md">
                    {item.durationLabel}
                  </span>
                </div>

                {/* Image Showcase */}
                <div 
                  className="relative h-64 w-full overflow-hidden cursor-pointer"
                  onClick={() => tour && onSelectPackage(tour)}
                >
                  <img 
                    src={item.heroImage} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                  
                  {/* States & Badge overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md font-semibold flex items-center gap-1 border border-white/10 text-emerald-300">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {item.statesLabel}
                    </span>
                    <span className="text-[11px] font-medium text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-md border border-amber-500/30">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Subtitle */}
                    <h3 
                      onClick={() => tour && onSelectPackage(tour)}
                      className="text-xl font-extrabold text-stone-900 group-hover:text-emerald-700 transition-colors leading-snug cursor-pointer"
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700 mt-1">
                      {item.subtitle}
                    </p>

                    {/* Route Flow */}
                    <div className="mt-4 p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-[11px] text-stone-600">
                      <span className="font-bold text-stone-800 flex items-center gap-1 mb-1">
                        <Compass className="w-3.5 h-3.5 text-emerald-600" />
                        Circuit Path:
                      </span>
                      <p className="leading-relaxed font-mono text-[10.5px] text-stone-700">
                        {item.routeString}
                      </p>
                    </div>

                    {/* Key Highlights Checkmarks */}
                    <div className="mt-4 space-y-1.5">
                      {item.highlightPills.map((pill, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-stone-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Actions */}
                  <div className="mt-6 pt-5 border-t border-stone-200">
                    <div className="flex items-baseline justify-between mb-4">
                      <div>
                        <span className="text-[10px] text-emerald-800 uppercase tracking-wider font-bold block">
                          {tour?.tier ? `${tour.tier} Land Package` : 'Land Package'}
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black text-stone-900 font-mono">
                            {formatPrice(basePrice)}
                          </span>
                          <span className="text-xs text-stone-500 font-medium">/ person</span>
                        </div>
                        <span className="text-[10.5px] text-stone-400 block mt-0.5">
                          Twin sharing • Land-only ex-Guwahati {tour?.priceRange && `(Range: ₹${tour.priceRange.min.toLocaleString('en-IN')} – ₹${tour.priceRange.max.toLocaleString('en-IN')})`}
                        </span>
                      </div>

                      {originalPrice && (
                        <div className="text-right">
                          <span className="text-xs text-stone-400 line-through">
                            {formatPrice(originalPrice)}
                          </span>
                          <span className="block text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                            Save {Math.round(((originalPrice - basePrice) / originalPrice) * 100)}%
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        onClick={() => tour && onSelectPackage(tour, false)}
                        className="w-full py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                      >
                        <span>View Plan</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => tour && onSelectPackage(tour, true)}
                        className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        <span>Estimate Price</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Quick CTA */}
        <div className="mt-12 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
                Want to combine or customize these highlights?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                We can tailor days, add extra nights in Cherrapunji, Kaziranga or Tawang, or adjust vehicle & accommodation tiers.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => {
                const tour = allPackages.find((p) => p.id === 'meghalaya-assam-arunachal-13d12n-circuit');
                if (tour) onSelectPackage(tour, true);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer"
            >
              <span>Customize Any Highlight</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
