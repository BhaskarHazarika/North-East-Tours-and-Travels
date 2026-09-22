import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Unlock, 
  Database, 
  Package, 
  Users, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  Copy, 
  ExternalLink,
  MapPin,
  Calendar,
  DollarSign
} from 'lucide-react';
import { isSupabaseConfigured, testSupabaseConnection } from '../lib/supabase';
import { tourService } from '../services/tourService';
import { TourPackage } from '../types';
import { SupabaseEnquiry } from '../types/database';

export const AdminView: React.FC = () => {
  // Authentication state placeholder
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPin, setAdminPin] = useState('');
  const [authError, setAuthError] = useState('');

  // Admin Active Tab
  const [activeTab, setActiveTab] = useState<'overview' | 'packages' | 'enquiries' | 'database'>('overview');

  // Connection & Data State
  const [connectionStatus, setConnectionStatus] = useState<{ testing: boolean; success: boolean; message: string }>({
    testing: false,
    success: false,
    message: ''
  });
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [enquiries, setEnquiries] = useState<SupabaseEnquiry[]>([]);
  const [copiedSql, setCopiedSql] = useState(false);

  // Load data on mount / tab switch
  useEffect(() => {
    checkConnection();
    loadAdminData();
  }, []);

  const checkConnection = async () => {
    setConnectionStatus({ testing: true, success: false, message: 'Pinging Supabase database...' });
    const result = await testSupabaseConnection();
    setConnectionStatus({
      testing: false,
      success: result.success,
      message: result.message
    });
  };

  const loadAdminData = async () => {
    const pkgRes = await tourService.getTourPackages();
    setPackages(pkgRes.data);
    const enqList = await tourService.getEnquiries();
    setEnquiries(enqList);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default demo passcode or simple bypass for the reserved Admin section
    if (adminPin.trim() === 'northeast2026' || adminPin.trim() === 'admin' || adminPin.trim() === '1234') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid PIN. Use "admin" or "northeast2026" to access this preview.');
    }
  };

  const copySqlSchema = () => {
    const sqlContent = `-- Run this in your Supabase SQL Editor:
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

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
  status VARCHAR(50) DEFAULT 'new',
  total_estimated_price NUMERIC(10, 2)
);

ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE tour_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE festivals ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read on destinations" ON destinations FOR SELECT USING (true);
CREATE POLICY "Allow public read on tour_packages" ON tour_packages FOR SELECT USING (is_published = true);
CREATE POLICY "Allow public read on festivals" ON festivals FOR SELECT USING (true);
CREATE POLICY "Allow public insert on enquiries" ON enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated admin full access" ON enquiries FOR ALL TO authenticated USING (true);
`;
    navigator.clipboard.writeText(sqlContent);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 3000);
  };

  // If not authenticated yet, show reserved login screen
  if (!isAuthenticated) {
    return (
      <div id="admin-auth-guard" className="py-20 px-4 sm:px-6 max-w-md mx-auto w-full">
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-xl text-center">
          
          <div className="w-14 h-14 rounded-2xl bg-stone-900 text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-md">
            <Lock className="w-6 h-6" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            Reserved Admin Section
          </div>

          <h1 className="text-2xl font-black text-stone-900">
            Admin Authentication
          </h1>
          <p className="text-xs text-stone-600 mt-2 leading-relaxed">
            This management console allows the business owner to update tour packages, destinations, festival dates, and manage customer inquiries backed by Supabase.
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4 text-left">
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-1">
                Admin Passcode or PIN
              </label>
              <input 
                type="password"
                placeholder="Enter passcode (e.g. admin)"
                value={adminPin}
                onChange={(e) => setAdminPin(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-600/30 outline-none"
              />
              <span className="text-[11px] text-stone-400 mt-1 block">
                Preview Access Code: <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-stone-700 font-bold">admin</code>
              </span>
            </div>

            {authError && (
              <p className="text-xs text-rose-600 font-medium">
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Unlock className="w-3.5 h-3.5" />
              <span>Unlock Admin Console</span>
            </button>
          </form>

          {/* Connection quick preview */}
          <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
            <span className="text-stone-500">Supabase Config:</span>
            <span className={`font-bold ${isSupabaseConfigured() ? 'text-emerald-700' : 'text-amber-700'}`}>
              {isSupabaseConfigured() ? 'Configured in .env' : 'Awaiting credentials'}
            </span>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div id="admin-view" className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-stone-900">
              Admin & Data Management
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
              Authorized
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Dynamic content control for packages, festivals, inquiries, and Supabase PostgreSQL syncing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={checkConnection}
            className="px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${connectionStatus.testing ? 'animate-spin' : ''}`} />
            <span>Test DB Ping</span>
          </button>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors cursor-pointer"
          >
            Lock Admin
          </button>
        </div>
      </div>

      {/* Supabase Status Alert */}
      <div className={`p-4 rounded-2xl border mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs ${
        isSupabaseConfigured() && connectionStatus.success
          ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
          : 'bg-amber-50 border-amber-200 text-amber-900'
      }`}>
        <div className="flex items-center gap-2.5">
          <Database className="w-4 h-4 text-emerald-700 shrink-0" />
          <div>
            <strong className="font-bold">
              {isSupabaseConfigured() ? 'Supabase Credentials Detected' : 'Supabase Setup Required for Production'}
            </strong>
            <p className="text-stone-600 mt-0.5">
              {connectionStatus.message || (isSupabaseConfigured() 
                ? 'Connected to configured Supabase endpoint.' 
                : 'Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment to connect your own live database.')}
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('database')}
          className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 font-bold whitespace-nowrap cursor-pointer shrink-0"
        >
          View SQL Schema & Setup →
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-stone-200 pb-3 mb-8 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'overview'
              ? 'bg-stone-900 text-white shadow-xs'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Overview
        </button>

        <button
          onClick={() => setActiveTab('packages')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'packages'
              ? 'bg-stone-900 text-white shadow-xs'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <Package className="w-3.5 h-3.5" />
          Tour Packages ({packages.length})
        </button>

        <button
          onClick={() => setActiveTab('enquiries')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'enquiries'
              ? 'bg-stone-900 text-white shadow-xs'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          Customer Inquiries ({enquiries.length})
        </button>

        <button
          onClick={() => setActiveTab('database')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'database'
              ? 'bg-stone-900 text-white shadow-xs'
              : 'text-stone-600 hover:bg-stone-100'
          }`}
        >
          <Database className="w-3.5 h-3.5" />
          Supabase SQL Setup
        </button>
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Total Active Tours</span>
              <span className="text-3xl font-black text-stone-900 mt-2 block">{packages.length}</span>
              <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">Spanning 8 North East States</span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Customer Leads</span>
              <span className="text-3xl font-black text-stone-900 mt-2 block">{enquiries.length}</span>
              <span className="text-[11px] text-stone-500 mt-1 block">Logged in Supabase / Local storage</span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Festival Specials</span>
              <span className="text-3xl font-black text-amber-700 mt-2 block">3</span>
              <span className="text-[11px] text-stone-500 mt-1 block">Hornbill, Ziro & Dzukou Valley</span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">Database Status</span>
              <span className={`text-sm font-black mt-2 block ${isSupabaseConfigured() ? 'text-emerald-700' : 'text-amber-700'}`}>
                {isSupabaseConfigured() ? 'Supabase Connected' : 'Seed Data Active'}
              </span>
              <span className="text-[11px] text-stone-500 mt-1 block">PostgreSQL RLS ready</span>
            </div>
          </div>

          {/* Quick instructions on dynamic capability */}
          <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xs">
            <h3 className="text-base font-bold text-stone-900 mb-2">Dynamic Database Architecture</h3>
            <p className="text-xs text-stone-600 leading-relaxed max-w-3xl">
              This platform is structured so that as soon as you execute the schema in your Supabase project, all packages, state descriptions, festival schedules, and traveler inquiries will be dynamically read from and written directly to your Supabase PostgreSQL database without editing a single line of React frontend code.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Tour Packages Table */}
      {activeTab === 'packages' && (
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-stone-200 flex items-center justify-between">
            <h3 className="text-base font-bold text-stone-900">
              Published Tour Packages
            </h3>
            <span className="text-xs text-stone-500">
              Fetched via <code className="font-mono text-emerald-800 font-bold">tourService.getTourPackages()</code>
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-50 text-stone-700 border-b border-stone-200 uppercase font-bold text-[11px]">
                <tr>
                  <th className="p-4">Tour Package</th>
                  <th className="p-4">State</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Base Price</th>
                  <th className="p-4">Permit</th>
                  <th className="p-4">Special Tag</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {packages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-stone-50/70">
                    <td className="p-4">
                      <div className="font-bold text-stone-900">{pkg.title}</div>
                      <div className="text-[11px] text-stone-500 truncate max-w-xs">{pkg.subtitle}</div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-800 font-semibold">
                        {pkg.state}
                      </span>
                    </td>
                    <td className="p-4 text-stone-600">{pkg.category}</td>
                    <td className="p-4 text-stone-600">{pkg.durationDays}D / {pkg.durationNights}N</td>
                    <td className="p-4 font-bold text-stone-900">₹{pkg.basePricePerPerson.toLocaleString()}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        pkg.permitRequired ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-600'
                      }`}>
                        {pkg.permitRequired ? 'ILP' : 'None'}
                      </span>
                    </td>
                    <td className="p-4">
                      {pkg.specialTag ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          {pkg.specialTag}
                        </span>
                      ) : (
                        <span className="text-stone-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Customer Inquiries Table */}
      {activeTab === 'enquiries' && (
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-stone-200 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-stone-900">
                Incoming Traveler Inquiries & Booking Leads
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Automatically stored in the Supabase <code className="font-mono text-emerald-700 font-bold">enquiries</code> table.
              </p>
            </div>
            <button
              onClick={loadAdminData}
              className="px-3 py-1.5 rounded-lg border border-stone-200 hover:bg-stone-50 text-xs font-bold text-stone-700 flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              Refresh Leads
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-50 text-stone-700 border-b border-stone-200 uppercase font-bold text-[11px]">
                <tr>
                  <th className="p-4">Date / Ref</th>
                  <th className="p-4">Traveler Name</th>
                  <th className="p-4">Contact Info</th>
                  <th className="p-4">Travel Date</th>
                  <th className="p-4">Group Size</th>
                  <th className="p-4">States / Tour</th>
                  <th className="p-4">Stay Tier</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {enquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-stone-50/70">
                    <td className="p-4 font-mono text-stone-500 text-[11px]">
                      {enq.created_at ? new Date(enq.created_at).toLocaleDateString() : 'Recent'}
                      <div className="text-[10px] text-stone-400">{enq.id.slice(0, 10)}...</div>
                    </td>
                    <td className="p-4 font-bold text-stone-900">{enq.full_name}</td>
                    <td className="p-4">
                      <div className="text-stone-900">{enq.phone}</div>
                      <div className="text-stone-500 text-[11px]">{enq.email}</div>
                    </td>
                    <td className="p-4 text-stone-700">{enq.travel_date}</td>
                    <td className="p-4 text-stone-700">{enq.travelers_count} Travelers</td>
                    <td className="p-4">
                      {enq.tour_title ? (
                        <span className="font-medium text-stone-800 line-clamp-1 max-w-xs">{enq.tour_title}</span>
                      ) : enq.selected_states && enq.selected_states.length > 0 ? (
                        <span className="text-stone-600">{enq.selected_states.join(', ')}</span>
                      ) : (
                        <span className="text-stone-400">Custom Inquiry</span>
                      )}
                    </td>
                    <td className="p-4 capitalize text-stone-600">{enq.budget_tier}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        enq.status === 'new'
                          ? 'bg-emerald-100 text-emerald-800'
                          : enq.status === 'contacted'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-stone-100 text-stone-700'
                      }`}>
                        {enq.status.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Database Setup & SQL Guide */}
      {activeTab === 'database' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <h3 className="text-lg font-bold text-stone-900">
                  Supabase PostgreSQL Setup Instructions
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Follow these 3 simple steps to connect your dedicated Supabase instance.
                </p>
              </div>

              <button
                onClick={copySqlSchema}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
              >
                {copiedSql ? <CheckCircle2 className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedSql ? 'SQL Copied!' : 'Copy SQL Schema'}</span>
              </button>
            </div>

            <div className="mt-6 space-y-6 text-xs text-stone-700 leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0">1</span>
                <div>
                  <strong className="block text-stone-900 font-bold mb-0.5">Create your Supabase Project</strong>
                  <span>Visit <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold underline">supabase.com</a>, create a free project and select your preferred region (e.g. Mumbai, Singapore).</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0">2</span>
                <div>
                  <strong className="block text-stone-900 font-bold mb-0.5">Run the Schema Script in SQL Editor</strong>
                  <span>Click "Copy SQL Schema" above, open the <strong>SQL Editor</strong> in your Supabase dashboard, paste, and click <strong>Run</strong>. This will generate the <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">destinations</code>, <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">tour_packages</code>, <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">festivals</code>, and <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">enquiries</code> tables with secure Row Level Security (RLS) rules.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0">3</span>
                <div>
                  <strong className="block text-stone-900 font-bold mb-0.5">Add Your Project URL & Anon Key</strong>
                  <span>From your Supabase Project Settings → API, copy your <strong>Project URL</strong> and <strong>anon public key</strong> into your environment variables:</span>
                  <div className="mt-2 p-3 bg-stone-900 text-stone-200 rounded-xl font-mono text-[11px] space-y-1">
                    <div>VITE_SUPABASE_URL=https://your-project-id.supabase.co</div>
                    <div>VITE_SUPABASE_ANON_KEY=eyJhbGciOi...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
