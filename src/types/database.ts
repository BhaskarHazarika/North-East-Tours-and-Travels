import { NorthEastState, TourCategory, TourPackage } from '../types';

export interface SupabaseDestination {
  id: string;
  slug: string;
  name: NorthEastState;
  tagline: string;
  description: string;
  capital: string;
  best_time_to_visit: string;
  permit_type: 'ILP Required' | 'RAP/PAP Required for Foreigners' | 'No Special Permit for Indians';
  permit_details: string;
  top_attractions: string[];
  hero_image: string;
  is_featured: boolean;
  display_order: number;
}

export interface SupabaseFestival {
  id: string;
  slug: string;
  title: string;
  state: NorthEastState;
  month: string;
  dates_approx: string;
  venue: string;
  significance: string;
  description: string;
  cultural_highlights: string[];
  image: string;
  related_tour_id?: string;
  is_major: boolean;
}

export interface SupabaseEnquiry {
  id: string;
  created_at?: string;
  tour_id?: string;
  tour_title?: string;
  full_name: string;
  email: string;
  phone: string;
  travel_date: string;
  travelers_count: number;
  duration_preference?: string;
  budget_tier: 'standard' | 'comfort' | 'luxury';
  transport_type?: 'shared' | 'private_suv' | 'dedicated_4x4';
  selected_states?: string[];
  notes?: string;
  status: 'new' | 'contacted' | 'itinerary_sent' | 'confirmed' | 'cancelled';
  total_estimated_price?: number;
}
