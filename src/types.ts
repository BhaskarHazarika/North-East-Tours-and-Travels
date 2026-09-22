export type NorthEastState = 
  | 'Nagaland'
  | 'Arunachal Pradesh'
  | 'Meghalaya'
  | 'Assam'
  | 'Sikkim'
  | 'Manipur'
  | 'Mizoram'
  | 'Tripura';

export type TourCategory = 
  | 'Festival Specials'
  | 'Trekking & Adventure'
  | 'Culture & Heritage'
  | 'Wildlife & Nature'
  | 'All';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string; // e.g. 'Breakfast, Dinner'
  stay: string; // e.g. 'Traditional Naga Homestay, Kisama'
  altitude?: string;
  distanceKm?: number;
}

export interface PricingTierDetail {
  tierName: 'Budget' | 'Standard' | 'Standard/Deluxe' | 'Deluxe' | 'Budget/Backpacker';
  minPrice: number;
  maxPrice: number;
  inclusionsSummary: string;
}

export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  state: NorthEastState;
  category: TourCategory;
  durationDays: number;
  durationNights: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  bestSeason: string;
  startPoint: string;
  endPoint: string;
  isSpecialHighlight: boolean;
  specialTag?: 'Hornbill Festival' | 'Dzukou Valley' | 'Ziro Festival' | 'Iconic North East' | 'Main Highlight' | string;
  basePricePerPerson: number; // in INR (per person twin-sharing)
  originalPricePerPerson?: number; // for showing discount
  priceRange?: {
    min: number;
    max: number;
  };
  tier?: 'Budget' | 'Standard' | 'Standard/Deluxe' | 'Deluxe' | 'Budget/Backpacker';
  inclusionsSummary?: string;
  benchmarkComparison?: string;
  statesCovered?: string[];
  roomSharingPolicy?: string;
  image: string;
  gallery: string[];
  rating: number;
  reviewsCount: number;
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  permitRequired: boolean;
  permitDetails: string;
  packingTips: string[];
  nextDepartureDates: string[];
}

export type VehicleTypeId = 'sedan' | 'suv' | 'innova' | 'innova_crysta' | 'tempo_traveller';
export type AccommodationTierId = 'standard' | 'deluxe' | 'luxury' | 'comfort';

export interface BookingInquiry {
  tourId: string;
  tourTitle: string;
  fullName: string;
  email: string;
  phone: string;
  travelDate: string;
  travelersCount: number;
  accommodationTier: AccommodationTierId;
  transportType: VehicleTypeId | 'shared' | 'private_suv' | 'dedicated_4x4';
  addOns: string[];
  specialRequests?: string;
  calculatedPricePerPerson: number;
  totalEstimatedPrice: number;
}
