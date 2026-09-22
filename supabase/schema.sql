-- ==============================================================================
-- NORTH EAST ODYSSEY - SUPABASE POSTGRESQL SCHEMA
-- Designed for North East India Tours & Travels Dynamic Operations
-- States: Assam, Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura, Sikkim
-- ==============================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. DESTINATIONS TABLE (All 8 North-East States)
CREATE TABLE IF NOT EXISTS destinations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  tagline TEXT NOT NULL,
  description TEXT NOT NULL,
  capital VARCHAR(100) NOT NULL,
  best_time_to_visit VARCHAR(150) NOT NULL,
  permit_type VARCHAR(100) NOT NULL,
  permit_details TEXT NOT NULL,
  top_attractions TEXT[] NOT NULL DEFAULT '{}',
  hero_image TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT true,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. TOUR PACKAGES TABLE
CREATE TABLE IF NOT EXISTS tour_packages (
  id VARCHAR(100) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255) NOT NULL,
  tagline TEXT NOT NULL,
  state VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  duration_days INT NOT NULL,
  duration_nights INT NOT NULL,
  difficulty VARCHAR(50) NOT NULL,
  best_season VARCHAR(150) NOT NULL,
  start_point VARCHAR(100) NOT NULL,
  end_point VARCHAR(100) NOT NULL,
  is_special_highlight BOOLEAN DEFAULT false,
  special_tag VARCHAR(100),
  base_price_per_person NUMERIC(10, 2) NOT NULL,
  original_price_per_person NUMERIC(10, 2),
  image TEXT NOT NULL,
  gallery TEXT[] DEFAULT '{}',
  rating NUMERIC(3, 2) DEFAULT 4.9,
  reviews_count INT DEFAULT 0,
  overview TEXT NOT NULL,
  highlights TEXT[] DEFAULT '{}',
  itinerary JSONB DEFAULT '[]'::jsonb,
  inclusions TEXT[] DEFAULT '{}',
  exclusions TEXT[] DEFAULT '{}',
  permit_required BOOLEAN DEFAULT false,
  permit_details TEXT,
  packing_tips TEXT[] DEFAULT '{}',
  next_departure_dates TEXT[] DEFAULT '{}',
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. FESTIVALS & EXPERIENCES TABLE
CREATE TABLE IF NOT EXISTS festivals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  state VARCHAR(100) NOT NULL,
  month VARCHAR(100) NOT NULL,
  dates_approx VARCHAR(150) NOT NULL,
  venue VARCHAR(255) NOT NULL,
  significance TEXT NOT NULL,
  description TEXT NOT NULL,
  cultural_highlights TEXT[] DEFAULT '{}',
  image TEXT NOT NULL,
  related_tour_id VARCHAR(100),
  is_major BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. ENQUIRIES & BOOKING LEADS TABLE
CREATE TABLE IF NOT EXISTS enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  tour_id VARCHAR(100),
  tour_title VARCHAR(255),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(100) NOT NULL,
  travel_date VARCHAR(100) NOT NULL,
  travelers_count INT NOT NULL DEFAULT 2,
  duration_preference VARCHAR(100),
  budget_tier VARCHAR(50) DEFAULT 'comfort',
  transport_type VARCHAR(50) DEFAULT 'private_suv',
  selected_states TEXT[] DEFAULT '{}',
  notes TEXT,
  status VARCHAR(50) DEFAULT 'new', -- 'new', 'contacted', 'itinerary_sent', 'confirmed', 'cancelled'
  total_estimated_price NUMERIC(10, 2)
);

-- Indexes for lightning fast lookups
CREATE INDEX IF NOT EXISTS idx_tour_packages_state ON tour_packages(state);
CREATE INDEX IF NOT EXISTS idx_tour_packages_category ON tour_packages(category);
CREATE INDEX IF NOT EXISTS idx_festivals_state ON festivals(state);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries(created_at DESC);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on all tables
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE tour_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE festivals ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Destinations Policies
CREATE POLICY "Allow public read access on destinations" 
  ON destinations FOR SELECT USING (true);

CREATE POLICY "Allow authenticated admin full access on destinations" 
  ON destinations FOR ALL TO authenticated USING (true);

-- Tour Packages Policies
CREATE POLICY "Allow public read access on published tour packages" 
  ON tour_packages FOR SELECT USING (is_published = true);

CREATE POLICY "Allow authenticated admin full access on tour packages" 
  ON tour_packages FOR ALL TO authenticated USING (true);

-- Festivals Policies
CREATE POLICY "Allow public read access on festivals" 
  ON festivals FOR SELECT USING (true);

CREATE POLICY "Allow authenticated admin full access on festivals" 
  ON festivals FOR ALL TO authenticated USING (true);

-- Enquiries Policies (Public can insert booking inquiries; only admin can view/edit)
CREATE POLICY "Allow public to submit enquiries" 
  ON enquiries FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated admin full access on enquiries" 
  ON enquiries FOR ALL TO authenticated USING (true);
