import React from 'react';
import { 
  Crown, 
  Sparkles, 
  Compass
} from 'lucide-react';
import { CAMERA_IMAGES } from '../assets/images';

interface HeroProps {
  onSelectHighlight?: (packageId: string) => void;
  onExploreMainHighlights?: () => void;
  onExploreFestivals?: () => void;
  onOpenCustomQuote?: () => void;
  // Optional backwards-compat props if passed
  onSelectSpecial?: (tag: string) => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectHighlight,
  onExploreMainHighlights,
  onExploreFestivals,
  onOpenCustomQuote,
  onSelectSpecial,
  onExploreClick
}) => {
  const handleMainHighlightsClick = () => {
    if (onExploreMainHighlights) {
      onExploreMainHighlights();
    } else {
      document.getElementById('main-highlights-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFestivalsClick = () => {
    if (onExploreFestivals) {
      onExploreFestivals();
    } else if (onSelectSpecial) {
      onSelectSpecial('Hornbill Festival');
    } else {
      document.getElementById('special-festivals-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCustomTripPlanner = () => {
    if (onOpenCustomQuote) {
      onOpenCustomQuote();
    } else if (onExploreClick) {
      onExploreClick();
    }
  };

  return (
    <section 
      id="hero-section" 
      className="relative overflow-hidden bg-stone-950 text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32"
    >
      {/* 
        Background Layer: Authentic misty Himalayan valley & mountain ridges
        matching the exact aesthetic from the screenshot
      */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out scale-100"
        style={{
          backgroundImage: `url('${CAMERA_IMAGES.heroMountains}')`
        }}
      />

      {/* Atmospheric subtle vignette overlay ensuring high contrast and readability */}
      <div className="absolute inset-0 z-1 bg-stone-950/50" />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950/80" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center">
        
        {/* 1. Top Centered Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-500/50 bg-stone-900/70 backdrop-blur-md text-emerald-400 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-6 sm:mb-8 shadow-md">
          <Compass className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>INDIGENOUS NORTH-EAST INDIA TRAVEL SPECIALIST</span>
        </div>

        {/* 2. Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] max-w-4xl mx-auto drop-shadow-md">
          Journey Into the Mystical Frontier of North-East India
        </h1>

        {/* 3. Subtitle Paragraph with highlighted states */}
        <p className="mt-6 text-sm sm:text-base lg:text-lg text-stone-200 leading-relaxed max-w-3xl mx-auto drop-shadow-sm font-normal">
          Exclusive expeditions across{' '}
          <span className="text-emerald-400 font-semibold">Assam</span>,{' '}
          <span className="text-emerald-400 font-semibold">Meghalaya</span>,{' '}
          <span className="text-emerald-400 font-semibold">Arunachal</span>,{' '}
          <span className="text-emerald-400 font-semibold">Nagaland</span>,{' '}
          <span className="text-emerald-400 font-semibold">Manipur</span>,{' '}
          <span className="text-emerald-400 font-semibold">Mizoram</span>,{' '}
          <span className="text-emerald-400 font-semibold">Tripura</span>, and{' '}
          <span className="text-emerald-400 font-semibold">Sikkim</span>. Experience ancient tribal rituals, living root bridges, and pristine Himalayan valleys with 100% native guides.
        </p>

        {/* 4. Main Highlights Chip Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          <div className="inline-flex items-center gap-1.5 text-amber-400 font-semibold text-xs sm:text-sm mr-1">
            <Crown className="w-4 h-4 text-amber-400" />
            <span>Main Highlights:</span>
          </div>

          <button
            type="button"
            onClick={() => onSelectHighlight?.('meghalaya-4n5d-standard')}
            className="px-3.5 py-1.5 rounded-full border border-emerald-500/50 bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 hover:text-white text-xs sm:text-sm font-medium transition-all backdrop-blur-xs cursor-pointer shadow-xs active:scale-95"
          >
            5D/4N Meghalaya Trip
          </button>

          <button
            type="button"
            onClick={() => onSelectHighlight?.('ne-complete-11n12d')}
            className="px-3.5 py-1.5 rounded-full border border-emerald-500/50 bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 hover:text-white text-xs sm:text-sm font-medium transition-all backdrop-blur-xs cursor-pointer shadow-xs active:scale-95"
          >
            13D/12N Meghalaya-Assam-Arunachal
          </button>

          <button
            type="button"
            onClick={() => onSelectHighlight?.('ne-grand-circuit-9n10d')}
            className="px-3.5 py-1.5 rounded-full border border-emerald-500/50 bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 hover:text-white text-xs sm:text-sm font-medium transition-all backdrop-blur-xs cursor-pointer shadow-xs active:scale-95"
          >
            9D/8N Kaziranga-Tawang
          </button>
        </div>

        {/* 5. Primary Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <button
            type="button"
            id="hero-explore-highlights-btn"
            onClick={handleMainHighlightsClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-950/50 cursor-pointer active:scale-95"
          >
            <Crown className="w-5 h-5 text-white" />
            <span>Explore Main Highlights</span>
          </button>

          <button
            type="button"
            id="hero-hornbill-festivals-btn"
            onClick={handleFestivalsClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900/80 hover:bg-stone-800/90 border border-stone-700/80 hover:border-amber-400/60 text-white font-semibold text-sm sm:text-base transition-all backdrop-blur-md cursor-pointer active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Hornbill & Festivals</span>
          </button>

          <button
            type="button"
            id="hero-custom-planner-btn"
            onClick={handleCustomTripPlanner}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900/80 hover:bg-stone-800/90 border border-stone-700/80 hover:border-stone-500 text-white font-semibold text-sm sm:text-base transition-all backdrop-blur-md cursor-pointer active:scale-95"
          >
            <span>Custom Trip Planner</span>
          </button>
        </div>

      </div>
    </section>
  );
};
