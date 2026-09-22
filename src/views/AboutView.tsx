import React, { useState } from 'react';
import { 
  Compass, 
  Mountain, 
  ShieldCheck, 
  Heart, 
  Users, 
  Award, 
  MapPin, 
  Leaf, 
  FileText,
  PhoneCall,
  Mail,
  ArrowRight,
  Car,
  Building2
} from 'lucide-react';
import { CAMERA_IMAGES } from '../assets/images';
import { VehicleTariffCard } from '../components/VehicleTariffCard';
import { HotelTariffCard } from '../components/HotelTariffCard';

interface AboutViewProps {
  onOpenPermitGuide: () => void;
  onOpenCustomQuote: () => void;
  onNavigateToPackages: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onOpenPermitGuide,
  onOpenCustomQuote,
  onNavigateToPackages
}) => {
  const [activeTariffTab, setActiveTariffTab] = useState<'vehicles' | 'hotels'>('vehicles');
  return (
    <div id="about-view" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      
      {/* Hero Narrative */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
          <Compass className="w-3.5 h-3.5 text-emerald-700" />
          The Frontier Story
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
          Pioneering Authentic Travel Exclusively in North-East India
        </h1>
        <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
          Founded and operated by indigenous adventurers, North East Odyssey was born out of a profound love for our homeland: the mist-shrouded rainforests, warrior traditions, living bridges, and sacred Himalayan valleys across the Seven Sisters and Sikkim.
        </p>
      </div>

      {/* Visual Showcase Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl mb-16 border border-stone-200">
        <div className="relative h-72 sm:h-96 w-full">
          <img 
            src={CAMERA_IMAGES.heroMountains} 
            alt="Misty landscape of North East India"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <div className="max-w-2xl">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600/90 text-white inline-block mb-2">
                Our Root Philosophy
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-white">
                "Travel as a Guest, Return as Kin"
              </h2>
              <p className="text-xs sm:text-sm text-stone-200 mt-2 leading-relaxed">
                We believe North-East India cannot be explored from inside sterile tour buses. It reveals its soul around smoky kitchen hearths (Dhaan) sipping rice beer with village elders, traversing high-altitude bamboo passes, and hearing folklore passed down through generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars of North East Odyssey */}
      <div className="mb-20">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-black text-stone-900">
            Why We Are Different
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Built from within the communities we guide you through.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-emerald-700" />
              </div>
              <h4 className="text-base font-bold text-stone-900 mb-2">100% Indigenous Guides</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Your expedition leaders are native Angami, Khasi, Apatani, Mizo, and Assamese experts with deep kinship bonds in every valley and village.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-semibold text-emerald-800">
              No generic outside contractors
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-amber-700" />
              </div>
              <h4 className="text-base font-bold text-stone-900 mb-2">Hassle-Free ILP Permits</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Inner Line Permits (ILP) and Protected Area Permits (PAP) can be daunting for travelers. We handle 100% of documentation directly with state administrations.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-semibold text-amber-800">
              Complete legal clearance guaranteed
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-teal-700" />
              </div>
              <h4 className="text-base font-bold text-stone-900 mb-2">Community Tourism</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Over 75% of your trip expenditure flows directly into village homestays, local farmers, porters, and tribal artisan families—preserving heritage sustainably.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-semibold text-teal-800">
              Leave-No-Trace certified treks
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center mb-4">
                <Mountain className="w-6 h-6 text-stone-700" />
              </div>
              <h4 className="text-base font-bold text-stone-900 mb-2">Commercial Mountain Fleet & Transparent Tariffs</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                The frontier terrain requires reliable vehicles matched to road conditions. We operate a dedicated fleet of Sedans (Swift Dzire/Etios), rugged SUVs (Scorpio/Bolero/Xylo), Innovas, luxury Crystas, and 12-Seater Tempo Travellers with standardized regional daily tariffs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-semibold text-stone-800">
              Experienced hill chauffeurs & transparent daily rates
            </div>
          </div>

        </div>
      </div>

      {/* Official Commercial Tariffs & Rate Matrices */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
              Published Commercial Tariffs
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900">
              Fleet & Destination Accommodation Rate Cards
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
              We operate on 100% price transparency with land-only, ex-Guwahati quotes. Below are our published vehicle fleet daily rates and certified destination hotel room tariffs (Standard vs Deluxe 3-Star).
            </p>
          </div>

          {/* Tab Selector */}
          <div className="inline-flex p-1 bg-stone-100 rounded-xl border border-stone-200 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTariffTab('vehicles')}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTariffTab === 'vehicles'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Car className="w-3.5 h-3.5 text-emerald-600" />
              <span>Vehicle Fleet Rates</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTariffTab('hotels')}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTariffTab === 'hotels'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Hotel Tariffs (Std vs 3-Star)</span>
            </button>
          </div>
        </div>

        {activeTariffTab === 'vehicles' ? (
          <VehicleTariffCard />
        ) : (
          <HotelTariffCard />
        )}
      </div>

      {/* Regional Operations & Base Offices */}
      <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-10 border border-stone-800 mb-16 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-400/30">
              <MapPin className="w-3.5 h-3.5" />
              Local Ground Presence
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              On-The-Ground Base Offices Across the Region
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              We aren't a remote call center in Delhi or Mumbai. Our operations hubs and staff live in the North East, ensuring instantaneous 24/7 mountain support, real-time road condition alerts, and personal airport welcomes.
            </p>

            <div className="mt-6 space-y-3 text-xs text-stone-300">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Central Operations Hub — Guwahati, Assam</strong>
                  <span className="text-stone-400">GS Road, Christian Basti (Close to LGBI International Airport & Railway Station)</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Highland & Festival Camp — Kohima / Kigwema, Nagaland</strong>
                  <span className="text-stone-400">Kisama Ridge (Exclusive baseline camp for Hornbill Festival & Dzukou Valley trailheads)</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Cloud Base — Shillong, Meghalaya</strong>
                  <span className="text-stone-400">Laitumkhrah (Base for Cherrapunji root bridges and Dawki crystal river expeditions)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-950/80 rounded-2xl p-6 border border-stone-800 space-y-5">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              North East Responsible Tourism Pledge
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                <span><strong>No Plastic Trails:</strong> Plastic bottles and disposable packaging are prohibited in high-altitude zones like Dzukou and Tawang.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                <span><strong>Cultural Sanctity:</strong> We educate travelers on tribal morung decorum, sacred forest rituals, and photography consent.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                <span><strong>Fair Living Wages:</strong> All native guides, drivers, and porters are compensated above regional statutory benchmarks.</span>
              </li>
            </ul>

            <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
              <button
                onClick={onOpenPermitGuide}
                className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                Review State Permit Rules
              </button>

              <button
                onClick={onNavigateToPackages}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition-all cursor-pointer flex items-center gap-1"
              >
                Explore Tours
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
