import { TourPackage } from '../../types';
import { CAMERA_IMAGES } from '../../assets/images';

export const FESTIVAL_PACKAGES: TourPackage[] = [
  {
    id: 'hornbill-festival-special',
    title: '6 Days 5 Nights Hornbill Festival Special',
    subtitle: 'Witness the Grand Carnival of all 17 Naga Warrior Tribes in Kisama',
    tagline: 'The Festival of Festivals in the Mystic Naga Hills',
    state: 'Nagaland',
    category: 'Festival Specials',
    durationDays: 6,
    durationNights: 5,
    difficulty: 'Easy',
    bestSeason: 'December 1 to 10 (Fixed Dates)',
    startPoint: 'Dimapur / Guwahati Airport',
    endPoint: 'Dimapur / Guwahati Airport',
    isSpecialHighlight: true,
    specialTag: 'Festival Special',
    basePricePerPerson: 28500,
    originalPricePerPerson: 35000,
    priceRange: { min: 28500, max: 35000 },
    tier: 'Standard/Deluxe',
    inclusionsSummary: 'Kohima/Kisama festival village passes, Naga morung cultural escort, Nagaland ILP included',
    benchmarkComparison: 'Market Hornbill packages surge to ₹38,000–₹45,000; our ₹28,500 starting rate locks in early festival tariffs with guaranteed homestay/hotel allocations',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Dimapur/Guwahati)',
    image: CAMERA_IMAGES.hornbillFestival,
    gallery: [CAMERA_IMAGES.hornbillFestival, CAMERA_IMAGES.nagaland, CAMERA_IMAGES.dzukouValley],
    rating: 4.97,
    reviewsCount: 198,
    overview: 'Nagaland’s legendary cultural summit. Held annually from December 1st to 10th at Kisama Heritage Village, the Hornbill Festival unites all 17 recognized tribes of Nagaland. Experience electrifying war dances, indigenous musical concerts, traditional archery, Naga chili eating championships, and nightly rock festivals.',
    highlights: [
      'Full-day festival access to Kisama Heritage Village and traditional tribal Morungs',
      'Witness vibrant dances, authentic warrior headgear, and ceremonial drumming',
      'Visit Khonoma – India’s First Green Village – and Kohima World War II War Cemetery',
      'Evening access to the Kohima Night Carnival & Hornbill International Rock Contest',
      'Official Nagaland Inner Line Permit (ILP) fully included'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dimapur & Drive to Kohima / Kigwema',
        description: 'Meet at Dimapur Airport / Railway Station. Ascend into the pine-covered hills of Kohima. Check in at your festival guesthouse or hotel.',
        activities: ['Dimapur pickup', 'Scenic hill ascent', 'Welcome Naga dinner'],
        meals: 'Dinner at hotel',
        stay: 'Festival hotel / boutique homestay, Kohima / Kigwema',
        distanceKm: 75
      },
      {
        day: 2,
        title: 'Hornbill Festival Opening & Tribal Morungs at Kisama',
        description: 'Immerse yourself at Kisama Heritage Village. Walk through authentic thatched Morungs of the Konyak, Ao, Angami, Sumi, and Lotha tribes.',
        activities: ['Kisama Heritage Village festival grounds', 'Tribal dances & war cries', 'Traditional Naga feast & rice beer tasting'],
        meals: 'Breakfast & dinner',
        stay: 'Festival hotel / homestay, Kohima',
        distanceKm: 25
      },
      {
        day: 3,
        title: 'Kisama Festivities & Indigenous Sports Competitions',
        description: 'Watch indigenous games: greased bamboo pole climbing, Naga wrestling, king chili eating challenge, and hornbill musical ensembles.',
        activities: ['Indigenous tribal sports', 'Craft and handloom exhibitions', 'Hornbill Rock Contest evening'],
        meals: 'Breakfast & dinner',
        stay: 'Festival hotel / homestay, Kohima',
        distanceKm: 25
      },
      {
        day: 4,
        title: 'Khonoma Green Village & Kohima WWII Cemetery',
        description: 'Morning trip to Khonoma Green Village to witness Angami stone fortifications and wildlife conservation. Return to Kohima to visit the historic WWII War Cemetery.',
        activities: ['Khonoma conservation village tour', 'Kohima War Cemetery visit', 'Kohima night street carnival'],
        meals: 'Breakfast & dinner',
        stay: 'Festival hotel / homestay, Kohima',
        distanceKm: 45
      },
      {
        day: 5,
        title: 'Touphema Tourist Village Cultural Experience',
        description: 'Visit Touphema village to explore traditional Angami community huts, wood carvings, and local museum before a celebratory farewell bonfire.',
        activities: ['Touphema tribal village tour', 'Farewell Naga bonfire dinner'],
        meals: 'Breakfast & traditional dinner',
        stay: 'Festival hotel / homestay, Kohima',
        distanceKm: 40
      },
      {
        day: 6,
        title: 'Kohima to Dimapur Departure',
        description: 'Morning transfer down to Dimapur Airport or Railway Station for onward journey.',
        activities: ['Local handicraft shopping', 'Dimapur airport drop'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 75
      }
    ],
    inclusions: [
      '5 nights accommodation in verified festival hotels or cozy heritage homestays (twin-sharing)',
      'Daily breakfast and authentic tribal dinners',
      'Dedicated private vehicle for all transfers, sightseeing, and daily Kisama festival runs',
      'Daily entry passes to Kisama Heritage Village and cultural events',
      'Official Nagaland Inner Line Permit (ILP) processing',
      'Dedicated local Naga guide for festival grounds and village walks'
    ],
    exclusions: [
      'Airfare/train tickets to Dimapur',
      'Entry tickets to Hornbill Rock Festival music nights',
      'Lunches and personal purchases'
    ],
    permitRequired: true,
    permitDetails: 'Nagaland ILP is required for all domestic Indian visitors and is processed in advance.',
    packingTips: ['Warm winter fleece & windcheater (Kohima nights reach 5°C in December)', 'Walking boots for hilly festival terrain', 'Cash (ATMs run out during festival)'],
    nextDepartureDates: ['Nov 30 – Dec 5', 'Dec 2 – Dec 7', 'Dec 5 – Dec 10']
  },
  {
    id: 'dzukou-valley-trek',
    title: '5 Days 4 Nights Dzukou Valley Trek Expedition',
    subtitle: 'The Valley of Eternal Flowers & Rolling Dwarf Bamboo Hills (2,452 m)',
    tagline: 'North East India’s Most Enchanting High-Altitude Wilderness Trek',
    state: 'Nagaland',
    category: 'Trekking & Adventure',
    durationDays: 5,
    durationNights: 4,
    difficulty: 'Moderate',
    bestSeason: 'October to May (Frost & Clear Skies) | June to August (Lily Bloom)',
    startPoint: 'Dimapur / Kohima',
    endPoint: 'Dimapur / Kohima',
    isSpecialHighlight: true,
    specialTag: 'Trek Special',
    basePricePerPerson: 18500,
    originalPricePerPerson: 24000,
    priceRange: { min: 18500, max: 24000 },
    tier: 'Budget/Backpacker',
    inclusionsSummary: 'Nagaland ILP, certified Angami mountain guides, alpine tents, sleeping bags & meals',
    benchmarkComparison: 'Trekking outfitters charge ₹22,000–₹26,000; our ₹18,500 rate includes dedicated porters, private transfers, and Khonoma green village visit',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Dimapur/Kohima)',
    image: CAMERA_IMAGES.dzukouValley,
    gallery: [CAMERA_IMAGES.dzukouValley, CAMERA_IMAGES.nagaland, CAMERA_IMAGES.heroMountains],
    rating: 4.94,
    reviewsCount: 132,
    overview: 'Trek into the ethereal paradise of Dzukou Valley, perched at 2,452 meters along the Nagaland-Manipur border. Famed for its rolling waves of emerald dwarf bamboo, crystalline winding streams, hidden caves, and in summer, the rare endemic Dzukou Lily.',
    highlights: [
      '2-day alpine trek through the enchanted dwarf bamboo ridges of Dzukou Valley',
      'Wilderness camping under zero-light-pollution starry skies',
      'Explore natural subterranean river caves and natural stone bridges',
      'Khonoma – India’s First Green Village – cultural heritage walk',
      'Official Nagaland Inner Line Permit (ILP) and certified Angami guides included'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dimapur to Kohima / Kigwema Basecamp',
        description: 'Pickup from Dimapur Airport/Station. Drive up to Kigwema village at the foot of Mount Japfu. Trek briefing and equipment check.',
        activities: ['Dimapur pickup', 'Scenic ascent to Kigwema', 'Trek briefing & gear distribution'],
        meals: 'Dinner at homestay',
        stay: 'Trekker homestay, Kigwema / Jakhama',
        distanceKm: 75
      },
      {
        day: 2,
        title: 'Ascent Trek via Viswema Trail to Dzukou Valley',
        description: 'Drive to Viswema trailhead. Climb through mossy subtropical rainforest stairs to the ridge crest, then enter the surreal rolling dwarf bamboo valley.',
        activities: ['Viswema trail ascent (3-4 hours)', 'Ridge crest panoramic view', 'Arrive at Dzukou Valley campsite'],
        meals: 'Breakfast, packed trail lunch & camp dinner',
        stay: 'Alpine tents / trekker hut, Dzukou Valley',
        distanceKm: 12
      },
      {
        day: 3,
        title: 'Dzukou Valley Heartlands, River Caves & Hidden Waterways',
        description: 'Full day exploring the depths of the valley. Walk along crystal streams, explore subterranean caves, and climb to the Manipur border ridge.',
        activities: ['Valley floor exploration', 'Dzukou river caves hike', 'Sunset over dwarf bamboo hills'],
        meals: 'Breakfast, trail lunch & hot camp dinner',
        stay: 'Alpine tents / trekker hut, Dzukou Valley',
        distanceKm: 10
      },
      {
        day: 4,
        title: 'Descent via Jakhama Trail & Khonoma Green Village',
        description: 'Descend through the steep moss-covered stone trail of Jakhama. Transfer to Khonoma Green Village to celebrate with a hot Naga feast.',
        activities: ['Jakhama descent (3 hours)', 'Khonoma village tour', 'Hot shower & celebration feast'],
        meals: 'Breakfast, lunch & traditional Naga dinner',
        stay: 'Comfort homestay, Khonoma / Kohima',
        distanceKm: 25
      },
      {
        day: 5,
        title: 'Kohima to Dimapur Departure',
        description: 'Morning visit to Kohima War Cemetery and local organic bazaar before transfer down to Dimapur for your flight or train.',
        activities: ['Kohima War Cemetery', 'Dimapur transfer'],
        meals: 'Breakfast at homestay',
        stay: 'Departure',
        distanceKm: 75
      }
    ],
    inclusions: [
      '2 nights in verified village homestays and 2 nights in high-altitude alpine tents with sub-zero sleeping bags',
      'All meals during the trek prepared by our mountain camp cook',
      'Dedicated private vehicle for all road transfers (Dimapur-Kohima-Trailheads-Dimapur)',
      'Certified Angami tribal wilderness trekking guide and common camp porters',
      'Dzukou Valley entry permits, camping fees, and environmental cess',
      'Official Nagaland Inner Line Permit (ILP) processing'
    ],
    exclusions: [
      'Airfare to Dimapur',
      'Personal porter for private luggage (can be hired for ~₹1,000/day)',
      'Trekking shoes and personal clothing'
    ],
    permitRequired: true,
    permitDetails: 'Nagaland ILP is required and fully arranged prior to your arrival.',
    packingTips: ['Waterproof hiking boots with ankle support', 'Warm thermal inners & windproof jacket', 'Headlamp with extra batteries'],
    nextDepartureDates: ['Departures every Friday & Monday (Oct–May)']
  },
  {
    id: 'ziro-festival-of-music',
    title: '5 Days 4 Nights Ziro Festival of Music Special',
    subtitle: 'India’s Premier Eco-Friendly Outdoor Music Festival in Arunachal Pradesh',
    tagline: 'Apatani Tribal Valleys, Bamboo Stages & Soulful Independent Music',
    state: 'Arunachal Pradesh',
    category: 'Festival Specials',
    durationDays: 5,
    durationNights: 4,
    difficulty: 'Easy',
    bestSeason: 'Late September (Annual Event)',
    startPoint: 'Guwahati / Naharlagun',
    endPoint: 'Guwahati / Naharlagun',
    isSpecialHighlight: true,
    specialTag: 'Festival Special',
    basePricePerPerson: 26000,
    originalPricePerPerson: 32000,
    priceRange: { min: 26000, max: 32000 },
    tier: 'Standard',
    inclusionsSummary: 'Arunachal ILP, pine grove eco-camp, festival ground transfers & Apatani village tour',
    benchmarkComparison: 'Ziro packages typically trade at ₹30,000–₹36,000 with surge pricing; our ₹26,000 rate includes dedicated camp infrastructure and verified local guides',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati/Naharlagun)',
    image: CAMERA_IMAGES.ziroValley,
    gallery: [CAMERA_IMAGES.ziroValley, CAMERA_IMAGES.arunachal, CAMERA_IMAGES.heroMountains],
    rating: 4.93,
    reviewsCount: 110,
    overview: 'India’s most celebrated indie music gathering in the tranquil Apatani Valley of Arunachal Pradesh. Surrounded by golden rice paddy fields and tall pine groves, the festival features two stages handcrafted entirely from local bamboo, stellar domestic and international musicians, home-brewed kiwi wine, and deep cultural immersion into Apatani tribal heritage.',
    highlights: [
      'Full multi-day access to Danyi and Danyii stages handcrafted from eco-friendly bamboo',
      'Stay in scenic pine grove festival campsites with hot showers and bonfires',
      'Cultural walking tour of Hong and Hari Apatani hamlets, famed for nose plugs and facial tattoos',
      'Sample authentic Apatani delicacies: bamboo shoot pork, pike, and organic millet beer',
      'Official Arunachal Pradesh Inner Line Permit (ILP) included'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati / Naharlagun to Ziro Valley',
        description: 'Meet our team at Naharlagun Railway Station (or early morning drive from Guwahati). Ascend into the pristine pine forests of Ziro Valley. Check in at your festival pine grove campsite.',
        activities: ['Naharlagun/Guwahati pickup', 'Scenic ascent into Lower Subansiri', 'Welcome camp bonfire'],
        meals: 'Dinner at campsite',
        stay: 'Eco-camp tent / homestay, Ziro Valley',
        distanceKm: 110
      },
      {
        day: 2,
        title: 'Apatani Village Walk & Ziro Music Festival Day 1',
        description: 'Morning walk through Hong village—one of the largest tribal villages in Asia. Meet elder Apatani women with traditional facial tattoos. Afternoon entry to the festival grounds for opening acts.',
        activities: ['Hong Apatani village tour', 'Apatani bamboo architecture', 'Ziro Festival opening acts on bamboo stage'],
        meals: 'Breakfast & camp dinner',
        stay: 'Eco-camp tent / homestay, Ziro Valley',
        distanceKm: 15
      },
      {
        day: 3,
        title: 'Ziro Music Festival Day 2: Day & Night Acts',
        description: 'Spend the day soaking in world-class indie, folk, and electronic acts on the Danyi (Sun) stage. Savor homemade rice beer and local kiwi wine while relaxing on the green grassy hill slopes.',
        activities: ['Danyi Stage acoustic sessions', 'Evening headlining bands', 'Festival craft stalls'],
        meals: 'Breakfast & camp dinner',
        stay: 'Eco-camp tent / homestay, Ziro Valley',
        distanceKm: 10
      },
      {
        day: 4,
        title: 'Kardo Shiva Lingam & Grand Festival Finale',
        description: 'Visit the miraculous 25-foot natural stone Shiva Lingam at Kardo. In the evening, enjoy the grand finale concerts and celebrations on the festival main stage.',
        activities: ['Kardo natural Shiva Lingam visit', 'Grand finale concert performances', 'Farewell campfire jam session'],
        meals: 'Breakfast & camp dinner',
        stay: 'Eco-camp tent / homestay, Ziro Valley',
        distanceKm: 20
      },
      {
        day: 5,
        title: 'Ziro to Naharlagun / Guwahati Departure',
        description: 'Breakfast at camp amidst pine trees. Transfer down to Naharlagun Railway Station or Guwahati for return journey.',
        activities: ['Morning tea in pine groves', 'Naharlagun/Guwahati drop'],
        meals: 'Breakfast at campsite',
        stay: 'Departure',
        distanceKm: 110
      }
    ],
    inclusions: [
      '4 nights in luxury twin-sharing safari tents at our dedicated pine grove campsite with verified sanitary washrooms & hot water',
      'Daily hearty breakfast and camp dinners with bonfire gatherings',
      'Private dedicated transportation for all station transfers and daily festival shuttles',
      'Guided cultural tour of Hong and Hari Apatani tribal villages',
      'Official Arunachal Pradesh Inner Line Permit (ILP) processing'
    ],
    exclusions: [
      'Official Ziro Festival season musical pass (can be added or bought directly)',
      'Airfare/train to Naharlagun/Guwahati',
      'Lunches, personal alcohol, and merchandise'
    ],
    permitRequired: true,
    permitDetails: 'Arunachal ILP is mandatory and handled in advance by our team.',
    packingTips: ['Gumboots / waterproof footwear (field can get muddy)', 'Warm jacket for chilly mountain evenings', 'Power bank'],
    nextDepartureDates: ['Late September (Fixed Annual Festival Dates)']
  }
];
