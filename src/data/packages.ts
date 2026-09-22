import { TourPackage } from '../types';
import { CAMERA_IMAGES } from '../assets/images';
import { MEGHALAYA_PACKAGES } from './packages/meghalaya';
import { ASSAM_PACKAGES } from './packages/assam';
import { ARUNACHAL_PACKAGES } from './packages/arunachal';
import { MULTISTATE_PACKAGES } from './packages/multistate';
import { FESTIVAL_PACKAGES } from './packages/festivals';

export { MEGHALAYA_PACKAGES } from './packages/meghalaya';
export { ASSAM_PACKAGES } from './packages/assam';
export { ARUNACHAL_PACKAGES } from './packages/arunachal';
export { MULTISTATE_PACKAGES } from './packages/multistate';
export { FESTIVAL_PACKAGES } from './packages/festivals';

/**
 * All active tour packages across the 8 North-East states,
 * calibrated against real-world market pricing benchmarks
 * (per person, twin-sharing, land-only ex-Guwahati).
 */
export const TOUR_PACKAGES: TourPackage[] = [
  ...MEGHALAYA_PACKAGES,
  ...ASSAM_PACKAGES,
  ...ARUNACHAL_PACKAGES,
  ...MULTISTATE_PACKAGES,
  ...FESTIVAL_PACKAGES
];

export const MAIN_HIGHLIGHT_PACKAGES_IDS = [
  'meghalaya-4n5d-standard',
  'ne-complete-11n12d',
  'ne-grand-circuit-9n10d'
];

export interface MainHighlightSummary {
  id: string;
  durationLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  statesLabel: string;
  keyStops: string[];
  routeString: string;
  heroImage: string;
  basePriceINR: number;
  highlightPills: string[];
}

export const MAIN_HIGHLIGHTS_INFO: MainHighlightSummary[] = [
  {
    id: 'meghalaya-4n5d-standard',
    durationLabel: '5 Days / 4 Nights',
    badge: 'Flagship Short Break',
    title: '5 Days 4 Nights Meghalaya Trip',
    subtitle: 'Abode of Clouds, Living Root Bridges & Crystal Umngot Waters',
    statesLabel: 'Meghalaya',
    keyStops: ['Guwahati', 'Shillong', 'Cherrapunji (Sohra)', 'Nongriat', 'Mawlynnong', 'Dawki'],
    routeString: 'Guwahati → Shillong → Sohra → Nongriat Double Decker → Mawlynnong → Dawki River → Laitlum → Guwahati',
    heroImage: CAMERA_IMAGES.rootBridge,
    basePriceINR: 16500,
    highlightPills: ['Double Decker Root Bridge', 'Nohkalikai 1,115-ft Falls', 'Dawki Glass Boat Ride', 'Krang Shuri Natural Swim']
  },
  {
    id: 'ne-complete-11n12d',
    durationLabel: '12 Days / 11 Nights',
    badge: 'Grand Himalayan Circuit',
    title: '12 Days 11 Nights Meghalaya - Assam - Arunachal Trip',
    subtitle: 'The Complete Eastern Himalayan Master Odyssey Across Three States',
    statesLabel: 'Meghalaya • Assam • Arunachal Pradesh',
    keyStops: ['Shillong', 'Cherrapunji', 'Dawki', 'Kaziranga Safaris', 'Dirang Dzong', '13,700-ft Sela Pass', 'Tawang Monastery', 'Bum La Border'],
    routeString: 'Shillong → Sohra Roots → Dawki → Kaziranga Rhinos → Bhalukpong → Dirang → Sela Pass → Tawang Gompa → Bum La Pass (15,200 ft)',
    heroImage: CAMERA_IMAGES.tawangMonastery,
    basePriceINR: 85000,
    highlightPills: ['Living Root Bridges', 'Kaziranga Elephant & 4x4 Safaris', '13,700-ft Sela Pass', '400-Yr Tawang Monastery', 'Bum La Indo-China Border']
  },
  {
    id: 'ne-grand-circuit-9n10d',
    durationLabel: '10 Days / 9 Nights',
    badge: 'Wildlife & High Frontiers',
    title: '10 Days 9 Nights Kaziranga - Tawang Trip',
    subtitle: 'From One-Horned Rhino Grasslands to High Himalayan Glaciers',
    statesLabel: 'Assam • Arunachal Pradesh • Meghalaya',
    keyStops: ['Kaziranga Safari Ranges', 'Bhalukpong', 'Dirang Apple Orchards', 'Sela Pass', 'Tawang Monastery', 'Madhuri Lake'],
    routeString: 'Guwahati → Shillong → Kaziranga Safaris → Dirang Monpa Valley → Sela Pass (13,700 ft) → Tawang → Madhuri Alpine Lake',
    heroImage: CAMERA_IMAGES.kazirangaRhino,
    basePriceINR: 65000,
    highlightPills: ['Kaziranga Dawn Elephant Safari', 'Open 4x4 Jeep Rhino Safari', 'Sela Frozen Lake Crossing', 'Tawang Monastery Pilgrimage', 'Madhuri Lake Excursion']
  }
];

