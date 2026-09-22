export interface DestinationHotelTariff {
  destination: string;
  state: 'Assam' | 'Meghalaya' | 'Arunachal Pradesh' | 'Nagaland';
  standardRatePerNight: number;
  deluxeRatePerNight: number;
  featuredStandardHotels: string[];
  featuredDeluxeHotels: string[];
  altitudeOrZone?: string;
  notes: string;
}

export const HOTEL_TARIFFS: DestinationHotelTariff[] = [
  {
    destination: 'Guwahati',
    state: 'Assam',
    standardRatePerNight: 1800,
    deluxeRatePerNight: 3200,
    featuredStandardHotels: ['Hotel Rajmahal', 'Cygnett Inn Repose', 'Hotel Rialto'],
    featuredDeluxeHotels: ['Hotel Dynasty', 'Kiranshree Portico', 'Novotel / Vivanta Gateway'],
    altitudeOrZone: 'Brahmaputra Valley (55m)',
    notes: 'Base gateway city. AC rooms, high-speed WiFi, attached western baths.'
  },
  {
    destination: 'Shillong',
    state: 'Meghalaya',
    standardRatePerNight: 2000,
    deluxeRatePerNight: 3800,
    featuredStandardHotels: ['Hotel Boulevard', 'The Pear Tree', 'Eee Cee Hotel'],
    featuredDeluxeHotels: ['Hotel Polo Towers', 'Center Point Shillong', 'M-Tripura Castle Heritage'],
    altitudeOrZone: 'East Khasi Hills (1,525m)',
    notes: 'Scotland of the East. Electric blankets/heaters in winter, complimentary breakfast.'
  },
  {
    destination: 'Cherrapunjee (Sohra)',
    state: 'Meghalaya',
    standardRatePerNight: 1800,
    deluxeRatePerNight: 3500,
    featuredStandardHotels: ['Saimika Resort Cottages', 'Kutmadan Resort', 'Jiva Eco-Homestay'],
    featuredDeluxeHotels: ['Polo Orchid Resort', 'Jiva Resort Cherrapunjee', 'Cherrapunjee Holiday Resort'],
    altitudeOrZone: 'Plateau & Waterfalls (1,484m)',
    notes: 'Cliff-edge gorge views, hot geysers, organic Khasi village breakfasts.'
  },
  {
    destination: 'Kaziranga',
    state: 'Assam',
    standardRatePerNight: 2200,
    deluxeRatePerNight: 4200,
    featuredStandardHotels: ['Wild Grass Lodge', 'Jupuri Ghar', 'Kaziranga Eco Camp'],
    featuredDeluxeHotels: ['The Borgos Resort', 'Iora - The Heritage', 'Diphlu River Lodge Partner'],
    altitudeOrZone: 'National Park Wildlife Zone',
    notes: 'Close to Central (Kohora) & Western (Bagori) safari gates. Jungle lawn setting.'
  },
  {
    destination: 'Tezpur',
    state: 'Assam',
    standardRatePerNight: 1800,
    deluxeRatePerNight: 3200,
    featuredStandardHotels: ['Hotel Kanyapur', 'Hotel Pine Yard', 'The Green Gate'],
    featuredDeluxeHotels: ['The Fern Residency', 'Heritage Tezpur', 'Hotel Grand Park'],
    altitudeOrZone: 'Sonitpur Transit Hub',
    notes: 'Strategic stopover before ascending to Bhalukpong & western Arunachal.'
  },
  {
    destination: 'Dirang',
    state: 'Arunachal Pradesh',
    standardRatePerNight: 2000,
    deluxeRatePerNight: 3800,
    featuredStandardHotels: ['Hotel Pemaling', 'Awoo Resort Dirang', 'Monpa Valley Homestay'],
    featuredDeluxeHotels: ['Norphel Boutique Resort', 'Dirang Boutique Cottages', 'Elysium Valley View'],
    altitudeOrZone: 'Dirang River Valley (1,560m)',
    notes: 'Acclimatization halt below Sela Pass. Apple orchard views, heavy thermal duvets.'
  },
  {
    destination: 'Tawang',
    state: 'Arunachal Pradesh',
    standardRatePerNight: 2500,
    deluxeRatePerNight: 4800,
    featuredStandardHotels: ['Hotel Sambala', 'Hotel Tawang Holiday', 'Vamoose Tawang Inn'],
    featuredDeluxeHotels: ['Hotel Dondrub', 'Hotel Yangzom Premium', 'Hotel Mon-Paradise Deluxe'],
    altitudeOrZone: 'High-Altitude Himalayan Town (3,048m)',
    notes: 'High-altitude sub-zero nights. 24/7 dedicated room heaters, hot water geysers guaranteed.'
  },
  {
    destination: 'Bomdila',
    state: 'Arunachal Pradesh',
    standardRatePerNight: 2000,
    deluxeRatePerNight: 3800,
    featuredStandardHotels: ['Hotel Tsepal Yangjom', 'Hotel Siphiyang Phong', 'Passage Inn'],
    featuredDeluxeHotels: ['Hotel Bomdila Deluxe', 'Lungta Residency', 'Eagle Nest View Lodge'],
    altitudeOrZone: 'Himalayan Ridge (2,415m)',
    notes: 'Panoramic Kangto & Gorichen snow peak views, Monpa hospitality & breakfast.'
  }
];

export type HotelTier = 'standard' | 'deluxe';

export function getHotelTariff(destination: string): DestinationHotelTariff | undefined {
  const normalized = destination.toLowerCase().trim();
  return HOTEL_TARIFFS.find(h => 
    h.destination.toLowerCase().includes(normalized) || 
    normalized.includes(h.destination.toLowerCase().split(' ')[0])
  );
}

export function getAverageNightRate(destinations: string[], tier: HotelTier): number {
  if (!destinations || destinations.length === 0) {
    return tier === 'standard' ? 2000 : 3800;
  }

  let total = 0;
  let count = 0;

  destinations.forEach(dest => {
    const tariff = getHotelTariff(dest);
    if (tariff) {
      total += tier === 'standard' ? tariff.standardRatePerNight : tariff.deluxeRatePerNight;
      count++;
    }
  });

  if (count === 0) {
    return tier === 'standard' ? 2000 : 3800;
  }

  return Math.round(total / count);
}
