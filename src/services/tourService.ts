import { supabase, isSupabaseConfigured, getSupabase } from '../lib/supabase';
import { TourPackage, NorthEastState, TourCategory } from '../types';
import { TOUR_PACKAGES } from '../data/packages';
import { ALL_DESTINATIONS } from '../data/destinations';
import { ALL_FESTIVALS } from '../data/festivals';
import { SupabaseDestination, SupabaseFestival, SupabaseEnquiry } from '../types/database';

const LOCAL_ENQUIRIES_KEY = 'northeast_odyssey_enquiries';

export interface TourFilterOptions {
  state?: NorthEastState | 'All';
  category?: TourCategory;
  searchQuery?: string;
  sortBy?: 'featured' | 'price-asc' | 'price-desc' | 'duration';
}

export const tourService = {
  /**
   * Fetch all tour packages with dynamic Supabase querying
   */
  async getTourPackages(filters?: TourFilterOptions): Promise<{ data: TourPackage[]; isFromSupabase: boolean }> {
    const client = getSupabase();

    if (client) {
      try {
        let query = client
          .from('tour_packages')
          .select('*')
          .eq('is_published', true);

        if (filters?.state && filters.state !== 'All') {
          query = query.eq('state', filters.state);
        }

        if (filters?.category && filters.category !== 'All') {
          query = query.eq('category', filters.category);
        }

        const { data, error } = await query;

        if (!error && data && data.length > 0) {
          // Map database snake_case or standard fields if needed
          let mapped: TourPackage[] = data.map((item: any) => ({
            id: item.id,
            title: item.title,
            subtitle: item.subtitle,
            tagline: item.tagline || '',
            state: item.state,
            category: item.category,
            durationDays: item.duration_days || item.durationDays,
            durationNights: item.duration_nights || item.durationNights,
            difficulty: item.difficulty,
            bestSeason: item.best_season || item.bestSeason,
            startPoint: item.start_point || item.startPoint,
            endPoint: item.end_point || item.endPoint,
            isSpecialHighlight: item.is_special_highlight ?? item.isSpecialHighlight,
            specialTag: item.special_tag || item.specialTag,
            basePricePerPerson: Number(item.base_price_per_person || item.basePricePerPerson),
            originalPricePerPerson: item.original_price_per_person ? Number(item.original_price_per_person) : item.originalPricePerPerson,
            image: item.image,
            gallery: item.gallery || [],
            rating: Number(item.rating || 4.9),
            reviewsCount: Number(item.reviews_count || item.reviewsCount || 0),
            overview: item.overview,
            highlights: item.highlights || [],
            itinerary: item.itinerary || [],
            inclusions: item.inclusions || [],
            exclusions: item.exclusions || [],
            permitRequired: item.permit_required ?? item.permitRequired,
            permitDetails: item.permit_details || item.permitDetails || '',
            packingTips: item.packing_tips || item.packingTips || [],
            nextDepartureDates: item.next_departure_dates || item.nextDepartureDates || [],
            tier: item.tier,
            priceRange: item.priceRange || (item.price_range_min && item.price_range_max ? { min: item.price_range_min, max: item.price_range_max } : undefined),
            inclusionsSummary: item.inclusions_summary || item.inclusionsSummary,
            benchmarkComparison: item.benchmark_comparison || item.benchmarkComparison,
            statesCovered: item.states_covered || item.statesCovered,
            roomSharingPolicy: item.room_sharing_policy || item.roomSharingPolicy
          }));

          // Apply client-side sorting & search if needed
          if (filters?.searchQuery) {
            const q = filters.searchQuery.toLowerCase();
            mapped = mapped.filter(p => 
              p.title.toLowerCase().includes(q) || 
              p.state.toLowerCase().includes(q) ||
              p.overview.toLowerCase().includes(q)
            );
          }

          if (filters?.sortBy === 'price-asc') {
            mapped.sort((a, b) => a.basePricePerPerson - b.basePricePerPerson);
          } else if (filters?.sortBy === 'price-desc') {
            mapped.sort((a, b) => b.basePricePerPerson - a.basePricePerPerson);
          } else if (filters?.sortBy === 'duration') {
            mapped.sort((a, b) => a.durationDays - b.durationDays);
          }

          return { data: mapped, isFromSupabase: true };
        }
      } catch (err) {
        console.warn('Supabase query error, falling back to foundational catalog:', err);
      }
    }

    // Foundational fallback when Supabase is not yet populated
    let result = [...TOUR_PACKAGES];

    if (filters?.state && filters.state !== 'All') {
      result = result.filter(p => p.state === filters.state);
    }
    if (filters?.category && filters.category !== 'All') {
      result = result.filter(p => p.category === filters.category);
    }
    if (filters?.searchQuery?.trim()) {
      const q = filters.searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.state.toLowerCase().includes(q) ||
        (p.specialTag && p.specialTag.toLowerCase().includes(q)) ||
        p.overview.toLowerCase().includes(q) ||
        p.highlights.some(h => h.toLowerCase().includes(q))
      );
    }
    if (filters?.sortBy === 'price-asc') {
      result.sort((a, b) => a.basePricePerPerson - b.basePricePerPerson);
    } else if (filters?.sortBy === 'price-desc') {
      result.sort((a, b) => b.basePricePerPerson - a.basePricePerPerson);
    } else if (filters?.sortBy === 'duration') {
      result.sort((a, b) => a.durationDays - b.durationDays);
    }

    return { data: result, isFromSupabase: false };
  },

  /**
   * Fetch a single tour by ID
   */
  async getTourById(id: string): Promise<TourPackage | null> {
    const client = getSupabase();
    if (client) {
      try {
        const { data, error } = await client
          .from('tour_packages')
          .select('*')
          .eq('id', id)
          .single();

        if (!error && data) {
          return {
            id: data.id,
            title: data.title,
            subtitle: data.subtitle,
            tagline: data.tagline || '',
            state: data.state,
            category: data.category,
            durationDays: data.duration_days || data.durationDays,
            durationNights: data.duration_nights || data.durationNights,
            difficulty: data.difficulty,
            bestSeason: data.best_season || data.bestSeason,
            startPoint: data.start_point || data.startPoint,
            endPoint: data.end_point || data.endPoint,
            isSpecialHighlight: data.is_special_highlight ?? data.isSpecialHighlight,
            specialTag: data.special_tag || data.specialTag,
            basePricePerPerson: Number(data.base_price_per_person || data.basePricePerPerson),
            originalPricePerPerson: data.original_price_per_person ? Number(data.original_price_per_person) : data.originalPricePerPerson,
            image: data.image,
            gallery: data.gallery || [],
            rating: Number(data.rating || 4.9),
            reviewsCount: Number(data.reviews_count || data.reviewsCount || 0),
            overview: data.overview,
            highlights: data.highlights || [],
            itinerary: data.itinerary || [],
            inclusions: data.inclusions || [],
            exclusions: data.exclusions || [],
            permitRequired: data.permit_required ?? data.permitRequired,
            permitDetails: data.permit_details || data.permitDetails || '',
            packingTips: data.packing_tips || data.packingTips || [],
            nextDepartureDates: data.next_departure_dates || data.nextDepartureDates || []
          };
        }
      } catch (err) {
        console.warn('Supabase getTourById error, falling back to local data:', err);
      }
    }

    return TOUR_PACKAGES.find(p => p.id === id) || null;
  },

  /**
   * Fetch all 8 North-East destinations
   */
  async getDestinations(): Promise<{ data: SupabaseDestination[]; isFromSupabase: boolean }> {
    const client = getSupabase();
    if (client) {
      try {
        const { data, error } = await client
          .from('destinations')
          .select('*')
          .order('display_order', { ascending: true });

        if (!error && data && data.length > 0) {
          return { data, isFromSupabase: true };
        }
      } catch (err) {
        console.warn('Supabase getDestinations error:', err);
      }
    }

    return { data: ALL_DESTINATIONS, isFromSupabase: false };
  },

  /**
   * Fetch all cultural festivals and major regional experiences
   */
  async getFestivals(): Promise<{ data: SupabaseFestival[]; isFromSupabase: boolean }> {
    const client = getSupabase();
    if (client) {
      try {
        const { data, error } = await client
          .from('festivals')
          .select('*')
          .order('month', { ascending: true });

        if (!error && data && data.length > 0) {
          return { data, isFromSupabase: true };
        }
      } catch (err) {
        console.warn('Supabase getFestivals error:', err);
      }
    }

    return { data: ALL_FESTIVALS, isFromSupabase: false };
  },

  /**
   * Submit an inquiry or custom booking directly into Supabase
   */
  async submitEnquiry(enquiry: Omit<SupabaseEnquiry, 'id' | 'created_at'>): Promise<{ success: boolean; id: string; isSupabaseSaved: boolean }> {
    const fallbackId = 'enq-' + Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
    const client = getSupabase();
    let savedToSupabase = false;

    if (client) {
      try {
        const { data, error } = await client
          .from('enquiries')
          .insert([
            {
              tour_id: enquiry.tour_id || null,
              tour_title: enquiry.tour_title || null,
              full_name: enquiry.full_name,
              email: enquiry.email,
              phone: enquiry.phone,
              travel_date: enquiry.travel_date,
              travelers_count: enquiry.travelers_count,
              duration_preference: enquiry.duration_preference || null,
              budget_tier: enquiry.budget_tier,
              transport_type: enquiry.transport_type || 'private_suv',
              selected_states: enquiry.selected_states || [],
              notes: enquiry.notes || '',
              status: 'new',
              total_estimated_price: enquiry.total_estimated_price || null
            }
          ])
          .select('id')
          .single();

        if (!error && data) {
          savedToSupabase = true;
          return { success: true, id: data.id, isSupabaseSaved: true };
        } else if (error) {
          console.warn('Supabase enquiry insertion error:', error.message);
        }
      } catch (err) {
        console.warn('Failed to insert inquiry to Supabase, writing to local storage:', err);
      }
    }

    // Always preserve locally so the admin and user experience is never lost
    try {
      const stored = localStorage.getItem(LOCAL_ENQUIRIES_KEY);
      const list: SupabaseEnquiry[] = stored ? JSON.parse(stored) : [];
      const newEntry: SupabaseEnquiry = {
        id: fallbackId,
        created_at: new Date().toISOString(),
        ...enquiry
      };
      list.unshift(newEntry);
      localStorage.setItem(LOCAL_ENQUIRIES_KEY, JSON.stringify(list));
    } catch (e) {
      console.warn('Local storage write failed:', e);
    }

    return { success: true, id: fallbackId, isSupabaseSaved: savedToSupabase };
  },

  /**
   * Get all inquiries for the Admin section
   */
  async getEnquiries(): Promise<SupabaseEnquiry[]> {
    const client = getSupabase();
    if (client) {
      try {
        const { data, error } = await client
          .from('enquiries')
          .select('*')
          .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
          return data;
        }
      } catch (err) {
        console.warn('Could not fetch inquiries from Supabase:', err);
      }
    }

    try {
      const stored = localStorage.getItem(LOCAL_ENQUIRIES_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      // ignore
    }

    // Default sample leads for Admin demonstration
    return [
      {
        id: 'enq-sample-1',
        created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
        tour_id: 'hornbill-festival-special',
        tour_title: 'Hornbill Festival & Tribal Heritage of Nagaland',
        full_name: 'Anirudh Roy',
        email: 'anirudh.roy@example.com',
        phone: '+91 98301 45210',
        travel_date: 'Dec 01, 2026',
        travelers_count: 4,
        budget_tier: 'comfort',
        transport_type: 'private_suv',
        selected_states: ['Nagaland', 'Meghalaya'],
        notes: 'Interested in reserving VIP passes for the Hornbill rock contest and visiting Khonoma village.',
        status: 'new',
        total_estimated_price: 114000
      },
      {
        id: 'enq-sample-2',
        created_at: new Date(Date.now() - 3600000 * 28).toISOString(),
        tour_id: 'dzukou-valley-trek-special',
        tour_title: 'Dzukou Valley Trek & Hidden Caves Expedition',
        full_name: 'Elena Gilbert & Friends',
        email: 'elena.g@outdooradventures.org',
        phone: '+44 7700 900123',
        travel_date: 'Oct 15, 2026',
        travelers_count: 2,
        budget_tier: 'standard',
        transport_type: 'dedicated_4x4',
        selected_states: ['Nagaland'],
        notes: 'Looking for 2 sleeping bags rated for cold nights and English speaking certified trek guide.',
        status: 'contacted',
        total_estimated_price: 39600
      }
    ];
  }
};
