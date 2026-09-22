import { SupabaseDestination } from '../types/database';
import { CAMERA_IMAGES } from '../assets/images';

export const ALL_DESTINATIONS: SupabaseDestination[] = [
  {
    id: 'dest-assam',
    slug: 'assam',
    name: 'Assam',
    tagline: 'Gateway to the North-East, World Heritage Kaziranga & Ancient Brahmaputra',
    description: 'Home to the mighty Brahmaputra river, lush emerald tea plantations, the endangered one-horned rhinoceros in Kaziranga National Park, and Majuli—the world’s largest inhabited river island preserving 15th-century Vaishnavite monasteries (Satras).',
    capital: 'Dispur (Guwahati)',
    best_time_to_visit: 'October to April (Peak wildlife & river cruising season)',
    permit_type: 'No Special Permit for Indians',
    permit_details: 'Indian nationals do not require an ILP. Foreign nationals require routine passport verification at Kaziranga and wildlife sanctuaries.',
    top_attractions: [
      'Kaziranga National Park (One-Horned Rhinos)',
      'Majuli Island (World’s largest river island & Satras)',
      'Kamakhya Temple (Ancient Shakti Peeth atop Nilachal Hill)',
      'Manas National Park (UNESCO Biosphere Reserve)',
      'Jorhat Tea Capital & Hoollongapar Gibbon Sanctuary'
    ],
    hero_image: CAMERA_IMAGES.assam,
    is_featured: true,
    display_order: 1
  },
  {
    id: 'dest-meghalaya',
    slug: 'meghalaya',
    name: 'Meghalaya',
    tagline: 'Abode of the Clouds, Bio-Engineered Living Root Bridges & Crystal Rivers',
    description: 'A mystical limestone plateau blessed with dramatic waterfalls, the wettest places on earth (Cherrapunji & Mawsynram), subterranean cave networks, Mawlynnong (Asia’s cleanest village), and the legendary double-decker living root bridges grown by Khasi tribes.',
    capital: 'Shillong (Scotland of the East)',
    best_time_to_visit: 'September to May (Waterfalls best in Autumn; crystal clear waters at Dawki in Winter)',
    permit_type: 'No Special Permit for Indians',
    permit_details: 'No ILP required for domestic tourists. Foreign tourists do not require a Protected Area Permit (PAP).',
    top_attractions: [
      'Nongriat Double Decker Living Root Bridge',
      'Dawki Umngot River (Transparent Crystal Boating)',
      'Nohkalikai & Wei Sawdong Three-Tier Waterfalls',
      'Krem Liat Prah & Mawsmai Limestone Cave Systems',
      'Shillong Peak & Laitlum Canyons'
    ],
    hero_image: CAMERA_IMAGES.meghalaya,
    is_featured: true,
    display_order: 2
  },
  {
    id: 'dest-arunachal-pradesh',
    slug: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    tagline: 'Land of the Dawn-Lit Mountains, 400-Year-Old Tawang Monastery & Ziro Valley',
    description: 'India’s wild eastern frontier featuring snow-capped Himalayan ridges, the ancient Buddhist monastery of Tawang, Sela Pass at 13,700 feet, and the pristine emerald rice terraces of Ziro Valley—home to the tattooed Apatani tribe.',
    capital: 'Itanagar',
    best_time_to_visit: 'October to April for clear Himalayan vistas; September for Ziro Music Festival',
    permit_type: 'ILP Required',
    permit_details: 'Mandatory Inner Line Permit (ILP) required for all Indian tourists. Foreign nationals require a Protected Area Permit (PAP) issued via Ministry of Home Affairs.',
    top_attractions: [
      'Tawang Monastery (2nd largest Buddhist monastery in the world)',
      'Sela Pass & Sela Lake (13,700 ft alpine mountain pass)',
      'Ziro Valley (Apatani tribal culture & Music Festival)',
      'Namdapha National Park & Tiger Reserve',
      'Sangti Valley & Dirang Hot Springs'
    ],
    hero_image: CAMERA_IMAGES.arunachal,
    is_featured: true,
    display_order: 3
  },
  {
    id: 'dest-nagaland',
    slug: 'nagaland',
    name: 'Nagaland',
    tagline: 'Land of 16 Warrior Tribes, Hornbill Festival & Enchanting Dzukou Valley',
    description: 'A rugged mountain territory famed for headhunter lore, the world-renowned Hornbill Festival at Kisama, the green conservation village of Khonoma, and high-altitude Dzukou Valley trekking amidst dwarf bamboo and endemic seasonal lilies.',
    capital: 'Kohima',
    best_time_to_visit: 'October to May (Hornbill Festival annually December 1st to 10th)',
    permit_type: 'ILP Required',
    permit_details: 'ILP required for all domestic Indian visitors. Foreign travelers only require passport registration at the state boundary checkpost.',
    top_attractions: [
      'Kisama Naga Heritage Village (Hornbill Festival Arena)',
      'Dzukou Valley & Alpine Bamboo Ridge Trek',
      'Khonoma Green Village (Angami tribal sanctuary & terrace farming)',
      'Kohima WWII Commonwealth War Cemetery',
      'Longwa Village, Mon (Where the Chief’s house spans India & Myanmar border)'
    ],
    hero_image: CAMERA_IMAGES.nagaland,
    is_featured: true,
    display_order: 4
  },
  {
    id: 'dest-manipur',
    slug: 'manipur',
    name: 'Manipur',
    tagline: 'Jeweled Land, Floating Phumdis of Loktak Lake & Rare Sangai Deer',
    description: 'Cradled in an oval valley surrounded by misty blue hills, Manipur is celebrated for the unique circular floating islands (Phumdis) of Loktak Lake, the world’s only floating national park (Keibul Lamjao), classical Manipuri Raas Leela, and Imphal’s legendary all-women Ima Keithel market.',
    capital: 'Imphal',
    best_time_to_visit: 'October to April (Sangai Festival held late November)',
    permit_type: 'ILP Required',
    permit_details: 'Inner Line Permit (ILP) required for all domestic tourists entering Manipur. Obtainable online or at Imphal Airport.',
    top_attractions: [
      'Loktak Lake & Floating Fisherman Homestays',
      'Keibul Lamjao National Park (Habitat of the Brow-Antlered Sangai Deer)',
      'Ima Keithel (Mother’s Market - 500-year-old market run entirely by women)',
      'Kangla Fort & Govindaji Temple',
      'Ukhrul Shirui Hills (Home to the rare Shirui Lily)'
    ],
    hero_image: CAMERA_IMAGES.manipur,
    is_featured: true,
    display_order: 5
  },
  {
    id: 'dest-mizoram',
    slug: 'mizoram',
    name: 'Mizoram',
    tagline: 'Land of the Hill People, Rolling Bamboo Forests & Serene Highland Villages',
    description: 'Perched high in the southern tip of the North East, Mizoram offers rolling purple hills, pine-scented mountain air, traditional Mizo hospitality, the dramatic cliffs of Reiek, spectacular Vantawng Falls, and vibrant spring festivities like Chapchar Kut.',
    capital: 'Aizawl',
    best_time_to_visit: 'October to March (Chapchar Kut festival celebrated in March)',
    permit_type: 'ILP Required',
    permit_details: 'Inner Line Permit (ILP) is mandatory for domestic Indian travelers. Obtainable at Lengpui Airport or online.',
    top_attractions: [
      'Reiek Tlang & Heritage Model Village',
      'Vantawng Khawhthla (Highest waterfall in Mizoram)',
      'Hmuifang Tourist Resort & Virgin Forests',
      'Solomon’s Temple in Aizawl',
      'Tamdil Lake (Serene natural lake cradled by green hills)'
    ],
    hero_image: CAMERA_IMAGES.mizoram,
    is_featured: true,
    display_order: 6
  },
  {
    id: 'dest-tripura',
    slug: 'tripura',
    name: 'Tripura',
    tagline: 'Royal Heritage, Floating Water Palace Neermahal & Unakoti Rock Bas-Reliefs',
    description: 'A blend of royal Manikya dynasty architecture and ancient spiritual rock carvings. Marvel at the gleaming white Ujjayanta Palace, the water palace of Neermahal situated in the middle of Rudrasagar Lake, and Unakoti’s mysterious 8th-century colossal rock-cut carvings of Shiva.',
    capital: 'Agartala',
    best_time_to_visit: 'October to March (Pleasant winter weather)',
    permit_type: 'No Special Permit for Indians',
    permit_details: 'No ILP is required for Indian nationals. Foreigners require standard passport registration.',
    top_attractions: [
      'Ujjayanta Palace & State Museum (Agartala)',
      'Neermahal Water Palace (Rudrasagar Lake)',
      'Unakoti Rock Carvings (Colossal stone sculptures in the forest)',
      'Tripura Sundari Temple (Matabari - 500-year-old holy shrine)',
      'Jampui Hills (Orange harvest & panoramic hill station)'
    ],
    hero_image: CAMERA_IMAGES.tripura,
    is_featured: true,
    display_order: 7
  },
  {
    id: 'dest-sikkim',
    slug: 'sikkim',
    name: 'Sikkim',
    tagline: 'Kingdom of Kanchenjunga, Sacred Glacial Lakes & Rhododendron Sanctuaries',
    description: 'Nestled under the shadow of Mt. Kanchenjunga (8,586m), Sikkim mesmerizes with high-altitude sacred lakes like Gurudongmar (17,800 ft), Buddhist monasteries like Rumtek, the dramatic valley of flowers at Yumthang, and high Himalayan passes.',
    capital: 'Gangtok',
    best_time_to_visit: 'March to May (Rhododendron blooms) & October to December (Clear Himalayan views)',
    permit_type: 'RAP/PAP Required for Foreigners',
    permit_details: 'Indian citizens require special permits for North Sikkim (Gurudongmar, Yumthang) and Nathu La Pass. Foreigners require Restricted Area Permit (RAP).',
    top_attractions: [
      'Gurudongmar Lake & Chopta Valley (17,800 ft high-altitude lake)',
      'Yumthang Valley of Flowers & Zero Point',
      'Rumtek & Pemayangtse Monasteries',
      'Tsomgo Lake & Baba Mandir',
      'Pelling Skywalk & Kanchenjunga Viewpoints'
    ],
    hero_image: CAMERA_IMAGES.sikkim,
    is_featured: true,
    display_order: 8
  }
];
