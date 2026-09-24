import { TourPackage } from '../../types';
import { CAMERA_IMAGES } from '../../assets/images';

export const MULTISTATE_PACKAGES: TourPackage[] = [
  {
    id: 'ne-discovery-6n7d',
    title: '7 Days 6 Nights NE Discovery: Assam & Meghalaya Combo',
    subtitle: 'Wild One-Horned Rhinos of Kaziranga & Living Root Bridges of Meghalaya',
    tagline: 'The Ultimate Twin-State Introductory Expedition',
    state: 'Assam',
    statesCovered: ['Assam', 'Meghalaya'],
    category: 'Wildlife & Nature',
    durationDays: 7,
    durationNights: 6,
    difficulty: 'Moderate',
    bestSeason: 'October to May',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Guwahati Airport / Station',
    isSpecialHighlight: false,
    basePricePerPerson: 32000,
    originalPricePerPerson: 42000,
    priceRange: { min: 32000, max: 42000 },
    tier: 'Standard/Deluxe',
    inclusionsSummary: 'Assam (Kaziranga Safaris) + Meghalaya (Shillong, Sohra, Dawki & Root Bridges)',
    benchmarkComparison: 'Veena World 8D Assam-Meghalaya lists at ₹59,000 (with flights); our land-only package at ₹32,000 is 30% lower while including elephant & jeep safaris',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.kazirangaRhino,
    gallery: [CAMERA_IMAGES.kazirangaRhino, CAMERA_IMAGES.rootBridge, CAMERA_IMAGES.dawkiRiver],
    rating: 4.95,
    reviewsCount: 168,
    overview: 'The quintessential two-state flagship circuit. Connect Assam’s UNESCO World Heritage wildlife sanctuary at Kaziranga with the mist-shrouded cloud canyons, 250-year-old living root bridges, and glass-clear waters of Meghalaya. Perfect for first-time visitors seeking the most iconic natural wonders.',
    highlights: [
      'Kaziranga dawn elephant safari & 4x4 open jeep safari tracking rhinos',
      'Nongriat Double Decker Living Root Bridge trek',
      'Crystal-clear waters of the Dawki Umngot River along Bangladesh border',
      'Nohkalikai Falls, Krang Shuri cascade, and Umiam Lake',
      'Comfortable 3-star resorts and private dedicated SUV throughout'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati Arrival to Kaziranga National Park',
        description: 'Chauffeured pickup from Guwahati Airport. Drive east through the scenic Brahmaputra valley to Kaziranga. Evening cultural dance show.',
        activities: ['Guwahati airport pickup', 'Drive past tea gardens', 'Assamese Bihu cultural performance'],
        meals: 'Dinner at lodge',
        stay: '3-star safari resort, Kaziranga',
        distanceKm: 220
      },
      {
        day: 2,
        title: 'Kaziranga Elephant & Jeep Safaris',
        description: 'Early morning elephant safari in the misty grasslands followed by an open 4x4 jeep safari in the Western (Bagori) range.',
        activities: ['Dawn elephant safari', 'Open jeep safari', 'Kaziranga orchid park tour'],
        meals: 'Breakfast & dinner',
        stay: '3-star safari resort, Kaziranga',
        distanceKm: 40
      },
      {
        day: 3,
        title: 'Kaziranga to Shillong via Umiam Lake',
        description: 'Drive from the Assam plains up into the cool pine-scented hills of Meghalaya. Stop at Umiam Lake and enjoy an evening walk around Police Bazar.',
        activities: ['Scenic hill climb to Meghalaya', 'Umiam Lake viewpoint', 'Shillong evening walk'],
        meals: 'Breakfast & dinner',
        stay: '3-star boutique hotel, Shillong',
        distanceKm: 250
      },
      {
        day: 4,
        title: 'Shillong to Cherrapunji (Sohra) Gorges',
        description: 'Drive along Mawkdok Dympep Valley. View the towering Nohkalikai Falls, Wei Sawdong cascade, and explore the ancient limestone formations of Mawsmai Cave.',
        activities: ['Nohkalikai Falls', 'Mawsmai Cave exploration', 'Eco Park canyon viewpoint'],
        meals: 'Breakfast at hotel',
        stay: '3-star hill resort, Cherrapunji',
        distanceKm: 65
      },
      {
        day: 5,
        title: 'Nongriat Double Decker Root Bridge Trek',
        description: 'Descend the jungle stairway to the Umshiang Double Decker Living Root Bridge. Swim in natural azure river pools before returning to Sohra.',
        activities: ['Double Decker Root Bridge hike', 'Natural blue lagoon swim', 'Village interaction'],
        meals: 'Breakfast at hotel',
        stay: '3-star hill resort, Cherrapunji',
        distanceKm: 25
      },
      {
        day: 6,
        title: 'Mawlynnong, Dawki Umngot River & Krang Shuri',
        description: 'Visit Asia’s Cleanest Village Mawlynnong. Boat in crystal-clear wooden canoes on the Umngot River at Dawki, and swim at Krang Shuri Falls before returning to Shillong.',
        activities: ['Mawlynnong walk', 'Dawki crystal boat ride', 'Krang Shuri waterfalls'],
        meals: 'Breakfast at hotel',
        stay: '3-star boutique hotel, Shillong',
        distanceKm: 160
      },
      {
        day: 7,
        title: 'Shillong to Guwahati Airport Departure',
        description: 'Morning drive to Guwahati Airport with an optional stop at Kamakhya Temple for onward flight home.',
        activities: ['Descent to plains', 'Guwahati airport drop'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 105
      }
    ],
    inclusions: [
      '6 nights accommodation in verified 3-star resorts & boutique hotels (twin-sharing)',
      'Daily breakfast and all dinners at Kaziranga lodge',
      'Private dedicated SUV (Innova / Ertiga / Scorpio) for the entire 7 days',
      '1 Kaziranga Elephant Safari and 1 Open 4x4 Jeep Safari with forest entry & guard',
      'All driver DA, interstate road taxes, toll fees, and fuel',
      'Local guide for Nongriat Living Root Bridge trek'
    ],
    exclusions: [
      'Airfare to/from Guwahati',
      'Monument entries, Dawki boat hire (~₹800/boat)',
      'Lunches and personal expenses'
    ],
    permitRequired: false,
    permitDetails: 'No ILP required for domestic Indian travelers in Assam & Meghalaya.',
    packingTips: ['Trek shoes with strong grip', 'Swimwear for Krang Shuri / Dawki', 'Warm layers for cool Meghalaya nights'],
    nextDepartureDates: ['Every Sunday & Wednesday']
  },
  {
    id: 'ne-explorer-8n9d',
    title: '9 Days 8 Nights NE Explorer: Assam, Meghalaya & Nagaland',
    subtitle: 'Kaziranga Rhinos, Living Root Bridges & Kohima / Dzukou Valley Trek',
    tagline: 'Three States: Wildlife, Cloud Canyons & Legendary Naga Highlands',
    state: 'Nagaland',
    statesCovered: ['Assam', 'Meghalaya', 'Nagaland'],
    category: 'Trekking & Adventure',
    durationDays: 9,
    durationNights: 8,
    difficulty: 'Challenging',
    bestSeason: 'October to May',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Dimapur / Guwahati Airport',
    isSpecialHighlight: false,
    basePricePerPerson: 48000,
    originalPricePerPerson: 62000,
    priceRange: { min: 48000, max: 62000 },
    tier: 'Standard/Deluxe',
    inclusionsSummary: 'Assam (Kaziranga) + Meghalaya (Shillong/Sohra) + Nagaland (Kohima, Khonoma & Dzukou Valley)',
    benchmarkComparison: 'Market combo circuits quote ₹60,000–₹72,000; our ₹48,000 rate includes Nagaland ILP, Dzukou mountain guides & porters',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.nagaland,
    gallery: [CAMERA_IMAGES.nagaland, CAMERA_IMAGES.dzukouValley, CAMERA_IMAGES.rootBridge],
    rating: 4.96,
    reviewsCount: 114,
    overview: 'An exhilarating three-state expedition that blends Kaziranga’s big game wildlife and Meghalaya’s living root bridges with the untamed alpine wilderness and warrior tribal heritage of Nagaland. Includes a 2-day trek into the mystical dwarf bamboo landscape of Dzukou Valley.',
    highlights: [
      '2-day trek into the high-altitude Dzukou Valley (2,452 m)',
      'Kaziranga open jeep and dawn elephant safaris with wild rhinos',
      'Nongriat Double Decker Living Root Bridge and Dawki river boating',
      'Heritage walk through Khonoma – India’s First Green Village',
      'Nagaland Inner Line Permit (ILP) and certified mountain guides included'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati to Kaziranga National Park',
        description: 'Chauffeured pickup from Guwahati Airport and drive to Kaziranga National Park in Assam.',
        activities: ['Guwahati pickup', 'Scenic drive', 'Orchid park cultural visit'],
        meals: 'Dinner at lodge',
        stay: '3-star safari resort, Kaziranga',
        distanceKm: 220
      },
      {
        day: 2,
        title: 'Kaziranga Rhinos Safaris to Shillong',
        description: 'Dawn elephant safari tracking rhinos. Drive into the pine-clad hills of Meghalaya to Shillong.',
        activities: ['Dawn elephant safari', 'Scenic hill ascent', 'Shillong cafe culture'],
        meals: 'Breakfast & dinner',
        stay: '3-star boutique hotel, Shillong',
        distanceKm: 250
      },
      {
        day: 3,
        title: 'Shillong to Cherrapunji (Sohra) Waterfalls',
        description: 'Explore Nohkalikai Falls, Mawsmai Cave, and Seven Sisters Falls in Sohra.',
        activities: ['Nohkalikai Falls', 'Mawsmai Caves', 'Eco Park rim walk'],
        meals: 'Breakfast at hotel',
        stay: '3-star resort, Cherrapunji',
        distanceKm: 65
      },
      {
        day: 4,
        title: 'Double Decker Root Bridge & Dawki Boating',
        description: 'Trek to Nongriat Living Root Bridge. Afternoon drive to Dawki Umngot River for glass boating before returning to Shillong.',
        activities: ['Double Decker trek', 'Dawki Umngot boat ride', 'Drive to Shillong'],
        meals: 'Breakfast at hotel',
        stay: '3-star boutique hotel, Shillong',
        distanceKm: 150
      },
      {
        day: 5,
        title: 'Shillong to Kohima, Nagaland',
        description: 'Scenic highway journey crossing from Meghalaya through Assam into the Naga Hills at Kohima. Visit the World War II Kohima Cemetery.',
        activities: ['Scenic inter-state drive', 'Nagaland ILP check', 'Kohima War Cemetery'],
        meals: 'Breakfast & Naga dinner',
        stay: 'Comfort hotel / heritage homestay, Kohima',
        distanceKm: 280
      },
      {
        day: 6,
        title: 'Khonoma Green Village & Kigwema Base',
        description: 'Explore Khonoma Green Village, famed for its Angami stone terraces and conservation spirit. Prepare for the Dzukou trek at Kigwema.',
        activities: ['Khonoma Angami village walk', 'Terraced paddy photography', 'Trek briefing'],
        meals: 'Breakfast & dinner',
        stay: 'Trek homestay, Kigwema / Jakhama',
        distanceKm: 40
      },
      {
        day: 7,
        title: 'Ascent Trek to Dzukou Valley (2,452 m)',
        description: 'Trek up via Viswema trail into the surreal rolling green dwarf bamboo hills of Dzukou Valley. Camp under pristine starry night skies.',
        activities: ['Viswema trail ascent', 'Dzukou Valley exploration', 'Wilderness campsite dinner'],
        meals: 'Breakfast, packed trail lunch & camp dinner',
        stay: 'Alpine guesthouse / tents, Dzukou Valley',
        distanceKm: 15
      },
      {
        day: 8,
        title: 'Dzukou Valley Cave Treks & Descend to Kohima',
        description: 'Morning exploration of subterranean river caves and natural stone bridges in the valley. Descend via Jakhama trail back to Kohima.',
        activities: ['Dzukou cave exploration', 'Jakhama stone descent', 'Naga tribal feast'],
        meals: 'Breakfast & tribal dinner',
        stay: 'Comfort hotel, Kohima',
        distanceKm: 25
      },
      {
        day: 9,
        title: 'Kohima to Dimapur Departure',
        description: 'Transfer from Kohima down to Dimapur Airport or Railway Station for onward journey.',
        activities: ['Kohima local handicraft market', 'Dimapur transfer'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 75
      }
    ],
    inclusions: [
      '8 nights accommodation in 3-star hotels, boutique resorts, verified homestays & Dzukou alpine camp (twin-sharing)',
      'Daily breakfast and all dinners during Kaziranga and Nagaland stays',
      'Private dedicated 4x4 / SUV for the entire multi-state circuit',
      'Kaziranga elephant safari and national park permits',
      'Official Nagaland Inner Line Permit (ILP) processing',
      'Certified Angami tribal trekking guide and porters for Dzukou Valley trek',
      'Dzukou Valley entry fees and camping permits'
    ],
    exclusions: [
      'Flights to Guwahati / from Dimapur',
      'Personal trekking gear (rentals available)',
      'Lunches not noted'
    ],
    permitRequired: true,
    permitDetails: 'Nagaland ILP is required and fully processed by our team before arrival.',
    packingTips: ['Sturdy hiking boots', 'Warm fleece & windcheater for Dzukou', 'Headlamp / flashlight'],
    nextDepartureDates: ['Seasonal Departures Every Saturday (Oct–May)']
  },
  {
    id: 'ne-grand-circuit-9n10d',
    title: '10 Days 9 Nights NE Grand Circuit: Assam, Meghalaya & Arunachal (Tawang)',
    subtitle: 'Kaziranga Rhinos, Living Root Bridges & 13,700-ft Sela Pass to Tawang Monastery',
    tagline: 'The Holy Trinity of North East India Expeditions',
    state: 'Arunachal Pradesh',
    statesCovered: ['Assam', 'Meghalaya', 'Arunachal Pradesh'],
    category: 'Culture & Heritage',
    durationDays: 10,
    durationNights: 9,
    difficulty: 'Moderate',
    bestSeason: 'October to May',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Guwahati Airport / Station',
    isSpecialHighlight: true,
    specialTag: 'Main Highlight',
    basePricePerPerson: 65000,
    originalPricePerPerson: 85000,
    priceRange: { min: 65000, max: 85000 },
    tier: 'Deluxe',
    inclusionsSummary: 'Assam (Rhino Safari) + Meghalaya (Root Bridges) + Arunachal (Tawang & Sela Pass)',
    benchmarkComparison: 'Tier-1 packages quote ₹85,000–₹1,05,000 with flights; our land-only flagship rate at ₹65,000 saves 25% with private Innova & all ILPs',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.tawangMonastery,
    gallery: [CAMERA_IMAGES.tawangMonastery, CAMERA_IMAGES.kazirangaRhino, CAMERA_IMAGES.rootBridge],
    rating: 4.97,
    reviewsCount: 220,
    overview: 'The definitive Grand Circuit of Eastern India. Weave together the three greatest geographic wonders of the region: Meghalaya’s bio-engineered root bridges and cloud waterfalls, Assam’s thrilling one-horned rhino safaris, and Arunachal’s soaring 13,700-ft Himalayan passes and 400-year-old Buddhist monasteries.',
    highlights: [
      'Traverse three distinct North East states in one seamless high-comfort expedition',
      'Nongriat Double Decker Living Root Bridge, Nohkalikai Falls & Dawki River in Meghalaya',
      'Kaziranga open 4x4 jeep safari tracking Great Indian One-Horned Rhinos',
      'Cross the snow-swept 13,700-ft Sela Pass & frozen Sela Lake',
      'Private guided exploration of the 400-year-old Tawang Monastery & Bum La Pass'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati Arrival to Shillong, Meghalaya',
        description: 'Chauffeured pickup from Guwahati Airport in a private Innova. Scenic climb into Meghalaya with stop at Umiam Lake.',
        activities: ['Guwahati pickup', 'Umiam Lake viewpoint', 'Shillong evening leisure'],
        meals: 'Dinner at hotel',
        stay: '3-star boutique hotel, Shillong',
        distanceKm: 100
      },
      {
        day: 2,
        title: 'Shillong to Cherrapunji Gorges & Living Root Bridges',
        description: 'Explore Nohkalikai Falls and trek to the Living Root Bridge. Visit Mawsmai Cave and Seven Sisters Falls.',
        activities: ['Nohkalikai Falls', 'Living root bridge walk', 'Mawsmai Cave'],
        meals: 'Breakfast at hotel',
        stay: '3-star resort, Cherrapunji',
        distanceKm: 65
      },
      {
        day: 3,
        title: 'Dawki Crystal River Boating to Kaziranga National Park',
        description: 'Morning boat ride on the transparent waters of Dawki Umngot River. Cross back down into the lush Assam tea plains to Kaziranga.',
        activities: ['Dawki boat ride', 'Drive down to Assam plains', 'Kaziranga safari lodge arrival'],
        meals: 'Breakfast & dinner',
        stay: '3-star jungle resort, Kaziranga',
        distanceKm: 310
      },
      {
        day: 4,
        title: 'Kaziranga Rhino Safaris to Bhalukpong',
        description: 'Morning open 4x4 jeep safari tracking rhinos in Kaziranga Central Range. Cross the Brahmaputra into the Arunachal foothills at Bhalukpong.',
        activities: ['Kaziranga open jeep safari', 'Brahmaputra bridge crossing', 'Arunachal ILP border entry'],
        meals: 'Breakfast & dinner',
        stay: 'Comfort eco-resort, Bhalukpong',
        distanceKm: 130
      },
      {
        day: 5,
        title: 'Bhalukpong to Dirang Monpa Valley',
        description: 'Ascend through Kameng river gorges to Dirang. Visit Tipi Orchid Research Centre, Dirang Dzong, and apple orchards.',
        activities: ['Tipi Orchidarium', 'Dirang Dzong tour', 'Hot sulphur springs'],
        meals: 'Breakfast & dinner',
        stay: '3-star boutique hotel, Dirang',
        distanceKm: 140
      },
      {
        day: 6,
        title: 'Dirang to Tawang via Sela Pass (13,700 ft)',
        description: 'Ascend into high alpine territory. Cross Sela Pass at 13,700 ft, view frozen Sela Lake, pay homage at Jaswant Garh, and marvel at Nuranang Falls.',
        activities: ['Sela Pass photo stop', 'Jaswant Garh memorial salute', 'Nuranang 100m waterfalls'],
        meals: 'Breakfast & dinner',
        stay: '3-star premier hotel, Tawang',
        distanceKm: 135
      },
      {
        day: 7,
        title: 'Tawang Monastery, Urgelling & Giant Buddha',
        description: 'Full day in mystical Tawang. Tour the 17th-century Tawang Gompa with an expert guide, visit Urgelling (6th Dalai Lama birthplace), and Tawang War Memorial.',
        activities: ['Tawang Monastery guided tour', 'Urgelling Gompa blessing', 'War memorial light show'],
        meals: 'Breakfast & dinner',
        stay: '3-star premier hotel, Tawang',
        distanceKm: 30
      },
      {
        day: 8,
        title: 'Bum La Pass (15,200 ft) & Madhuri Lake Excursion',
        description: 'Excursion to the Indo-China frontier at Bum La Pass (15,200 ft) and tranquil Madhuri (Sangetsar) Lake surrounded by snow peaks.',
        activities: ['Bum La border LAC point', 'Madhuri Lake stroll', 'High-altitude alpine pass'],
        meals: 'Breakfast & dinner',
        stay: '3-star premier hotel, Tawang',
        distanceKm: 85
      },
      {
        day: 9,
        title: 'Tawang to Bomdila Himalayan Town',
        description: 'Descend through Sela Pass down to the apple and kiwi orchards of Bomdila. Visit Bomdila Monastery with panoramic views.',
        activities: ['Descent via Sela', 'Bomdila Monastery viewpoint', 'Monpa handicrafts market'],
        meals: 'Breakfast & dinner',
        stay: '3-star hotel, Bomdila',
        distanceKm: 170
      },
      {
        day: 10,
        title: 'Bomdila to Guwahati Airport Departure',
        description: 'Early morning drive descending from the Himalayas to Guwahati Airport for onward flight.',
        activities: ['Scenic descent', 'Guwahati airport drop'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 260
      }
    ],
    inclusions: [
      '9 nights in handpicked 3-star resorts, view hotels and heritage lodges (twin-sharing)',
      'Daily breakfast and all dinners during Kaziranga and Arunachal stays',
      'Private dedicated Toyota Innova / Mahindra Scorpio for all 10 days',
      '1 open 4x4 Jeep Safari in Kaziranga with park permits and naturalist',
      'Official Arunachal Pradesh Inner Line Permit (ILP) processing',
      'Local 4x4 vehicle and army clearances for Bum La Pass and Madhuri Lake'
    ],
    exclusions: [
      'Flights to/from Guwahati',
      'Lunches and personal beverages'
    ],
    permitRequired: true,
    permitDetails: 'Arunachal ILP included. Bum La permits coordinated by our local desk.',
    packingTips: ['Heavy woolens & windcheaters for Tawang and Sela', 'Trek shoes for Meghalaya root bridges', 'Valid ID proofs'],
    nextDepartureDates: ['Every Tuesday & Friday']
  },
  {
    id: 'ne-complete-11n12d',
    title: '12 Days 11 Nights NE Complete: The Ultimate Eastern Himalayan Odyssey',
    subtitle: 'Assam, Arunachal Pradesh & Meghalaya – All Major Regional Highlights',
    tagline: 'The Definitive Comprehensive Pan-North-East Master Expedition',
    state: 'Assam',
    statesCovered: ['Assam', 'Arunachal Pradesh', 'Meghalaya'],
    category: 'Culture & Heritage',
    durationDays: 12,
    durationNights: 11,
    difficulty: 'Moderate',
    bestSeason: 'October to May',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Guwahati Airport / Station',
    isSpecialHighlight: true,
    specialTag: 'Main Highlight',
    basePricePerPerson: 85000,
    originalPricePerPerson: 110000,
    priceRange: { min: 85000, max: 110000 },
    tier: 'Deluxe',
    inclusionsSummary: 'Assam + Arunachal + Meghalaya, all major highlights, luxury stays & private Innova Crysta',
    benchmarkComparison: 'Veena World 12D combo lists at ₹1,00,000–₹1,01,000 with flights; our land package at ₹85,000 provides 25-30% savings with higher boutique stay standards',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.arunachal,
    gallery: [CAMERA_IMAGES.arunachal, CAMERA_IMAGES.rootBridge, CAMERA_IMAGES.kazirangaRhino],
    rating: 4.99,
    reviewsCount: 184,
    overview: 'The absolute masterwork of North East travel. Twelve days of seamless wonder across Meghalaya, Assam, and Arunachal Pradesh. Every iconic landmark is included: the Double Decker Root Bridge, Dawki’s transparent waters, Kaziranga’s rhinos, Sela Pass, Tawang Monastery, and the Indo-China frontier.',
    highlights: [
      'Comprehensive 12-day master itinerary across Meghalaya, Assam, and Arunachal Pradesh',
      'Both Elephant Safari & Open 4x4 Jeep Safari in Kaziranga National Park',
      'Nongriat Double Decker Living Root Bridge, Nohkalikai Falls & Dawki Umngot River',
      '13,700-ft Sela Pass, Nuranang Falls, Tawang Monastery & Bum La Pass (15,200 ft)',
      'Toyota Innova Crysta throughout with luxury view stays and dedicated tour manager'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati Arrival to Shillong via Umiam Lake',
        description: 'Chauffeured VIP pickup at Guwahati. Scenic drive to Shillong, visiting Umiam Lake and Ward’s Lake.',
        activities: ['VIP Guwahati pickup', 'Umiam Lake viewpoint', 'Shillong heritage walk'],
        meals: 'Dinner at hotel',
        stay: '4-star boutique hotel, Shillong',
        distanceKm: 100
      },
      {
        day: 2,
        title: 'Shillong to Cherrapunji (Sohra) Gorges',
        description: 'Drive along the Mawkdok valley. Visit Nohkalikai Falls, Wei Sawdong cascade, and Mawsmai Cave.',
        activities: ['Nohkalikai Falls', 'Mawsmai Cave', 'Seven Sisters Falls'],
        meals: 'Breakfast at hotel',
        stay: 'Luxury view resort, Cherrapunji',
        distanceKm: 65
      },
      {
        day: 3,
        title: 'Nongriat Double Decker Living Root Bridge Trek',
        description: 'Guided trek to the Umshiang Double Decker Living Root Bridge. Swim in turquoise mountain pools.',
        activities: ['Double Decker Root Bridge trek', 'Rainbow Falls hike', 'Natural blue lagoon swim'],
        meals: 'Breakfast at hotel',
        stay: 'Luxury view resort, Cherrapunji',
        distanceKm: 25
      },
      {
        day: 4,
        title: 'Mawlynnong Cleanest Village & Dawki Crystal Boating',
        description: 'Explore Mawlynnong village. Boat on the crystal-clear Umngot River in Dawki and swim at Krang Shuri Falls.',
        activities: ['Mawlynnong village tour', 'Dawki crystal boat ride', 'Krang Shuri Falls swim'],
        meals: 'Breakfast at resort',
        stay: '4-star boutique hotel, Shillong',
        distanceKm: 160
      },
      {
        day: 5,
        title: 'Shillong to Kaziranga National Park',
        description: 'Drive down from Meghalaya into the lush tea valleys of Assam. Evening cultural folk show at the Orchid Park.',
        activities: ['Scenic descent to Assam', 'Tea garden drive', 'Assamese Bihu cultural performance'],
        meals: 'Breakfast & dinner',
        stay: 'Deluxe safari resort, Kaziranga',
        distanceKm: 250
      },
      {
        day: 6,
        title: 'Kaziranga Dawn Elephant & Afternoon 4x4 Jeep Safari',
        description: 'Dawn elephant safari tracking rhinos up close. Afternoon open 4x4 jeep safari in Central Range.',
        activities: ['Dawn elephant safari', 'Central range jeep safari', 'Orchid conservation park'],
        meals: 'Breakfast & dinner',
        stay: 'Deluxe safari resort, Kaziranga',
        distanceKm: 40
      },
      {
        day: 7,
        title: 'Kaziranga to Bhalukpong / Nameri Foothills',
        description: 'Cross the Brahmaputra River to the foothills of the Himalayas. Evening riverside nature walk.',
        activities: ['Brahmaputra crossing', 'Arunachal ILP border entry', 'Riverside sunset walk'],
        meals: 'Breakfast & dinner',
        stay: 'Deluxe eco-resort, Bhalukpong',
        distanceKm: 130
      },
      {
        day: 8,
        title: 'Bhalukpong to Dirang Monpa Valley',
        description: 'Ascend through Kameng gorges into Dirang Valley. Visit Tipi Orchidarium and the 500-year Dirang Dzong.',
        activities: ['Tipi Orchidarium', 'Dirang Dzong tour', 'Hot sulphur springs'],
        meals: 'Breakfast & dinner',
        stay: 'Boutique valley resort, Dirang',
        distanceKm: 140
      },
      {
        day: 9,
        title: 'Dirang to Tawang via Sela Pass (13,700 ft)',
        description: 'Cross Sela Pass and frozen Sela Lake. Visit Jaswant Garh War Memorial and thunderous Nuranang Falls before reaching Tawang.',
        activities: ['Sela Pass frozen lake', 'Jaswant Garh memorial', 'Nuranang Falls'],
        meals: 'Breakfast & dinner',
        stay: 'Premier view hotel / suite, Tawang',
        distanceKm: 135
      },
      {
        day: 10,
        title: 'Tawang Monastery, Urgelling & Bum La Pass (15,200 ft)',
        description: 'Private 4x4 excursion to Bum La Pass on the Indo-China border and Madhuri Lake. Tour the 400-year Tawang Gompa.',
        activities: ['Bum La Pass border excursion', 'Madhuri Lake visit', 'Tawang Monastery guided tour'],
        meals: 'Breakfast & dinner',
        stay: 'Premier view hotel, Tawang',
        distanceKm: 90
      },
      {
        day: 11,
        title: 'Tawang to Bomdila Himalayan Town',
        description: 'Descend through the Sela mountain pass to Bomdila. Visit Bomdila Monastery and Monpa craft center.',
        activities: ['Descent via Sela Pass', 'Bomdila Upper Gompa', 'Crafts market'],
        meals: 'Breakfast & dinner',
        stay: 'Premier hotel, Bomdila',
        distanceKm: 170
      },
      {
        day: 12,
        title: 'Bomdila to Guwahati Airport Departure',
        description: 'Morning descent through the Himalayan foothills to Guwahati Airport for evening departure flights.',
        activities: ['Himalayan descent', 'Guwahati airport transfer'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 260
      }
    ],
    inclusions: [
      '11 nights accommodation in verified 3-star & deluxe boutique resorts (twin-sharing)',
      'Daily breakfast at all hotels and dinners during Kaziranga and Arunachal stays',
      'Private dedicated Toyota Innova Crysta for all 12 days with fuel, tolls & driver allowances',
      '1 Kaziranga dawn elephant safari and 1 afternoon 4x4 jeep safari with forest permits',
      'Official Arunachal Pradesh Inner Line Permit (ILP) processing',
      'Exclusive 4x4 vehicle and army clearances for Bum La Pass and Madhuri Lake',
      'Dedicated local trekking guide for Nongriat Living Root Bridge'
    ],
    exclusions: [
      'Airfare to/from Guwahati',
      'Personal bar bills, laundry, and tipping'
    ],
    permitRequired: true,
    permitDetails: 'Arunachal ILP and military border permits are included and pre-arranged.',
    packingTips: ['Layered winter woolens for Tawang', 'Sturdy walking shoes for Meghalaya root bridges', 'Swimwear for Krang Shuri'],
    nextDepartureDates: ['Custom Dates On Demand (Private Departures)']
  }
];
