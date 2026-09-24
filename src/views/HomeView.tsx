import React, { useState, useMemo, useRef } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Compass, 
  Car,
  FileCheck,
  ShieldCheck,
  Star,
  Building2,
  MapPin,
  Sparkles,
  Award,
  Clock,
  Send,
  ChevronRight
} from 'lucide-react';
import { TourPackage, NorthEastState, TourCategory } from '../types';
import { Hero } from '../components/Hero';
import { MainHighlightsSection } from '../components/MainHighlightsSection';
import { SpecialFestivalsSection } from '../components/SpecialFestivalsSection';
import { PackageFilterBar } from '../components/PackageFilterBar';
import { TourCard } from '../components/TourCard';
import { TOUR_PACKAGES } from '../data/packages';

interface HomeViewProps {
  onNavigate: (tab: 'destinations' | 'packages' | 'festivals' | 'about' | 'contact') => void;
  onSelectSpecialTour: (tag: string) => void;
  onSelectStateForPackages: (state: NorthEastState) => void;
  onSelectTour: (tour: TourPackage, openCalculator?: boolean) => void;
  onOpenPermitGuide: () => void;
  onOpenCustomQuote: () => void;
  featuredPackages: TourPackage[];
  currency: 'INR' | 'USD';
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectSpecialTour,
  onSelectStateForPackages,
  onSelectTour,
  onOpenPermitGuide,
  onOpenCustomQuote,
  featuredPackages,
  currency
}) => {
  const [selectedState, setSelectedState] = useState<NorthEastState | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<TourCategory>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'duration'>('featured');
  const packagesRef = useRef<HTMLDivElement>(null);

  // Fallback to foundational catalog if dynamic list is not yet loaded
  const packagesToDisplay = featuredPackages && featuredPackages.length > 0 ? featuredPackages : TOUR_PACKAGES;

  // Filter and sort packages dynamically
  const filteredPackages = useMemo(() => {
    let list = [...packagesToDisplay];

    if (selectedState !== 'All') {
      list = list.filter(p => p.state === selectedState || (p.statesCovered && p.statesCovered.includes(selectedState)));
    }

    if (selectedCategory !== 'All') {
      list = list.filter(p => p.category === selectedCategory);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.basePricePerPerson - b.basePricePerPerson);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.basePricePerPerson - a.basePricePerPerson);
    } else if (sortBy === 'duration') {
      list.sort((a, b) => a.durationDays - b.durationDays);
    }

    return list;
  }, [packagesToDisplay, selectedState, selectedCategory, sortBy]);

  const handleResetFilters = () => {
    setSelectedState('All');
    setSelectedCategory('All');
    setSortBy('featured');
  };

  const handleExploreClick = () => {
    if (packagesRef.current) {
      packagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMainHighlights = () => {
    document.getElementById('main-highlights-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToFestivals = () => {
    document.getElementById('special-festivals-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectHighlightPackage = (packageId: string) => {
    const pkg = packagesToDisplay.find(p => p.id === packageId) || TOUR_PACKAGES.find(p => p.id === packageId);
    if (pkg) {
      onSelectTour(pkg);
    }
  };

  return (
    <div id="home-view" className="w-full bg-[#FAF9F6] text-stone-900">
      
      {/* 1. Travel Agency Hero Section */}
      <Hero 
        onSelectHighlight={handleSelectHighlightPackage}
        onExploreMainHighlights={handleScrollToMainHighlights}
        onExploreFestivals={handleScrollToFestivals}
        onOpenCustomQuote={onOpenCustomQuote}
      />

      {/* 2. Main Highlights of North East India (3 Flagship Expeditions) */}
      <MainHighlightsSection 
        allPackages={packagesToDisplay}
        onSelectPackage={onSelectTour}
        currency={currency}
      />

      {/* 3. Special Festivals & High Departures (Hornbill, Dzukou, Ziro) */}
      <SpecialFestivalsSection 
        allPackages={packagesToDisplay}
        onSelectPackage={onSelectTour}
        currency={currency}
      />

      {/* 4. Curated Tour Packages Catalog with Filter Bar */}
      <section ref={packagesRef} id="curated-packages-section" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
              <Compass className="w-3.5 h-3.5 text-emerald-700" />
              <span>Tour & Travel Agency Packages</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-950 tracking-tight">
              Curated North East Tour Packages
            </h2>
            <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl">
              Handcrafted itineraries with verified mountain chauffeurs, pre-arranged ILP permits, and handpicked stays. Select any tour to view day-by-day plans or calculate instant customized pricing.
            </p>
          </div>

          <button
            onClick={() => onNavigate('packages')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-all shadow-xs self-start md:self-auto cursor-pointer"
          >
            <span>Full Catalog ({packagesToDisplay.length} Tours)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* State, Category & Sorting Filter Bar */}
        <PackageFilterBar 
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          totalResults={filteredPackages.length}
          onReset={handleResetFilters}
        />

        {/* Tour Cards Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((tour) => (
              <TourCard 
                key={tour.id}
                tour={tour}
                onSelect={onSelectTour}
                currency={currency}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 shadow-xs">
            <p className="text-stone-600 text-sm font-medium">No tour packages match the selected criteria.</p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Catalog Footer Link */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('packages')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-stone-900 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            <span>Browse Complete 15+ Tour Package Catalog</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </section>

      {/* 5. Travel Agency Guarantees & Why Book With Us */}
      <section className="py-16 sm:py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              <span>Why Book With North East Odyssey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight">
              The North East Travel Agency Advantage
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Unlike online aggregators that outsource your tour, we manage our own fleet, handle government permits directly, and provide on-ground concierge support ex-Guwahati.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1: Permits */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-xs flex flex-col justify-between hover:border-emerald-600 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 border border-emerald-200">
                  <FileCheck className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2">
                  Official ILP Permits Included
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Direct submission with Arunachal DC offices and Nagaland Home Commissionerate. Zero hassle for travelers.
                </p>
              </div>
              <button 
                onClick={onOpenPermitGuide}
                className="mt-4 text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 self-start cursor-pointer"
              >
                <span>Read Permit Guidelines</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Pillar 2: Fleet */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-xs flex flex-col justify-between hover:border-emerald-600 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4 border border-blue-200">
                  <Car className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2">
                  Dedicated Mountain Chauffeur
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Commercial yellow-plate vehicles with local mountain veterans trained on Sela snow roads and monsoon hill driving.
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-stone-400">
                Guaranteed commercial yellow plate
              </span>
            </div>

            {/* Pillar 3: Handpicked Stays */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-xs flex flex-col justify-between hover:border-emerald-600 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 border border-amber-200">
                  <Building2 className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2">
                  Verified Clean Stays
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Pre-inspected homestays and boutique resorts with 24/7 hot water, room heaters in Tawang, and western baths.
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-stone-400">
                Standard & Deluxe 3-Star options
              </span>
            </div>

            {/* Pillar 4: Transparent Land Rates */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-xs flex flex-col justify-between hover:border-emerald-600 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4 border border-purple-200">
                  <ShieldCheck className="w-6 h-6 text-purple-700" />
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2">
                  No Hidden Markups
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Honest land package pricing calibrated to regional benchmarks. Zero surprise surcharges at checkpoints.
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-stone-400">
                100% transparent invoicing
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Verified Guest Testimonials */}
      <section className="py-16 sm:py-20 bg-stone-50 border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 block mb-1">
              Verified Guest Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-950">
              Trusted by Hundreds of North East Travelers
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-3 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <span className="text-stone-700 font-bold text-sm ml-2">4.9 / 5.0 (420+ Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                "Our 12-day master odyssey covering Meghalaya, Kaziranga, and Tawang was flawlessly managed. Our driver Sanjib was phenomenal on the Sela Pass ice stretches, and our Bum La border permit was cleared without a hitch."
              </p>
              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-stone-900">Dr. Rajesh & Sunita Varma</h4>
                  <p className="text-[11px] text-stone-500">Bengaluru • 12D Master Circuit</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Verified Guest</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                "The 5-day Meghalaya package with the Double Decker Root Bridge and Dawki crystal boating was breathtaking. Transparent pricing, pristine vehicle, and zero hidden costs. Highly recommend their local team."
              </p>
              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-stone-900">Ananya Sen & Friends</h4>
                  <p className="text-[11px] text-stone-500">Kolkata • 5D Meghalaya Trip</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Verified Guest</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                "Traveled with elderly parents to Kaziranga and Shillong. The Innova Crysta was super comfortable and spotless. The safari bookings and hotel arrangements were smooth as clockwork."
              </p>
              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-stone-900">Vikramaditya Nair</h4>
                  <p className="text-[11px] text-stone-500">Mumbai • 7D Family Safari</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Verified Guest</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Quick Route Consultation & Custom Itinerary CTA */}
      <section className="py-16 sm:py-20 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 border border-emerald-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Custom Tailored Expeditions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Plan Your Custom North East Itinerary
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have a specific dates in mind or traveling with family? Tell us your sector preferences, and our Guwahati route specialists will draft a personalized plan with confirmed vehicle and stay tariffs in 3 hours.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenCustomQuote}
              className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Get Free Tailored Itinerary</span>
            </button>

            <a
              href="https://wa.me/919395109412?text=Hi%20North%20East%20Odyssey%2C%20I%20would%20like%20to%20plan%20a%20custom%20tour%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp Hotline</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
