import React from 'react';
import { Filter, Sparkles, MapPin, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { NorthEastState, TourCategory } from '../types';

interface PackageFilterBarProps {
  selectedState: NorthEastState | 'All';
  setSelectedState: (st: NorthEastState | 'All') => void;
  selectedCategory: TourCategory;
  setSelectedCategory: (cat: TourCategory) => void;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'duration';
  setSortBy: (sort: 'featured' | 'price-asc' | 'price-desc' | 'duration') => void;
  totalResults: number;
  onReset: () => void;
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
  'Nagaland',
  'Arunachal Pradesh',
  'Meghalaya',
  'Assam'
];

export const PackageFilterBar: React.FC<PackageFilterBarProps> = ({
  selectedState,
  setSelectedState,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  totalResults,
  onReset
}) => {
  const isFiltered = selectedState !== 'All' || selectedCategory !== 'All' || sortBy !== 'featured';

  return (
    <div id="filter-bar" className="bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-xs mb-8">
      
      {/* Category Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {cat === 'Festival Specials' && <Sparkles className="w-3 h-3 inline mr-1 text-amber-300" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Sort & Reset */}
        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-medium hidden sm:inline">Sort:</span>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-stone-50 border border-stone-200 text-stone-800 text-xs rounded-lg px-2.5 py-1.5 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
            >
              <option value="featured">Featured / Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="duration">Duration (Days)</option>
            </select>
          </div>

          {isFiltered && (
            <button
              id="reset-filter-btn"
              onClick={onReset}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          )}
        </div>
      </div>

      {/* State Filter Row & Count */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-stone-500 uppercase tracking-wider text-[11px] flex items-center gap-1">
            <MapPin className="w-3 h-3 text-emerald-600" />
            State:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {STATES.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedState(st)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
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

        <div className="text-stone-500 text-xs">
          Showing <strong className="text-stone-900">{totalResults}</strong> tour packages
        </div>
      </div>

    </div>
  );
};
