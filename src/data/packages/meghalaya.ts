import { TourPackage } from '../../types';
import { CAMERA_IMAGES } from '../../assets/images';

export const MEGHALAYA_PACKAGES: TourPackage[] = [
  {
    id: 'meghalaya-2n3d-budget',
    title: '3 Days 2 Nights Meghalaya Budget Gateway',
    subtitle: 'Essential Shillong & Cherrapunji Quick Getaway',
    tagline: 'Gorges, Cascading Waterfalls & Pine-Clad Hills',
    state: 'Meghalaya',
    category: 'Wildlife & Nature',
    durationDays: 3,
    durationNights: 2,
    difficulty: 'Easy',
    bestSeason: 'October to May',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Guwahati Airport / Station',
    isSpecialHighlight: false,
    basePricePerPerson: 8999,
    originalPricePerPerson: 10500,
    priceRange: { min: 8999, max: 10500 },
    tier: 'Budget',
    inclusionsSummary: 'Standard hotel, private car, Shillong + Cherrapunji only',
    benchmarkComparison: 'eSikkimTourism ₹8,999–₹14,999; 15% lower than typical Tier-1 weekend getaways',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.rootBridge,
    gallery: [CAMERA_IMAGES.rootBridge, CAMERA_IMAGES.heroMountains, CAMERA_IMAGES.dawkiRiver],
    rating: 4.8,
    reviewsCount: 74,
    overview: 'An optimal 3-day quick escape covering the core highlights of the Khasi Hills. Drive past the tranquil Umiam Lake to Shillong, visit Ward’s Lake and Don Bosco Museum, then head to Cherrapunji for Nohkalikai Falls, Mawsmai Cave, and the Eco Park gorges.',
    highlights: [
      'Scenic drive along Umiam (Barapani) Lake',
      'Nohkalikai Falls – India’s tallest plunge waterfall (1,115 ft)',
      'Mawsmai Limestone Cave exploration',
      'Ward’s Lake & Police Bazar in Shillong'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati Arrival to Shillong via Umiam Lake',
        description: 'Meet your private driver at Guwahati and embark on the picturesque 3-hour hill drive to Shillong. Stop at Umiam Lake for photos and water sports. Evening walk around Police Bazar and Ward’s Lake.',
        activities: ['Guwahati pickup', 'Umiam Lake viewpoint', 'Police Bazar cultural stroll'],
        meals: 'Dinner at hotel',
        stay: 'Standard verified Khasi hotel, Shillong',
        distanceKm: 100
      },
      {
        day: 2,
        title: 'Shillong to Cherrapunji (Sohra) Waterfalls & Caves',
        description: 'Drive across the dramatic deep gorges of Sohra. Marvel at the roaring Nohkalikai Falls, explore the illuminated prehistoric limestone chambers of Mawsmai Cave, and view Seven Sisters Falls.',
        activities: ['Nohkalikai Falls viewpoint', 'Mawsmai Cave exploration', 'Eco Park canyon rim'],
        meals: 'Breakfast at hotel',
        stay: 'Standard hill resort/guesthouse, Cherrapunji',
        distanceKm: 60
      },
      {
        day: 3,
        title: 'Cherrapunji to Guwahati Departure',
        description: 'Enjoy morning mist views over the Bangladesh plains. Drive back to Guwahati with optional stop at Elephant Falls and Kamakhya Temple before drop at airport or railway station.',
        activities: ['Elephant Falls', 'Scenic hill descent', 'Guwahati airport drop'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 155
      }
    ],
    inclusions: [
      '2 nights stay in standard verified hotels (twin-sharing)',
      'Daily breakfast at hotels',
      'Private dedicated outstation vehicle (Swift Dzire/Sedan)',
      'Driver allowances, fuel, toll, and state road taxes',
      'Sightseeing as per itinerary'
    ],
    exclusions: [
      'Airfare or train tickets to/from Guwahati',
      'Entry fees and camera fees at monuments',
      'Lunches, dinners, and personal expenses'
    ],
    permitRequired: false,
    permitDetails: 'No Inner Line Permit (ILP) required for Indian domestic tourists in Meghalaya.',
    packingTips: ['Light woolens/fleece for Shillong evenings', 'Sturdy walking shoes', 'Umbrella or lightweight rain poncho'],
    nextDepartureDates: ['Every Friday & Monday Departure']
  },
  {
    id: 'meghalaya-3n4d-budget',
    title: '4 Days 3 Nights Meghalaya Budget Circuit',
    subtitle: 'Shillong, Cherrapunji, Dawki River & Mawlynnong Cleanest Village',
    tagline: 'Waterfalls, Living Root Bridges & Glass River Boating',
    state: 'Meghalaya',
    category: 'Wildlife & Nature',
    durationDays: 4,
    durationNights: 3,
    difficulty: 'Easy',
    bestSeason: 'October to May',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Guwahati Airport / Station',
    isSpecialHighlight: false,
    basePricePerPerson: 11500,
    originalPricePerPerson: 14000,
    priceRange: { min: 11500, max: 14000 },
    tier: 'Budget',
    inclusionsSummary: 'Adds Dawki crystal waters + Mawlynnong clean village to Shillong & Cherrapunji',
    benchmarkComparison: 'Wander Nova ₹14,999; eSikkimTourism ₹12,500–₹16,000; priced 12% below Tier-1 brands',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.dawkiRiver,
    gallery: [CAMERA_IMAGES.dawkiRiver, CAMERA_IMAGES.rootBridge, CAMERA_IMAGES.heroMountains],
    rating: 4.85,
    reviewsCount: 118,
    overview: 'Our most sought-after budget itinerary adds the crystal-clear waters of the Umngot River in Dawki and Mawlynnong—crowned Asia’s Cleanest Village. Experience living root bridge engineering, dramatic waterfalls, and serene boat glides.',
    highlights: [
      'Dawki Umngot River boating where boats appear suspended in mid-air',
      'Mawlynnong Cleanest Village & Single Living Root Bridge at Riwai',
      'Nohkalikai & Wei Sawdong tiered waterfalls',
      'Umiam Lake & Shillong colonial city charm'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati to Shillong via Umiam Lake',
        description: 'Scenic ascent into the Khasi Hills. Stop at Umiam Lake viewpoint. Evening at leisure exploring Police Bazar and local pine-scented parks.',
        activities: ['Guwahati pickup', 'Umiam Lake viewpoint', 'Police Bazar walk'],
        meals: 'Dinner at hotel',
        stay: 'Standard hotel, Shillong',
        distanceKm: 100
      },
      {
        day: 2,
        title: 'Shillong to Cherrapunji (Sohra) Gorges',
        description: 'Explore Elephant Falls, Mawkdok Dympep Valley zipline viewpoint, Nohkalikai Falls, and Mawsmai limestone cave before checking in at Cherrapunji.',
        activities: ['Nohkalikai Falls', 'Mawsmai Caves', 'Eco Park canyon viewpoint'],
        meals: 'Breakfast at hotel',
        stay: 'Standard hotel / guesthouse, Cherrapunji',
        distanceKm: 65
      },
      {
        day: 3,
        title: 'Mawlynnong Village & Dawki Umngot River',
        description: 'Drive along the southern ridges to Mawlynnong. Walk through floral cobblestone alleys, visit the Riwai single living root bridge, and glide in country wooden boats across the crystal-clear Umngot River at Dawki.',
        activities: ['Mawlynnong village walk', 'Riwai living root bridge', 'Dawki Umngot river boating'],
        meals: 'Breakfast at hotel',
        stay: 'Standard hotel, Shillong',
        distanceKm: 130
      },
      {
        day: 4,
        title: 'Shillong to Guwahati Departure',
        description: 'Visit Shillong Peak and Cathedral of Mary Help of Christians before descending to Guwahati Airport or Railway Station.',
        activities: ['Shillong Cathedral', 'Guwahati airport transfer'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 105
      }
    ],
    inclusions: [
      '3 nights accommodation in verified standard hotels (twin-sharing)',
      'Daily breakfast at all hotels',
      'Private dedicated vehicle (Swift Dzire/Sedan) for entire route',
      'Driver allowances, night charges, fuel, parking, and toll',
      'Assistance with local boating & entry tickets'
    ],
    exclusions: [
      'Airfare/train tickets to Guwahati',
      'Dawki boat hire fee (~₹800 per boat)',
      'Lunches, dinners, and personal tips'
    ],
    permitRequired: false,
    permitDetails: 'No ILP required for domestic Indian travelers in Meghalaya.',
    packingTips: ['Swimwear for Dawki/waterfalls', 'Comfortable walking shoes', 'Light layers'],
    nextDepartureDates: ['Daily Departures Available']
  },
  {
    id: 'meghalaya-4n5d-standard',
    title: '5 Days 4 Nights Meghalaya Standard: Living Roots & Canyons',
    subtitle: 'Nongriat Double Decker Trek, Nohkalikai, Dawki & Krang Shuri',
    tagline: 'The Classic Complete Khasi Hills Expedition',
    state: 'Meghalaya',
    category: 'Trekking & Adventure',
    durationDays: 5,
    durationNights: 4,
    difficulty: 'Moderate',
    bestSeason: 'September to May',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Guwahati Airport / Station',
    isSpecialHighlight: true,
    specialTag: 'Main Highlight',
    basePricePerPerson: 16500,
    originalPricePerPerson: 22000,
    priceRange: { min: 16500, max: 22000 },
    tier: 'Standard',
    inclusionsSummary: '3-star hotels, root bridge trek, Umiam Lake, Nohkalikai, Dawki & Krang Shuri',
    benchmarkComparison: 'WanderOn ₹21,499+ (with flights); Veena World ₹32,000 (5D customised); Our land rate ₹16,500 saves 22%',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.rootBridge,
    gallery: [CAMERA_IMAGES.rootBridge, CAMERA_IMAGES.dawkiRiver, CAMERA_IMAGES.heroMountains],
    rating: 4.93,
    reviewsCount: 248,
    overview: 'Our #1 best-selling flagship circuit in Meghalaya. Descend 3,500 mossy stone stairs into the rainforest of Nongriat to cross the centuries-old Umshiang Double Decker Living Root Bridge, marvel at Nohkalikai’s 1,115-foot drop, and cruise the turquoise pools of Krang Shuri.',
    highlights: [
      'Trek to the iconic Double Decker Living Root Bridge in Nongriat',
      'Swim in the natural turquoise plunge pools of Krang Shuri Falls',
      'Boat on the glass-like waters of Dawki Umngot River',
      'Dramatic views of Nohkalikai Falls and Laitlum Grand Canyons',
      'Mawlynnong village community & Riwai root bridge'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati Arrival to Shillong via Umiam Lake',
        description: 'Warm reception at Guwahati Airport. Scenic drive to Shillong with stop at the scenic Umiam Lake. Evening exploration of Shillong’s cafes and Ward’s Lake.',
        activities: ['Guwahati pickup', 'Umiam Lake viewpoint', 'Ward’s Lake botanical walk'],
        meals: 'Dinner at hotel',
        stay: '3-star boutique hotel, Shillong',
        distanceKm: 100
      },
      {
        day: 2,
        title: 'Shillong to Cherrapunji – Gorges & Waterfalls',
        description: 'Drive along Mawkdok Dympep Valley. Witness the grandeur of Nohkalikai Falls, Wei Sawdong 3-tier cascade, and delve into the illuminated chambers of Mawsmai Cave.',
        activities: ['Nohkalikai Falls', 'Wei Sawdong Falls', 'Mawsmai Cave'],
        meals: 'Breakfast at hotel',
        stay: '3-star resort, Cherrapunji',
        distanceKm: 65
      },
      {
        day: 3,
        title: 'The Great Nongriat Double Decker Living Root Bridge Trek',
        description: 'Descend 3,500 stone stairs into the lush jungle valley of Nongriat. Cross wire-suspension bridges and witness the biotechnical marvel of the 250-year-old Double Decker Root Bridge and Rainbow Falls.',
        activities: ['3,500-step jungle trek', 'Double Decker Root Bridge', 'Natural blue lagoon swim'],
        meals: 'Breakfast at hotel',
        stay: '3-star resort, Cherrapunji',
        distanceKm: 25
      },
      {
        day: 4,
        title: 'Mawlynnong, Dawki Umngot Boating & Krang Shuri Falls',
        description: 'Visit Asia’s Cleanest Village Mawlynnong. Ride transparent boats on the Umngot River along the Bangladesh border. Continue to Jaintia Hills to swim beneath the azure cascades of Krang Shuri.',
        activities: ['Mawlynnong walk', 'Dawki boat ride', 'Krang Shuri azure swimming'],
        meals: 'Breakfast at hotel',
        stay: '3-star hotel, Shillong',
        distanceKm: 160
      },
      {
        day: 5,
        title: 'Laitlum Grand Canyons & Guwahati Departure',
        description: 'Early morning drive to the breathtaking rim of Laitlum Canyons overlooking rolling gorges. Descend to Guwahati with an optional stop at the ancient Kamakhya Temple.',
        activities: ['Laitlum Canyons panoramic walk', 'Guwahati airport transfer'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 130
      }
    ],
    inclusions: [
      '4 nights accommodation in handpicked 3-star hotels & boutique resorts (twin-sharing)',
      'Daily breakfast at all properties',
      'Private dedicated SUV (Innova / Scorpio / Ertiga)',
      'Experienced mountain driver, all tolls, parking, and driver DA',
      'Certified local Khasi trekking guide for Nongriat Double Decker trek'
    ],
    exclusions: [
      'Airfare or train fares to Guwahati',
      'Entry tickets, camera fees, and Dawki boat rental',
      'Lunches, dinners, and personal expenditures'
    ],
    permitRequired: false,
    permitDetails: 'No ILP required for domestic Indian travelers in Meghalaya.',
    packingTips: ['Trekking shoes with solid grip for 3,500 wet steps', 'Quick-dry clothes & towel for waterfalls', 'Fleece jacket for chilly evenings'],
    nextDepartureDates: ['Every Tuesday, Friday & Sunday']
  },
  {
    id: 'meghalaya-5n6d-standard-deluxe',
    title: '6 Days 5 Nights Meghalaya: Whistling Village & Secret Cascades',
    subtitle: 'Adds Kongthong Whistling Village or Nartiang Monoliths to Classic Circuit',
    tagline: 'Cultural Immersion in Ancient Khasi Musical & Sacred Traditions',
    state: 'Meghalaya',
    category: 'Culture & Heritage',
    durationDays: 6,
    durationNights: 5,
    difficulty: 'Moderate',
    bestSeason: 'October to May',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Guwahati Airport / Station',
    isSpecialHighlight: false,
    basePricePerPerson: 23000,
    originalPricePerPerson: 30000,
    priceRange: { min: 23000, max: 30000 },
    tier: 'Standard/Deluxe',
    inclusionsSummary: 'Adds Kongthong whistling village or Nartiang monoliths, premium resorts & private SUV',
    benchmarkComparison: 'Wander Nova ₹14,999 (budget basic); Veena World ₹32,000+; our deluxe standard ₹23,000 provides authentic village immersion',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.rootBridge,
    gallery: [CAMERA_IMAGES.rootBridge, CAMERA_IMAGES.dawkiRiver, CAMERA_IMAGES.heroMountains],
    rating: 4.95,
    reviewsCount: 89,
    overview: 'A richer 6-day circuit that goes beyond standard tourist tracks. Visit Kongthong—the unique "Whistling Village" where mothers compose a distinctive musical tune (Jingrwai Iawbei) for every newborn—or explore the 500-year-old Nartiang monolith megalith garden in the Jaintia Hills.',
    highlights: [
      'Experience Kongthong whistling village traditions',
      'Nongriat Double Decker Living Root Bridge trek',
      'Dawki crystal boat ride & Mawlynnong clean village',
      'Krang Shuri natural pool swimming & Laitlum Canyons',
      'Comfort 3/4-star heritage stays & private outstation SUV'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati to Shillong via Umiam Lake',
        description: 'Pickup from Guwahati and scenic hill drive to Shillong. Evening sunset at Umiam Lake and dinner at heritage café in Shillong.',
        activities: ['Umiam Lake', 'Police Bazar heritage walk'],
        meals: 'Dinner at hotel',
        stay: 'Heritage hotel, Shillong',
        distanceKm: 100
      },
      {
        day: 2,
        title: 'Shillong to Kongthong Whistling Village & Sohra',
        description: 'Drive along rugged ridges to Kongthong village. Meet local elders and hear how villagers call each other using individual melodic tunes instead of spoken names. Proceed to Cherrapunji.',
        activities: ['Kongthong whistling village interaction', 'Jingrwai Iawbei demonstration'],
        meals: 'Breakfast & village tea',
        stay: '3-star resort, Cherrapunji',
        distanceKm: 90
      },
      {
        day: 3,
        title: 'Nongriat Double Decker Root Bridge Trek',
        description: 'Trek down to the Double Decker Root Bridge. Swim in azure river pools and visit Rainbow Falls.',
        activities: ['Nongriat Living Root Bridge trek', 'Rainbow Falls hike'],
        meals: 'Breakfast at hotel',
        stay: '3-star resort, Cherrapunji',
        distanceKm: 25
      },
      {
        day: 4,
        title: 'Sohra Waterfalls & Mawlynnong Village',
        description: 'Visit Nohkalikai Falls, Mawsmai Cave, then drive to Mawlynnong village and the Riwai root bridge.',
        activities: ['Nohkalikai Falls', 'Mawlynnong village walk'],
        meals: 'Breakfast at hotel',
        stay: 'Homestay / boutique hotel, Mawlynnong / Dawki',
        distanceKm: 85
      },
      {
        day: 5,
        title: 'Dawki Boating, Krang Shuri & Nartiang Monoliths',
        description: 'Morning boat ride on the Umngot River. Swim at Krang Shuri Falls and visit the towering prehistoric stone monoliths of Nartiang in Jaintia Hills.',
        activities: ['Dawki boating', 'Krang Shuri swim', 'Nartiang monoliths'],
        meals: 'Breakfast at hotel',
        stay: 'Boutique hotel, Shillong',
        distanceKm: 140
      },
      {
        day: 6,
        title: 'Laitlum Canyons & Guwahati Departure',
        description: 'Sunrise at Laitlum Canyons. Descend through pine valleys to Guwahati Airport for onward flight.',
        activities: ['Laitlum Canyons rim walk', 'Guwahati airport transfer'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 130
      }
    ],
    inclusions: [
      '5 nights in superior 3-star hotels and verified heritage homestays (twin-sharing)',
      'Daily breakfast throughout',
      'Private dedicated SUV (Innova / Ertiga)',
      'All driver DA, toll, state entry permits, and fuel',
      'Local guide for Kongthong & Nongriat treks'
    ],
    exclusions: [
      'Flights to Guwahati',
      'Personal adventure activities & entry charges',
      'Lunches & dinners'
    ],
    permitRequired: false,
    permitDetails: 'No ILP required for domestic Indian travelers in Meghalaya.',
    packingTips: ['Walking boots with good ankle support', 'Rain jacket', 'Water bottle'],
    nextDepartureDates: ['Weekly Departures Every Monday & Thursday']
  },
  {
    id: 'meghalaya-6n7d-deluxe',
    title: '7 Days 6 Nights Meghalaya Deluxe: The Complete Boutique Odyssey',
    subtitle: '4-Star/Boutique Stays, Private SUV & Dedicated Native Trekking Guide',
    tagline: 'Luxury Glamping, Hidden Waterfalls & Ancient Monolith Highlands',
    state: 'Meghalaya',
    category: 'Culture & Heritage',
    durationDays: 7,
    durationNights: 6,
    difficulty: 'Moderate',
    bestSeason: 'September to May',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Guwahati Airport / Station',
    isSpecialHighlight: false,
    basePricePerPerson: 30000,
    originalPricePerPerson: 42000,
    priceRange: { min: 30000, max: 42000 },
    tier: 'Deluxe',
    inclusionsSummary: '4-star/boutique stays, private SUV, root bridge trek with dedicated guide',
    benchmarkComparison: 'Veena World ₹38,000–₹46,000; WanderOn Deluxe ₹36,000+; Our land package ₹30,000 is 20% below Tier-1 luxury rates',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.dawkiRiver,
    gallery: [CAMERA_IMAGES.dawkiRiver, CAMERA_IMAGES.rootBridge, CAMERA_IMAGES.heroMountains],
    rating: 4.98,
    reviewsCount: 62,
    overview: 'The definitive luxury expedition in Meghalaya. Stay in the region’s premier 4-star boutique view resorts across Umiam Lake and Cherrapunji. Features a private Toyota Innova Crysta, dedicated naturalist guide, private boat charters in Dawki, and farm-to-table Khasi culinary tastings.',
    highlights: [
      'Stay in 4-star boutique resorts overlooking Umiam Lake & Sohra gorges',
      'Private Innova Crysta SUV throughout with senior mountain chauffeur',
      'Dedicated certified Khasi trekking guide for Nongriat and secret waterfalls',
      'Exclusive private boat charter on Dawki Umngot River',
      'Laitlum Canyons, Krang Shuri, and authentic indigenous Khasi dining'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati Arrival to Ri Kynjai / Umiam Luxury Resort',
        description: 'Chauffeured pickup in a private Innova Crysta. Check in at a luxury lake resort. Enjoy sunset over Umiam waters and gourmet Khasi feast.',
        activities: ['VIP Guwahati pickup', 'Umiam Lake resort check-in', 'Chef-crafted Khasi dinner'],
        meals: 'Dinner at luxury resort',
        stay: '4-star boutique resort, Umiam',
        distanceKm: 90
      },
      {
        day: 2,
        title: 'Shillong Heritage Walk & Scenic Drive to Sohra',
        description: 'Explore Don Bosco Centre for Indigenous Cultures, Shillong Golf Links, and drive past deep gorges to Cherrapunji.',
        activities: ['Don Bosco cultural museum', 'Elephant Falls', 'Cherrapunji gorge sunset'],
        meals: 'Breakfast at resort',
        stay: '4-star luxury resort, Cherrapunji',
        distanceKm: 75
      },
      {
        day: 3,
        title: 'Nongriat Double Decker & Rainbow Falls Guided Trek',
        description: 'With your dedicated private guide, explore the Double Decker Root Bridge and the turquoise lagoons of Rainbow Falls.',
        activities: ['Private guided root bridge trek', 'Rainbow Falls swim', 'Living root bridge exploration'],
        meals: 'Breakfast at resort',
        stay: '4-star luxury resort, Cherrapunji',
        distanceKm: 25
      },
      {
        day: 4,
        title: 'Wei Sawdong, Nohkalikai & Arwah Prehistoric Caves',
        description: 'Discover the fossils in Arwah Cave, view the roaring Nohkalikai Falls, and relax at the luxury spa.',
        activities: ['Arwah Cave fossils', 'Nohkalikai viewpoint', 'Spa / sunset leisure'],
        meals: 'Breakfast at resort',
        stay: '4-star luxury resort, Cherrapunji',
        distanceKm: 40
      },
      {
        day: 5,
        title: 'Private Dawki Boat Charter & Mawlynnong Village',
        description: 'Private wooden boat charter away from tourist rush on the Umngot River. Walk the cobblestone garden alleys of Mawlynnong.',
        activities: ['Private Dawki boat charter', 'Mawlynnong village walk', 'Riwai root bridge'],
        meals: 'Breakfast at resort',
        stay: 'Boutique river camp / Shillong 4-star, Shillong',
        distanceKm: 140
      },
      {
        day: 6,
        title: 'Krang Shuri Falls Swim & Jaintia Monoliths',
        description: 'Swim in the crystal-clear cascades of Krang Shuri and explore ancient tribal megaliths of Nartiang.',
        activities: ['Krang Shuri swim', 'Nartiang monoliths', 'Laitlum canyon rim'],
        meals: 'Breakfast at hotel',
        stay: 'Heritage boutique hotel, Shillong',
        distanceKm: 130
      },
      {
        day: 7,
        title: 'Shillong to Guwahati VIP Airport Departure',
        description: 'Breakfast with hill views. Descend to Guwahati Airport with optional VIP Kamakhya Temple darshan.',
        activities: ['Breakfast at hotel', 'VIP Guwahati airport drop'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 110
      }
    ],
    inclusions: [
      '6 nights in premium 4-star boutique resorts & luxury view suites (twin-sharing)',
      'Daily breakfast at all luxury properties',
      'Private dedicated Toyota Innova Crysta with premium mountain chauffeur',
      'All fuel, interstate taxes, VIP parking, and driver allowances',
      'Private dedicated trekking guide for Nongriat and caves',
      'Private boat charter on Dawki River'
    ],
    exclusions: [
      'Air tickets to Guwahati',
      'Personal spa treatments & bar bills',
      'Lunches and dinners not specified'
    ],
    permitRequired: false,
    permitDetails: 'No ILP required for domestic Indian travelers in Meghalaya.',
    packingTips: ['Smart casuals for luxury dining', 'Trek boots with solid grip', 'Swimwear for waterfalls'],
    nextDepartureDates: ['Custom Dates On Demand (Private Departures)']
  }
];
