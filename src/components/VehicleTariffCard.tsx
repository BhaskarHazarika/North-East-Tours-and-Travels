import React from 'react';
import { Car, ShieldCheck, Info, CheckCircle2, AlertTriangle, Users } from 'lucide-react';
import { VEHICLE_TARIFFS } from '../data/vehicles';

interface VehicleTariffCardProps {
  highlightVehicleId?: string;
  onSelectVehicle?: (vehicleId: any) => void;
  selectedVehicleId?: string;
  isArunachalZone?: boolean;
  compact?: boolean;
}

export const VehicleTariffCard: React.FC<VehicleTariffCardProps> = ({
  onSelectVehicle,
  selectedVehicleId,
  isArunachalZone = false,
  compact = false
}) => {
  return (
    <div id="vehicle-tariff-table-wrapper" className="w-full bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
      {/* Table Header Strip */}
      <div className="bg-stone-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-1 border border-emerald-400/30">
            <Car className="w-3.5 h-3.5" />
            Official North East Commercial Tariff Card
          </div>
          <h3 className="text-base sm:text-lg font-black tracking-tight text-white">
            Dedicated Vehicle Daily Rates & Capacity Matrix
          </h3>
          <p className="text-xs text-stone-300 mt-0.5">
            Published transparent commercial hill rates across Assam, Meghalaya & high-altitude Arunachal sectors.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Includes Fuel, Driver & Night Allowance
          </span>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-stone-100 text-stone-800 border-b border-stone-200 font-bold uppercase tracking-wider text-[11px]">
              <th className="py-3 px-4">Vehicle Type</th>
              <th className="py-3 px-3 text-center">Seating Capacity</th>
              <th className="py-3 px-3 text-center">Recommended Group Size</th>
              <th className={`py-3 px-4 text-right ${!isArunachalZone ? 'bg-emerald-50/80 text-emerald-900 font-black' : ''}`}>
                Meghalaya & Assam Zone Rate/day (Rs.)
              </th>
              <th className={`py-3 px-4 text-right ${isArunachalZone ? 'bg-amber-50/80 text-amber-900 font-black' : ''}`}>
                Arunachal Zone Rate/day (Rs.)
              </th>
              {onSelectVehicle && <th className="py-3 px-3 text-center">Action</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {VEHICLE_TARIFFS.map((vehicle) => {
              const isSelected = selectedVehicleId === vehicle.id;
              const isSedanInArunachal = isArunachalZone && vehicle.id === 'sedan';

              return (
                <tr 
                  key={vehicle.id}
                  className={`transition-colors ${
                    isSelected 
                      ? 'bg-emerald-50/60 font-semibold' 
                      : isSedanInArunachal 
                      ? 'bg-stone-50/70 opacity-60' 
                      : 'hover:bg-stone-50/60'
                  }`}
                >
                  {/* Vehicle Type */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-stone-100 text-stone-700'
                      }`}>
                        <Car className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-stone-900 text-xs sm:text-sm flex items-center gap-1.5">
                          <span>{vehicle.name}</span>
                          {vehicle.badge && (
                            <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-stone-200 text-stone-700">
                              {vehicle.badge}
                            </span>
                          )}
                        </div>
                        {!compact && (
                          <div className="text-[11px] text-stone-500 mt-0.5">
                            {vehicle.models}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Seating Capacity */}
                  <td className="py-3.5 px-3 text-center font-mono font-bold text-stone-800 text-xs sm:text-sm">
                    {vehicle.seatingCapacity}
                  </td>

                  {/* Recommended Group Size */}
                  <td className="py-3.5 px-3 text-center">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-stone-100 text-stone-800 font-mono font-bold text-xs">
                      <Users className="w-3 h-3 text-stone-500" />
                      {vehicle.recommendedGroupSize}
                    </span>
                  </td>

                  {/* Meghalaya & Assam Zone Rate/day */}
                  <td className={`py-3.5 px-4 text-right font-mono text-xs sm:text-sm ${
                    !isArunachalZone ? 'bg-emerald-50/40' : ''
                  }`}>
                    <span className="font-extrabold text-blue-700">
                      Rs.{vehicle.meghalayaAssamRatePerDay.toLocaleString('en-IN')}
                    </span>
                  </td>

                  {/* Arunachal Zone Rate/day */}
                  <td className={`py-3.5 px-4 text-right font-mono text-xs sm:text-sm ${
                    isArunachalZone ? 'bg-amber-50/40' : ''
                  }`}>
                    {vehicle.arunachalRatePerDay !== null ? (
                      <span className="font-extrabold text-blue-700">
                        Rs.{vehicle.arunachalRatePerDay.toLocaleString('en-IN')}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200">
                        <AlertTriangle className="w-3 h-3 text-rose-600" />
                        N/A
                      </span>
                    )}
                  </td>

                  {/* Action / Select Button */}
                  {onSelectVehicle && (
                    <td className="py-3.5 px-3 text-center">
                      {isSedanInArunachal ? (
                        <span className="text-[10px] text-rose-600 font-medium">
                          Not Allowed in Arunachal
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onSelectVehicle(vehicle.id)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-700 text-white shadow-xs'
                              : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                          }`}
                        >
                          {isSelected ? 'Selected' : 'Choose'}
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Notes */}
      <div className="bg-stone-50 p-3 sm:p-4 border-t border-stone-200 text-[11px] text-stone-600 space-y-1">
        <div className="flex items-start gap-1.5">
          <Info className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
          <span>
            <strong>Tariff Inclusions:</strong> Dedicated private outstation commercial vehicle, experienced hill chauffeur, fuel/mileage for the designated itinerary, interstate transport permits, and driver daily food & overnight lodging allowances.
          </span>
        </div>
        <div className="flex items-start gap-1.5 text-stone-500">
          <span className="font-bold text-rose-700">•</span>
          <span>
            <strong>Why Sedan is N/A in Arunachal:</strong> Low-clearance sedans are restricted past Bhalukpong & Dirang due to steep gradients on Sela Pass (13,700 ft), unpaved mountain sections, and military convoy regulations. Robust SUVs (Scorpio/Bolero/Innova) or high-clearance 4x4s are mandatory.
          </span>
        </div>
      </div>
    </div>
  );
};
