import React, { useState } from 'react';
import { Building2, ShieldCheck, BedDouble, Star, Coffee, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { HOTEL_TARIFFS, DestinationHotelTariff } from '../data/hotels';

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
  const [selectedStateFilter, setSelectedStateFilter] = useState<'All' | 'Assam' | 'Meghalaya' | 'Arunachal Pradesh'>('All');

  const filteredHotels = HOTEL_TARIFFS.filter(item => {
    if (selectedStateFilter === 'All') return true;
    return item.state === selectedStateFilter;
  });

  return (
    <div id="hotel-tariff-table-wrapper" className="w-full bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
      {/* Header Strip matching the table branding */}
      <div className="bg-stone-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-1 border border-blue-400/30">
            <Building2 className="w-3.5 h-3.5" />
            Official Destination Accommodation Rate Card
          </div>
          <h3 className="text-base sm:text-lg font-black tracking-tight text-white">
            Destination Hotel Tariffs (Standard vs Deluxe 3-Star)
          </h3>
          <p className="text-xs text-stone-300 mt-0.5">
            Calibrated per-room nightly rates across key North East transit and highland stations (Twin-Sharing Basis).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/30">
            <Coffee className="w-3.5 h-3.5 text-emerald-400" />
            Breakfast Included
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-300 bg-blue-950/80 px-2.5 py-1 rounded-lg border border-blue-500/30">
            <BedDouble className="w-3.5 h-3.5 text-blue-400" />
            Twin Sharing (2 Pax)
          </span>
        </div>
      </div>

      {/* State Filter Pills */}
      <div className="bg-stone-50 px-4 py-2.5 border-b border-stone-200 flex items-center justify-between flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-stone-500 text-[11px]">Filter Destination:</span>
          {(['All', 'Assam', 'Meghalaya', 'Arunachal Pradesh'] as const).map((state) => (
            <button
              key={state}
              type="button"
              onClick={() => setSelectedStateFilter(state)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedStateFilter === state
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
              }`}
            >
              {state} {state === 'All' ? `(${HOTEL_TARIFFS.length})` : ''}
            </button>
          ))}
        </div>

        <div className="text-[11px] text-stone-500 hidden sm:block">
          Rates in INR (₹) per room / night with taxes & permits
        </div>
      </div>

      {/* Table Container - matching the exact columns from user image */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-blue-950 text-white font-bold text-xs uppercase tracking-wider">
              <th className="py-3.5 px-4 sm:px-5">Destination</th>
              <th className="py-3.5 px-4 text-center bg-blue-900/90 text-blue-100 font-extrabold border-l border-r border-blue-800/40">
                Standard Tier <br className="sm:hidden" />
                <span className="text-[11px] font-normal normal-case text-blue-200">(Rs./night)</span>
              </th>
              <th className="py-3.5 px-4 text-center bg-blue-950 text-blue-100 font-extrabold">
                Deluxe 3-Star Tier <br className="sm:hidden" />
                <span className="text-[11px] font-normal normal-case text-blue-200">(Rs./night)</span>
              </th>
              {!compact && (
                <th className="py-3.5 px-4 text-right hidden md:table-cell text-stone-300 font-medium">
                  Upgrade Delta (Per Room)
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {filteredHotels.map((hotel) => {
              const isHighlighted = highlightDestination && 
                hotel.destination.toLowerCase().includes(highlightDestination.toLowerCase());
              const upgradeDiff = hotel.deluxeRatePerNight - hotel.standardRatePerNight;

              return (
                <tr
                  key={hotel.destination}
                  onClick={() => onSelectDestination && onSelectDestination(hotel.destination)}
                  className={`transition-colors ${
                    isHighlighted
                      ? 'bg-amber-50/90 font-medium'
                      : 'hover:bg-blue-50/30'
                  } ${onSelectDestination ? 'cursor-pointer' : ''}`}
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Details & Twin-sharing explanation */}
      <div className="bg-stone-50 border-t border-stone-200 p-4 text-xs text-stone-600 space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-800 block text-xs">Standard Tier Includes:</strong>
              <span className="text-[11px]">Clean verified homestays & comfortable tourist hotels with attached private western bathrooms, 24/7 hot water, and breakfast.</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-800 block text-xs">Deluxe 3-Star Tier Includes:</strong>
              <span className="text-[11px]">Handpicked 3-star view properties, boutique wooden cottages, dedicated room heaters/electric blankets in high altitudes, and buffet breakfasts.</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-800 block text-xs">Transparent Pricing:</strong>
              <span className="text-[11px]">All tariffs include applicable local taxes and driver night halts. Room rates are shared between 2 adults on twin-sharing basis.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
