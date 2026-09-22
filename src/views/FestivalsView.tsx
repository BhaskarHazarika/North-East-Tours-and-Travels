import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Calendar, 
  MapPin, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Music, 
  Mountain, 
  Flame,
  Search
} from 'lucide-react';
import { SupabaseFestival } from '../types/database';
import { tourService } from '../services/tourService';
import { TourPackage } from '../types';

interface FestivalsViewProps {
  onSelectSpecialTour: (tourTag: string) => void;
  onOpenCustomQuote: () => void;
}

export const FestivalsView: React.FC<FestivalsViewProps> = ({
  onSelectSpecialTour,
  onOpenCustomQuote
}) => {
  const [festivals, setFestivals] = useState<SupabaseFestival[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterState, setFilterState] = useState<string>('All');
  const [selectedFestival, setSelectedFestival] = useState<SupabaseFestival | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await tourService.getFestivals();
      setFestivals(res.data);
      if (res.data.length > 0) {
        setSelectedFestival(res.data[0]);
      }
      setLoading(false);
    }
    load();
  }, []);

  const states = ['All', ...Array.from(new Set(festivals.map(f => f.state)))];

  const filtered = festivals.filter(f => {
    if (filterState !== 'All' && f.state !== filterState) return false;
    return true;
  });

  return (
    <div id="festivals-view" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          Tribal Rituals & Wilderness Expeditions
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
          Festivals & Iconic Experiences
        </h1>
        <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
          From the roaring drums of Hornbill Festival at Kisama to the indie music melodies in Ziro's paddy fields and high-altitude Dzukou Valley trekking, experience the authentic cultural heartbeat of the Seven Sisters.
        </p>
      </div>

      {/* States Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-stone-200">
        <span className="text-xs font-bold text-stone-500 uppercase mr-1 flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-emerald-700" />
          Filter:
        </span>
        {states.map((st) => (
          <button
            key={st}
            onClick={() => setFilterState(st)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              filterState === st
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      {/* Featured Big Showcase: Hornbill or active festival */}
      {selectedFestival && (
        <div className="bg-stone-950 text-white rounded-3xl overflow-hidden shadow-xl mb-14 border border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[440px]">
              <img 
                src={selectedFestival.image} 
                alt={selectedFestival.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent flex flex-col justify-end p-6">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-500 text-stone-950 w-fit mb-2">
                  {selectedFestival.dates_approx}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">{selectedFestival.title}</h2>
                <p className="text-xs text-stone-300 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {selectedFestival.venue}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  <Flame className="w-3.5 h-3.5" />
                  Cultural Significance
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {selectedFestival.description}
                </p>

                <div className="mt-6 pt-4 border-t border-stone-800">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                    What You Will Witness & Experience
                  </h4>
                  <div className="space-y-2">
                    {selectedFestival.cultural_highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    if (selectedFestival.title.includes('Hornbill')) {
                      onSelectSpecialTour('Hornbill Festival');
                    } else if (selectedFestival.title.includes('Ziro')) {
                      onSelectSpecialTour('Ziro Festival');
                    } else if (selectedFestival.title.includes('Dzukou')) {
                      onSelectSpecialTour('Dzukou Valley');
                    } else {
                      onOpenCustomQuote();
                    }
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <span>Book Expedition For This Event</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenCustomQuote}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 font-semibold text-xs border border-stone-700 transition-all cursor-pointer"
                >
                  Request Custom Dates
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of All Festivals & Cultural Highlights */}
      <div>
        <h3 className="text-xl sm:text-2xl font-black text-stone-900 mb-6">
          Annual Festivals & Outdoor Expeditions Calendar
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((fest) => (
            <div
              key={fest.id}
              onClick={() => setSelectedFestival(fest)}
              className={`bg-white rounded-2xl border transition-all cursor-pointer overflow-hidden flex flex-col justify-between hover:shadow-md ${
                selectedFestival?.id === fest.id 
                  ? 'border-emerald-600 ring-2 ring-emerald-600/20' 
                  : 'border-stone-200 hover:border-emerald-300'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={fest.image} 
                  alt={fest.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-4">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 block mb-0.5">
                      {fest.month} • {fest.state}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {fest.title}
                    </h4>
                  </div>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-stone-950/70 text-white backdrop-blur-md">
                    {fest.dates_approx.split('(')[0]}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span className="truncate">{fest.venue}</span>
                  </div>
                  <p className="text-xs text-stone-600 line-clamp-3 mb-4 leading-relaxed">
                    {fest.significance}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                    View Schedule & Details
                    <ArrowRight className="w-3 h-3" />
                  </span>

                  <span className="text-[11px] text-stone-400">
                    {fest.cultural_highlights.length} Highlights
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainable Festival Tourism Pledge */}
      <div className="mt-14 rounded-2xl bg-emerald-900 text-emerald-100 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-800">
        <div>
          <h4 className="text-lg font-bold text-white mb-1">
            Ethical & Sustainable Festival Expeditions
          </h4>
          <p className="text-xs sm:text-sm text-emerald-200/90 max-w-2xl leading-relaxed">
            Every festival journey we run adheres strictly to indigenous community etiquette, Leave-No-Trace camping protocols, and direct economic compensation for local tribal homestays, performers, and guides.
          </p>
        </div>
        <button
          onClick={onOpenCustomQuote}
          className="px-5 py-2.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 text-xs font-extrabold whitespace-nowrap shadow-sm cursor-pointer transition-colors"
        >
          Plan a Festival Group Trip
        </button>
      </div>

    </div>
  );
};
