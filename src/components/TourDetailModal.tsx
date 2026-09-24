import React, { useState, useMemo } from 'react';
import { 
  X, 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  Check, 
  AlertCircle, 
  Users, 
  Car, 
  Home, 
  Sparkles, 
  FileText, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp, 
  Compass, 
  Calculator, 
  Send,
  Coffee,
  Bed,
  CheckCircle2,
  Copy,
  Printer,
  Plane,
  Building2,
  Minimize2,
  Maximize2,
  BookOpen,
  Info
} from 'lucide-react';
import { TourPackage, BookingInquiry } from '../types';
import { 
  VEHICLE_TARIFFS, 
  VehicleTypeId, 
  isTourInArunachalZone, 
  getDailyVehicleRate, 
  getRecommendedVehicle 
} from '../data/vehicles';
import { HOTEL_TARIFFS, getHotelTariff } from '../data/hotels';

interface TourDetailModalProps {
  tour: TourPackage | null;
  onClose: () => void;
  currency: 'INR' | 'USD';
  initialTab?: 'itinerary' | 'price' | 'inclusions' | 'permits';
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  onClose,
  currency,
  initialTab = 'itinerary'
}) => {
  if (!tour) return null;

  const [activeTab, setActiveTab] = useState<'itinerary' | 'price' | 'inclusions' | 'permits'>(initialTab);
  const [expandedDays, setExpandedDays] = useState<number[]>([1, 2]); // default open first 2 days
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState<boolean>(false);
  const [showOverview, setShowOverview] = useState<boolean>(false); // Collapsed by default for maximum itinerary visibility
  const [showQuickFacts, setShowQuickFacts] = useState<boolean>(false);
  const [showMobileDetails, setShowMobileDetails] = useState<boolean>(false);
  
  // Check if tour falls in Arunachal Zone
  const isArunachal = useMemo(() => {
    return isTourInArunachalZone(tour.state) || 
           isTourInArunachalZone(tour.statesCovered) || 
           tour.title.toLowerCase().includes('arunachal') || 
           tour.title.toLowerCase().includes('tawang');
  }, [tour]);

  // Interactive Price Estimator State
  const [travelers, setTravelers] = useState<number>(2);
  const [accommodationTier, setAccommodationTier] = useState<'standard' | 'deluxe' | 'luxury'>('standard');
  const [transportType, setTransportType] = useState<VehicleTypeId>(() => {
    return isArunachal ? 'suv' : 'sedan';
  });
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  // Booking Inquiry form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [travelDate, setTravelDate] = useState(tour.nextDepartureDates[0] || '');
  const [specialRequests, setSpecialRequests] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);

  // Toggle Day expansion
  const toggleDay = (dayNum: number) => {
    if (expandedDays.includes(dayNum)) {
      setExpandedDays(expandedDays.filter(d => d !== dayNum));
    } else {
      setExpandedDays([...expandedDays, dayNum]);
    }
  };

  const expandAll = () => {
    setExpandedDays(tour.itinerary.map(item => item.day));
  };

  const collapseAll = () => {
    setExpandedDays([]);
  };

  // Price Calculation Logic
  const priceCalculation = useMemo(() => {
    const base = tour.basePricePerPerson;
    
    // Group discount/multiplier:
    // Solo traveler pays a single supplement (+35%)
    // 2 people: standard
    // 3-4 people: 5% discount
    // 5-7 people: 10% discount
    // 8+ people: 15% discount
    let groupMultiplier = 1.0;
    if (travelers === 1) groupMultiplier = 1.35;
    else if (travelers >= 8) groupMultiplier = 0.85;
    else if (travelers >= 5) groupMultiplier = 0.90;
    else if (travelers >= 3) groupMultiplier = 0.95;

    // Accommodation Calculation from official destination hotel tariff table
    const tourNights = tour.durationNights || Math.max(1, (tour.durationDays || 5) - 1);

    let totalRoomUpgradeDelta = 0;
    let totalStandardRoomCost = 0;
    let totalDeluxeRoomCost = 0;
    let countedNights = 0;

    tour.itinerary.forEach(item => {
      if (item.stay && !item.stay.toLowerCase().includes('departure') && !item.title.toLowerCase().includes('departure')) {
        const text = (item.stay + ' ' + item.title).toLowerCase();
        let matched = HOTEL_TARIFFS.find(h => text.includes(h.destination.toLowerCase().split(' ')[0]));
        if (!matched) {
          if (text.includes('sohra') || text.includes('cherrapunji')) matched = getHotelTariff('Cherrapunjee (Sohra)');
          else if (text.includes('shillong')) matched = getHotelTariff('Shillong');
          else if (text.includes('guwahati')) matched = getHotelTariff('Guwahati');
          else if (text.includes('tawang')) matched = getHotelTariff('Tawang');
          else if (text.includes('dirang')) matched = getHotelTariff('Dirang');
          else if (text.includes('bomdila')) matched = getHotelTariff('Bomdila');
          else if (text.includes('kaziranga')) matched = getHotelTariff('Kaziranga');
          else if (text.includes('tezpur')) matched = getHotelTariff('Tezpur');
        }
        
        const stdRate = matched ? matched.standardRatePerNight : (isArunachal ? 2000 : 1900);
        const dlxRate = matched ? matched.deluxeRatePerNight : (isArunachal ? 3800 : 3500);
        
        totalStandardRoomCost += stdRate;
        totalDeluxeRoomCost += dlxRate;
        totalRoomUpgradeDelta += (dlxRate - stdRate);
        countedNights++;
      }
    });

    if (countedNights === 0) {
      totalRoomUpgradeDelta = (isArunachal ? 1800 : 1600) * tourNights;
      totalStandardRoomCost = (isArunachal ? 2100 : 1900) * tourNights;
      totalDeluxeRoomCost = (isArunachal ? 3900 : 3500) * tourNights;
    }

    // Deluxe per person upgrade:
    // On twin-sharing, 2 people share 1 room, so the room delta is split by 2.
    // Solo traveler pays full single room upgrade delta.
    const deluxePerPersonUpgrade = travelers === 1 
      ? totalRoomUpgradeDelta 
      : Math.round(totalRoomUpgradeDelta / 2);

    const luxuryPerPersonUpgrade = deluxePerPersonUpgrade + (tourNights * (travelers === 1 ? 1600 : 800));

    let accomSurcharge = 0;
    if (accommodationTier === 'deluxe') accomSurcharge = deluxePerPersonUpgrade;
    else if (accommodationTier === 'luxury') accomSurcharge = luxuryPerPersonUpgrade;

    // Vehicle Transport Calculation from official commercial tariff table
    const tourDays = tour.durationDays || (tour.durationNights + 1) || 5;
    const baseDailyRate = isArunachal ? 5300 : 3800; // Baseline entry vehicle rate
    const selectedDailyRate = getDailyVehicleRate(transportType, isArunachal) ?? baseDailyRate;

    // Daily difference between selected vehicle and baseline vehicle
    const vehicleDailyDelta = Math.max(0, selectedDailyRate - baseDailyRate);

    // Vehicle upgrade surcharge per person (split across group)
    const transportSurcharge = Math.round((vehicleDailyDelta * tourDays) / Math.max(1, travelers));
    const totalVehicleCost = selectedDailyRate * tourDays;
    const perPersonVehicleCost = Math.round(totalVehicleCost / Math.max(1, travelers));

    // Addons
    let addonsTotalPerPerson = 0;
    if (selectedAddons.includes('flights-passthrough')) addonsTotalPerPerson += 7500;
    if (selectedAddons.includes('ilp-priority')) addonsTotalPerPerson += 800;
    if (selectedAddons.includes('tribal-feast')) addonsTotalPerPerson += 1400;
    if (selectedAddons.includes('photo-guide')) addonsTotalPerPerson += Math.round(3000 / Math.max(1, travelers));
    if (selectedAddons.includes('gear-rental')) addonsTotalPerPerson += 1200;

    const perPersonEstimated = Math.round((base * groupMultiplier) + accomSurcharge + transportSurcharge + addonsTotalPerPerson);
    const totalEstimated = perPersonEstimated * travelers;

    return {
      basePerPerson: base,
      groupDiscountPercent: travelers === 1 ? -35 : (travelers >= 8 ? 15 : (travelers >= 5 ? 10 : (travelers >= 3 ? 5 : 0))),
      perPersonEstimated,
      totalEstimated,
      accomSurcharge,
      transportSurcharge,
      addonsTotalPerPerson,
      selectedDailyRate,
      baseDailyRate,
      totalVehicleCost,
      perPersonVehicleCost,
      tourDays,
      tourNights,
      deluxePerPersonUpgrade,
      luxuryPerPersonUpgrade,
      totalStandardRoomCost,
      totalDeluxeRoomCost
    };
  }, [tour, travelers, accommodationTier, transportType, selectedAddons, isArunachal]);

  const formatPrice = (inr: number) => {
    if (currency === 'USD') {
      const usd = Math.round(inr / 85);
      return `$${usd.toLocaleString()}`;
    }
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const handleToggleAddon = (addonKey: string) => {
    // Only flights add-on is active; all other optional add-ons are disabled per policy
    if (addonKey !== 'flights-passthrough') return;
    if (selectedAddons.includes(addonKey)) {
      setSelectedAddons(selectedAddons.filter(k => k !== addonKey));
    } else {
      setSelectedAddons([...selectedAddons, addonKey]);
    }
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const refId = 'NEO-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refId);
    setBookingConfirmed(true);

    const currentVehicle = VEHICLE_TARIFFS.find(v => v.id === transportType) || VEHICLE_TARIFFS[0];
    const text = `Hi North East Odyssey! I just generated a formal estimate / inquiry:
*Reference ID:* ${refId}
*Tour:* ${tour.title}
*Travelers:* ${travelers} persons
*Date:* ${travelDate || 'Flexible'}
*Stay Tier:* ${accommodationTier === 'deluxe' ? 'Deluxe 3-Star Tier' : accommodationTier === 'luxury' ? 'Luxury Eco-Resort' : 'Standard Tier (Base)'}
*Vehicle:* ${currentVehicle.name}
*Estimated Total:* ${formatPrice(priceCalculation.totalEstimated)}
*Traveler Name:* ${fullName || 'Guest'}
*Phone:* ${phone}
*Email:* ${email}`;

    const waUrl = `https://wa.me/919395109412?text=${encodeURIComponent(text)}`;
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.warn('Pop-up blocked, fallback link available in estimate card', err);
    }
  };

  const generateWhatsAppUrl = () => {
    const currentVehicle = VEHICLE_TARIFFS.find(v => v.id === transportType) || VEHICLE_TARIFFS[0];
    const text = `Hi North East Odyssey! I would like to book/inquire about:
Tour: ${tour.title}
Travelers: ${travelers} persons
Date: ${travelDate || 'Flexible'}
Stay Tier: ${accommodationTier === 'deluxe' ? 'Deluxe 3-Star Tier' : accommodationTier === 'luxury' ? 'Luxury Eco-Resort' : 'Standard Tier (Base)'}
Vehicle: ${currentVehicle.name}
Estimated Total: ${formatPrice(priceCalculation.totalEstimated)}
Reference: ${bookingRef || 'Direct Inquire'}
Name: ${fullName || 'Guest'}`;
    return `https://wa.me/919395109412?text=${encodeURIComponent(text)}`;
  };

  // Pre-filled WhatsApp quick inquiry message focusing on the selected tour title
  const getWhatsAppQuickBookingUrl = () => {
    const currentVehicle = VEHICLE_TARIFFS.find(v => v.id === transportType) || VEHICLE_TARIFFS[0];
    const message = `Hello North East Odyssey! I would like to book / inquire about the tour: "${tour.title}".

Duration: ${tour.durationDays} Days / ${tour.durationNights} Nights
State / Region: ${tour.state}
Estimated Travelers: ${travelers} ${travelers === 1 ? 'traveler' : 'travelers'}
Selected Vehicle: ${currentVehicle.name}
Stay Tier: ${accommodationTier === 'deluxe' ? 'Deluxe 3-Star Tier' : accommodationTier === 'luxury' ? 'Luxury Eco-Resort' : 'Standard Tier (Base)'}
Estimated Package Cost: ${formatPrice(priceCalculation.totalEstimated)}
Preferred Date: ${travelDate || 'Flexible / Next Available'}

Please share availability, departure dates, and booking details for this tour!`;
    return `https://wa.me/919395109412?text=${encodeURIComponent(message)}`;
  };

  return (
    <div 
      id="tour-detail-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 lg:p-6"
    >
      <div 
        id="tour-detail-modal-card"
        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-stone-200"
      >
        
        {/* MOBILE VIEW HEADER (< sm): Ultra-compact to preserve maximum screen space for itinerary and content */}
        <div className="sm:hidden bg-stone-900 text-white px-3 py-2 shrink-0 border-b border-stone-800 transition-all">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 leading-none mb-1">
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30 shrink-0">
                  {tour.state}
                </span>
                <span className="text-[10px] text-stone-400 font-medium shrink-0">
                  {tour.durationDays}D/{tour.durationNights}N
                </span>
                <span className="font-mono text-[11px] font-bold text-amber-300 shrink-0 ml-auto">
                  {tour.priceRange 
                    ? `₹${tour.priceRange.min.toLocaleString('en-IN')}+` 
                    : `${formatPrice(priceCalculation.basePerPerson)}/p`}
                </span>
              </div>
              <h2 className="text-xs font-black text-white truncate leading-tight">
                {tour.title}
              </h2>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => setShowMobileDetails(!showMobileDetails)}
                className="px-2 py-1 rounded-md bg-white/10 hover:bg-white/20 text-stone-300 text-[10px] font-semibold flex items-center gap-1 cursor-pointer"
                title="Toggle tour overview and route details"
              >
                <Info className="w-3 h-3 text-emerald-400" />
                <span>{showMobileDetails ? 'Hide' : 'Info'}</span>
              </button>
              <button 
                id="close-tour-modal-btn-mobile"
                onClick={onClose}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Expandable info drawer on mobile */}
          {showMobileDetails && (
            <div className="mt-2 pt-2 border-t border-stone-800 text-[11px] text-stone-300 space-y-1.5 animate-fadeIn">
              <p className="text-stone-300 text-xs leading-snug">{tour.subtitle}</p>
              <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                <div className="bg-white/5 p-1.5 rounded">
                  <span className="text-stone-400 block">Season:</span>
                  <span className="font-semibold text-white">{tour.bestSeason}</span>
                </div>
                <div className="bg-white/5 p-1.5 rounded">
                  <span className="text-stone-400 block">Route:</span>
                  <span className="font-semibold text-white truncate block">{tour.startPoint} ⇄ {tour.endPoint}</span>
                </div>
                <div className="bg-white/5 p-1.5 rounded">
                  <span className="text-stone-400 block">Stay Tier:</span>
                  <span className="font-semibold text-emerald-400">{tour.tier || 'Standard'} (Twin Sharing)</span>
                </div>
                <div className="bg-white/5 p-1.5 rounded">
                  <span className="text-stone-400 block">Permit:</span>
                  <span className="font-semibold text-white">{tour.permitRequired ? 'ILP Required (We Process)' : 'No Permit'}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* DESKTOP VIEW HEADER (>= sm): Adaptive Header with Title, Quick Badges & Reading Mode Toggle */}
        <div className="hidden sm:block shrink-0">
          {isHeaderCollapsed ? (
            <div className="bg-stone-900 text-white px-4 py-2 sm:px-6 sm:py-2.5 flex items-center justify-between gap-2.5 shrink-0 border-b border-stone-800 shadow-xs transition-all">
              <div className="flex items-center gap-2 truncate min-w-0">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-400/30 shrink-0">
                  {tour.state}
                </span>
                <h2 className="text-sm font-extrabold text-white truncate">
                  {tour.title}
                </h2>
                <span className="px-2 py-0.5 rounded bg-white/10 text-stone-300 text-[10px] font-medium shrink-0">
                  {tour.durationDays}D / {tour.durationNights}N
                </span>
                <span className="font-mono text-xs font-bold text-amber-300 shrink-0">
                  • {formatPrice(priceCalculation.basePerPerson)}/p
                </span>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button 
                  type="button"
                  onClick={() => setIsHeaderCollapsed(false)}
                  className="px-2.5 py-1 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Expand full tour header & details"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Show Overview</span>
                </button>
                <button 
                  id="close-tour-modal-btn-desktop-collapsed"
                  onClick={onClose}
                  className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Streamlined, Space-Efficient Desktop Header */
            <div className="bg-stone-900 text-white px-5 py-3 sm:px-6 sm:py-3.5 relative shrink-0 transition-all border-b border-stone-800">
              {/* Top Row: Badges, Pricing, Reading Mode Button & Close */}
              <div className="flex items-center justify-between gap-3 mb-1.5">
                <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-400/30 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {tour.state}
                  </span>

                  {tour.specialTag && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 text-[11px] font-bold shadow-xs">
                      {tour.specialTag}
                    </span>
                  )}

                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-stone-300 text-[11px] font-medium">
                    {tour.durationDays}D / {tour.durationNights}N
                  </span>

                  <div className="flex items-center gap-1 text-[11px] text-amber-300">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="font-bold">{tour.rating}</span>
                    <span className="text-stone-400">({tour.reviewsCount})</span>
                  </div>
                </div>

                {/* Action Buttons: Reading Mode (More Space) & Close */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button 
                    type="button"
                    onClick={() => setIsHeaderCollapsed(true)}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-stone-200 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Collapse header into slim bar to maximize reading space"
                  >
                    <Minimize2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Compact Reading View</span>
                  </button>
                  <button 
                    id="close-tour-modal-btn"
                    onClick={onClose}
                    className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Title & Price Header */}
              <div className="flex flex-row items-baseline justify-between gap-2">
                <div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight leading-snug">
                    {tour.title}
                  </h2>
                  <p className="text-xs text-stone-300 line-clamp-1 max-w-2xl">
                    {tour.subtitle}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[10px] text-stone-400 block sm:inline mr-1">Starting from:</span>
                  <span className="font-extrabold text-amber-300 font-mono text-sm sm:text-base">
                    {tour.priceRange 
                      ? `₹${tour.priceRange.min.toLocaleString('en-IN')} – ₹${tour.priceRange.max.toLocaleString('en-IN')}` 
                      : `${formatPrice(priceCalculation.basePerPerson)} / person`}
                  </span>
                </div>
              </div>

              {/* Slim Trip Facts Strip */}
              <div className="mt-2 pt-1.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[11px] text-stone-300">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                  <span>Best: <strong className="text-white">{tour.bestSeason}</strong></span>
                  <span>•</span>
                  <span>Route: <strong className="text-white">{tour.startPoint} ⇄ {tour.endPoint}</strong></span>
                  <span>•</span>
                  <span>Tier: <strong className="text-emerald-400">{tour.tier || 'Standard'} Land</strong></span>
                  <span>•</span>
                  <span>Basis: <strong className="text-stone-200">Twin Sharing</strong></span>
                </div>

                <button 
                  type="button"
                  onClick={() => setShowQuickFacts(!showQuickFacts)}
                  className="text-[10px] text-emerald-400 hover:text-emerald-300 underline font-medium cursor-pointer"
                >
                  {showQuickFacts ? 'Hide extra info ▴' : 'More facts ▾'}
                </button>
              </div>

              {/* Optional Extended Facts Dropdown */}
              {showQuickFacts && (
                <div className="mt-2 pt-2 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-stone-300 animate-fadeIn">
                  <div className="bg-white/5 p-2 rounded-lg">
                    <span className="text-stone-400 block text-[10px]">Permit Policy:</span>
                    <span className="font-semibold text-white text-[11px]">{tour.permitRequired ? 'ILP Required (We Process)' : 'No Permit Required'}</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-lg">
                    <span className="text-stone-400 block text-[10px]">Altitude / Terrain:</span>
                    <span className="font-semibold text-white text-[11px]">{tour.difficulty} Grade Circuit</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-lg">
                    <span className="text-stone-400 block text-[10px]">Vehicle Basis:</span>
                    <span className="font-semibold text-white text-[11px]">Private Dedicated Commercial</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-lg">
                    <span className="text-stone-400 block text-[10px]">Starting Point:</span>
                    <span className="font-semibold text-white text-[11px]">{tour.startPoint} Airport / Station</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Tab Switcher Bar */}
        <div className="bg-stone-100 border-b border-stone-200 px-2.5 sm:px-6 flex items-center justify-between shrink-0 overflow-x-auto scrollbar-none">
          <div className="flex gap-1 sm:gap-2">
            <button
              id="tab-btn-itinerary"
              onClick={() => setActiveTab('itinerary')}
              className={`py-2 sm:py-2.5 px-2.5 sm:px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 cursor-pointer transition-colors whitespace-nowrap ${
                activeTab === 'itinerary'
                  ? 'border-emerald-700 text-emerald-800 bg-white shadow-xs rounded-t-lg'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              <Compass className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Day-by-Day Tour Plan ({tour.itinerary.length} Days)</span>
              <span className="sm:hidden">Itinerary ({tour.itinerary.length}D)</span>
            </button>

            <button
              id="tab-btn-price"
              onClick={() => setActiveTab('price')}
              className={`py-2 sm:py-2.5 px-2.5 sm:px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 cursor-pointer transition-colors whitespace-nowrap ${
                activeTab === 'price'
                  ? 'border-emerald-700 text-emerald-800 bg-white shadow-xs rounded-t-lg'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="hidden sm:inline">Interactive Price Estimator & Booking</span>
              <span className="sm:hidden">Price & Book</span>
            </button>

            <button
              id="tab-btn-inclusions"
              onClick={() => setActiveTab('inclusions')}
              className={`py-2 sm:py-2.5 px-2.5 sm:px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 cursor-pointer transition-colors whitespace-nowrap ${
                activeTab === 'inclusions'
                  ? 'border-emerald-700 text-emerald-800 bg-white shadow-xs rounded-t-lg'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="hidden sm:inline">Inclusions & Stays</span>
              <span className="sm:hidden">Inclusions</span>
            </button>

            <button
              id="tab-btn-permits"
              onClick={() => setActiveTab('permits')}
              className={`py-2 sm:py-2.5 px-2.5 sm:px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 cursor-pointer transition-colors whitespace-nowrap ${
                activeTab === 'permits'
                  ? 'border-emerald-700 text-emerald-800 bg-white shadow-xs rounded-t-lg'
                  : 'border-transparent text-stone-600 hover:text-stone-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="hidden sm:inline">{tour.permitRequired ? 'ILP Permits & Packing' : 'Travel Guidelines & Packing'}</span>
              <span className="sm:hidden">{tour.permitRequired ? 'Permits' : 'Guidelines'}</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 py-1.5">
            <button
              onClick={() => setActiveTab('price')}
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs transition-colors cursor-pointer"
            >
              Get Custom Quote
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-3.5 sm:p-5 lg:p-6 flex-1 space-y-4 sm:space-y-6">

          {/* TAB 1: ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              
              {/* Space-Efficient Collapsible Tour Overview Banner (Mobile & Desktop Responsive) */}
              <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/60 overflow-hidden text-stone-800 transition-all">
                <div className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0 text-xs text-stone-700">
                    <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="font-bold text-emerald-950">Expedition Overview</span>
                    <span className="truncate text-stone-600 hidden sm:inline">• {tour.overview}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowOverview(!showOverview)}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 self-start sm:self-auto flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {showOverview ? 'Hide Overview ▴' : 'View Full Overview & Highlights ▾'}
                  </button>
                </div>

                {showOverview && (
                  <div className="px-3.5 pb-4 pt-2.5 border-t border-emerald-200/60 text-xs text-stone-700 space-y-3.5 animate-fadeIn">
                    <div>
                      <h5 className="font-bold text-emerald-950 text-xs mb-1">About this Expedition:</h5>
                      <p className="leading-relaxed text-stone-700 text-xs">
                        {tour.overview}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-emerald-200/60">
                      <h5 className="font-bold text-emerald-950 text-xs mb-2">Key Tour Highlights:</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {tour.highlights.map((hl, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-stone-700 bg-white/70 p-2 rounded-lg border border-emerald-100/80 shadow-2xs">
                            <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                            <span className="leading-snug">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sticky Quick Day Navigator Bar for Seamless Reading */}
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-xs py-2 px-1 border-b border-stone-200 flex flex-wrap items-center justify-between gap-2 shadow-2xs">
                <div className="flex items-center gap-1.5 overflow-x-auto text-xs py-0.5 scrollbar-none max-w-full">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider shrink-0 mr-0.5">
                    Jump to Day:
                  </span>
                  {tour.itinerary.map(day => (
                    <button
                      key={day.day}
                      type="button"
                      onClick={() => {
                        if (!expandedDays.includes(day.day)) {
                          setExpandedDays(prev => [...prev, day.day]);
                        }
                        const el = document.getElementById(`itinerary-day-${day.day}`);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }}
                      className={`px-2 py-0.5 rounded-md text-xs font-bold transition-all shrink-0 cursor-pointer ${
                        expandedDays.includes(day.day)
                          ? 'bg-emerald-800 text-white shadow-2xs'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                      title={`Jump to Day ${day.day}`}
                    >
                      D{day.day}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs shrink-0">
                  <button 
                    type="button"
                    onClick={expandAll}
                    className="text-emerald-700 hover:text-emerald-900 font-bold text-xs cursor-pointer"
                  >
                    Expand All
                  </button>
                  <span className="text-stone-300">|</span>
                  <button 
                    type="button"
                    onClick={collapseAll}
                    className="text-stone-500 hover:text-stone-700 font-bold text-xs cursor-pointer"
                  >
                    Collapse All
                  </button>
                </div>
              </div>

              {/* Day Cards List */}
              <div className="space-y-3">
                {tour.itinerary.map((dayItem) => {
                  const isOpen = expandedDays.includes(dayItem.day);
                  return (
                    <div 
                      key={dayItem.day}
                      id={`itinerary-day-${dayItem.day}`}
                      className="border border-stone-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-xs"
                    >
                      <button
                        onClick={() => toggleDay(dayItem.day)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between hover:bg-stone-50/80 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-xl bg-emerald-800 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs">
                            D{dayItem.day}
                          </span>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-stone-900">
                              Day {dayItem.day}: {dayItem.title}
                            </h4>
                            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 mt-0.5">
                              {dayItem.stay && (
                                <span className="flex items-center gap-1">
                                  <Bed className="w-3.5 h-3.5 text-stone-400" />
                                  {dayItem.stay}
                                </span>
                              )}
                              {dayItem.altitude && (
                                <span className="text-emerald-700 font-medium">
                                  Alt: {dayItem.altitude}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="p-1 rounded-full text-stone-400 hover:text-stone-700">
                          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-6 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 bg-stone-50/40">
                          <p className="leading-relaxed text-stone-700 mt-2">
                            {dayItem.description}
                          </p>

                          {/* Activities checklist */}
                          {dayItem.activities && dayItem.activities.length > 0 && (
                            <div className="mt-3">
                              <span className="text-xs font-bold text-stone-800 block mb-1.5">Activities Included:</span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                {dayItem.activities.map((act, idx) => (
                                  <div key={idx} className="flex items-center gap-1.5 text-xs text-stone-600 bg-white p-2 rounded-lg border border-stone-200/60">
                                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                    <span>{act}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Meals & Stay details */}
                          <div className="mt-4 pt-3 border-t border-stone-200/70 flex flex-wrap items-center gap-4 text-xs text-stone-500">
                            <div className="flex items-center gap-1.5">
                              <Coffee className="w-3.5 h-3.5 text-amber-600" />
                              <span className="font-medium text-stone-700">Meals:</span> {dayItem.meals}
                            </div>
                            {dayItem.stay && (
                              <div className="flex items-center gap-1.5">
                                <Bed className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span className="font-medium text-stone-700">Night Stay:</span>
                                <span>{dayItem.stay}</span>
                              </div>
                            )}
                            {dayItem.distanceKm && (
                              <div className="flex items-center gap-1.5">
                                <Car className="w-3.5 h-3.5 text-blue-600" />
                                <span className="font-medium text-stone-700">Travel:</span> ~{dayItem.distanceKm} km
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Next Step Callout */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">Want to customize this tour plan or adjust days?</h4>
                  <p className="text-xs text-stone-600">We tailor custom North East itineraries including self-drive 4x4s, family homestays, and photography tours.</p>
                </div>
                <button
                  onClick={() => setActiveTab('price')}
                  className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shrink-0 transition-colors cursor-pointer"
                >
                  Estimate Price for Your Group →
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: ESTIMATED PRICE CALCULATOR */}
          {activeTab === 'price' && (
            <div className="space-y-6">
              
              <div className="bg-stone-50 p-4 sm:p-6 rounded-2xl border border-stone-200">
                {/* Land Package Callout Banner */}
                <div className="mb-6 p-4 rounded-xl bg-emerald-950 text-white border border-emerald-700/50 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold block">
                        Official Land Package Tier: {tour.tier || 'Standard'}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                        {tour.priceRange ? (
                          <span>Calibrated Price Range: ₹{tour.priceRange.min.toLocaleString('en-IN')} – ₹{tour.priceRange.max.toLocaleString('en-IN')} <span className="text-xs text-stone-300 font-normal">/ person (twin-sharing)</span></span>
                        ) : (
                          <span>Starting from {formatPrice(tour.basePricePerPerson)} / person</span>
                        )}
                      </h4>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-900/80 border border-emerald-500/30 text-[11px] text-emerald-300 font-semibold self-start sm:self-auto">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Land-Only Default (Twin-Sharing)</span>
                    </div>
                  </div>

                  {tour.inclusionsSummary && (
                    <div className="mt-3 text-xs text-stone-300">
                      <span className="text-stone-400 block text-[11px] font-medium">Included in Land Package:</span>
                      <span className="text-stone-200 font-medium">{tour.inclusionsSummary}</span>
                    </div>
                  )}
                  <p className="mt-2 text-[11px] text-stone-400 italic">
                    * Flights to/from Guwahati are offered as a direct pass-through add-on with zero mark-up, keeping total transparency.
                  </p>
                </div>

                <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-200">
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-stone-900 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-emerald-700" />
                      Live Tour Price Estimator
                    </h3>
                    <p className="text-xs text-stone-500">
                      Customize group size, stays, and transport for real-time estimated rates.
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-stone-400 block uppercase font-medium">Starting Base</span>
                    <span className="font-mono text-sm font-bold text-stone-700">
                      {formatPrice(tour.basePricePerPerson)} / person
                    </span>
                  </div>
                </div>

                {/* Step 1: Number of Travelers */}
                <div className="space-y-2 mb-6">
                  <label className="text-xs font-bold text-stone-800 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-emerald-600" />
                      1. Number of Travelers in Your Group:
                    </span>
                    <span className="text-emerald-700 font-bold font-mono text-sm">
                      {travelers} {travelers === 1 ? 'Traveler (Solo)' : 'Travelers'}
                      {priceCalculation.groupDiscountPercent > 0 && ` (${priceCalculation.groupDiscountPercent}% Group Discount Applied!)`}
                      {travelers === 1 && ' (Single Solo Supplement)'}
                    </span>
                  </label>

                  <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                      <button
                        key={num}
                        type="button"
                        id={`btn-travelers-${num}`}
                        onClick={() => setTravelers(num)}
                        className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          travelers === num
                            ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                            : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {num} {num === 10 ? '+' : ''}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Accommodation Tier */}
                <div className="space-y-2 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <label className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                      <Home className="w-4 h-4 text-emerald-600" />
                      2. Choose Accommodation Tier:
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Standard Tier */}
                    <button
                      type="button"
                      onClick={() => setAccommodationTier('standard')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        accommodationTier === 'standard'
                          ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/20'
                          : 'border-stone-200 bg-white hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs text-stone-900">Standard Tier</span>
                        {accommodationTier === 'standard' && (
                          <span className="text-[10px] font-medium text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                            Selected
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-500">
                        Clean verified tourist hotels & authentic homestays with attached western baths & breakfast.
                      </p>
                    </button>

                    {/* Deluxe 3-Star Tier */}
                    <button
                      type="button"
                      onClick={() => setAccommodationTier('deluxe')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        accommodationTier === 'deluxe'
                          ? 'border-emerald-700 bg-emerald-50/50 ring-2 ring-emerald-700/20'
                          : 'border-stone-200 bg-white hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs text-stone-900">Deluxe 3-Star Tier</span>
                        {accommodationTier === 'deluxe' && (
                          <span className="text-[10px] font-medium text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                            Selected
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-500">
                        Handpicked 3-star view hotels with room heaters, balconies & buffet breakfast.
                      </p>
                    </button>

                    {/* Luxury Eco-Resort */}
                    <button
                      type="button"
                      onClick={() => setAccommodationTier('luxury')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        accommodationTier === 'luxury'
                          ? 'border-emerald-700 bg-emerald-50/50 ring-2 ring-emerald-700/20'
                          : 'border-stone-200 bg-white hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs text-stone-900">Luxury Eco-Resort</span>
                        {accommodationTier === 'luxury' && (
                          <span className="text-[10px] font-medium text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                            Selected
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-500">
                        Premium view suites, colonial tea bungalows & boutique mountain glamping with luxury amenities.
                      </p>
                    </button>
                  </div>
                </div>

                {/* Step 3: Vehicle & Transport Type */}
                <div className="space-y-3 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <label className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                      <Car className="w-4 h-4 text-emerald-600" />
                      3. Dedicated Commercial Vehicle & Mountain Fleet:
                    </label>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        isArunachal 
                          ? 'bg-amber-50 text-amber-900 border-amber-300' 
                          : 'bg-emerald-50 text-emerald-900 border-emerald-300'
                      }`}>
                        {isArunachal ? '🏔️ Arunachal Zone' : '🌲 Meghalaya & Assam Zone'}
                      </span>
                    </div>
                  </div>

                  {/* 5 Vehicle Type Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {VEHICLE_TARIFFS.map((vehicle) => {
                      const isSelected = transportType === vehicle.id;
                      const isSedanInArunachal = isArunachal && vehicle.id === 'sedan';
                      const dailyRate = isArunachal ? vehicle.arunachalRatePerDay : vehicle.meghalayaAssamRatePerDay;
                      const baseDaily = isArunachal ? 5500 : 3800;
                      const delta = dailyRate !== null ? Math.max(0, dailyRate - baseDaily) : 0;
                      const personDelta = Math.round((delta * priceCalculation.tourDays) / Math.max(1, travelers));
                      const isRecommended = travelers === vehicle.recommendedGroupSize;

                      return (
                        <button
                          key={vehicle.id}
                          type="button"
                          disabled={isSedanInArunachal}
                          onClick={() => !isSedanInArunachal && setTransportType(vehicle.id)}
                          className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/20 shadow-xs'
                              : isSedanInArunachal
                              ? 'border-stone-200 bg-stone-100/60 opacity-50 cursor-not-allowed'
                              : 'border-stone-200 bg-white hover:border-stone-300 cursor-pointer'
                          }`}
                        >
                          <div>
                            {/* Badges */}
                            <div className="flex items-center justify-between gap-1 mb-1.5">
                              <span className="font-bold text-xs text-stone-900 leading-tight">
                                {vehicle.name}
                              </span>
                              {isSelected && (
                                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded-full shrink-0">
                                  Selected
                                </span>
                              )}
                            </div>

                            {/* Seating & Rec Group */}
                            <div className="flex items-center gap-2 text-[11px] text-stone-600 mb-1.5">
                              <span>Seats: <strong>{vehicle.seatingCapacity}</strong></span>
                              <span>•</span>
                              <span>Rec. Group: <strong>{vehicle.recommendedGroupSize} pax</strong></span>
                            </div>

                            {/* Vehicle Included/Suitability */}
                            <div className="text-[11px] space-y-0.5">
                              {isSedanInArunachal ? (
                                <div className="text-[10px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded">
                                  Not allowed on steep Arunachal passes
                                </div>
                              ) : delta === 0 ? (
                                <div className="text-[11px] font-semibold text-emerald-700">
                                  Standard Vehicle Included
                                </div>
                              ) : (
                                <div className="text-[11px] font-medium text-stone-600">
                                  Upgraded Private Vehicle
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Recommendation tag */}
                          {isRecommended && !isSedanInArunachal && (
                            <div className="mt-2 pt-1.5 border-t border-stone-100 text-[10px] text-emerald-800 font-semibold flex items-center gap-1">
                              <span>★ Best fit for {travelers} travelers</span>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 4: Optional Add-ons */}
                <div className="space-y-2 mb-6">
                  <label className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    4. Optional Experience Add-ons:
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {/* Flights Add-on - ACTIVE */}
                    <label className="flex items-center gap-2.5 p-2.5 rounded-xl border border-emerald-300 bg-emerald-50/70 hover:bg-emerald-50 cursor-pointer text-xs sm:col-span-2">
                      <input 
                        type="checkbox"
                        checked={selectedAddons.includes('flights-passthrough')}
                        onChange={() => handleToggleAddon('flights-passthrough')}
                        className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-stone-900 flex items-center gap-1.5">
                            <Plane className="w-3.5 h-3.5 text-emerald-700" />
                            Return Flights to/from Guwahati (Pass-Through Add-on)
                          </span>
                          <span className="text-[11px] font-mono text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded">
                            +{formatPrice(7500)}/person (At Actuals)
                          </span>
                        </div>
                        <span className="text-[11px] text-stone-600 block mt-0.5">
                          Direct airline pass-through billing with 0% mark-up. Standard domestic baggage (15kg check-in + 7kg cabin) included.
                        </span>
                      </div>
                    </label>

                    {/* Disabled Add-on 1 */}
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-stone-200 bg-stone-50/70 text-xs opacity-50 cursor-not-allowed">
                      <input 
                        type="checkbox"
                        disabled
                        checked={false}
                        className="rounded text-stone-400 w-4 h-4 cursor-not-allowed"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-stone-700 block">Priority ILP Express Processing</span>
                          <span className="text-[10px] font-bold uppercase text-stone-400 bg-stone-200/80 px-1.5 py-0.5 rounded">Disabled</span>
                        </div>
                        <span className="text-[11px] text-stone-400">Fast-track paperless permit issuance within 24 hours</span>
                      </div>
                    </div>

                    {/* Disabled Add-on 2 */}
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-stone-200 bg-stone-50/70 text-xs opacity-50 cursor-not-allowed">
                      <input 
                        type="checkbox"
                        disabled
                        checked={false}
                        className="rounded text-stone-400 w-4 h-4 cursor-not-allowed"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-stone-700 block">Indigenous Feast & Wine Tasting</span>
                          <span className="text-[10px] font-bold uppercase text-stone-400 bg-stone-200/80 px-1.5 py-0.5 rounded">Disabled</span>
                        </div>
                        <span className="text-[11px] text-stone-400">Smoked meats, bamboo shoot delicacies & organic brews</span>
                      </div>
                    </div>

                    {/* Disabled Add-on 3 */}
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-stone-200 bg-stone-50/70 text-xs opacity-50 cursor-not-allowed">
                      <input 
                        type="checkbox"
                        disabled
                        checked={false}
                        className="rounded text-stone-400 w-4 h-4 cursor-not-allowed"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-stone-700 block">Dedicated Photography Escort</span>
                          <span className="text-[10px] font-bold uppercase text-stone-400 bg-stone-200/80 px-1.5 py-0.5 rounded">Disabled</span>
                        </div>
                        <span className="text-[11px] text-stone-400">Expert angles for portraits, night sky & mountain landscape</span>
                      </div>
                    </div>

                    {/* Disabled Add-on 4 */}
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl border border-stone-200 bg-stone-50/70 text-xs opacity-50 cursor-not-allowed">
                      <input 
                        type="checkbox"
                        disabled
                        checked={false}
                        className="rounded text-stone-400 w-4 h-4 cursor-not-allowed"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-stone-700 block">Trekking Gear Pack</span>
                          <span className="text-[10px] font-bold uppercase text-stone-400 bg-stone-200/80 px-1.5 py-0.5 rounded">Disabled</span>
                        </div>
                        <span className="text-[11px] text-stone-400">Trek poles, sleeping bag liner & rain poncho</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown Result Card - Step 1 Guided Estimate */}
                <div className="p-6 rounded-2xl bg-[#14231B] text-white shadow-xl border border-[#233B2E]">
                  <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10 text-xs">
                    <span className="text-amber-300 font-semibold tracking-wide">
                      Step 1 of 2: Indicative Cost Calculation
                    </span>
                    <span className="text-stone-300 text-[11px]">
                      No commitment required
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs text-stone-300 font-medium block">
                        Estimated Investment ({travelers} {travelers === 1 ? 'traveler' : 'travelers'})
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                          {formatPrice(priceCalculation.totalEstimated)}
                        </span>
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <span className="text-xs text-stone-300 block">Per Person Base</span>
                      <span className="text-xl font-bold text-emerald-300">
                        {formatPrice(priceCalculation.perPersonEstimated)}
                      </span>
                      <span className="text-[11px] text-stone-400 block">All state permits & private transport included</span>
                    </div>
                  </div>

                  <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-stone-300">
                    <div>• Stay: {accommodationTier === 'deluxe' ? 'Deluxe 3-Star' : accommodationTier === 'luxury' ? 'Luxury Eco-Resort' : 'Standard Tier'}</div>
                    <div>• Vehicle: {VEHICLE_TARIFFS.find(v => v.id === transportType)?.shortName || transportType}</div>
                    <div>• Discount: {priceCalculation.groupDiscountPercent > 0 ? `${priceCalculation.groupDiscountPercent}% group saving` : 'Direct Rate'}</div>
                    <div>• Duration: {tour.durationDays}D / {tour.durationNights}N</div>
                  </div>

                  {/* Specialist Next Step Notice */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-stone-200">
                    <span>
                      <strong>Next Step:</strong> A designated route specialist in Guwahati will refine this with you within <span className="text-amber-300 font-bold">3 hours</span>.
                    </span>
                  </div>
                </div>

              </div>

              {/* Booking & Inquiry Submission Form - Step 2 */}
              <div className="p-6 rounded-2xl border border-stone-200 bg-white shadow-xs">
                {!bookingConfirmed ? (
                  <form onSubmit={handleSubmitInquiry} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-emerald-800 font-semibold mb-0.5">
                          Step 2: Specialist Itinerary Review & Direct Consultation
                        </div>
                        <h4 className="text-base font-bold text-stone-900">
                          Connect With Your Dedicated Route Director
                        </h4>
                        <p className="text-xs text-stone-500">
                          We review seasonal pass clearances, road conditions, and room allocations before finalizing your quote.
                        </p>
                      </div>

                      <div className="hidden sm:flex items-center gap-1.5 text-xs text-stone-600 bg-stone-100 px-3 py-1 rounded-md font-medium">
                        Guaranteed 3-hour response
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Full Name *
                        </label>
                        <input 
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Bhaskar Hazarika"
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input 
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Email Address *
                        </label>
                        <input 
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. traveler@example.com"
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Tentative Travel Date
                        </label>
                        <input 
                          type="text"
                          value={travelDate}
                          onChange={(e) => setTravelDate(e.target.value)}
                          placeholder="e.g. Dec 01 - 06 or flexible"
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        Special Requests or Route Customizations (Optional)
                      </label>
                      <textarea 
                        rows={2}
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        placeholder="e.g. airport pickup needed in Dimapur, senior citizen in group, vegetarian meal preference..."
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                      <span className="text-[11px] text-stone-500">
                        🔒 Your contact details are strictly kept confidential for tour permits.
                      </span>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <a 
                          href={generateWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-emerald-600 text-emerald-800 hover:bg-emerald-50 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                        >
                          <MessageCircle className="w-4 h-4 text-emerald-600" />
                          <span>WhatsApp Quote</span>
                        </a>

                        <button 
                          type="submit"
                          id="submit-inquiry-btn"
                          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          <span>Generate Formal Estimate</span>
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-emerald-700" />
                    </div>

                    <h4 className="text-xl font-black text-stone-900">
                      Estimate Generated Successfully!
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                      Thank you <span className="font-bold text-stone-900">{fullName || 'Traveler'}</span>! 
                      Our North East expedition planner will reach you at <span className="font-bold text-stone-900">{phone || email}</span> within 2 hours with official confirmation.
                    </p>

                    <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-stone-100 border border-stone-200 text-xs font-mono text-stone-800">
                      <span>Booking Reference: <strong>{bookingRef}</strong></span>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(bookingRef);
                          setCopiedRef(true);
                          setTimeout(() => setCopiedRef(false), 2000);
                        }}
                        className="text-emerald-700 hover:underline cursor-pointer"
                      >
                        {copiedRef ? 'Copied!' : 'Copy Ref'}
                      </button>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                      <a 
                        href={generateWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-2 shadow-md"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send Booking to WhatsApp Hotline</span>
                      </a>

                      <button 
                        onClick={() => setBookingConfirmed(false)}
                        className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold cursor-pointer"
                      >
                        Recalculate Another Option
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 3: INCLUSIONS & EXCLUSIONS */}
          {activeTab === 'inclusions' && (
            <div className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Inclusions Box */}
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200">
                  <h4 className="text-sm font-black text-emerald-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    What's Included in This Package
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                    {tour.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions Box */}
                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200">
                  <h4 className="text-sm font-black text-rose-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600" />
                    What's Not Included
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                    {tour.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Verified Stays & Transports Note */}
              <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs text-stone-700">
                <h5 className="font-bold text-stone-900 mb-1">Our North East Sustainable Tourism Standard:</h5>
                <p>We work directly with certified tribal village councils, community forest committees, and locally owned homestays. Over 80% of trip expenditures directly benefit native hosts and guides in Nagaland, Arunachal Pradesh, Meghalaya, and Assam.</p>
              </div>

            </div>
          )}

          {/* TAB 4: PERMITS & PACKING */}
          {activeTab === 'permits' && (
            <div className="space-y-6">
              
              {/* Permit Card */}
              {tour.permitRequired ? (
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-amber-800" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-amber-950">
                        Inner Line Permit (ILP) & Protected Area Guidelines
                      </h4>
                      <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                        {tour.permitDetails}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-amber-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-700">
                    <div className="bg-white p-3 rounded-xl border border-amber-200">
                      <span className="font-bold block text-stone-900">Documents Needed:</span>
                      <span>Aadhaar Card, Voter ID, or Passport + 2 passport photos</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-amber-200">
                      <span className="font-bold block text-stone-900">Processing Time:</span>
                      <span>1 to 2 business days (handled directly by our team)</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-amber-200">
                      <span className="font-bold block text-stone-900">Foreign Nationals:</span>
                      <span>PAP / RAP assistance provided for permitted circuits</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-emerald-950">
                        Zero Permit Zone • Hassle-Free Travel
                      </h4>
                      <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                        No Inner Line Permit (ILP) or special administrative paperwork is required for Indian domestic travelers visiting {tour.state}. Standard Indian government photo identification (Aadhaar Card, Driving License, Voter ID, or Passport) is all you need for airport access and hotel check-ins.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Recommended Packing List */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <h4 className="text-sm font-extrabold text-stone-900 mb-3">
                  Recommended Packing Checklist for {tour.state}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tour.packingTips.map((tip, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 bg-white p-2.5 rounded-xl border border-stone-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Sticky Bottom Action Strip - Compact and mobile-optimized */}
        <div className="bg-stone-50 border-t border-stone-200 px-3.5 py-2 sm:px-6 sm:py-3 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-baseline gap-1.5 min-w-0">
            <span className="text-[11px] sm:text-xs text-stone-500 hidden xs:inline">Estimated:</span>
            <span className="text-base sm:text-2xl font-black text-stone-900 font-mono">
              {formatPrice(priceCalculation.totalEstimated)}
            </span>
            <span className="text-[10px] sm:text-xs text-stone-400">
              ({travelers}p)
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a 
              href={getWhatsAppQuickBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
