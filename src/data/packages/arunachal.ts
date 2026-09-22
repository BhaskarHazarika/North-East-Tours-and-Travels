import { TourPackage } from '../../types';
import { CAMERA_IMAGES } from '../../assets/images';

export const ARUNACHAL_PACKAGES: TourPackage[] = [
  {
    id: 'arunachal-5n6d-budget',
    title: '6 Days 5 Nights Arunachal Backpacker / Budget Trail',
    subtitle: 'Tezpur, Bomdila, Sela Pass & Tawang High Himalayas',
    tagline: 'Budget Himalayan Ascent across Glacial Passes & Ancient Monpa Villages',
    state: 'Arunachal Pradesh',
    category: 'Trekking & Adventure',
    durationDays: 6,
    durationNights: 5,
    difficulty: 'Moderate',
    bestSeason: 'October to May',
    startPoint: 'Guwahati / Tezpur',
    endPoint: 'Guwahati Airport / Station',
    isSpecialHighlight: false,
    basePricePerPerson: 26000,
    originalPricePerPerson: 32000,
    priceRange: { min: 26000, max: 32000 },
    tier: 'Budget/Backpacker',
    inclusionsSummary: 'Basic hotels & Monpa homestays, private Sumo, official Arunachal ILP included',
    benchmarkComparison: 'Backpacker ground spend floor ~₹1,100/day self-arranged; our ₹26,000 package provides dedicated rugged mountain vehicle, driver margin & guaranteed ILP permits',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.arunachal,
    gallery: [CAMERA_IMAGES.arunachal, CAMERA_IMAGES.heroMountains, CAMERA_IMAGES.kanchenjungaSikkim],
    rating: 4.88,
    reviewsCount: 96,
    overview: 'A smart, value-engineered Himalayan road expedition for adventure travelers. Experience the high-altitude thrills of crossing the 13,700-foot Sela Pass, visiting the 400-year-old Tawang Monastery, and discovering warm Monpa tribal hospitality without paying luxury tour markups.',
    highlights: [
      'Ascend past the frozen lake at 13,700-ft Sela Pass',
      'Explore the 400-year-old Tawang Monastery (India’s largest Buddhist monastery)',
      'Roaring 100-meter drop of Nuranang (Jang) Waterfall',
      'Authentic Monpa homestay dinner with warm butter tea',
      'Official Arunachal Pradesh Inner Line Permit (ILP) fully handled'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati to Bhalukpong / Tezpur Gateway',
        description: 'Meet driver at Guwahati and head north toward the Arunachal border foothills at Bhalukpong. Complete border permit checks at Bhalukpong Gate.',
        activities: ['Guwahati pickup', 'Drive past tea gardens', 'ILP border checkpoint entry'],
        meals: 'Dinner at hotel',
        stay: 'Standard guesthouse, Bhalukpong / Tezpur',
        distanceKm: 215
      },
      {
        day: 2,
        title: 'Bhalukpong to Dirang Monpa Valley',
        description: 'Climb through tropical gorge rainforest into the temperate valley of Dirang. Visit the ancient Dirang Dzong (fortified village) and hot sulphur springs.',
        activities: ['Dirang Dzong walk', 'Hot water sulphur spring visit', 'Monpa village interaction'],
        meals: 'Breakfast & dinner',
        stay: 'Standard homestay / budget hotel, Dirang',
        distanceKm: 140
      },
      {
        day: 3,
        title: 'Dirang to Tawang via Sela Pass (13,700 ft)',
        description: 'Epic mountain drive crossing the snow-swept Sela Pass at 13,700 ft with views of Sela Lake. Visit Jaswant Garh War Memorial and the mighty Nuranang Falls before reaching Tawang at 10,000 ft.',
        activities: ['Sela Pass photo stop', 'Jaswant Garh memorial', 'Nuranang Falls'],
        meals: 'Breakfast & dinner',
        stay: 'Standard hotel / guesthouse, Tawang',
        distanceKm: 135
      },
      {
        day: 4,
        title: 'Tawang Monastery & Heritage Exploration',
        description: 'Full day exploring Tawang. Visit the massive 17th-century Tawang Gompa, Urgelling Monastery (birthplace of the 6th Dalai Lama), and the evening Sound & Light Show at the War Memorial.',
        activities: ['Tawang Monastery exploration', 'Urgelling Gompa visit', 'Tawang War Memorial'],
        meals: 'Breakfast & dinner',
        stay: 'Standard hotel / guesthouse, Tawang',
        distanceKm: 30
      },
      {
        day: 5,
        title: 'Tawang to Bomdila via Sela Return',
        description: 'Descend through Sela Pass down to the apple and kiwi orchards of Bomdila. Visit Bomdila Monastery and view the sunset over Kangto mountain ridges.',
        activities: ['Return descent via Sela Pass', 'Bomdila Monastery viewpoint', 'Local market walk'],
        meals: 'Breakfast & dinner',
        stay: 'Standard hotel, Bomdila',
        distanceKm: 170
      },
      {
        day: 6,
        title: 'Bomdila to Guwahati Airport Departure',
        description: 'Early morning descent through the Himalayan foothills to Guwahati Airport or Railway Station for onward journey.',
        activities: ['Morning mountain drive', 'Guwahati airport transfer'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 260
      }
    ],
    inclusions: [
      '5 nights accommodation in clean verified budget hotels & Monpa homestays (twin-sharing)',
      'Daily breakfast and dinners at all hill halts',
      'Private rugged mountain vehicle (Tata Sumo Gold / Bolero) suited for high roads',
      'Official Arunachal Pradesh Inner Line Permit (ILP) processing fee included',
      'Experienced mountain driver with high-altitude hill driving expertise',
      'All vehicle permits, toll taxes, and driver food/stay allowances'
    ],
    exclusions: [
      'Airfare or train fare to Guwahati',
      'Optional Bum La Pass / Madhuri Lake local union taxi fee (if taken)',
      'Entry tickets and camera fees'
    ],
    permitRequired: true,
    permitDetails: 'Arunachal Pradesh Inner Line Permit (ILP) is mandatory and fully processed by our Guwahati operations team prior to arrival.',
    packingTips: ['Heavy woolens, thermals, and windproof jackets (temperatures drop below freezing at Sela Pass)', 'Moisturizer & lip balm', 'Valid Government Photo ID and passport photos for ILP'],
    nextDepartureDates: ['Every Sunday & Wednesday Departure']
  },
  {
    id: 'arunachal-6n7d-standard',
    title: '7 Days 6 Nights Arunachal Standard: High Passes & Indo-China Frontier',
    subtitle: '3-Star Hotels, Private Innova/SUV, Sela Pass & Bum La Border Excursion',
    tagline: 'Glacial Lakes, Monpa Culture & Sacred High Himalayan Sanctuaries',
    state: 'Arunachal Pradesh',
    category: 'Culture & Heritage',
    durationDays: 7,
    durationNights: 6,
    difficulty: 'Moderate',
    bestSeason: 'October to May',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Guwahati Airport / Station',
    isSpecialHighlight: false,
    basePricePerPerson: 40000,
    originalPricePerPerson: 50000,
    priceRange: { min: 40000, max: 50000 },
    tier: 'Standard',
    inclusionsSummary: '3-star hotels, private Innova/SUV, Sela Pass, Bum La Pass & Madhuri Lake (season permitting)',
    benchmarkComparison: "Veena World 'Best of Arunachal' lists at ₹46,000 (6N/7D); our ₹40,000 rate offers 13% savings with dedicated private SUV & Bum La coordination",
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.tawangMonastery,
    gallery: [CAMERA_IMAGES.tawangMonastery, CAMERA_IMAGES.heroMountains, CAMERA_IMAGES.arunachal],
    rating: 4.94,
    reviewsCount: 178,
    overview: 'The benchmark Arunachal standard expedition. Drive past thunderous waterfalls and rhododendron forests in a private comfortable SUV. Explore 400-year-old Tawang Monastery, pay homage at Jaswant Garh, cross 13,700-ft Sela Pass, and venture to the Indo-China frontier at Bum La Pass (15,200 ft) and tranquil Madhuri Lake.',
    highlights: [
      'High-altitude border expedition to Bum La Pass (15,200 ft) on the Indo-China Line of Actual Control',
      'Visit tranquil Madhuri (Sangetsar) Lake surrounded by snow peaks and dead tree trunks',
      'Tawang Monastery (Galden Namgey Lhatse) – 2nd largest in the world',
      'Comfortable 3-star hill hotels with room heaters and private baths',
      'Private Toyota Innova / Mahindra Scorpio for the entire mountain route'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati to Bhalukpong / Nameri Gateway',
        description: 'Chauffeured pickup from Guwahati in a private SUV. Drive past the lush Brahmaputra plains to the Arunachal foothills at Bhalukpong.',
        activities: ['Guwahati airport pickup', 'Scenic foothills drive', 'Evening riverside relaxation'],
        meals: 'Dinner at hotel',
        stay: '3-star eco-resort, Bhalukpong',
        distanceKm: 215
      },
      {
        day: 2,
        title: 'Bhalukpong to Dirang Valley via Tipi Orchidarium',
        description: 'Visit Tipi Orchid Research Centre displaying hundreds of rare endangered species. Ascend into Dirang Valley, visit apple orchards and historic Dirang Dzong.',
        activities: ['Tipi Orchidarium visit', 'Dirang Dzong walking tour', 'Hot sulphur springs'],
        meals: 'Breakfast & dinner',
        stay: '3-star boutique hotel, Dirang',
        distanceKm: 140
      },
      {
        day: 3,
        title: 'Dirang to Tawang via Sela Pass (13,700 ft)',
        description: 'Cross the dramatic Sela Pass and frozen Sela Lake. Visit Jaswant Garh 1962 war memorial and witness the roaring Nuranang waterfall in Jang.',
        activities: ['Sela Pass & Lake photo stop', 'Jaswant Garh memorial salute', 'Nuranang 100m waterfalls'],
        meals: 'Breakfast & dinner',
        stay: '3-star view hotel, Tawang',
        distanceKm: 135
      },
      {
        day: 4,
        title: 'High Frontier: Bum La Pass (15,200 ft) & Madhuri Lake',
        description: 'Day trip to Bum La Pass at 15,200 ft on the Indo-China border (subject to army permits and weather). Visit the sacred PT Tso Lake and the ethereal Madhuri (Sangetsar) Lake.',
        activities: ['Bum La Pass border excursion', 'Madhuri Lake stroll', 'PT Tso alpine lake stop'],
        meals: 'Breakfast & dinner',
        stay: '3-star view hotel, Tawang',
        distanceKm: 85
      },
      {
        day: 5,
        title: 'Tawang Monastery, Urgelling & Giant Buddha',
        description: 'Morning prayer bells at the 400-year Tawang Monastery. Visit Urgelling Gompa and the towering golden Buddha statue overlooking the valley. Evening at Tawang War Memorial Sound & Light Show.',
        activities: ['Tawang Monastery guided walk', 'Giant Buddha statue', 'Tawang War Memorial'],
        meals: 'Breakfast & dinner',
        stay: '3-star view hotel, Tawang',
        distanceKm: 30
      },
      {
        day: 6,
        title: 'Tawang to Bomdila Himalayan Town',
        description: 'Scenic return drive crossing Sela Pass to Bomdila. Visit the Upper and Lower Gompas of Bomdila with panoramic views of Kangto and Gorichen snow peaks.',
        activities: ['Descent via Sela', 'Bomdila Monastery', 'Monpa handicrafts market'],
        meals: 'Breakfast & dinner',
        stay: '3-star hotel, Bomdila',
        distanceKm: 170
      },
      {
        day: 7,
        title: 'Bomdila to Guwahati Airport Departure',
        description: 'Early breakfast before descending through the foothills to Guwahati Airport for evening flights.',
        activities: ['Scenic descent', 'Guwahati airport transfer'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 260
      }
    ],
    inclusions: [
      '6 nights accommodation in verified 3-star hill hotels with room heaters (twin-sharing)',
      'Daily breakfast and dinners at all hotels',
      'Private dedicated SUV (Toyota Innova / Scorpio) for Guwahati-Tawang-Guwahati route',
      'Official Arunachal Pradesh Inner Line Permit (ILP) processing',
      'Assistance with DC / Army office Bum La Pass border permits',
      'Local 4x4 Tata Sumo / Scorpio for Bum La Pass and Madhuri Lake sector'
    ],
    exclusions: [
      'Flights to Guwahati',
      'Entry tickets, camera fees, and personal tips',
      'Lunches'
    ],
    permitRequired: true,
    permitDetails: 'Arunachal ILP included. Bum La Pass requires special DC and Indian Army permits coordinated on site by our local team.',
    packingTips: ['Layered thermal inners and heavy down jacket', 'Woolen cap, gloves, and thick socks', 'ID proofs & 4 passport photos'],
    nextDepartureDates: ['Departures every Tuesday & Friday']
  },
  {
    id: 'arunachal-7n8d-deluxe',
    title: '8 Days 7 Nights Arunachal Deluxe: Monastic Glory & High Frontier',
    subtitle: 'Better Hotels in Tawang, Dedicated Mountain Guide, Monastery Visits & War Memorial',
    tagline: 'Unrivaled Comfort, Monpa Spiritual Immersion & Glacial Wonder',
    state: 'Arunachal Pradesh',
    category: 'Culture & Heritage',
    durationDays: 8,
    durationNights: 7,
    difficulty: 'Moderate',
    bestSeason: 'October to May',
    startPoint: 'Guwahati Airport / Station',
    endPoint: 'Guwahati Airport / Station',
    isSpecialHighlight: false,
    basePricePerPerson: 50000,
    originalPricePerPerson: 62000,
    priceRange: { min: 50000, max: 62000 },
    tier: 'Deluxe',
    inclusionsSummary: 'Better hotels in Tawang, dedicated guide, monastery visits, war memorial & private Innova Crysta',
    benchmarkComparison: 'Market deluxe tours quote ₹58,000–₹68,000; our ₹50,000 deluxe tier includes dedicated Monpa cultural escort, premium view suites & guaranteed heating',
    roomSharingPolicy: 'Per person, twin-sharing (2 people per room) • Land Package (Ex-Guwahati)',
    image: CAMERA_IMAGES.tawangMonastery,
    gallery: [CAMERA_IMAGES.tawangMonastery, CAMERA_IMAGES.heroMountains, CAMERA_IMAGES.arunachal],
    rating: 4.97,
    reviewsCount: 88,
    overview: 'An elevated, luxury-paced journey through the Monpa realm. Stay in the finest available properties with guaranteed central heating or electric bed-warmers, travel in a dedicated Toyota Innova Crysta, and benefit from a licensed senior Monpa scholar-guide who unlocks monastic archives, private prayer sessions, and high-altitude Indo-China border viewpoints.',
    highlights: [
      'Stay in the finest luxury suites in Tawang, Dirang, and Bhalukpong',
      'Dedicated licensed Monpa scholar-guide throughout the journey',
      'Private Toyota Innova Crysta with senior hill chauffeur',
      'Private access to Tawang Monastery’s ancient scripture library & printing press',
      'Bum La Pass (15,200 ft), Madhuri Lake, and private bonfire dinners with Monpa cuisine'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati Arrival to Bhalukpong Foothills',
        description: 'VIP meet and greet at Guwahati Airport in private Innova Crysta. Drive north to Bhalukpong resort on the Jia-Bhoroli riverbank.',
        activities: ['VIP pickup', 'Scenic river drive', 'Welcome organic meal'],
        meals: 'Dinner at resort',
        stay: 'Luxury eco-cottage / resort, Bhalukpong',
        distanceKm: 215
      },
      {
        day: 2,
        title: 'Bhalukpong to Dirang Boutique Valley',
        description: 'Visit Tipi Orchidarium. Drive through Kameng gorge into Dirang Valley. Check in at boutique resort and tour the 500-year Dirang Dzong with your dedicated scholar-guide.',
        activities: ['Tipi orchid conservation', 'Dirang Dzong private historical tour', 'Organic kiwi farm walk'],
        meals: 'Breakfast & dinner',
        stay: 'Boutique valley resort, Dirang',
        distanceKm: 140
      },
      {
        day: 3,
        title: 'Dirang to Tawang via Sela Pass (13,700 ft)',
        description: 'Ascend to Sela Pass. Savor hot Tibetan butter tea by the icy Sela Lake. Pay tribute at Jaswant Garh and visit the magnificent Nuranang Falls before arriving in Tawang.',
        activities: ['Sela Pass frozen lake', 'Jaswant Garh memorial tour', 'Nuranang Falls photography'],
        meals: 'Breakfast & dinner',
        stay: 'Premier view hotel / luxury suite, Tawang',
        distanceKm: 135
      },
      {
        day: 4,
        title: 'Tawang Monastery Archives & Monastic Life',
        description: 'Exclusive private guided exploration of the 17th-century Tawang Gompa. Meet senior lamas, view 8-meter high gilded Buddha, and visit Urgelling Gompa and Ani Gompa (nunnery).',
        activities: ['Tawang Gompa private archive tour', 'Lama blessing ceremony', 'Urgelling & Brahma-dung-chung Ani Gompa'],
        meals: 'Breakfast & dinner',
        stay: 'Premier view hotel, Tawang',
        distanceKm: 35
      },
      {
        day: 5,
        title: 'Bum La Pass (15,200 ft) & Madhuri Lake Excursion',
        description: 'VIP 4x4 excursion to Bum La Pass on the Line of Actual Control. Visit Madhuri Lake, PT Tso Lake, and the Y-junction high frontier with your dedicated guide.',
        activities: ['Bum La Pass border visit', 'Madhuri Lake walk', 'Alpine wildflower photography'],
        meals: 'Breakfast & gourmet hot picnic lunch',
        stay: 'Premier view hotel, Tawang',
        distanceKm: 85
      },
      {
        day: 6,
        title: 'Tawang to Bomdila via Dirang',
        description: 'Scenic journey back through the Sela mountains to Bomdila. Evening sunset views over Kangto range and visit to the Upper Gompa.',
        activities: ['Descent through alpine meadows', 'Bomdila Upper Gompa tour', 'Local tribal wine tasting'],
        meals: 'Breakfast & dinner',
        stay: 'Premier hotel, Bomdila',
        distanceKm: 170
      },
      {
        day: 7,
        title: 'Bomdila to Tezpur Colonial Gateway',
        description: 'Drive from Bomdila down to Tezpur on the banks of the Brahmaputra. Visit the 6th-century stone carvings of Da-Parbatia and Cole Park.',
        activities: ['Himalayan foothills descent', 'Da-Parbatia 6th-century ruins', 'Brahmaputra sunset walk'],
        meals: 'Breakfast & dinner',
        stay: 'Heritage hotel, Tezpur',
        distanceKm: 160
      },
      {
        day: 8,
        title: 'Tezpur to Guwahati Airport Departure',
        description: 'Smooth morning drive to Guwahati Airport with VIP transfer for your onward flight.',
        activities: ['Breakfast at hotel', 'Guwahati airport transfer'],
        meals: 'Breakfast at hotel',
        stay: 'Departure',
        distanceKm: 175
      }
    ],
    inclusions: [
      '7 nights in the finest available deluxe view hotels and boutique mountain resorts (twin-sharing)',
      'Daily breakfast and all multi-course dinners included',
      'Private dedicated Toyota Innova Crysta for all 8 days with executive hill chauffeur',
      'Dedicated licensed Monpa scholar-guide for the entire Arunachal expedition',
      'Official Arunachal Pradesh Inner Line Permit (ILP) processing',
      'Exclusive 4x4 SUV and all army liaison fees for Bum La Pass and Madhuri Lake'
    ],
    exclusions: [
      'Air tickets to Guwahati',
      'Personal bar bills, laundry and gratuities'
    ],
    permitRequired: true,
    permitDetails: 'Arunachal ILP and military border clearance permits are fully handled in advance.',
    packingTips: ['Thermal wear & windproof winter outerwear', 'Good trekking or walking boots', 'Sunglasses with UV protection for snow glare'],
    nextDepartureDates: ['Private Customized Departures Available Daily']
  }
];
