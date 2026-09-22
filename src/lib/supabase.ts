import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Environment variables for Supabase (configured in .env or Settings)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

/**
 * Check if the Supabase environment variables are properly provided
 */
export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl && 
    supabaseAnonKey && 
    supabaseUrl.startsWith('https://') &&
    supabaseAnonKey.length > 20
  );
};

// Fallback dummy client for when credentials are not yet supplied,
// preventing runtime initialization crashes
let clientInstance: SupabaseClient | null = null;

export const getSupabase = (): SupabaseClient | null => {
  if (!isSupabaseConfigured()) {
    return null;
  }
  
  if (!clientInstance) {
    try {
      clientInstance = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true
        }
      });
    } catch (err) {
      console.warn('Failed to initialize Supabase client:', err);
      return null;
    }
  }
  return clientInstance;
};

export const supabase = isSupabaseConfigured() 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

/**
 * Test connectivity with Supabase
 */
export const testSupabaseConnection = async (): Promise<{ success: boolean; message: string }> => {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      message: 'Supabase URL or Anon Key is missing in environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY).'
    };
  }

  const client = getSupabase();
  if (!client) {
    return {
      success: false,
      message: 'Could not create Supabase client instance.'
    };
  }

  try {
    // Attempt a light ping by querying tour_packages or auth
    const { error } = await client.from('tour_packages').select('id').limit(1);
    if (error) {
      // If table does not exist yet, connection is still working!
      if (error.code === '42P01') {
        return {
          success: true,
          message: 'Connected to Supabase! (Database tables need to be created using the provided SQL schema).'
        };
      }
      return {
        success: false,
        message: `Supabase responded with: ${error.message} (code: ${error.code})`
      };
    }

    return {
      success: true,
      message: 'Connected successfully to Supabase PostgreSQL database!'
    };
  } catch (err: any) {
    return {
      success: false,
      message: err?.message || 'Failed to communicate with Supabase endpoint.'
    };
  }
};
