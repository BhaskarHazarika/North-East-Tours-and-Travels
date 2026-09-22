import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Mountain, 
  Sparkles,
  Search,
  ExternalLink
} from 'lucide-react';
import { SupabaseDestination } from '../types/database';
import { tourService } from '../services/tourService';
import { NorthEastState } from '../types';

interface DestinationsViewProps {
  onSelectStateForPackages: (state: NorthEastState) => void;
  onOpenCustomQuote: () => void;
}

export const DestinationsView: React.FC<DestinationsViewProps> = ({
  onSelectStateForPackages,
  onOpenCustomQuote
}) => {
  const [destinations, setDestinations] = useState<SupabaseDestination[]>([]);
  const [activeDestination, setActiveDestination] = useState<SupabaseDestination | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const res = await tourService.getDestinations();
      setDestinations(res.data);
      if (res.data.length > 0) {
        setActiveDestination(res.data[0]);
      }
      setLoading(false);
    }
    loadData();
  }, []);

  const filtered = destinations.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="destinations-view" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Compass className="w-3.5 h-3.5 text-emerald-700" />
          The Eight Paradise States
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
          Explore North-East India
        </h1>
        <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
          From the cloud-kissed living root bridges of Meghalaya to the alpine Himalayan ridges of Arunachal and the tribal festivals of Nagaland, discover our comprehensive state-by-state guides.
        </p>

        {/* Search bar */}
        <div className="mt-6 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5 pointer-events-none" />
          <input 
            type="text"
            placeholder="Search state, wildlife, attractions, root bridges..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-800 shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
          />
        </div>
      </div>

      {/* State Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-stone-200 scrollbar-none">
        {destinations.map((dest) => (
          <button
            key={dest.id}
            onClick={() => setActiveDestination(dest)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              activeDestination?.id === dest.id
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            {dest.name}
          </button>
        ))}
      </div>

      {/* Active State Featured Spotlight */}
      {activeDestination && (
        <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm mb-16 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[460px]">
              <img 
                src={activeDestination.hero_image} 
                alt={activeDestination.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/20 backdrop-blur-md border border-white/20 text-white">
                    Capital: {activeDestination.capital}
                  </span>
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold backdrop-blur-md ${
                    activeDestination.permit_type.includes('ILP')
                      ? 'bg-amber-500/80 text-white'
                      : 'bg-emerald-600/80 text-white'
                  }`}>
                    {activeDestination.permit_type}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black">{activeDestination.name}</h2>
                <p className="text-xs sm:text-sm text-stone-200 mt-1 italic line-clamp-2">
                  "{activeDestination.tagline}"
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-stone-900 mb-2">
                  About {activeDestination.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {activeDestination.description}
                </p>

                {/* Best season & Permit */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-stone-900 font-bold">Best Season to Visit</strong>
                      <span className="text-stone-600 leading-tight">{activeDestination.best_time_to_visit}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-stone-900 font-bold">Permit Guidelines</strong>
                      <span className="text-stone-600 leading-tight">{activeDestination.permit_details}</span>
                    </div>
                  </div>
                </div>

                {/* Top Attractions List */}
                <div className="mt-6">
                  <h4 className="text-xs font-extrabold text-stone-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Key Highlights & Attractions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeDestination.top_attractions.map((attraction, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{attraction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onSelectStateForPackages(activeDestination.name)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
                >
                  <span>View {activeDestination.name} Tour Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenCustomQuote}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs border border-stone-200 transition-all cursor-pointer"
                >
                  <span>Plan Custom {activeDestination.name} Route</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Grid of All 8 States */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900">
              All 8 North-Eastern States
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Select any state card to inspect permits, best seasons, and curated routes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              onClick={() => setActiveDestination(dest)}
              className={`group bg-white rounded-2xl border transition-all cursor-pointer overflow-hidden flex flex-col justify-between hover:shadow-md ${
                activeDestination?.id === dest.id 
                  ? 'border-emerald-600 ring-2 ring-emerald-600/20' 
                  : 'border-stone-200 hover:border-emerald-300'
              }`}
            >
              <div className="relative h-44 overflow-hidden">
                <img 
                  src={dest.hero_image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-3.5">
                  <div>
                    <span className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wider block">
                      {dest.capital}
                    </span>
                    <h4 className="text-lg font-bold text-white leading-tight">
                      {dest.name}
                    </h4>
                  </div>
                </div>

                <div className="absolute top-2.5 right-2.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold shadow-xs ${
                    dest.permit_type.includes('ILP')
                      ? 'bg-amber-600 text-white'
                      : 'bg-emerald-700 text-white'
                  }`}>
                    {dest.permit_type.includes('ILP') ? 'ILP' : 'No ILP'}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-stone-600 line-clamp-2 mb-3">
                  {dest.tagline}
                </p>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-emerald-800 flex items-center gap-1 group-hover:underline">
                    Explore Details
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-[11px] text-stone-400">
                    {dest.top_attractions.length} Top Sites
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
