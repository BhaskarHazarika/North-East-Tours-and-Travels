import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  BedDouble, 
  Star, 
  Coffee, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  Filter, 
  SlidersHorizontal,
  Info,
  MapPin
} from 'lucide-react';
import { HOTEL_CATALOG, HOTEL_TARIFFS, HotelProperty, DestinationHotelTariff } from '../data/hotels';

interface HotelTariffCardProps {
  highlightDestination?: string;
  selectedTier?: 'standard' | 'deluxe';
  onSelectDestination?: (dest: string) => void;
  compact?: boolean;
}

export const HotelTariffCard: React.FC<HotelTariffCardProps> = ({
  highlightDestination,
  selectedTier = 'standard',
  onSelectDestination,
  compact = false
}) => {
  const [activeView, setActiveView] = useState<'catalog' | 'benchmarks'>('catalog');
  const [selectedDestination, setSelectedDestination] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const destinationsList = useMemo(() => {
    const list = Array.from(new Set(HOTEL_CATALOG.map(h => h.destination)));
    return ['All', ...list];
  }, []);

  const categoriesList = ['All', 'Budget', 'Standard', 'Premium', 'Luxury'];

  const filteredProperties = useMemo(() => {
    return HOTEL_CATALOG.filter(item => {
      // Destination filter
      if (selectedDestination !== 'All' && item.destination !== selectedDestination) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'All') {
        const catLower = item.category.toLowerCase();
        if (selectedCategory === 'Budget' && !catLower.includes('budget') && !catLower.includes('lodge') && !catLower.includes('govt')) return false;
        if (selectedCategory === 'Standard' && !catLower.includes('standard')) return false;
        if (selectedCategory === 'Premium' && !catLower.includes('premium')) return false;
        if (selectedCategory === 'Luxury' && !catLower.includes('luxury')) return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return item.hotel.toLowerCase().includes(q) || 
               item.destination.toLowerCase().includes(q) ||
               item.category.toLowerCase().includes(q);
      }
      return true;
    });
  }, [selectedDestination, selectedCategory, searchQuery]);

  const getCategoryBadgeClass = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('luxury')) {
      return 'bg-amber-100 text-amber-900 border-amber-300 font-bold';
    }
    if (cat.includes('premium')) {
      return 'bg-purple-100 text-purple-900 border-purple-200 font-semibold';
    }
    if (cat.includes('standard')) {
      return 'bg-blue-100 text-blue-900 border-blue-200 font-semibold';
    }
    return 'bg-stone-100 text-stone-700 border-stone-200';
  };

  return (
    <div id="hotel-tariff-table-wrapper" className="w-full bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
      
      {/* Header Strip matching agency branding */}
      <div className="bg-stone-900 text-white p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-1 border border-blue-400/30">
            <Building2 className="w-3.5 h-3.5" />
            Official North East Accommodation Tariff Card
          </div>
          <h3 className="text-base sm:text-lg font-black tracking-tight text-white">
            Destination Hotel Price List & Stay Benchmarks
          </h3>
          <p className="text-xs text-stone-300 mt-0.5">
            100 verified properties across Guwahati, Shillong, Cherrapunjee, Kaziranga, Tezpur, Dirang, Tawang, Bomdila, Majuli & Nameri.
          </p>
        </div>

        {/* View Mode Toggle & Badges */}
        <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-auto shrink-0">
          <div className="flex items-center bg-stone-800 p-1 rounded-xl border border-stone-700 text-xs">
            <button
              type="button"
              onClick={() => setActiveView('catalog')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                activeView === 'catalog'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              100 Properties Rate Sheet
            </button>
            <button
              type="button"
              onClick={() => setActiveView('benchmarks')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                activeView === 'benchmarks'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Destination Summary
            </button>
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 px-2.5 py-1.5 rounded-lg border border-emerald-500/30">
            <Coffee className="w-3.5 h-3.5 text-emerald-400" />
            CP (Breakfast) / MAP Plans
          </span>
        </div>
      </div>

      {activeView === 'catalog' ? (
        <div>
          {/* Filters Bar */}
          <div className="bg-stone-50 p-4 border-b border-stone-200 space-y-3">
            
            {/* Top row: Search and Category */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search hotel, resort or cottage..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-stone-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Category Filter Chips */}
              <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 text-xs">
                <span className="font-semibold text-stone-500 text-[11px] shrink-0 mr-1">Tier:</span>
                {categoriesList.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-blue-700 text-white shadow-xs'
                        : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom row: Destination Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="font-semibold text-stone-500 text-[11px] shrink-0 mr-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-600" />
                Destination:
              </span>
              {destinationsList.map((dest) => (
                <button
                  key={dest}
                  type="button"
                  onClick={() => setSelectedDestination(dest)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedDestination === dest
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {dest} {dest === 'All' ? `(${HOTEL_CATALOG.length})` : ''}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
              <span>Showing <strong>{filteredProperties.length}</strong> of {HOTEL_CATALOG.length} verified hotel properties</span>
              <span>All rates in Indian Rupees (₹) • CP = Continental Plan (Room + Breakfast)</span>
            </div>
          </div>

          {/* Full Hotel Catalog Table */}
          <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="sticky top-0 z-10 bg-blue-950 text-white font-bold uppercase tracking-wider text-[11px] shadow-xs">
                <tr>
                  <th className="py-3 px-4">Destination</th>
                  <th className="py-3 px-4">Hotel / Room Type</th>
                  <th className="py-3 px-3 text-center">Category</th>
                  <th className="py-3 px-4 text-right bg-blue-900 text-blue-100 font-bold">
                    B2B NET (₹)
                  </th>
                  <th className="py-3 px-4 text-right bg-blue-950 text-amber-300 font-extrabold border-l border-blue-900">
                    Suggested FIT Sell (₹)
                  </th>
                  <th className="py-3 px-3 text-center">Plan</th>
                  {onSelectDestination && <th className="py-3 px-3 text-center">Action</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {filteredProperties.map((prop) => (
                  <tr 
                    key={prop.id}
                    className="hover:bg-blue-50/40 transition-colors"
                  >
                    {/* Destination */}
                    <td className="py-3 px-4 font-bold text-stone-900 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{prop.destination}</span>
                      </div>
                      <span className="text-[10px] text-stone-500 font-normal block pl-5">
                        {prop.state}
                      </span>
                    </td>

                    {/* Hotel / Room Type */}
                    <td className="py-3 px-4 font-semibold text-stone-900">
                      <div className="text-xs sm:text-sm font-bold text-stone-900">
                        {prop.hotel}
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className={`inline-block px-2 py-0.5 rounded text-[11px] border ${getCategoryBadgeClass(prop.category)}`}>
                        {prop.category}
                      </span>
                    </td>

                    {/* B2B NET */}
                    <td className="py-3 px-4 text-right font-mono font-bold text-stone-700 bg-stone-50/60 whitespace-nowrap">
                      ₹{prop.b2bNet.toLocaleString('en-IN')}
                    </td>

                    {/* Suggested FIT Sell */}
                    <td className="py-3 px-4 text-right font-mono text-xs sm:text-sm font-extrabold text-blue-800 bg-blue-50/40 border-l border-stone-200 whitespace-nowrap">
                      ₹{prop.suggestedFitSell.toLocaleString('en-IN')}
                    </td>

                    {/* Plan */}
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-extrabold ${
                        prop.plan === 'MAP' 
                          ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                          : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      }`}>
                        {prop.plan}
                      </span>
                    </td>

                    {/* Action */}
                    {onSelectDestination && (
                      <td className="py-3 px-3 text-center whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => onSelectDestination(prop.destination)}
                          className="px-2.5 py-1 rounded-lg text-xs font-bold bg-stone-100 text-stone-800 hover:bg-emerald-700 hover:text-white transition-all cursor-pointer"
                        >
                          Book Stay
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Destination Summary View (Standard vs Deluxe 3-Star Benchmarks) */
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-blue-950 text-white font-bold text-xs uppercase tracking-wider">
                <th className="py-3.5 px-4 sm:px-5">Destination</th>
                <th className="py-3.5 px-4 text-center bg-blue-900/90 text-blue-100 font-extrabold border-l border-r border-blue-800/40">
                  Standard 3★ Tier <br className="sm:hidden" />
                  <span className="text-[11px] font-normal normal-case text-blue-200">(Rs./night)</span>
                </th>
                <th className="py-3.5 px-4 text-center bg-blue-950 text-amber-300 font-extrabold">
                  Deluxe 3-Star Tier <br className="sm:hidden" />
                  <span className="text-[11px] font-normal normal-case text-blue-200">(Rs./night)</span>
                </th>
                {!compact && (
                  <th className="py-3.5 px-4 text-right hidden md:table-cell text-stone-300 font-medium">
                    Upgrade Delta (Per Room)
                  </th>
                )}
                {onSelectDestination && <th className="py-3.5 px-3 text-center">Action</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {HOTEL_TARIFFS.map((hotel) => {
                const upgradeDiff = hotel.deluxeRatePerNight - hotel.standardRatePerNight;
                return (
                  <tr
                    key={hotel.destination}
                    className="hover:bg-blue-50/30 transition-colors"
                  >
                    {/* Destination */}
                    <td className="py-3 px-4 sm:px-5 font-bold text-stone-900">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm">{hotel.destination}</span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                          hotel.state === 'Assam'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : hotel.state === 'Meghalaya'
                            ? 'bg-teal-50 text-teal-800 border-teal-200'
                            : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}>
                          {hotel.state}
                        </span>
                      </div>
                      {hotel.altitudeOrZone && (
                        <div className="text-[11px] text-stone-600 font-normal mt-0.5">
                          {hotel.altitudeOrZone}
                        </div>
                      )}
                    </td>

                    {/* Standard Tier Rate */}
                    <td className="py-3 px-4 text-center font-bold text-blue-700 text-sm sm:text-base font-mono bg-blue-50/20 border-l border-r border-stone-200">
                      Rs.{hotel.standardRatePerNight.toLocaleString('en-IN')}
                      <span className="block text-[10px] font-normal text-stone-600 mt-0.5">
                        (₹{Math.round(hotel.standardRatePerNight / 2).toLocaleString('en-IN')}/person twin-share)
                      </span>
                    </td>

                    {/* Deluxe 3-Star Tier Rate */}
                    <td className="py-3 px-4 text-center font-bold text-blue-800 text-sm sm:text-base font-mono bg-blue-50/40">
                      Rs.{hotel.deluxeRatePerNight.toLocaleString('en-IN')}
                      <span className="block text-[10px] font-normal text-stone-600 mt-0.5">
                        (₹{Math.round(hotel.deluxeRatePerNight / 2).toLocaleString('en-IN')}/person twin-share)
                      </span>
                    </td>

                    {/* Upgrade Delta */}
                    {!compact && (
                      <td className="py-3 px-4 text-right font-mono text-stone-700 hidden md:table-cell">
                        <span className="inline-block px-2 py-0.5 rounded bg-stone-100 text-stone-800 font-bold text-xs">
                          +Rs.{upgradeDiff.toLocaleString('en-IN')}/night
                        </span>
                        <span className="block text-[10px] text-stone-600 mt-0.5">
                          (+₹{Math.round(upgradeDiff / 2).toLocaleString('en-IN')}/person)
                        </span>
                      </td>
                    )}

                    {onSelectDestination && (
                      <td className="py-3 px-3 text-center">
                        <button
                          type="button"
                          onClick={() => onSelectDestination(hotel.destination)}
                          className="px-2.5 py-1 rounded-lg text-xs font-bold bg-stone-100 text-stone-800 hover:bg-blue-700 hover:text-white transition-all cursor-pointer"
                        >
                          View Circuits
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Footer Details & Inclusions */}
      <div className="bg-stone-50 border-t border-stone-200 p-4 text-xs text-stone-600 space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-800 block text-xs">Plan Definitions:</strong>
              <span className="text-[11px]"><strong>CP</strong>: Continental Plan (Accommodation + Breakfast). <strong>MAP</strong>: Modified American Plan (Accommodation + Breakfast + Dinner).</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-800 block text-xs">Direct Contract Rates:</strong>
              <span className="text-[11px]">B2B NET prices represent our pre-contracted seasonal base cost. Suggested FIT Sell reflects direct traveler pricing with full concierge support.</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-800 block text-xs">Transparent Pricing:</strong>
              <span className="text-[11px]">All tariffs include applicable local taxes, GST, and permits. Twin sharing basis (2 guests per room).</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
