export interface PricingBenchmarkRow {
  duration: string;
  durationNights: number;
  durationDays: number;
  tier: 'Budget' | 'Standard' | 'Standard/Deluxe' | 'Deluxe' | 'Budget/Backpacker';
  minPrice: number;
  maxPrice: number;
  inclusions: string;
  recommendedPackageId?: string;
}

export interface StatePricingGuide {
  sectionId: string;
  title: string;
  routeSubtitle: string;
  note?: string;
  benchmarks: string;
  rows: PricingBenchmarkRow[];
}

export const PRICING_PRINCIPLES = [
  {
    title: 'Land-Only Pricing by Default',
    description: 'All packages are quoted land-only per person on twin-sharing (2 people per room), with private outstation vehicle, driver allowances, daily breakfast, and sightseeing/permits included. Flights/trains to Guwahati are offered as pass-through add-ons with zero inflated markups.'
  },
  {
    title: 'Standard Commercial Vehicle Tariffs',
    description: 'Every tour uses dedicated private vehicles governed by our official regional commercial tariff: Sedan (₹3,800/day for Meghalaya & Assam), SUV (₹4,800/day in Meghalaya & Assam, ₹7,200/day in Arunachal), Innova (₹5,800/day & ₹8,200/day), Innova Crysta (₹6,500/day & ₹9,000/day), and 12-Seater Tempo Traveller (₹7,800/day & ₹10,800/day). All rates include hill chauffeur, fuel, and night allowances.'
  },
  {
    title: 'Transparent "Starting From" & Category Grids',
    description: 'We publish genuine "starting from" rates for the entry room category, alongside transparent per-category upgrade pricing (Budget, Standard, Deluxe). No hidden permit or driver charges on arrival.'
  },
  {
    title: 'Healthy Sustainable Margins (20%+)',
    description: 'We maintain a 20%+ operational gross margin to ensure fair wages for indigenous Khasi, Monpa, and Naga drivers and homestay families, never discounting below 12-15%.'
  },
  {
    title: 'Quarterly Seasonal Calibration',
    description: 'Rates are dynamically calibrated quarterly between monsoon green season (Jun–Aug) and peak crisp Himalayan winter / festival seasons (Oct–Mar).'
  }
];

export { VEHICLE_TARIFFS } from './vehicles';

