import React from 'react';
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Mountain,
  FileText,
  Lock
} from 'lucide-react';
import { NavTab } from './Navbar';

interface FooterProps {
  onSelectSpecial: (tag: string) => void;
  onOpenPermitGuide: () => void;
  onOpenCustomQuote: () => void;
  onNavigate: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectSpecial,
  onOpenPermitGuide,
  onOpenCustomQuote,
  onNavigate
}) => {
  return (
    <footer id="main-footer" className="bg-stone-950 text-stone-300 border-t border-stone-800">
      
      {/* Top Value Banner */}
      <div className="border-b border-stone-800 bg-stone-900/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800/40">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% North East Native Guides</h4>
              <p className="text-xs text-stone-400 mt-1">
                Angami, Khasi, Apatani and Assamese certified local experts leading every trail and festival morung.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Government ILP Authorized</h4>
              <p className="text-xs text-stone-400 mt-1">
                Zero hassle Inner Line Permit (ILP) and PAP documentation managed end-to-end with local administrations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800/40">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Transparent Live Estimations</h4>
              <p className="text-xs text-stone-400 mt-1">
                Real time pricing adapted to group size, stays, and 4x4 mountain vehicles with zero hidden markups.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-3 text-left cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-800 text-white flex items-center justify-center shadow-md">
                <Compass className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <span className="font-black text-lg text-white block leading-none">
                  North East <span className="text-emerald-400">Odyssey</span>
                </span>
                <span className="text-[11px] font-medium tracking-wider uppercase text-stone-400">
                  Tours & Travels • Seven Sisters & Sikkim
                </span>
              </div>
            </button>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              We are an authentic, indigenous-run travel agency based exclusively in North East India. 
              We curate festival expeditions for the world-famous Hornbill Festival, Dzukou Valley wilderness treks, and Ziro Festival of Music, along with circuits across Meghalaya, Assam, and Arunachal.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Head Office: Natun Bazar, Basistha, Guwahati, Assam 781029</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>24x7 Traveler Hotline: +91 93951 09412</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="mailto:admin@northeast-odyssey.com" className="hover:text-emerald-400 transition-colors">
                  admin@northeast-odyssey.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Explore Pages
            </h5>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('destinations')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  8 North-East Destinations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('packages')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Tour Packages & Circuits
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('festivals')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Festivals & Expeditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  About Our Indigenous Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact & Inquire
                </button>
              </li>
            </ul>
          </div>

          {/* Festival & Main Highlights Navigation */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Main Highlights
            </h5>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button 
                  onClick={() => onSelectSpecial('5 days')} 
                  className="hover:text-emerald-300 transition-colors text-left cursor-pointer"
                >
                  5D/4N Meghalaya Trip
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSpecial('13 days')} 
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  13D/12N Meghalaya-Assam-Arunachal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSpecial('kaziranga - tawang')} 
                  className="hover:text-teal-300 transition-colors text-left cursor-pointer"
                >
                  9D/8N Kaziranga - Tawang Trip
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSpecial('Hornbill Festival')} 
                  className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                >
                  Hornbill Festival (Nagaland)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSpecial('Dzukou Valley')} 
                  className="hover:text-emerald-300 transition-colors text-left cursor-pointer"
                >
                  Dzukou Valley & Ziro Festival
                </button>
              </li>
            </ul>
          </div>

          {/* Travel Help & Permits */}
          <div>
            <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Travel Advisory
            </h5>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button 
                  onClick={onOpenPermitGuide}
                  className="hover:text-emerald-400 underline decoration-stone-600 underline-offset-2 text-left cursor-pointer flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  Inner Line Permit (ILP) Guide
                </button>
              </li>
              <li>High Altitude Acclimatization Tips</li>
              <li>Monsoon vs Winter Travel Calendar</li>
              <li>Tribal Morung Etiquette</li>
              <li>
                <button 
                  onClick={onOpenCustomQuote}
                  className="hover:text-white text-emerald-400 font-bold text-left cursor-pointer"
                >
                  Request Tailor-Made Quote →
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Sustainable Tourism Pledge & Copyright */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} North East Odyssey Tours & Travels. All Rights Reserved.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for North East India’s indigenous communities & biodiversity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
