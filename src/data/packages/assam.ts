import { TourPackage } from '../../types';
import { CAMERA_IMAGES } from '../../assets/images';

export const ASSAM_PACKAGES: TourPackage[] = [
  {
    id: 'assam-3n4d-budget',
    title: '4 Days 3 Nights Assam Wildlife Budget Safari',
    subtitle: 'Guwahati Heritage & Kaziranga One-Horned Rhino Jeep Safari',
    tagline: 'Grasslands, Wild Rhinos & Ancient Temples along the Brahmaputra',
    state: 'Assam',
    category: 'Wildlife & Nature',
    durationDays: 4,
    durationNights: 3,
    difficulty: 'Easy',
    bestSeason: 'November to April',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Guwahati Airport / Station',
    isSpecialHighlight: false,
    basePricePerPerson: 13000,
    originalPricePerPerson: 16500,
    priceRange: { min: 13000, max: 16500 },
    tier: 'Budget',
    inclusionsSummary: 'Guwahati sightseeing + Kaziranga jeep safari, standard hotels',
    benchmarkComparison: 'Legacy Assam circuit ₹17,600+; international DMCs quote $700+; our land rate ₹13,000 is 15-25% below Tier-1 operators',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.kazirangaRhino,
    gallery: [CAMERA_IMAGES.kazirangaRhino, CAMERA_IMAGES.assamTea, CAMERA_IMAGES.heroMountains],
    rating: 4.86,
    reviewsCount: 142,
    overview: 'A cost-effective introduction to Assam’s wildlife and cultural wealth. Arrive in Guwahati, visit the Shakti shrine of Kamakhya Temple, and head into the UNESCO World Heritage grasslands of Kaziranga National Park for thrilling 4x4 open-top jeep safaris tracking the Great Indian One-Horned Rhino.',
    highlights: [
      'Open 4x4 Jeep Safari in Kaziranga National Park (Bagori/Kohora Range)',
      'Spotting the Great Indian One-Horned Rhino, Wild Asiatic Water Buffalo & Swamp Deer',
      'Kamakhya Temple perched on Nilachal Hill',
      'Tea garden walks and authentic Assamese thali dining'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati Arrival & Kamakhya Temple Visit',
        description: 'Meet your driver at Guwahati Airport. Visit the revered Kamakhya Temple atop Nilachal Hill. Evening stroll along the Brahmaputra riverfront promenade.',
        activities: ['Guwahati airport pickup', 'Kamakhya Temple darshan', 'Brahmaputra riverfront walk'],
        meals: 'Dinner at hotel',
        stay: 'Standard hotel, Guwahati',
        distanceKm: 30
      },
      {
        day: 2,
        title: 'Guwahati to Kaziranga National Park',
        description: 'Enjoy a scenic 4.5-hour drive through lush paddy fields and rolling tea plantations to Kaziranga. Check in at your safari lodge. In the afternoon, visit the Kaziranga National Orchid & Biodiversity Park.',
        activities: ['Scenic highway drive', 'Orchid & cultural park visit', 'Bihu folk dance performance'],
        meals: 'Breakfast & dinner',
        stay: 'Standard safari lodge, Kaziranga',
        distanceKm: 220
      },
      {
        day: 3,
        title: 'Kaziranga 4x4 Open Jeep Safaris',
        description: 'Embark on an exhilarating open 4x4 jeep safari across the Western (Bagori) or Central (Kohora) range. Encounter one-horned rhinos grazing in elephant grass, wild elephants, and migratory waterbirds.',
        activities: ['Open 4x4 jeep safari in Bagori range', 'Tea garden stroll', 'Wildlife photography'],
        meals: 'Breakfast & dinner',
        stay: 'Standard safari lodge, Kaziranga',
        distanceKm: 40
      },
      {
        day: 4,
        title: 'Kaziranga to Guwahati Departure',
        description: 'Morning tea overlooking the mist-covered plantations. Drive back to Guwahati Airport or Railway Station for your return journey.',
        activities: ['Assam tea souvenir shopping', 'Guwahati airport transfer'],
        meals: 'Breakfast at lodge',
        stay: 'Departure',
        distanceKm: 220
      }
    ],
    inclusions: [
      '3 nights accommodation in verified standard hotels & eco-lodges (twin-sharing)',
      'Daily breakfast & select dinners at Kaziranga lodge',
      'Private dedicated outstation vehicle for all transfers and highway drives',
      '1 open 4x4 Jeep Safari in Kaziranga (including park entry fee, jeep hire & forest guard)',
      'Toll taxes, parking, and driver allowances'
    ],
    exclusions: [
      'Air/train fare to Guwahati',
      'Optional Kaziranga Elephant Safari (can be added on request)',
      'Camera/video fees inside the national park'
    ],
    permitRequired: false,
    permitDetails: 'No ILP required for domestic Indian travelers in Assam.',
    packingTips: ['Earth-toned/khaki clothing for safaris (avoid bright red/yellow)', 'Binoculars & zoom lens', 'Dust mask/scarf for open jeep tracks'],
    nextDepartureDates: ['Daily Departures (Nov–Apr Park Season)']
  },
  {
    id: 'assam-4n5d-standard',
    title: '5 Days 4 Nights Assam Standard: Rhinos, River & Tea Highlands',
    subtitle: 'Adds Dawn Elephant Safari, Kamakhya & Brahmaputra Sunset Cruise',
    tagline: 'The Quintessential Assam Wildlife & Riverine Circuit',
    state: 'Assam',
    category: 'Wildlife & Nature',
    durationDays: 5,
    durationNights: 4,
    difficulty: 'Easy',
    bestSeason: 'November to April',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Guwahati Airport / Station',
    isSpecialHighlight: false,
    basePricePerPerson: 18000,
    originalPricePerPerson: 23000,
    priceRange: { min: 18000, max: 23000 },
    tier: 'Standard',
    inclusionsSummary: 'Adds elephant safari + Kamakhya + Brahmaputra cruise, 3-star resorts & private SUV',
    benchmarkComparison: 'Market standard ₹22,000–₹26,000; our ₹18,000 starting rate is calibrated 15% below Tier-1 operators with elephant safari included',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.kazirangaRhino,
    gallery: [CAMERA_IMAGES.kazirangaRhino, CAMERA_IMAGES.assamTea, CAMERA_IMAGES.heroMountains],
    rating: 4.92,
    reviewsCount: 165,
    overview: 'The complete Assam wildlife and cultural expedition. Experience Kaziranga’s legendary dawn elephant safari moving silently through towering elephant grass within meters of rhinos, complemented by afternoon 4x4 jeep tracking, a sunset cruise on the Brahmaputra, and VIP Kamakhya darshan.',
    highlights: [
      'Dawn Elephant Safari tracking rhinos at close range',
      'Afternoon 4x4 Open Jeep Safari in Kaziranga Central Range',
      'Evening Sunset Cruise on the Mighty Brahmaputra River',
      'VIP assistance for Kamakhya Temple darshan & Umananda Peacock Island',
      'Tea tasting and heritage Assamese culinary feast'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati Arrival & Sunset Brahmaputra Cruise',
        description: 'Arrive at Guwahati. Check in at your 3-star hotel. In the evening, board a scenic river cruise on the mighty Brahmaputra River to watch the crimson sunset over the water.',
        activities: ['Guwahati airport pickup', 'Sunset Brahmaputra river cruise', 'Traditional Assamese dinner'],
        meals: 'Dinner at hotel',
        stay: '3-star hotel, Guwahati',
        distanceKm: 35
      },
      {
        day: 2,
        title: 'Kamakhya Temple to Kaziranga National Park',
        description: 'Morning visit to the historic Kamakhya Temple. Drive through the verdant Brahmaputra valley to Kaziranga National Park. Evening cultural show at the Orchid Biodiversity Park.',
        activities: ['Kamakhya Temple darshan', 'Drive to Kaziranga', 'Assamese Bihu folk dance & music'],
        meals: 'Breakfast & dinner',
        stay: '3-star jungle resort, Kaziranga',
        distanceKm: 220
      },
      {
        day: 3,
        title: 'Dawn Elephant Safari & Afternoon Jeep Safari',
        description: 'Early morning elephant safari in the mist into the heart of rhino territory. Return for breakfast. In the afternoon, embark on an open 4x4 jeep safari in the Central (Kohora) range.',
        activities: ['Dawn elephant safari', 'Open 4x4 jeep safari', 'Bird watching at water bodies'],
        meals: 'Breakfast & dinner',
        stay: '3-star jungle resort, Kaziranga',
        distanceKm: 35
      },
      {
        day: 4,
        title: 'Kaziranga Tea Garden Walk & Return to Guwahati',
        description: 'Walk through century-old tea estates and meet local tea pluckers. Return to Guwahati and visit Umananda Island—the world’s smallest inhabited river island—by country ferry.',
        activities: ['Tea estate guided walk', 'Drive to Guwahati', 'Umananda Peacock Island ferry'],
        meals: 'Breakfast & dinner',
        stay: '3-star hotel, Guwahati',
        distanceKm: 220
      },
      {
        day: 5,
        title: 'Guwahati Departure',
        description: 'Breakfast at hotel. Browse local silk bazaars in Panbazar for golden Muga silk and Assam orthodox tea before airport drop.',
        activities: ['Assam silk & tea shopping', 'Guwahati airport transfer'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 25
      }
    ],
    inclusions: [
      '4 nights accommodation in handpicked 3-star hotels & jungle resorts (twin-sharing)',
      'Daily breakfast and dinners at Kaziranga resort',
      'Private dedicated SUV (Innova / Ertiga / Scorpio)',
      '1 Dawn Elephant Safari in Kaziranga (seat sharing on elephant back)',
      '1 Afternoon Open 4x4 Jeep Safari in Kaziranga with forest entry and guide',
      'Sunset Brahmaputra River Cruise ticket in Guwahati'
    ],
    exclusions: [
      'Airfare to/from Guwahati',
      'Camera entry fees inside park',
      'Personal laundry, beverages and tips'
    ],
    permitRequired: false,
    permitDetails: 'No ILP required for domestic Indian travelers in Assam.',
    packingTips: ['Warm fleece jacket for early morning 5 AM elephant safari', 'Sun hat and sunglasses', 'Zoom camera lens'],
    nextDepartureDates: ['Every Wednesday & Saturday (Nov–Apr)']
  },
  {
    id: 'assam-5n6d-standard-deluxe',
    title: '6 Days 5 Nights Assam: Rhinos & Majuli Island River Heritage',
    subtitle: 'Adds Majuli Island (World’s Largest River Island) & Monasteries',
    tagline: 'Neo-Vaishnavite Satras, Traditional Mask-Making & Wild Rhinos',
    state: 'Assam',
    category: 'Culture & Heritage',
    durationDays: 6,
    durationNights: 5,
    difficulty: 'Easy',
    bestSeason: 'October to April',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Jorhat / Guwahati Airport',
    isSpecialHighlight: false,
    basePricePerPerson: 24000,
    originalPricePerPerson: 30000,
    priceRange: { min: 24000, max: 30000 },
    tier: 'Standard/Deluxe',
    inclusionsSummary: 'Adds Majuli island ferry crossing, tribal villages & neo-Vaishnavite satra visits',
    benchmarkComparison: 'Legacy Assam circuit ₹24,000–₹32,000; our ₹24,000 package includes ferry transit and traditional mask-making masterclasses',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.assamTea,
    gallery: [CAMERA_IMAGES.assamTea, CAMERA_IMAGES.kazirangaRhino, CAMERA_IMAGES.heroMountains],
    rating: 4.96,
    reviewsCount: 112,
    overview: 'A profoundly immersive journey uniting Kaziranga’s wildlife with the living cultural sanctuary of Majuli—the world’s largest inhabited river island. Cross the Brahmaputra by river ferry, stay in traditional Mishing bamboo stilt cottages, and meet monastic masters practicing ancient mask-making at Samaguri Satra.',
    highlights: [
      'Ferry crossing on the Brahmaputra River to Majuli Island',
      'Centuries-old neo-Vaishnavite Satras: Kamalabari, Auniati & Samaguri',
      'Live demonstration of bamboo-and-clay mask making by master artisans',
      'Stay in traditional Mishing tribal bamboo stilt cottages',
      'Kaziranga open jeep and elephant safaris tracking one-horned rhinos'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati Arrival to Kaziranga National Park',
        description: 'Chauffeured pickup from Guwahati Airport. Drive through the scenic Assam tea country to Kaziranga. Evening at leisure with welcome tribal tea.',
        activities: ['Guwahati pickup', 'Scenic drive to Kaziranga', 'Evening tribal bonfire'],
        meals: 'Dinner at lodge',
        stay: 'Comfort eco-resort, Kaziranga',
        distanceKm: 220
      },
      {
        day: 2,
        title: 'Kaziranga Elephant & Open Jeep Safaris',
        description: 'Dawn elephant safari tracking rhinos in the mist, followed by breakfast. Afternoon 4x4 open jeep safari across the Western Range.',
        activities: ['Dawn elephant safari', 'Western range jeep safari', 'Orchid conservation park'],
        meals: 'Breakfast & dinner',
        stay: 'Comfort eco-resort, Kaziranga',
        distanceKm: 40
      },
      {
        day: 3,
        title: 'Kaziranga to Majuli Island via Nimati Ghat Ferry',
        description: 'Drive to Nimati Ghat near Jorhat and board the public river ferry across the Brahmaputra to Majuli Island. Check in at a charming Mishing bamboo cottage.',
        activities: ['Brahmaputra ferry crossing', 'Check in at bamboo stilt cottage', 'Sunset over Majuli wetlands'],
        meals: 'Breakfast & traditional Mishing dinner',
        stay: 'Traditional bamboo stilt cottage / eco-lodge, Majuli',
        distanceKm: 120
      },
      {
        day: 4,
        title: 'Majuli Satra Heritage & Ancient Mask Making',
        description: 'Spend the day visiting the 16th-century monastic Satras. At Samaguri Satra, watch artisans handcraft mythological masks from bamboo, clay, and cow dung. Visit Uttar Kamalabari Satra for monks’ spiritual choral music.',
        activities: ['Samaguri mask-making studio', 'Kamalabari Satra monk chanting', 'Mishing village bicycle tour'],
        meals: 'Breakfast & lunch with monks',
        stay: 'Traditional bamboo stilt cottage, Majuli',
        distanceKm: 45
      },
      {
        day: 5,
        title: 'Majuli to Jorhat Tea Estates',
        description: 'Morning ferry back to the mainland. Visit historic tea gardens in Jorhat—the tea capital of the world—and stay at a heritage planter’s bungalow.',
        activities: ['Return ferry to Nimati Ghat', 'Tea factory visit and tasting', 'Planter’s colonial bungalow stay'],
        meals: 'Breakfast & colonial high tea',
        stay: 'Heritage tea bungalow / 3-star hotel, Jorhat',
        distanceKm: 60
      },
      {
        day: 6,
        title: 'Jorhat / Guwahati Departure',
        description: 'Breakfast with freshly brewed Assam golden tip tea. Transfer to Jorhat Airport (or drive back to Guwahati Airport) for onward flight.',
        activities: ['Tea souvenir shopping', 'Airport departure transfer'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 30
      }
    ],
    inclusions: [
      '5 nights accommodation in comfortable resorts & authentic Mishing bamboo cottages (twin-sharing)',
      'Daily breakfast and 4 dinners included',
      'Private dedicated outstation vehicle throughout the route',
      'All Brahmaputra ferry crossing tickets for passengers and vehicle',
      '1 Elephant Safari & 1 Jeep Safari in Kaziranga National Park with forest permits',
      'Satra entry donations and mask-making artisan workshop visit'
    ],
    exclusions: [
      'Airfare to Guwahati/Jorhat',
      'Bicycle rentals in Majuli (~₹200/day)',
      'Personal beverages and camera charges'
    ],
    permitRequired: false,
    permitDetails: 'No ILP required for domestic Indian travelers in Assam.',
    packingTips: ['Modest clothing for entering monastic Satras', 'Slip-on footwear for frequent temple visits', 'Mosquito repellent'],
    nextDepartureDates: ['Weekly Departures Every Sunday & Wednesday']
  },
  {
    id: 'assam-6n7d-deluxe',
    title: '7 Days 6 Nights Assam Deluxe: Colonial Tea Bungalows & Nameri Wilds',
    subtitle: 'Adds Luxury Tea-Estate Stay, Nameri Rafting & Birding Sanctuaries',
    tagline: 'Colonial Planter Luxury, Jia-Bhoroli Rafting & Hornbill Forests',
    state: 'Assam',
    category: 'Wildlife & Nature',
    durationDays: 7,
    durationNights: 6,
    difficulty: 'Easy',
    bestSeason: 'November to April',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Guwahati Airport / Station',
    isSpecialHighlight: false,
    basePricePerPerson: 30000,
    originalPricePerPerson: 38000,
    priceRange: { min: 30000, max: 38000 },
    tier: 'Deluxe',
    inclusionsSummary: 'Adds tea-estate stay, Nameri rafting/birding, luxury colonial stays & private SUV',
    benchmarkComparison: 'Legacy deluxe Assam ₹32,800–₹40,000; international DMCs $1,200+; our ₹30,000 rate offers 20% savings with luxury planter hospitality',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.assamTea,
    gallery: [CAMERA_IMAGES.assamTea, CAMERA_IMAGES.kazirangaRhino, CAMERA_IMAGES.heroMountains],
    rating: 4.98,
    reviewsCount: 54,
    overview: 'The pinnacle of Assamese luxury and wilderness tranquility. Stay in 100-year-old British colonial heritage tea planter bungalows with four-poster beds and silver tea service. Raft down the emerald Jia-Bhoroli River inside Nameri National Park for rare white-winged wood ducks and Great Hornbills, combined with Kaziranga’s premier safari zones.',
    highlights: [
      'Stay in an authentic restored colonial British tea estate bungalow',
      'Gentle river rafting on the Jia-Bhoroli River in Nameri National Park',
      'Guided walking jungle trek in Nameri tracking 300+ bird species and hornbills',
      'Multiple VIP jeep & elephant safaris across Kaziranga’s Central & Eastern ranges',
      'Sunset cruise on the Brahmaputra and gourmet Assamese culinary experiences'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati Arrival & Sunset Luxury Brahmaputra Cruise',
        description: 'VIP pickup in a private Toyota Innova Crysta. Check in at a premier Guwahati hotel. Sunset private river cruise with high tea on the Brahmaputra.',
        activities: ['VIP pickup', 'Brahmaputra luxury cruise', 'Chef’s table dinner'],
        meals: 'Dinner at hotel',
        stay: '4-star hotel (e.g. Radisson Blu / Vivanta), Guwahati',
        distanceKm: 30
      },
      {
        day: 2,
        title: 'Guwahati to Nameri National Park Foothills',
        description: 'Drive along the northern bank of the Brahmaputra to Nameri Eco-Camp at the foothills of the Eastern Himalayas. Evening nature walk along the Jia-Bhoroli riverbank.',
        activities: ['Scenic northern highway drive', 'Nameri riverside sunset', 'Campfire under forest canopy'],
        meals: 'Breakfast & dinner',
        stay: 'Deluxe luxury tented cottages, Nameri Eco-Camp',
        distanceKm: 215
      },
      {
        day: 3,
        title: 'Nameri River Rafting & Forest Birding Trek',
        description: 'Float gently down the crystal-clear Jia-Bhoroli River on an inflatable raft, spotting migratory waterfowl, otters, and kingfishers. Cross the river with a forest armed guard for a 3-hour walking safari inside Nameri’s evergreen canopy.',
        activities: ['Jia-Bhoroli river rafting', 'Armed naturalist walking trek', 'Hornbill & orchid spotting'],
        meals: 'Breakfast, picnic lunch & dinner',
        stay: 'Deluxe luxury tented cottages, Nameri Eco-Camp',
        distanceKm: 20
      },
      {
        day: 4,
        title: 'Nameri to Heritage Tea Estate Bungalow',
        description: 'Drive to a sprawling century-old tea estate near Tezpur/Kaziranga. Check in at a heritage planter bungalow with antique brass bathtubs and private manicured lawns. Enjoy colonial evening high tea.',
        activities: ['Tea factory tour & professional tea cupping', 'Colonial high tea on verandah', 'Bungalow library & lawns'],
        meals: 'Breakfast & dinner',
        stay: 'Heritage Tea Estate Bungalow (e.g. Wild Mahseer / Mancotta Heritage)',
        distanceKm: 75
      },
      {
        day: 5,
        title: 'Kaziranga Dawn Elephant Safari & VIP Jeep Drive',
        description: 'Early morning transfer to Kaziranga for a VIP dawn elephant safari. Afternoon private open 4x4 jeep safari in the Eastern (Agoratoli) range, renowned for wild water buffalo and nesting pelicans.',
        activities: ['Dawn elephant safari', 'Agoratoli eastern range jeep safari', 'Tea garden sunset drive'],
        meals: 'Breakfast & dinner',
        stay: 'Heritage Tea Estate Bungalow / Luxury Safari Resort, Kaziranga',
        distanceKm: 65
      },
      {
        day: 6,
        title: 'Kaziranga Central Range & Orchid Sanctuary',
        description: 'Second morning jeep safari into the Central Range for tiger and leopard tracking. Afternoon exploration of native medicinal herbs, wild indigenous rice, and 500+ orchid species.',
        activities: ['Central range jeep safari', 'Orchid conservation visit', 'Private bonfire dinner'],
        meals: 'Breakfast & gourmet dinner',
        stay: 'Heritage Tea Estate Bungalow, Kaziranga',
        distanceKm: 40
      },
      {
        day: 7,
        title: 'Tea Estate to Guwahati Airport Departure',
        description: 'Breakfast on the sunny planter verandah. Private chauffeur transfer back to Guwahati Airport for departure.',
        activities: ['Breakfast at bungalow', 'Guwahati airport transfer'],
        meals: 'Breakfast at bungalow',
        stay: 'Departure',
        distanceKm: 200
      }
    ],
    inclusions: [
      '6 nights accommodation in 4-star hotels, luxury eco-camps, and colonial heritage tea bungalows (twin-sharing)',
      'Daily breakfast and all dinners included',
      'Private dedicated Toyota Innova Crysta throughout with executive mountain driver',
      'Jia-Bhoroli River rafting in Nameri with life jackets, river guide, and safety gear',
      'Nameri forest entry permits and dedicated armed forest guard for walking trek',
      '1 Dawn Elephant Safari and 2 Private 4x4 Jeep Safaris in Kaziranga National Park',
      'Private tea factory tour and tea tasting session'
    ],
    exclusions: [
      'Airfare to Guwahati',
      'Personal bar bills and tips',
      'Travel insurance'
    ],
    permitRequired: false,
    permitDetails: 'No ILP required for domestic Indian travelers in Assam.',
    packingTips: ['Binoculars for Nameri birding', 'Neutral earth-colored apparel', 'Comfortable river rafting sandals'],
    nextDepartureDates: ['Private Departures Scheduled on Request (Nov–Apr)']
  }
];