export const FESTIVAL_HIGHLIGHTS = [
  {
    id: 'hornbill',
    name: 'Hornbill Festival',
    tagline: 'The Festival of Festivals in Kisama, Nagaland',
    state: 'Nagaland',
    month: '1st - 10th December Every Year',
    venue: 'Kisama Heritage Village, Kohima',
    image: CAMERA_IMAGES.hornbillFestival,
    description: 'A grand carnival celebrating the rich warrior traditions, vibrant costumes, music, and cuisine of all 17 recognized tribes of Nagaland. Witness authentic morungs, war dances, king chili eating contests, and the famous Hornbill International Rock Festival.',
    quickStats: ['17 Naga Tribes', '10 Days of Celebrations', 'Live Music & Night Bazaars', 'Permit: Nagaland ILP'],
    linkedPackageId: 'hornbill-festival-special'
  },
  {
    id: 'dzukou',
    name: 'Dzukou Valley',
    tagline: 'The Valley of Eternal Mist & Flowers',
    state: 'Nagaland / Manipur Border',
    month: 'June to Sept (Lilies) | Oct to March (Frost & Starry Skies)',
    venue: '2,452m above sea level, Kohima District',
    image: CAMERA_IMAGES.dzukouValley,
    description: 'Known as the North East’s most enchanting high-altitude trek. Famed for its rolling waves of dwarf bamboo hills, crystalline natural stream waters, subterranean caves, and the rare endemic Dzukou Lily that blooms only here.',
    quickStats: ['Altitude: 2,452m', 'Trek Grade: Moderate', 'Wilderness Camping', 'Starry Unpolluted Night Skies'],
    linkedPackageId: 'dzukou-valley-trek'
  },
  {
    id: 'ziro',
    name: 'Ziro Festival of Music',
    tagline: 'Eco-Friendly Indie Music Gathering in Arunachal',
    state: 'Arunachal Pradesh',
    month: 'Late September (Annual)',
    venue: 'Ziro Valley, Lower Subansiri',
    image: CAMERA_IMAGES.ziroValley,
    description: 'Set amidst picturesque Apatani paddy fields and pine groves, Ziro is India’s premier eco-conscious outdoor music celebration. Features stages handcrafted from local bamboo, home-brewed kiwi wine, and iconic global and indie performers.',
    quickStats: ['Eco-Bamboo Stages', 'Apatani Tribal Hamlets', 'Pine Grove Camping', 'Permit: Arunachal ILP'],
    linkedPackageId: 'ziro-festival-of-music'
  }
];

export const NORTH_EAST_STATES_INFO = [
  { name: 'Nagaland', highlight: 'Land of Festivals & Warriors', permit: 'ILP Required', capital: 'Kohima' },
  { name: 'Arunachal Pradesh', highlight: 'Land of the Dawn-Lit Mountains', permit: 'ILP Required', capital: 'Itanagar' },
  { name: 'Meghalaya', highlight: 'Abode of Clouds & Living Bridges', permit: 'No ILP for Indians', capital: 'Shillong' },
  { name: 'Assam', highlight: 'Land of the Red River & Blue Hills', permit: 'No ILP for Indians', capital: 'Dispur / Guwahati' },
  { name: 'Sikkim', highlight: 'Himalayan Wonderland & Kanchenjunga', permit: 'Permits for Border Areas', capital: 'Gangtok' },
  { name: 'Manipur', highlight: 'Jeweled Land & Floating Loktak Lake', permit: 'ILP Required', capital: 'Imphal' },
  { name: 'Mizoram', highlight: 'Rolling Hills & Bamboo Forests', permit: 'ILP Required', capital: 'Aizawl' },
  { name: 'Tripura', highlight: 'Palaces & Ancient Rock Sculptures', permit: 'No ILP for Indians', capital: 'Agartala' }
];
