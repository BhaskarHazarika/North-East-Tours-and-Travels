import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Car } from 'lucide-react';
import { VEHICLE_TARIFFS, VehicleTypeId } from '../data/vehicles';

interface CustomQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'INR' | 'USD';
}

export const CustomQuoteModal: React.FC<CustomQuoteModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedStates, setSelectedStates] = useState<string[]>(['Arunachal Pradesh', 'Assam']);
  const [duration, setDuration] = useState('8-10 Days (Recommended)');
  const [travelStyle, setTravelStyle] = useState('Cultural Immersion & Living Traditions');
  const [specialOccasion, setSpecialOccasion] = useState('Personal Expedition / None');
  const [stayPreference, setStayPreference] = useState('Boutique Mountain Retreats & Heritage Bungalows');
  const [vehicleType, setVehicleType] = useState<VehicleTypeId>('suv');
  const [travelMonth, setTravelMonth] = useState('Oct - Nov (Autumn Passes & Clear Ridges)');
  const [notes, setNotes] = useState('');
  const [bookingRef, setBookingRef] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleState = (st: string) => {
    if (selectedStates.includes(st)) {
      if (selectedStates.length > 1) {
        setSelectedStates(selectedStates.filter(s => s !== st));
      }
    } else {
      setSelectedStates([...selectedStates, st]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refId = 'NEO-CONCIERGE-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refId);
    setSubmitted(true);

    const selectedVeh = VEHICLE_TARIFFS.find(v => v.id === vehicleType);
    const msg = `Hi North East Odyssey Concierge! Bespoke Route Request:
*Ref ID:* ${refId}
*Regions:* ${selectedStates.join(', ')}
*Travel Style:* ${travelStyle}
*Special Occasion:* ${specialOccasion}
*Duration:* ${duration}
*Window:* ${travelMonth}
*Stays:* ${stayPreference}
*Vehicle:* ${selectedVeh?.name || vehicleType}
*Lead Traveler:* ${name || 'Guest'} (${phone || email})
*Specific Interests & Access Notes:* ${notes || 'None'}`;

    const waUrl = `https://wa.me/919395109412?text=${encodeURIComponent(msg)}`;
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn('Pop-up blocked, fallback link available in modal', err);
    }
  };

  const getWhatsAppLink = () => {
    const selectedVeh = VEHICLE_TARIFFS.find(v => v.id === vehicleType);
    const msg = `Hi North East Odyssey Concierge! Bespoke Route Request:
Regions: ${selectedStates.join(', ')}
Travel Style: ${travelStyle}
Special Occasion: ${specialOccasion}
Duration: ${duration}
Window: ${travelMonth}
Stays: ${stayPreference}
Vehicle: ${selectedVeh?.name || vehicleType}
Lead Traveler: ${name || 'Guest'} (${phone || email})
Specific Interests: ${notes || 'None'}`;
    return `https://wa.me/919395109412?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div 
      id="custom-quote-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div 
        id="custom-quote-modal-card"
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-2xl shadow-2xl overflow-hidden border border-stone-200"
      >
        <div className="bg-[#14231B] text-white p-6 sm:p-7 relative border-b border-[#243B2E]">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-[11px] font-semibold text-amber-300 tracking-wider mb-1">
            Bespoke Expedition Curation · Guwahati Operations Desk
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
            Curate a Private North East Journey
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1.5 max-w-lg leading-relaxed">
            For itineraries requiring protected border clearances, 4x4 mountain transit, or hearthside tribal access. A senior route director reviews every submission and responds within 3 hours.
          </p>
        </div>

        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-5">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Select Regions */}
              <div>
                <label className="font-semibold text-stone-800 block mb-1.5">
                  1. Regional Corridors of Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Arunachal Pradesh', 'Meghalaya', 'Assam', 'Nagaland', 'Sikkim', 'Manipur'].map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => toggleState(st)}
                      className={`px-3 py-1.5 rounded-md font-medium border transition-all cursor-pointer ${
                        selectedStates.includes(st)
                          ? 'bg-[#1E382B] text-white border-[#1E382B]'
                          : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Travel Style & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">
                    2. Primary Focus & Travel Style
                  </label>
                  <select 
                    value={travelStyle}
                    onChange={(e) => setTravelStyle(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E382B]"
                  >
                    <option>Cultural Immersion & Living Traditions</option>
                    <option>Wildlife Safari & Rare Birding Expeditions</option>
                    <option>High-Altitude Himalayan Passes & Trekking</option>
                    <option>Slow Colonial Heritage & River Retreats</option>
                    <option>Living Architecture & Sacred Monasteries</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">
                    3. Special Occasion / Milestone
                  </label>
                  <select 
                    value={specialOccasion}
                    onChange={(e) => setSpecialOccasion(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E382B]"
                  >
                    <option>Personal Expedition / None</option>
                    <option>Milestone Birthday / Celebration</option>
                    <option>Wedding Anniversary / Honeymoon</option>
                    <option>Private Sabbatical / Creative Solo</option>
                    <option>Multi-Generational Family Journey</option>
                  </select>
                </div>
              </div>

              {/* Duration & Month */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">
                    4. Desired Duration
                  </label>
                  <select 
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E382B]"
                  >
                    <option>5-7 Days (Focused Single Region)</option>
                    <option>8-10 Days (Recommended Cross-State)</option>
                    <option>11-14 Days (Comprehensive Himalayan Circuit)</option>
                    <option>15+ Days (Grand Trans-Regional Expedition)</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">
                    5. Seasonal Window
                  </label>
                  <select 
                    value={travelMonth}
                    onChange={(e) => setTravelMonth(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E382B]"
                  >
                    <option>Oct - Nov (Autumn Passes & Clear Ridges)</option>
                    <option>December (Hornbill Festival Season)</option>
                    <option>Jan - Mar (Winter Wildlife & Brahmaputra Mist)</option>
                    <option>Apr - May (Spring Orchids & Rhododendrons)</option>
                    <option>Jun - Aug (Monsoon Canyons & Living Bridges)</option>
                    <option>September (Ziro Music Festival & Harvest)</option>
                  </select>
                </div>
              </div>

              {/* Stay Preference */}
              <div>
                <label className="font-semibold text-stone-800 block mb-1">
                  6. Preferred Stay Category
                </label>
                <select 
                  value={stayPreference}
                  onChange={(e) => setStayPreference(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E382B]"
                >
                  <option>Boutique Mountain Retreats & Heritage Bungalows</option>
                  <option>Handpicked Tribal Village Homestays (Ensuite Bathrooms)</option>
                  <option>Luxury Eco-Resorts & Private Verandahs</option>
                  <option>Blend of Heritage Estates and Village Stays</option>
                </select>
              </div>

              {/* Dedicated Vehicle */}
              <div>
                <label className="font-semibold text-stone-800 flex items-center gap-1.5 mb-1">
                  <Car className="w-3.5 h-3.5 text-[#1E382B]" />
                  7. Private Vehicle Preference
                </label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value as VehicleTypeId)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E382B]"
                >
                  {VEHICLE_TARIFFS.map((veh) => (
                    <option key={veh.id} value={veh.id}>
                      {veh.name} — Recommended: {veh.recommendedGroupLabel || `${veh.recommendedGroupSize} travelers`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-stone-200">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">
                    Your Name *
                  </label>
                  <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikram Iyer"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input 
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">
                    Email Address *
                  </label>
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vikram@example.com"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">
                  Specific Requests (e.g. photography permits, monastery access, birding target list)
                </label>
                <textarea 
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share any special preferences, fitness considerations, or specific locations you wish to include..."
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-md"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-md bg-[#1E382B] hover:bg-[#14261D] text-white font-medium text-xs sm:text-sm tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit to Route Director · Guaranteed 3-Hour Review</span>
                </button>
                <p className="text-[11px] text-stone-500 text-center mt-2">
                  No payment required. We review road clearances and vehicle logistics before issuing confirmed proposals.
                </p>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-[#1E382B]" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                Inquiry Assigned to Route Specialist
              </h3>
              <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                Reference <strong>{bookingRef}</strong> has been transmitted directly to our Guwahati operations desk. A specialist will review your route parameters and connect with you within 3 hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-xs shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Direct Thread</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-md bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium text-xs cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
