import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  Clock, 
  Database,
  ChevronDown,
  Car,
  Building2
} from 'lucide-react';
import { tourService } from '../services/tourService';
import { NorthEastState } from '../types';
import { VEHICLE_TARIFFS, VehicleTypeId } from '../data/vehicles';
import { VehicleTariffCard } from '../components/VehicleTariffCard';
import { HotelTariffCard } from '../components/HotelTariffCard';

interface ContactViewProps {
  onOpenPermitGuide: () => void;
}

const ALL_STATES: NorthEastState[] = [
  'Assam',
  'Meghalaya',
  'Arunachal Pradesh',
  'Nagaland',
  'Manipur',
  'Mizoram',
  'Tripura',
  'Sikkim'
];

export const ContactView: React.FC<ContactViewProps> = ({ onOpenPermitGuide }) => {
  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelersCount, setTravelersCount] = useState(2);
  const [budgetTier, setBudgetTier] = useState<'standard' | 'deluxe' | 'luxury' | 'comfort'>('deluxe');
  const [transportType, setTransportType] = useState<VehicleTypeId>('suv');
  const [selectedStates, setSelectedStates] = useState<NorthEastState[]>(['Nagaland', 'Meghalaya']);
  const [notes, setNotes] = useState('');
  const [tariffViewTab, setTariffViewTab] = useState<'vehicles' | 'hotels'>('vehicles');
  
  // Submission state
  const [submitting, setSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [savedToSupabase, setSavedToSupabase] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleState = (st: NorthEastState) => {
    if (selectedStates.includes(st)) {
      if (selectedStates.length > 1) {
        setSelectedStates(selectedStates.filter(s => s !== st));
      }
    } else {
      setSelectedStates([...selectedStates, st]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await tourService.submitEnquiry({
        full_name: fullName,
        email,
        phone,
        travel_date: travelDate || 'Flexible 2026/2027',
        travelers_count: travelersCount,
        budget_tier: budgetTier,
        transport_type: transportType,
        selected_states: selectedStates,
        notes,
        status: 'new',
        tour_title: `Custom Circuit: ${selectedStates.join(', ')}`
      });

      setSubmittedId(res.id);
      setSavedToSupabase(res.isSupabaseSaved);
    } catch (err) {
      console.error('Enquiry error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const faqs = [
    {
      q: 'Do I really need an Inner Line Permit (ILP) to visit the North East?',
      a: 'Yes, for Arunachal Pradesh, Nagaland, and Manipur, an Inner Line Permit (ILP) is legally mandatory for all Indian domestic travelers. For Meghalaya, Assam, and Tripura, no ILP is needed for Indian nationals. Foreign travelers require Protected Area Permits (PAP) in select border zones. When you travel with us, our documentation team handles 100% of your permit paperwork before your arrival.'
    },
    {
      q: 'How do I reach the North East? Where is the main airport?',
      a: 'Guwahati (Lokpriya Gopinath Bordoloi International Airport - GAU) in Assam is the primary aviation hub with direct flights from Delhi, Mumbai, Bengaluru, and Kolkata. Other airports include Dimapur (Nagaland), Shillong/Umroi (Meghalaya), Imphal (Manipur), Aizawl (Mizoram), Agartala (Tripura), and Pakyong (Sikkim).'
    },
    {
      q: 'What is the best time to attend the Hornbill Festival in Nagaland?',
      a: 'The Hornbill Festival is held strictly from December 1st to December 10th every single year at Kisama Heritage Village near Kohima. Accommodations in Kohima and Kigwema sell out 4 to 6 months in advance, so we recommend reserving early.'
    },
    {
      q: 'What type of vehicles do you use for hill roads?',
      a: 'We operate an official fleet with transparent daily commercial tariffs: Sedan (Swift Dzire/Etios at ₹3,800/day for paved Meghalaya/Assam circuits), high-ground-clearance SUVs (Scorpio/Bolero/Xylo at ₹4,800/day for Assam/Meghalaya, ₹7,200/day for Arunachal), classic Innova (₹5,800–₹8,200/day), luxury Innova Crysta (₹6,500–₹9,000/day), and 12-Seater Tempo Travellers (₹7,800–₹10,800/day) for large groups. All vehicles include dedicated mountain drivers, interstate transport permits, fuel, and driver night allowances.'
    }
  ];

  return (
    <div id="contact-view" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
          <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
          Direct Trip Consultation
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
          Plan Your North East Expedition
        </h1>
        <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
          Speak directly with our indigenous travel specialists in Guwahati and Kohima. Tell us your travel dates, group size, and bucket-list experiences, and we will tailor a custom itinerary.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Form (Direct Supabase connection) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            
            <div className="flex items-center justify-between pb-5 border-b border-stone-100 mb-6">
              <div>
                <h2 className="text-xl font-extrabold text-stone-900">Custom Trip Consultation Form</h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Submissions are synchronized dynamically into our Supabase database.
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <Database className="w-3 h-3" />
                Live Supabase Ready
              </span>
            </div>

            {!submittedId ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* 1. States Selection */}
                <div>
                  <label className="text-xs font-bold text-stone-900 block mb-2">
                    1. Which states are you interested in visiting? *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {ALL_STATES.map((st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => toggleState(st)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          selectedStates.includes(st)
                            ? 'bg-emerald-800 text-white shadow-xs'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Contact details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Priyanshu Sharma"
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-600/30 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@email.com"
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-600/30 outline-none"
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
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-600/30 outline-none"
                    />
                  </div>
                </div>

                {/* 3. Dates, Group Size, Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Preferred Travel Month
                    </label>
                    <input 
                      type="text"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      placeholder="e.g. December 2026"
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-600/30 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Travelers Count
                    </label>
                    <select
                      value={travelersCount}
                      onChange={(e) => setTravelersCount(Number(e.target.value))}
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-600/30 outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(num => (
                        <option key={num} value={typeof num === 'number' ? num : 10}>
                          {num} {num === 1 ? 'Solo Traveler' : 'Travelers'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Stay Preference
                    </label>
                    <select
                      value={budgetTier}
                      onChange={(e) => setBudgetTier(e.target.value as any)}
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-600/30 outline-none"
                    >
                      <option value="standard">Standard Tier (₹1,800 – ₹2,500/night: Homestays & Tourist Hotels)</option>
                      <option value="deluxe">Deluxe 3-Star Tier (₹3,200 – ₹4,800/night: Verified 3-Star Hotels)</option>
                      <option value="luxury">Luxury Eco-Resorts & Heritage Bungalows</option>
                    </select>
                  </div>
                </div>

                {/* 4. Dedicated Commercial Vehicle Selection */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-emerald-600" />
                      Dedicated Outstation Vehicle Type
                    </label>
                    <span className="text-[11px] text-stone-500">
                      {selectedStates.includes('Arunachal Pradesh') 
                        ? 'Arunachal Mountain Pass Circuit' 
                        : 'Meghalaya & Assam Circuit'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {VEHICLE_TARIFFS.map((vehicle) => {
                      const isArunachal = selectedStates.includes('Arunachal Pradesh');
                      const isSedanInArunachal = isArunachal && vehicle.id === 'sedan';
                      const dailyRate = isArunachal ? vehicle.arunachalRatePerDay : vehicle.meghalayaAssamRatePerDay;
                      const isSelected = transportType === vehicle.id;

                      return (
                        <button
                          key={vehicle.id}
                          type="button"
                          disabled={isSedanInArunachal}
                          onClick={() => setTransportType(vehicle.id)}
                          className={`p-2.5 rounded-xl border text-left transition-all relative ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/20'
                              : isSedanInArunachal
                              ? 'border-stone-200 bg-stone-100 opacity-40 cursor-not-allowed'
                              : 'border-stone-200 bg-white hover:border-stone-300 cursor-pointer'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-stone-900">{vehicle.name}</span>
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                            )}
                          </div>
                          <div className="text-[11px] text-stone-500 mt-0.5">
                            Capacity: {vehicle.seatingCapacity} seats • Rec: {vehicle.recommendedGroupSize} pax
                          </div>
                          <div className="text-[11px] font-mono font-bold text-blue-700 mt-1">
                            {dailyRate !== null ? `Rs.${dailyRate.toLocaleString('en-IN')}/day` : 'N/A in Arunachal'}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 5. Notes / specific requirements */}
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Special Wishes or Specific Attractions (e.g. Dzukou trek, Kaziranga elephant safari, Apatani village walk)
                  </label>
                  <textarea 
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us what you want to experience most..."
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-600/30 outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <a 
                    href="https://wa.me/919395109412?text=Hello%2C%20I%20would%20like%20to%20consult%20with%20a%20North%20East%20trip%20expert" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    Prefer WhatsApp? Chat directly with us
                  </a>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending to Database...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Trip Inquiry</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="text-xl font-black text-stone-900">
                  Inquiry Successfully Received!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. We have logged your request for <strong>{selectedStates.join(', ')}</strong> under Reference ID <code className="bg-stone-100 px-1.5 py-0.5 rounded text-stone-800 font-mono font-bold text-xs">{submittedId}</code>.
                </p>

                {savedToSupabase && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs border border-emerald-200">
                    <Database className="w-3.5 h-3.5" />
                    Stored in Supabase <code className="font-mono text-[11px]">enquiries</code> table
                  </div>
                )}

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/919395109412?text=${encodeURIComponent(`Hi North East Odyssey, I just submitted an inquiry (Ref: ${submittedId}) for ${selectedStates.join(', ')}. My name is ${fullName}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Ping Us on WhatsApp
                  </a>

                  <button
                    onClick={() => {
                      setSubmittedId(null);
                      setFullName('');
                      setEmail('');
                      setPhone('');
                      setNotes('');
                    }}
                    className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Right Column: Contact Info & Base Offices */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Contact Details Card */}
          <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-7 border border-stone-800 shadow-sm">
            <h3 className="text-lg font-bold text-white mb-4">North East Odyssey Head Offices</h3>
            
            <div className="space-y-4 text-xs text-stone-300">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white">Central Operations (Guwahati)</strong>
                  <span className="text-stone-400">GS Road, Christian Basti, Guwahati, Assam 781005</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white">Highland Ridge Camp (Kohima)</strong>
                  <span className="text-stone-400">Kisama Ridge, Kigwema, Kohima, Nagaland 797005</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                <div className="w-8 h-8 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white">24x7 Traveler Hotlines</strong>
                  <span className="text-stone-400">+91 93951 09412 / +91 8095650076</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white">Email Inquiries</strong>
                  <span className="text-stone-400">expeditions@northeastodyssey.com</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-stone-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Response Time: Under 2 hours
              </span>

              <button
                onClick={onOpenPermitGuide}
                className="text-xs text-emerald-400 font-bold hover:underline cursor-pointer"
              >
                Permit Advisory →
              </button>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs">
            <h4 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-700" />
              North East Travel Essentials FAQ
            </h4>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="border border-stone-200 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-3.5 text-left flex items-center justify-between text-xs font-bold text-stone-800 hover:bg-stone-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-stone-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-emerald-700' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-3.5 pb-3.5 pt-1 text-xs text-stone-600 bg-stone-50/50 border-t border-stone-100 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Official Commercial Tariffs Section (Vehicles & Destination Hotels) */}
      <div className="mt-14 pt-10 border-t border-stone-200">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Transparent Pricing Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-2">
            Published Regional Fleet & Hotel Tariff Cards
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Every quote is grounded in these standardized commercial hill vehicle tariffs and verified destination hotel rates.
          </p>

          {/* Tab Selector */}
          <div className="inline-flex p-1 bg-stone-100 rounded-xl border border-stone-200 mt-5">
            <button
              type="button"
              onClick={() => setTariffViewTab('vehicles')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                tariffViewTab === 'vehicles'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Car className="w-3.5 h-3.5 text-emerald-600" />
              <span>Dedicated Vehicle Daily Rates</span>
            </button>

            <button
              type="button"
              onClick={() => setTariffViewTab('hotels')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                tariffViewTab === 'hotels'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Destination Hotel Tariffs (Std vs 3-Star)</span>
            </button>
          </div>
        </div>

        {tariffViewTab === 'vehicles' ? (
          <VehicleTariffCard 
            isArunachalZone={selectedStates.includes('Arunachal Pradesh')}
            selectedVehicleId={transportType}
            onSelectVehicle={(id) => setTransportType(id)}
          />
        ) : (
          <HotelTariffCard 
            highlightDestination={selectedStates[0] || 'Guwahati'}
          />
        )}
      </div>

    </div>
  );
};