export const REGIONAL_PRICING_GUIDES: StatePricingGuide[] = [
  {
    sectionId: 'meghalaya',
    title: '4.1 Meghalaya',
    routeSubtitle: 'Shillong – Cherrapunji/Sohra – Dawki – Mawlynnong',
    benchmarks: 'WanderOn ₹21,499+ (5–8D incl flights); eSikkimTourism ₹8,999–₹44,999 land-only; Wander Nova ₹14,999 (5N/6D); Veena World ₹32,000 (5D customised).',
    rows: [
      {
        duration: '2N/3D',
        durationNights: 2,
        durationDays: 3,
        tier: 'Budget',
        minPrice: 8999,
        maxPrice: 10500,
        inclusions: 'Standard hotel, private car, Shillong + Cherrapunji only',
        recommendedPackageId: 'meghalaya-2n3d-budget'
      },
      {
        duration: '3N/4D',
        durationNights: 3,
        durationDays: 4,
        tier: 'Budget',
        minPrice: 11500,
        maxPrice: 14000,
        inclusions: 'Adds Dawki crystal river boating + Mawlynnong clean village',
        recommendedPackageId: 'meghalaya-3n4d-budget'
      },
      {
        duration: '4N/5D',
        durationNights: 4,
        durationDays: 5,
        tier: 'Standard',
        minPrice: 16500,
        maxPrice: 22000,
        inclusions: '3-star hotels, root bridge trek, Umiam Lake, Nohkalikai Falls',
        recommendedPackageId: 'meghalaya-4n5d-standard'
      },
      {
        duration: '5N/6D',
        durationNights: 5,
        durationDays: 6,
        tier: 'Standard/Deluxe',
        minPrice: 23000,
        maxPrice: 30000,
        inclusions: 'Adds Kongthong whistling village or Nartiang megalith garden',
        recommendedPackageId: 'meghalaya-5n6d-standard-deluxe'
      },
      {
        duration: '6N/7D',
        durationNights: 6,
        durationDays: 7,
        tier: 'Deluxe',
        minPrice: 30000,
        maxPrice: 42000,
        inclusions: '4-star/boutique stays, private SUV, root bridge trek with dedicated certified guide',
        recommendedPackageId: 'meghalaya-6n7d-deluxe'
      }
    ]
  },
  {
    sectionId: 'assam',
    title: '4.2 Assam',
    routeSubtitle: 'Guwahati – Kaziranga – Nameri/Majuli optional',
    benchmarks: 'Legacy standard/deluxe Assam circuits quote ₹17,600–₹32,800 (2-pax twin-sharing); international-facing DMCs quote $700–$1,700+ for similar circuits (2–4x domestic land rate).',
    rows: [
      {
        duration: '3N/4D',
        durationNights: 3,
        durationDays: 4,
        tier: 'Budget',
        minPrice: 13000,
        maxPrice: 16500,
        inclusions: 'Guwahati sightseeing + Kaziranga 4x4 jeep safari, standard hotels',
        recommendedPackageId: 'assam-3n4d-budget'
      },
      {
        duration: '4N/5D',
        durationNights: 4,
        durationDays: 5,
        tier: 'Standard',
        minPrice: 18000,
        maxPrice: 23000,
        inclusions: 'Adds elephant dawn safari + Kamakhya Temple + Brahmaputra sunset cruise',
        recommendedPackageId: 'assam-4n5d-standard'
      },
      {
        duration: '5N/6D',
        durationNights: 5,
        durationDays: 6,
        tier: 'Standard/Deluxe',
        minPrice: 24000,
        maxPrice: 30000,
        inclusions: 'Adds Majuli island ferry crossing (tribal villages & neo-Vaishnavite satras)',
        recommendedPackageId: 'assam-5n6d-standard-deluxe'
      },
      {
        duration: '6N/7D',
        durationNights: 6,
        durationDays: 7,
        tier: 'Deluxe',
        minPrice: 30000,
        maxPrice: 38000,
        inclusions: 'Adds luxury heritage tea-estate bungalow stay, Nameri Jia-Bhoroli rafting & birding',
        recommendedPackageId: 'assam-6n7d-deluxe'
      }
    ]
  },
  {
    sectionId: 'arunachal',
    title: '4.3 Arunachal Pradesh',
    routeSubtitle: 'Tezpur – Bomdila – Tawang – Dirang',
    note: 'Arunachal costs more per day than Meghalaya/Assam due to longer drive distances, higher fuel/vehicle-per-day rates, thinner hotel supply, and mandatory Inner Line Permit (ILP) process.',
    benchmarks: "Veena World 'Best of Arunachal' lists at ₹46,000 (6N/7D land package); backpacker ground spend is as low as ₹1,100/day self-arranged.",
    rows: [
      {
        duration: '5N/6D',
        durationNights: 5,
        durationDays: 6,
        tier: 'Budget/Backpacker',
        minPrice: 26000,
        maxPrice: 32000,
        inclusions: 'Basic hotels & Monpa homestays, private Sumo vehicle, official Arunachal ILP included',
        recommendedPackageId: 'arunachal-5n6d-budget'
      },
      {
        duration: '6N/7D',
        durationNights: 6,
        durationDays: 7,
        tier: 'Standard',
        minPrice: 40000,
        maxPrice: 50000,
        inclusions: '3-star hotels, private Innova/Scorpio, Sela Pass (13,700 ft), Bum La Pass (season permitting)',
        recommendedPackageId: 'arunachal-6n7d-standard'
      },
      {
        duration: '7N/8D',
        durationNights: 7,
        durationDays: 8,
        tier: 'Deluxe',
        minPrice: 50000,
        maxPrice: 62000,
        inclusions: 'Premium view hotels in Tawang, dedicated mountain guide, Tawang Monastery & War Memorial',
        recommendedPackageId: 'arunachal-7n8d-deluxe'
      }
    ]
  },
  {
    sectionId: 'multi-state',
    title: '4.4 Multi-state NE Circuits',
    routeSubtitle: 'Flagship Combo Land Packages (Ex-Guwahati)',
    benchmarks: 'Veena World combo packages list at ₹59,000 (8D Assam-Meghalaya) to ₹1,00,000–₹1,01,000 (12D Assam-Arunachal-Meghalaya with flights). Land-only packages price 25–35% below these.',
    rows: [
      {
        duration: '6N/7D',
        durationNights: 6,
        durationDays: 7,
        tier: 'Standard/Deluxe',
        minPrice: 32000,
        maxPrice: 42000,
        inclusions: 'NE Discovery: Assam (Kaziranga Safaris) + Meghalaya (Shillong, Sohra, Dawki)',
        recommendedPackageId: 'ne-discovery-6n7d'
      },
      {
        duration: '8N/9D',
        durationNights: 8,
        durationDays: 9,
        tier: 'Standard/Deluxe',
        minPrice: 48000,
        maxPrice: 62000,
        inclusions: 'NE Explorer: Assam + Meghalaya + Nagaland (Kohima/Dzukou Valley, seasonal)',
        recommendedPackageId: 'ne-explorer-8n9d'
      },
      {
        duration: '9N/10D',
        durationNights: 9,
        durationDays: 10,
        tier: 'Deluxe',
        minPrice: 65000,
        maxPrice: 85000,
        inclusions: 'NE Grand Circuit: Assam (Rhino Safari) + Meghalaya (Root Bridges) + Arunachal (Tawang & Sela Pass)',
        recommendedPackageId: 'ne-grand-circuit-9n10d'
      },
      {
        duration: '11N/12D',
        durationNights: 11,
        durationDays: 12,
        tier: 'Deluxe',
        minPrice: 85000,
        maxPrice: 110000,
        inclusions: 'NE Complete: Assam + Arunachal + Meghalaya, all major Eastern Himalayan highlights',
        recommendedPackageId: 'ne-complete-11n12d'
      }
    ]
  }
];
