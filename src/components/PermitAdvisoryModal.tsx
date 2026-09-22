import React from 'react';
import { X, ShieldCheck, AlertCircle, FileText, CheckCircle2, MapPin } from 'lucide-react';
import { NORTH_EAST_STATES_INFO } from '../data/packages';

interface PermitAdvisoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PermitAdvisoryModal: React.FC<PermitAdvisoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      id="permit-advisory-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div 
        id="permit-advisory-modal-card"
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200"
      >
        {/* Modal Header */}
        <div className="bg-emerald-900 text-white p-5 sm:p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close permit guide"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-700 text-emerald-200 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
            Official Government Advisory
          </div>
          <h2 className="text-xl sm:text-2xl font-black">
            North East India Travel Permits & ILP Guide
          </h2>
          <p className="text-xs sm:text-sm text-emerald-200 mt-1">
            Understanding Inner Line Permits (ILP) and Restricted Area Permits (RAP/PAP) for Indian & International travelers.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Quick Notice */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900">
              <span className="font-bold block">Good News for our travelers:</span>
              When you book any tour package with North East Odyssey, our team completes 100% of your government permit documentation and submission. No visiting government secretariats or standing in queues!
            </div>
          </div>

          {/* State-by-State Requirement Grid */}
          <div>
            <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider mb-3">
              State-by-State Entry Requirements:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {NORTH_EAST_STATES_INFO.map((st) => {
                const requiresPermit = st.permit.includes('ILP Required') || st.permit.includes('Border Areas');
                return (
                  <div 
                    key={st.name} 
                    className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-stone-900">{st.name}</span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          requiresPermit 
                            ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                            : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        }`}>
                          {st.permit}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 mt-1">{st.highlight}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Instructions for Hornbill, Dzukou, Ziro */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">
              Specifics for our Signature Festivals:
            </h3>

            <div className="space-y-2 text-xs text-stone-700">
              <div className="p-3 rounded-xl bg-stone-100 border border-stone-200">
                <span className="font-bold text-stone-900 block mb-0.5">
                  1. Hornbill Festival & Dzukou Valley (Nagaland)
                </span>
                <p>
                  Indian citizens require a valid Nagaland ILP (valid for 15 days or 30 days). 
                  Foreign nationals no longer require PAP to visit Kohima and Dimapur, but must register with the Foreigners Registration Officer (FRO) within 24 hours of arrival. We arrange this registration effortlessly.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-stone-100 border border-stone-200">
                <span className="font-bold text-stone-900 block mb-0.5">
                  2. Ziro Festival of Music & Tawang (Arunachal Pradesh)
                </span>
                <p>
                  Arunachal Pradesh strictly enforces ILP for all Indian visitors. Foreign nationals require a Protected Area Permit (PAP) issued to groups of two or more travelers through recognized tour operators.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-stone-100 border border-stone-200">
                <span className="font-bold text-stone-900 block mb-0.5">
                  3. Meghalaya & Assam
                </span>
                <p>
                  No special permits or ILPs required for Indian citizens. Simply bring your government photo ID (Aadhaar or Voter ID). Foreign travelers require a valid Indian tourist e-Visa.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-stone-50 p-4 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-800 text-white font-bold text-xs hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            Understood & Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
