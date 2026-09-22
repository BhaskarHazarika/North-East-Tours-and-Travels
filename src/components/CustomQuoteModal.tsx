import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, MessageCircle, MapPin, Calendar, Users, Car } from 'lucide-react';
import { NorthEastState } from '../types';
import { VEHICLE_TARIFFS, VehicleTypeId } from '../data/vehicles';

interface CustomQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'INR' | 'USD';
}

export const CustomQuoteModal: React.FC<CustomQuoteModalProps> = ({ isOpen, onClose, currency }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedStates, setSelectedStates] = useState<string[]>(['Nagaland']);
  const [duration, setDuration] = useState('6-8 Days');
  const [budgetTier, setBudgetTier] = useState('Comfort Heritage');
  const [vehicleType, setVehicleType] = useState<VehicleTypeId>('suv');
  const [travelMonth, setTravelMonth] = useState('December (Hornbill Festival)');
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
    const refId = 'NEO-REQ-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refId);
    setSubmitted(true);

    const selectedVeh = VEHICLE_TARIFFS.find(v => v.id === vehicleType);
    const msg = `Hi North East Odyssey! Custom Trip Request:
*Reference ID:* ${refId}
*States:* ${selectedStates.join(', ')}
*Duration:* ${duration}
*Month:* ${travelMonth}
*Budget Tier:* ${budgetTier}
*Vehicle:* ${selectedVeh?.name || vehicleType}
*Traveler:* ${name || 'Guest'} (${phone || email})
*Notes:* ${notes || 'None'}`;

    const waUrl = `https://wa.me/919395109412?text=${encodeURIComponent(msg)}`;
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn('Pop-up blocked, fallback link available in modal', err);
    }
  };

  const getWhatsAppLink = () => {
    const selectedVeh = VEHICLE_TARIFFS.find(v => v.id === vehicleType);
    const msg = `Hi North East Odyssey! Custom Trip Request:
States: ${selectedStates.join(', ')}
Duration: ${duration}
Month: ${travelMonth}
Budget Tier: ${budgetTier}
Vehicle: ${selectedVeh?.name || vehicleType}
Traveler: ${name || 'Guest'} (${phone || email})
Notes: ${notes || 'None'}`;
    return `https://wa.me/919395109412?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div 
      id="custom-quote-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div 
        id="custom-quote-modal-card"
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200"
      >
        <div className="bg-stone-900 text-white p-5 sm:p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-2 border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            Tailor-Made Tour Planner
          </div>
          <h2 className="text-xl sm:text-2xl font-black">
            Plan a Custom North East Journey
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            Looking to combine Hornbill + Meghalaya, or trek Dzukou + explore Kaziranga? Tell us your dream route.
          </p>
        </div>

        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Select States */}
              <div>
                <label className="text-xs font-bold text-stone-800 block mb-1.5">
                  1. Which States Do You Want to Include?
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Nagaland', 'Arunachal Pradesh', 'Meghalaya', 'Assam', 'Sikkim', 'Manipur'].map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => toggleState(st)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        selectedStates.includes(st)
                          ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                          : 'bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trip Preferences Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Duration
                  </label>
                  <select 
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                  >
                    <option>4-5 Days (Quick Escape)</option>
                    <option>6-8 Days (Recommended)</option>
                    <option>9-12 Days (Grand Expedition)</option>
                    <option>14+ Days (Full North East Circuit)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Ideal Month / Event
                  </label>
                  <select 
                    value={travelMonth}
                    onChange={(e) => setTravelMonth(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                  >
                    <option>December (Hornbill Festival)</option>
                    <option>September (Ziro Music Fest)</option>
                    <option>Oct - Nov (Autumn & Dzukou Frost)</option>
                    <option>Jan - Mar (Winter Wildlife & Safaris)</option>
                    <option>Apr - May (Spring Flowers & Waterfalls)</option>
                    <option>June - July (Dzukou Lilies Blooming)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Stay & Comfort
                  </label>
                  <select 
                    value={budgetTier}
                    onChange={(e) => setBudgetTier(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                  >
                    <option>Standard (Eco-camps & Homestays)</option>
                    <option>Comfort Heritage (Boutique Cottages)</option>
                    <option>Luxury Eco-Resorts</option>
                  </select>
                </div>
              </div>

              {/* Dedicated Outstation Vehicle */}
              <div>
                <label className="text-xs font-bold text-stone-800 flex items-center gap-1.5 mb-1">
                  <Car className="w-3.5 h-3.5 text-emerald-700" />
                  Preferred Outstation Vehicle (Commercial Hill Fleet)
                </label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value as VehicleTypeId)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                >
                  {VEHICLE_TARIFFS.map((veh) => (
                    <option key={veh.id} value={veh.id}>
                      {veh.name} — Cap: {veh.seatingCapacity} seats (Rec: {veh.recommendedGroupSize} pax) | Assam/Megh: Rs.{veh.meghalayaAssamRatePerDay.toLocaleString('en-IN')}/d {veh.arunachalRatePerDay ? `| Arun: Rs.${veh.arunachalRatePerDay.toLocaleString('en-IN')}/d` : '| Arun: N/A'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-stone-200">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Your Name *
                  </label>
                  <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Bhaskar H."
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input 
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Email *
                  </label>
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Specific wishes (e.g. self-drive 4x4, specific tribe visits, birdwatching list)
                </label>
                <textarea 
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us what matters most for your trip..."
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <a 
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp Directly
                </a>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  Send Custom Request
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-emerald-700" />
              </div>
              <h4 className="text-lg font-bold text-stone-900">Custom Itinerary Inquiry Received!</h4>
              <p className="text-xs text-stone-600 max-w-sm mx-auto">
                We have received your request for <strong>{selectedStates.join(', ')}</strong> under Reference ID <code className="bg-stone-100 px-1.5 py-0.5 rounded text-stone-800 font-mono font-bold text-xs">{bookingRef}</code>.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                <a
                  href={`https://wa.me/919395109412?text=${encodeURIComponent(`Hi North East Odyssey, I just submitted a custom itinerary request (Ref: ${bookingRef}) for ${selectedStates.join(', ')}. My name is ${name || 'Guest'}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
