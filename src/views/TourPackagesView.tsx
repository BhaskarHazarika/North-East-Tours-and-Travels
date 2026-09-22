import React, { useState, useEffect, useMemo } from 'react';
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  SlidersHorizontal, 
  RotateCcw, 
  AlertCircle, 
  ArrowRight, 
  Database, 
  Search, 
  Filter,
  Crown
} from 'lucide-react';
import { TourPackage, NorthEastState, TourCategory } from '../types';
import { tourService } from '../services/tourService';
import { TourCard } from '../components/TourCard';

interface TourPackagesViewProps {
  initialStateFilter?: NorthEastState | 'All';
  onSelectTour: (tour: TourPackage, openCalculator?: boolean) => void;
  onOpenCustomQuote: () => void;
  currency: 'INR' | 'USD';
}

const CATEGORIES: TourCategory[] = [
  'All',
  'Festival Specials',
  'Trekking & Adventure',
  'Culture & Heritage',
  'Wildlife & Nature'
];

const STATES: (NorthEastState | 'All')[] = [
  'All',
  'Assam',
  'Meghalaya',
  'Arunachal Pradesh',
  'Nagaland',
  'Manipur',
  'Mizoram',
  'Tripura',
  'Sikkim'
];

export const TourPackagesView: React.FC<TourPackagesViewProps> = ({
  initialStateFilter = 'All',
  onSelectTour,
  onOpenCustomQuote,
  currency
}) => {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFromSupabase, setIsFromSupabase] = useState(false);

  // Filters
  const [selectedState, setSelectedState] = useState<NorthEastState | 'All'>(initialStateFilter);
  const [selectedCategory, setSelectedCategory] = useState<TourCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'duration'>('featured');
  const [onlyMainHighlights, setOnlyMainHighlights] = useState(false);

  useEffect(() => {
    setSelectedState(initialStateFilter);
  }, [initialStateFilter]);

  useEffect(() => {
    async function fetchPackages() {
      setLoading(true);
      const res = await tourService.getTourPackages({
        state: selectedState,
        category: selectedCategory,
        searchQuery,
        sortBy
      });
      setPackages(res.data);
      setIsFromSupabase(res.isFromSupabase);
      setLoading(false);
    }
    fetchPackages();
  }, [selectedState, selectedCategory, searchQuery, sortBy]);

  const handleReset = () => {
    setSelectedState('All');
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('featured');
    setOnlyMainHighlights(false);
  };

  const displayedPackages = useMemo(() => {
    if (!onlyMainHighlights) return packages;
    return packages.filter(p => p.specialTag === 'Main Highlight' || p.isSpecialHighlight);
  }, [packages, onlyMainHighlights]);

  const isFiltered = selectedState !== 'All' || selectedCategory !== 'All' || searchQuery !== '' || sortBy !== 'featured' || onlyMainHighlights;

  return (
    <div id="tour-packages-view" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            North East Curated Expeditions
            <span className={`ml-1.5 px-2 py-0.5 rounded-full text-[10px] ${
              isFromSupabase 
                ? 'bg-emerald-700 text-white flex items-center gap-1' 
                : 'bg-stone-200 text-stone-700'
            }`}>
              <Database className="w-2.5 h-2.5" />
              {isFromSupabase ? 'Supabase Database Connected' : 'Dynamic Catalog'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Tour Packages & Expeditions
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
            All circuits include authentic native tribal homestays, verified mountain 4x4 transport, official Inner Line Permit (ILP) clearance, and certified indigenous leaders.
          </p>
        </div>

        <button
          onClick={onOpenCustomQuote}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-stone-300 hover:border-emerald-700 bg-white text-stone-800 text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer"
        >
          <span>Need a Tailor-Made Itinerary?</span>
          <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
        </button>
      </div>

      {/* Filter and Control Bar */}
      <div className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-xs mb-8">
        
        {/* Top Filter Row: Categories + Search + Sort */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          
          {/* Category tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => {
                setOnlyMainHighlights(!onlyMainHighlights);
                if (!onlyMainHighlights) {
                  setSelectedCategory('All');
                }
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                onlyMainHighlights
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'bg-amber-100/80 text-amber-950 hover:bg-amber-200 border border-amber-300/80'
              }`}
            >
              <Crown className="w-3.5 h-3.5 text-amber-700" />
              <span>Main Highlights (5D/13D/9D)</span>
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOnlyMainHighlights(false);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat && !onlyMainHighlights
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat === 'Festival Specials' && <Sparkles className="w-3 h-3 inline mr-1 text-amber-300" />}
                {cat}
              </button>
            ))}
          </div>

          {/* Search + Sort */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-60">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search tour, rhino, caves..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8.5 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
              />
            </div>

            <div className="flex items-center gap-1.5 text-xs text-stone-600 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-stone-50 border border-stone-200 text-stone-800 text-xs rounded-lg px-2.5 py-1.5 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
              >
                <option value="featured">Featured / Best</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="duration">Duration (Days)</option>
              </select>
            </div>

            {isFiltered && (
              <button
                onClick={handleReset}
                className="text-xs text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 cursor-pointer shrink-0"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* State Selector Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-xs">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="font-bold text-stone-500 uppercase tracking-wider text-[11px] flex items-center gap-1 shrink-0">
              <MapPin className="w-3 h-3 text-emerald-600" />
              State:
            </span>
            <div className="flex items-center gap-1">
              {STATES.map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedState(st)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedState === st
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          <div className="text-stone-500 text-xs shrink-0">
            Showing <strong className="text-stone-900">{displayedPackages.length}</strong> {onlyMainHighlights ? 'signature highlights' : 'tours'}
          </div>
        </div>

      </div>

      {/* Tour Cards Grid */}
      {loading ? (
        <div className="py-20 text-center text-stone-500 text-sm flex flex-col items-center justify-center">
          <div className="w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin mb-3"></div>
          Loading authentic North-East expeditions...
        </div>
      ) : displayedPackages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedPackages.map((tour) => (
            <TourCard 
              key={tour.id}
              tour={tour}
              onSelect={onSelectTour}
              currency={currency}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-white rounded-3xl border border-stone-200 p-8 shadow-xs">
          <AlertCircle className="w-12 h-12 text-stone-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-stone-800">No tour packages found</h3>
          <p className="text-xs text-stone-500 mt-1 max-w-md mx-auto">
            Try adjusting your search keywords or state filters, or contact our trip specialists to tailor-make a custom route.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
            <button
              onClick={onOpenCustomQuote}
              className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-colors cursor-pointer"
            >
              Request Custom Route
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
