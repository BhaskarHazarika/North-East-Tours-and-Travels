import { SupabaseFestival } from '../types/database';
import { CAMERA_IMAGES } from '../assets/images';

export const ALL_FESTIVALS: SupabaseFestival[] = [
  {
    id: 'fest-hornbill',
    slug: 'hornbill-festival',
    title: 'Hornbill Festival (Nagaland)',
    state: 'Nagaland',
    month: 'December',
    dates_approx: '1st - 10th December (Every Year)',
    venue: 'Naga Heritage Village, Kisama (near Kohima)',
    significance: 'Known as the "Festival of Festivals", it unites all 16 major indigenous tribes of Nagaland to revive, preserve, and celebrate their ancient folklore, warrior traditions, and rich agrarian rituals.',
    description: 'Kisama comes alive with the booming sounds of traditional log drums, vibrant feathered headdresses, spear dances, and the aroma of authentic Naga barbecue. Highlights include the Hornbill International Rock Contest, Naga Chili Eating Competition, indigenous wrestling, and the evening Night Bazaar in Kohima.',
    cultural_highlights: [
      'Authentic tribal Morungs (bachelor dormitories) built by each of the 16 tribes',
      'Indigenous warrior dances, archery competitions, and fire-making rituals',
      'The Hornbill International Rock Festival featuring bands across Asia',
      'Traditional rice beer (Zutho/Thutse) and culinary masterclasses',
      'Kohima Night Carnival with local handicrafts and organic street food'
    ],
    image: CAMERA_IMAGES.hornbillFestival,
    related_tour_id: 'hornbill-festival-special',
    is_major: true
  },
  {
    id: 'fest-ziro',
    slug: 'ziro-festival-of-music',
    title: 'Ziro Festival of Music (Arunachal Pradesh)',
    state: 'Arunachal Pradesh',
    month: 'September',
    dates_approx: 'Late September (4-Day Gathering)',
    venue: 'Ziro Valley, Lower Subansiri District',
    significance: 'India’s most celebrated eco-friendly outdoor independent music gathering, set against emerald rice terraces and pine groves of the ancient Apatani tribe.',
    description: 'Music lovers camp in pine groves and listen to indie folk, rock, and electronic bands performing on two handcrafted stages constructed exclusively out of local bamboo and timber. Experience Apatani village walks and taste local millet and kiwi wine.',
    cultural_highlights: [
      'Two zero-plastic stages crafted entirely from harvested bamboo',
      'Curated lineup of international and homegrown Indian independent music acts',
      'Homestays and alpine camping directly in pine-covered meadows',
      'Guided walks through Hong and Hari Apatani villages with traditional facial tattoo elders',
      'Locally fermented organic Apong (rice brew) and bamboo shoot smoked delicacies'
    ],
    image: CAMERA_IMAGES.ziroValley,
    related_tour_id: 'ziro-festival-special',
    is_major: true
  },
  {
    id: 'fest-dzukou',
    slug: 'dzukou-valley-trek',
    title: 'Dzukou Valley Alpine Trek & Cave Expedition',
    state: 'Nagaland',
    month: 'Year-Round (Best Jun-Jul for Lilies, Oct-Mar for Frost & Clear Skies)',
    dates_approx: 'Peak Lily Season: June - July | Crystal Clear Skies: Oct - March',
    venue: 'Barail Mountain Range (Nagaland-Manipur Border, Alt: 2,452m)',
    significance: 'Considered one of the most stunning alpine valleys in Asia, carpeted with endemic dwarf bamboo, meandering crystal rivulets, and natural cavern shelters.',
    description: 'Trekking through the dense subtropical rain-forest of Viswema or Jakhama, you emerge onto an expansive undulating amphitheater of dwarf green bamboo. In early summer, the valley bursts into life with the endemic pink Dzukou Lily (Lilium mackliniae), while in winter it frosts over in magical crystalline white.',
    cultural_highlights: [
      'Spectacular undulating green hills resembling ocean waves of dwarf bamboo',
      'Alpine night camping under pristine unpolluted star-studded mountain skies',
      'Exploring natural subterranean caves and mountain freshwater pools',
      'Scenic trail starts from historical Angami Naga heritage villages (Viswema & Kigwema)',
      'Rich biodiversity of rare high-altitude orchids and rhododendrons'
    ],
    image: CAMERA_IMAGES.dzukouValley,
    related_tour_id: 'dzukou-valley-trek-special',
    is_major: true
  },
  {
    id: 'fest-wangala',
    slug: 'wangala-100-drums-festival',
    title: 'Wangala 100 Drums Festival (Meghalaya)',
    state: 'Meghalaya',
    month: 'November',
    dates_approx: 'Second week of November',
    venue: 'Asanang near Tura, West Garo Hills',
    significance: 'The greatest harvest festival of the Garo tribe, offering thanksgiving to Misi Saljong (the Sun God of fertility).',
    description: 'Known as the "Hundred Drums Festival", male dancers beat 100 long oval drums simultaneously while women dance in synchronization wearing traditional colorful Dakmanda wraps and feathered headgear.',
    cultural_highlights: [
      'Synchronized beats of 100 traditional Garo long drums (Dama)',
      'Traditional Garo line dances led by village Nokmas (chieftains)',
      'Indigenous indigenous Garo archery and strength competitions',
      'Tasting of freshly brewed Bitchi (rice liquor) and traditional smoked bamboo shoots'
    ],
    image: CAMERA_IMAGES.meghalaya,
    is_major: false
  },
  {
    id: 'fest-sangai',
    slug: 'sangai-festival',
    title: 'Sangai Festival (Manipur)',
    state: 'Manipur',
    month: 'November',
    dates_approx: '21st - 30th November (Annual)',
    venue: 'Hapta Kangjeibung, Imphal & Moirang (Loktak Lake)',
    significance: 'Named after Manipur’s state animal, the rare Brow-Antlered Sangai deer found only in Keibul Lamjao National Park.',
    description: 'A grand ten-day celebration of Manipuri classical Raas Leela dance, indigenous martial art Thang-Ta, boat races on Loktak Lake, and traditional polo (Sagol Kangjei)—as Manipur is the historical birthplace of modern polo.',
    cultural_highlights: [
      'Exquisite classical Manipuri Raas Leela & Pung Cholom drum dances',
      'Thang-Ta (ancient Manipuri sword and spear martial arts demonstrations)',
      'Sagol Kangjei exhibition matches played on indigenous Manipuri ponies',
      'Water sports and eco-tours at the floating islands of Loktak Lake'
    ],
    image: CAMERA_IMAGES.manipur,
    is_major: false
  },
  {
    id: 'fest-chapchar-kut',
    slug: 'chapchar-kut',
    title: 'Chapchar Kut (Mizoram)',
    state: 'Mizoram',
    month: 'March',
    dates_approx: 'First Friday of March',
    venue: 'Lammual Ground, Aizawl',
    significance: 'The most cheerful spring festival of the Mizo people, celebrated after clearing the bamboo hills for Jhum cultivation.',
    description: 'The festival features the mesmerizing Cheraw bamboo dance, where dancers step rhythmically in and out of clapping horizontal bamboo poles, dressed in vibrant handwoven Vakiria crowns and Puanchei textiles.',
    cultural_highlights: [
      'The world-renowned Cheraw (bamboo dance) performed by thousands of dancers',
      'Traditional Mizo costume parades displaying Vakiria headdresses',
      'Community feast (Chawnghnawh) and traditional folk melodies on gong instruments',
      'Traditional archery and indigenous high-jump sports'
    ],
    image: CAMERA_IMAGES.mizoram,
    is_major: false
  },
  {
    id: 'fest-bihu',
    slug: 'rongali-bihu',
    title: 'Rongali Bihu (Assam)',
    state: 'Assam',
    month: 'April',
    dates_approx: 'Mid-April (Assamese New Year)',
    venue: 'Across Assam (Guwahati, Sibsagar, Majuli Island)',
    significance: 'The heartbeat of Assamese cultural identity, welcoming the spring seeding season with exuberant dance and song.',
    description: 'Young men and women dance to the pulsating rhythm of the Dhol (drum), Pepa (buffalo horn flute), and Gogona. Homes prepare traditional pitha sweets, Jolpan, and present red-embroidered Gamosa cloth to elders as a sign of deep respect.',
    cultural_highlights: [
      'Husori folk performances under sacred banyan and mango trees',
      'Soul-stirring tunes of the buffalo horn Pepa and bamboo clapper Toka',
      'Traditional feast of Chira, Doi, Gur, and hand-rolled coconut Laru & Til Pitha',
      'Riverbank celebrations along the mighty Brahmaputra'
    ],
    image: CAMERA_IMAGES.assam,
    is_major: false
  },
  {
    id: 'fest-losar',
    slug: 'losar-tibetan-new-year',
    title: 'Losar & Torgya Festival (Tawang, Arunachal)',
    state: 'Arunachal Pradesh',
    month: 'January / February',
    dates_approx: 'January/February based on Lunar Calendar',
    venue: 'Tawang Monastery courtyard (10,000 ft)',
    significance: 'Monpa Buddhist festival driving away evil spirits and celebrating prosperity for the Tibetan New Year.',
    description: 'Held in the snow-dusted courtyard of the 400-year-old Tawang Monastery. Buddhist lamas dress in elaborate silk robes and fearsome animal masks to perform ritualistic Cham dances, accompanied by long alpine horns and cymbals.',
    cultural_highlights: [
      'Sacred Cham dances performed by lamas in carved wooden masks',
      'Blowing of the Dungchen (massive 3-meter Tibetan bronze horns)',
      'Unfurling of ancient Buddhist Thangka tapestries',
      'Butter lamp offerings and butter sculpture displays inside the main prayer hall'
    ],
    image: CAMERA_IMAGES.tawangMonastery,
    is_major: false
  }
];
