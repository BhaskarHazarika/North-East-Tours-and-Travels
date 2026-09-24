export interface HotelProperty {
  id: string;
  destination: string;
  state: 'Assam' | 'Meghalaya' | 'Arunachal Pradesh' | 'Nagaland';
  hotel: string;
  category: string;
  b2bNet: number;
  suggestedFitSell: number;
  plan: 'CP' | 'MAP';
}

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

export const HOTEL_CATALOG: HotelProperty[] = [
  // Guwahati
  { id: 'ghy-1', destination: 'Guwahati', state: 'Assam', hotel: 'Prashanti Tourist Lodge', category: 'Budget', b2bNet: 1600, suggestedFitSell: 2000, plan: 'CP' },
  { id: 'ghy-2', destination: 'Guwahati', state: 'Assam', hotel: 'Hotel Atithi', category: 'Budget', b2bNet: 2200, suggestedFitSell: 2800, plan: 'CP' },
  { id: 'ghy-3', destination: 'Guwahati', state: 'Assam', hotel: 'Rajmahal', category: 'Standard 3★', b2bNet: 2700, suggestedFitSell: 3400, plan: 'CP' },
  { id: 'ghy-4', destination: 'Guwahati', state: 'Assam', hotel: 'Hotel Palacio', category: 'Standard 3★', b2bNet: 2600, suggestedFitSell: 3300, plan: 'CP' },
  { id: 'ghy-5', destination: 'Guwahati', state: 'Assam', hotel: 'The Lily Hotel', category: 'Premium 4★', b2bNet: 4200, suggestedFitSell: 5200, plan: 'CP' },
  { id: 'ghy-6', destination: 'Guwahati', state: 'Assam', hotel: 'The Greenwood Guwahati', category: 'Premium 4★', b2bNet: 4500, suggestedFitSell: 5600, plan: 'CP' },
  { id: 'ghy-7', destination: 'Guwahati', state: 'Assam', hotel: 'Kiranshree Grand', category: 'Premium 5★', b2bNet: 5000, suggestedFitSell: 6200, plan: 'CP' },
  { id: 'ghy-8', destination: 'Guwahati', state: 'Assam', hotel: 'Novotel Guwahati', category: 'Premium 5★', b2bNet: 5200, suggestedFitSell: 6500, plan: 'CP' },
  { id: 'ghy-9', destination: 'Guwahati', state: 'Assam', hotel: 'Radisson Blu Guwahati', category: 'Luxury 5★', b2bNet: 6000, suggestedFitSell: 7500, plan: 'CP' },
  { id: 'ghy-10', destination: 'Guwahati', state: 'Assam', hotel: 'Vivanta Guwahati', category: 'Luxury 5★', b2bNet: 5950, suggestedFitSell: 7000, plan: 'CP' },

  // Shillong
  { id: 'shl-1', destination: 'Shillong', state: 'Meghalaya', hotel: 'Hotel Polo Towers', category: 'Premium 4★', b2bNet: 5200, suggestedFitSell: 6500, plan: 'CP' },
  { id: 'shl-2', destination: 'Shillong', state: 'Meghalaya', hotel: 'M Crown Hotel', category: 'Standard 3★', b2bNet: 3500, suggestedFitSell: 4400, plan: 'CP' },
  { id: 'shl-3', destination: 'Shillong', state: 'Meghalaya', hotel: 'The Centre Point', category: 'Standard 3★', b2bNet: 3200, suggestedFitSell: 4000, plan: 'CP' },
  { id: 'shl-4', destination: 'Shillong', state: 'Meghalaya', hotel: 'Hotel Heiga VNS', category: 'Standard 3★', b2bNet: 3000, suggestedFitSell: 3800, plan: 'CP' },
  { id: 'shl-5', destination: 'Shillong', state: 'Meghalaya', hotel: 'Windermere Inn', category: 'Standard 3★', b2bNet: 3500, suggestedFitSell: 4400, plan: 'CP' },
  { id: 'shl-6', destination: 'Shillong', state: 'Meghalaya', hotel: 'Blueberry Inn', category: 'Standard 3★', b2bNet: 2800, suggestedFitSell: 3500, plan: 'CP' },
  { id: 'shl-7', destination: 'Shillong', state: 'Meghalaya', hotel: 'The Phoenix Residency', category: 'Standard 3★', b2bNet: 2800, suggestedFitSell: 3500, plan: 'CP' },
  { id: 'shl-8', destination: 'Shillong', state: 'Meghalaya', hotel: 'The Shillong Address', category: 'Premium 4★', b2bNet: 3800, suggestedFitSell: 4800, plan: 'CP' },
  { id: 'shl-9', destination: 'Shillong', state: 'Meghalaya', hotel: 'Ri Shat Sngi Orchid Resort', category: 'Premium 4★', b2bNet: 4200, suggestedFitSell: 5200, plan: 'CP' },
  { id: 'shl-10', destination: 'Shillong', state: 'Meghalaya', hotel: 'Courtyard by Marriott Shillong', category: 'Luxury 5★', b2bNet: 7500, suggestedFitSell: 9000, plan: 'CP' },

  // Cherrapunjee
  { id: 'chr-1', destination: 'Cherrapunjee', state: 'Meghalaya', hotel: 'Cherrapunjee Holiday Resort', category: 'Standard Resort', b2bNet: 7300, suggestedFitSell: 8130, plan: 'MAP' },
  { id: 'chr-2', destination: 'Cherrapunjee', state: 'Meghalaya', hotel: 'Polo Orchid Resort', category: 'Premium 4★', b2bNet: 9750, suggestedFitSell: 11475, plan: 'CP' },
  { id: 'chr-3', destination: 'Cherrapunjee', state: 'Meghalaya', hotel: 'Jiva Resort', category: 'Luxury Resort', b2bNet: 9000, suggestedFitSell: 10450, plan: 'CP' },
  { id: 'chr-4', destination: 'Cherrapunjee', state: 'Meghalaya', hotel: 'Jiva Resort - Premium Suite', category: 'Luxury Resort', b2bNet: 11200, suggestedFitSell: 13000, plan: 'CP' },
  { id: 'chr-5', destination: 'Cherrapunjee', state: 'Meghalaya', hotel: 'Jiva Resort - Luxury Suite', category: 'Luxury Resort', b2bNet: 17500, suggestedFitSell: 20500, plan: 'CP' },
  { id: 'chr-6', destination: 'Cherrapunjee', state: 'Meghalaya', hotel: 'Sohra Plaza', category: 'Standard 3★', b2bNet: 3000, suggestedFitSell: 3800, plan: 'CP' },
  { id: 'chr-7', destination: 'Cherrapunjee', state: 'Meghalaya', hotel: 'Kutmadan Resort', category: 'Standard Resort', b2bNet: 3500, suggestedFitSell: 4500, plan: 'CP' },
  { id: 'chr-8', destination: 'Cherrapunjee', state: 'Meghalaya', hotel: 'Coniferous Resort', category: 'Standard Resort', b2bNet: 3000, suggestedFitSell: 3800, plan: 'CP' },
  { id: 'chr-9', destination: 'Cherrapunjee', state: 'Meghalaya', hotel: '7 Sisters Falls View Inn', category: 'Budget/Standard', b2bNet: 2200, suggestedFitSell: 2800, plan: 'CP' },
  { id: 'chr-10', destination: 'Cherrapunjee', state: 'Meghalaya', hotel: 'Pine Hill Homestay', category: 'Budget Homestay', b2bNet: 1800, suggestedFitSell: 2300, plan: 'CP' },

  // Kaziranga
  { id: 'kzg-1', destination: 'Kaziranga', state: 'Assam', hotel: 'Tushita Ban - Triangle Room', category: 'Standard Resort', b2bNet: 2950, suggestedFitSell: 3500, plan: 'CP' },
  { id: 'kzg-2', destination: 'Kaziranga', state: 'Assam', hotel: 'Tushita Ban - 4 Pax Cottage', category: 'Standard Resort', b2bNet: 3900, suggestedFitSell: 4700, plan: 'CP' },
  { id: 'kzg-3', destination: 'Kaziranga', state: 'Assam', hotel: 'Tushita Ban - 6 Pax Cottage', category: 'Standard Resort', b2bNet: 6050, suggestedFitSell: 7200, plan: 'CP' },
  { id: 'kzg-4', destination: 'Kaziranga', state: 'Assam', hotel: 'Dhanshree Resort', category: 'Standard Resort', b2bNet: 3200, suggestedFitSell: 4000, plan: 'CP' },
  { id: 'kzg-5', destination: 'Kaziranga', state: 'Assam', hotel: 'Bon Villa Retreat', category: 'Standard Resort', b2bNet: 3000, suggestedFitSell: 3800, plan: 'CP' },
  { id: 'kzg-6', destination: 'Kaziranga', state: 'Assam', hotel: 'Hongthor Resort', category: 'Standard Resort', b2bNet: 3000, suggestedFitSell: 3800, plan: 'CP' },
  { id: 'kzg-7', destination: 'Kaziranga', state: 'Assam', hotel: 'Infinity Resort Kaziranga', category: 'Premium Resort', b2bNet: 4800, suggestedFitSell: 6000, plan: 'CP' },
  { id: 'kzg-8', destination: 'Kaziranga', state: 'Assam', hotel: 'Foxtail Orchid', category: 'Premium Resort', b2bNet: 5000, suggestedFitSell: 6200, plan: 'CP' },
  { id: 'kzg-9', destination: 'Kaziranga', state: 'Assam', hotel: 'IORA The Retreat', category: 'Premium 4★', b2bNet: 6375, suggestedFitSell: 7500, plan: 'CP' },
  { id: 'kzg-10', destination: 'Kaziranga', state: 'Assam', hotel: 'Borgos Resort', category: 'Luxury 5★', b2bNet: 6800, suggestedFitSell: 8000, plan: 'CP' },

  // Tezpur
  { id: 'tzp-1', destination: 'Tezpur', state: 'Assam', hotel: 'Prashanti Tourist Lodge Tezpur', category: 'Budget', b2bNet: 1800, suggestedFitSell: 2300, plan: 'CP' },
  { id: 'tzp-2', destination: 'Tezpur', state: 'Assam', hotel: 'KRC Palace - Deluxe', category: 'Standard 3★', b2bNet: 2600, suggestedFitSell: 2899, plan: 'CP' },
  { id: 'tzp-3', destination: 'Tezpur', state: 'Assam', hotel: 'KRC Palace - Executive', category: 'Premium 3★', b2bNet: 3000, suggestedFitSell: 3299, plan: 'CP' },
  { id: 'tzp-4', destination: 'Tezpur', state: 'Assam', hotel: 'Cygnett Inn Imperial', category: 'Standard 3★', b2bNet: 3000, suggestedFitSell: 3800, plan: 'CP' },
  { id: 'tzp-5', destination: 'Tezpur', state: 'Assam', hotel: 'Welkin Residency', category: 'Standard 3★', b2bNet: 2800, suggestedFitSell: 3500, plan: 'CP' },
  { id: 'tzp-6', destination: 'Tezpur', state: 'Assam', hotel: 'Hotel Kalash', category: 'Budget/Standard', b2bNet: 2000, suggestedFitSell: 2600, plan: 'CP' },
  { id: 'tzp-7', destination: 'Tezpur', state: 'Assam', hotel: 'Lakeside Manor', category: 'Premium 3★', b2bNet: 5000, suggestedFitSell: 6300, plan: 'CP' },
  { id: 'tzp-8', destination: 'Tezpur', state: 'Assam', hotel: 'The Greenwood Hotel', category: 'Premium 4★', b2bNet: 4200, suggestedFitSell: 5200, plan: 'CP' },
  { id: 'tzp-9', destination: 'Tezpur', state: 'Assam', hotel: 'Hotel Palazzo Prime', category: 'Standard 3★', b2bNet: 2500, suggestedFitSell: 3200, plan: 'CP' },
  { id: 'tzp-10', destination: 'Tezpur', state: 'Assam', hotel: 'Wild Mahseer Assam', category: 'Luxury 5★', b2bNet: 5100, suggestedFitSell: 6000, plan: 'CP' },

  // Dirang
  { id: 'drg-1', destination: 'Dirang', state: 'Arunachal Pradesh', hotel: 'Hotel Pemaling', category: 'Standard 3★', b2bNet: 2700, suggestedFitSell: 3150, plan: 'CP' },
  { id: 'drg-2', destination: 'Dirang', state: 'Arunachal Pradesh', hotel: 'The Mandala Hotel', category: 'Standard 3★', b2bNet: 2900, suggestedFitSell: 3350, plan: 'CP' },
  { id: 'drg-3', destination: 'Dirang', state: 'Arunachal Pradesh', hotel: 'Centre Point', category: 'Standard 3★', b2bNet: 2500, suggestedFitSell: 2900, plan: 'CP' },
  { id: 'drg-4', destination: 'Dirang', state: 'Arunachal Pradesh', hotel: 'Regal Dirang', category: 'Standard 3★', b2bNet: 2900, suggestedFitSell: 3350, plan: 'CP' },
  { id: 'drg-5', destination: 'Dirang', state: 'Arunachal Pradesh', hotel: 'Letro Homestay', category: 'Budget Homestay', b2bNet: 2500, suggestedFitSell: 3050, plan: 'CP' },
  { id: 'drg-6', destination: 'Dirang', state: 'Arunachal Pradesh', hotel: 'Hotel Rigsel - Deluxe', category: 'Premium 4★', b2bNet: 3500, suggestedFitSell: 4400, plan: 'CP' },
  { id: 'drg-7', destination: 'Dirang', state: 'Arunachal Pradesh', hotel: 'Hotel Rigsel - Super Deluxe', category: 'Premium 4★', b2bNet: 4000, suggestedFitSell: 5200, plan: 'CP' },
  { id: 'drg-8', destination: 'Dirang', state: 'Arunachal Pradesh', hotel: 'Hotel Rigsel - Executive', category: 'Premium 4★', b2bNet: 4700, suggestedFitSell: 5200, plan: 'CP' },
  { id: 'drg-9', destination: 'Dirang', state: 'Arunachal Pradesh', hotel: 'Summit Rungkhung Village Resort', category: 'Premium Resort', b2bNet: 5500, suggestedFitSell: 6500, plan: 'CP' },
  { id: 'drg-10', destination: 'Dirang', state: 'Arunachal Pradesh', hotel: 'Lanying Riverview Homestay', category: 'Budget Homestay', b2bNet: 3200, suggestedFitSell: 4000, plan: 'CP' },

  // Tawang
  { id: 'twg-1', destination: 'Tawang', state: 'Arunachal Pradesh', hotel: 'Hotel Dekyi Pelbar', category: 'Standard 3★', b2bNet: 2800, suggestedFitSell: 3500, plan: 'CP' },
  { id: 'twg-2', destination: 'Tawang', state: 'Arunachal Pradesh', hotel: 'Hotel Taktsang', category: 'Premium 4★', b2bNet: 4000, suggestedFitSell: 5000, plan: 'CP' },
  { id: 'twg-3', destination: 'Tawang', state: 'Arunachal Pradesh', hotel: 'Hotel Tsering Yangkhil Khang', category: 'Premium 4★', b2bNet: 4500, suggestedFitSell: 5600, plan: 'CP' },
  { id: 'twg-4', destination: 'Tawang', state: 'Arunachal Pradesh', hotel: 'Hotel Dekhang', category: 'Premium 4★', b2bNet: 4000, suggestedFitSell: 5000, plan: 'CP' },
  { id: 'twg-5', destination: 'Tawang', state: 'Arunachal Pradesh', hotel: 'Hotel Yangzom', category: 'Standard 3★', b2bNet: 2800, suggestedFitSell: 3500, plan: 'CP' },
  { id: 'twg-6', destination: 'Tawang', state: 'Arunachal Pradesh', hotel: 'Hotel Monyul Residency', category: 'Standard 3★', b2bNet: 2800, suggestedFitSell: 3500, plan: 'CP' },
  { id: 'twg-7', destination: 'Tawang', state: 'Arunachal Pradesh', hotel: 'Hotel Tashi Ga-tsel', category: 'Standard 3★', b2bNet: 2600, suggestedFitSell: 3300, plan: 'CP' },
  { id: 'twg-8', destination: 'Tawang', state: 'Arunachal Pradesh', hotel: 'Hotel Zax Star', category: 'Standard 3★', b2bNet: 2800, suggestedFitSell: 3500, plan: 'CP' },
  { id: 'twg-9', destination: 'Tawang', state: 'Arunachal Pradesh', hotel: 'Hotel Gakyi Khang Zhang', category: 'Standard 3★', b2bNet: 2800, suggestedFitSell: 3500, plan: 'CP' },
  { id: 'twg-10', destination: 'Tawang', state: 'Arunachal Pradesh', hotel: 'Timilo Boutique', category: 'Luxury Boutique', b2bNet: 6000, suggestedFitSell: 7500, plan: 'CP' },

  // Bomdila
  { id: 'bmd-1', destination: 'Bomdila', state: 'Arunachal Pradesh', hotel: 'Namsay Hotel', category: 'Budget/Standard', b2bNet: 2200, suggestedFitSell: 2800, plan: 'CP' },
  { id: 'bmd-2', destination: 'Bomdila', state: 'Arunachal Pradesh', hotel: 'Hotel Bonsai', category: 'Budget/Standard', b2bNet: 2000, suggestedFitSell: 2500, plan: 'CP' },
  { id: 'bmd-3', destination: 'Bomdila', state: 'Arunachal Pradesh', hotel: 'Hotel Tsepal Yangjom', category: 'Standard 3★', b2bNet: 2300, suggestedFitSell: 3000, plan: 'CP' },
  { id: 'bmd-4', destination: 'Bomdila', state: 'Arunachal Pradesh', hotel: 'Hotel Elysium Bomdila', category: 'Standard 3★', b2bNet: 2300, suggestedFitSell: 3000, plan: 'CP' },
  { id: 'bmd-5', destination: 'Bomdila', state: 'Arunachal Pradesh', hotel: 'Hotel Grand Bomdila', category: 'Standard 3★', b2bNet: 2200, suggestedFitSell: 2900, plan: 'CP' },
  { id: 'bmd-6', destination: 'Bomdila', state: 'Arunachal Pradesh', hotel: 'Hotel Kitmo', category: 'Budget/Standard', b2bNet: 2000, suggestedFitSell: 2600, plan: 'CP' },
  { id: 'bmd-7', destination: 'Bomdila', state: 'Arunachal Pradesh', hotel: 'Hotel Tsepal Yangjom - Deluxe', category: 'Premium', b2bNet: 2800, suggestedFitSell: 3500, plan: 'CP' },
  { id: 'bmd-8', destination: 'Bomdila', state: 'Arunachal Pradesh', hotel: 'Circuit House Bomdila', category: 'Govt Lodge', b2bNet: 1800, suggestedFitSell: 2300, plan: 'CP' },
  { id: 'bmd-9', destination: 'Bomdila', state: 'Arunachal Pradesh', hotel: 'Monastery View Homestay', category: 'Budget Homestay', b2bNet: 1500, suggestedFitSell: 2000, plan: 'CP' },
  { id: 'bmd-10', destination: 'Bomdila', state: 'Arunachal Pradesh', hotel: 'Bomdila Tourist Lodge', category: 'Budget Lodge', b2bNet: 1800, suggestedFitSell: 2300, plan: 'CP' },

  // Majuli
  { id: 'mjl-1', destination: 'Majuli', state: 'Assam', hotel: 'Prashanti Loghut Complex', category: 'Budget Lodge', b2bNet: 1200, suggestedFitSell: 1600, plan: 'CP' },
  { id: 'mjl-2', destination: 'Majuli', state: 'Assam', hotel: 'La Maison de Ananda', category: 'Standard Homestay', b2bNet: 1600, suggestedFitSell: 2200, plan: 'CP' },
  { id: 'mjl-3', destination: 'Majuli', state: 'Assam', hotel: 'Ygdrasill Bamboo Cottage', category: 'Standard Homestay', b2bNet: 1800, suggestedFitSell: 2400, plan: 'CP' },
  { id: 'mjl-4', destination: 'Majuli', state: 'Assam', hotel: 'Jonki Panoi Bamboo Cottages', category: 'Standard Homestay', b2bNet: 1500, suggestedFitSell: 2100, plan: 'CP' },
  { id: 'mjl-5', destination: 'Majuli', state: 'Assam', hotel: 'Pansari Resort', category: 'Standard Resort', b2bNet: 1800, suggestedFitSell: 2500, plan: 'CP' },
  { id: 'mjl-6', destination: 'Majuli', state: 'Assam', hotel: 'Island View Majuli', category: 'Standard Resort', b2bNet: 2000, suggestedFitSell: 2800, plan: 'CP' },
  { id: 'mjl-7', destination: 'Majuli', state: 'Assam', hotel: 'River Wind Cottage', category: 'Budget Cottage', b2bNet: 1200, suggestedFitSell: 1700, plan: 'CP' },
  { id: 'mjl-8', destination: 'Majuli', state: 'Assam', hotel: 'Okegiga Homes', category: 'Budget Homestay', b2bNet: 1300, suggestedFitSell: 1800, plan: 'CP' },
  { id: 'mjl-9', destination: 'Majuli', state: 'Assam', hotel: 'Majuli Bamboo House', category: 'Budget Homestay', b2bNet: 1200, suggestedFitSell: 1700, plan: 'CP' },
  { id: 'mjl-10', destination: 'Majuli', state: 'Assam', hotel: 'Mishing Bamboo Cottage', category: 'Budget Homestay', b2bNet: 1200, suggestedFitSell: 1700, plan: 'CP' },

  // Nameri
  { id: 'nmr-1', destination: 'Nameri', state: 'Assam', hotel: 'Jia Bhoroli Resort', category: 'Standard Resort', b2bNet: 2500, suggestedFitSell: 3200, plan: 'CP' },
  { id: 'nmr-2', destination: 'Nameri', state: 'Assam', hotel: 'Nameri Eco Camp', category: 'Standard Eco Camp', b2bNet: 2200, suggestedFitSell: 2800, plan: 'CP' },
  { id: 'nmr-3', destination: 'Nameri', state: 'Assam', hotel: 'Sonai Nameri', category: 'Standard Lodge', b2bNet: 2200, suggestedFitSell: 2800, plan: 'CP' },
  { id: 'nmr-4', destination: 'Nameri', state: 'Assam', hotel: 'Nameri Breeze Camp', category: 'Standard Resort', b2bNet: 2200, suggestedFitSell: 2800, plan: 'CP' },
  { id: 'nmr-5', destination: 'Nameri', state: 'Assam', hotel: 'Nameri Jungle Camp', category: 'Budget/Standard', b2bNet: 1800, suggestedFitSell: 2400, plan: 'CP' },
  { id: 'nmr-6', destination: 'Nameri', state: 'Assam', hotel: 'Nameri National Park Eco Camp', category: 'Budget Eco Camp', b2bNet: 1800, suggestedFitSell: 2400, plan: 'CP' },
  { id: 'nmr-7', destination: 'Nameri', state: 'Assam', hotel: 'Eco Camp Potasali', category: 'Standard Eco Camp', b2bNet: 2000, suggestedFitSell: 2600, plan: 'CP' },
  { id: 'nmr-8', destination: 'Nameri', state: 'Assam', hotel: 'Bhalukpong Nature Camp', category: 'Budget/Standard', b2bNet: 1800, suggestedFitSell: 2400, plan: 'CP' },
  { id: 'nmr-9', destination: 'Nameri', state: 'Assam', hotel: 'Wild Mahseer Assam', category: 'Luxury 5★', b2bNet: 5100, suggestedFitSell: 6000, plan: 'CP' },
  { id: 'nmr-10', destination: 'Nameri', state: 'Assam', hotel: 'Jia Bhoroli Riverside Stay', category: 'Standard', b2bNet: 2000, suggestedFitSell: 2700, plan: 'CP' }
];

/**
 * Benchmark destination tariffs aggregated from the official hotel tariff sheet
 * (Standard 3★ vs Deluxe/Premium 4★ Suggested FIT Sell Rates with CP breakfast)
 */
export const HOTEL_TARIFFS: DestinationHotelTariff[] = [
  {
    destination: 'Guwahati',
    state: 'Assam',
    standardRatePerNight: 3350,
    deluxeRatePerNight: 5400,
    featuredStandardHotels: ['Rajmahal (₹3,400)', 'Hotel Palacio (₹3,300)', 'Hotel Atithi (₹2,800)'],
    featuredDeluxeHotels: ['The Lily Hotel (₹5,200)', 'The Greenwood (₹5,600)', 'Novotel (₹6,500)'],
    altitudeOrZone: 'Brahmaputra Valley (55m)',
    notes: 'Base gateway hub. AC rooms, high-speed WiFi, attached western baths, CP breakfast.'
  },
  {
    destination: 'Shillong',
    state: 'Meghalaya',
    standardRatePerNight: 3900,
    deluxeRatePerNight: 5500,
    featuredStandardHotels: ['M Crown Hotel (₹4,400)', 'The Centre Point (₹4,000)', 'Hotel Heiga VNS (₹3,800)'],
    featuredDeluxeHotels: ['Hotel Polo Towers (₹6,500)', 'Ri Shat Sngi Orchid Resort (₹5,200)', 'Courtyard Marriott (₹9,000)'],
    altitudeOrZone: 'East Khasi Hills (1,525m)',
    notes: 'Scotland of the East. Room heaters in winter, CP breakfast included.'
  },
  {
    destination: 'Cherrapunjee (Sohra)',
    state: 'Meghalaya',
    standardRatePerNight: 4000,
    deluxeRatePerNight: 10950,
    featuredStandardHotels: ['Kutmadan Resort (₹4,500)', 'Sohra Plaza (₹3,800)', 'Coniferous Resort (₹3,800)'],
    featuredDeluxeHotels: ['Polo Orchid Resort (₹11,475)', 'Jiva Resort (₹10,450)', 'Cherrapunjee Holiday Resort (₹8,130 MAP)'],
    altitudeOrZone: 'Plateau & Waterfalls (1,484m)',
    notes: 'Gorge cliff-edge views, private balconies, hot geysers, organic Khasi breakfast.'
  },
  {
    destination: 'Kaziranga',
    state: 'Assam',
    standardRatePerNight: 3800,
    deluxeRatePerNight: 6850,
    featuredStandardHotels: ['Dhanshree Resort (₹4,000)', 'Bon Villa Retreat (₹3,800)', 'Tushita Ban (₹3,500)'],
    featuredDeluxeHotels: ['IORA The Retreat (₹7,500)', 'Infinity Resort (₹6,000)', 'Borgos Resort (₹8,000)'],
    altitudeOrZone: 'National Park Wildlife Zone',
    notes: 'Near Central Kohora & Western Bagori safari gates. Jungle lawn setting with CP breakfast.'
  },
  {
    destination: 'Tezpur',
    state: 'Assam',
    standardRatePerNight: 3350,
    deluxeRatePerNight: 5200,
    featuredStandardHotels: ['Cygnett Inn Imperial (₹3,800)', 'Welkin Residency (₹3,500)', 'Hotel Palazzo Prime (₹3,200)'],
    featuredDeluxeHotels: ['The Greenwood Hotel (₹5,200)', 'Lakeside Manor (₹6,300)', 'Wild Mahseer (₹6,000)'],
    altitudeOrZone: 'Sonitpur Transit Hub',
    notes: 'Strategic stopover before ascending to Bhalukpong & western Arunachal.'
  },
  {
    destination: 'Dirang',
    state: 'Arunachal Pradesh',
    standardRatePerNight: 3200,
    deluxeRatePerNight: 5350,
    featuredStandardHotels: ['Hotel Pemaling (₹3,150)', 'The Mandala Hotel (₹3,350)', 'Regal Dirang (₹3,350)'],
    featuredDeluxeHotels: ['Hotel Rigsel Super Deluxe (₹5,200)', 'Summit Rungkhung Resort (₹6,500)', 'Hotel Rigsel Deluxe (₹4,400)'],
    altitudeOrZone: 'Dirang River Valley (1,560m)',
    notes: 'Acclimatization halt below Sela Pass. Apple orchard views, heavy thermal duvets, CP plan.'
  },
  {
    destination: 'Tawang',
    state: 'Arunachal Pradesh',
    standardRatePerNight: 3500,
    deluxeRatePerNight: 5200,
    featuredStandardHotels: ['Hotel Dekyi Pelbar (₹3,500)', 'Hotel Yangzom (₹3,500)', 'Hotel Monyul Residency (₹3,500)'],
    featuredDeluxeHotels: ['Hotel Taktsang (₹5,000)', 'Hotel Tsering Yangkhil (₹5,600)', 'Timilo Boutique (₹7,500)'],
    altitudeOrZone: 'High-Altitude Himalayan Town (3,048m)',
    notes: 'Sub-zero Himalayan heights. 24/7 dedicated room heaters, geysers, hot breakfast guaranteed.'
  },
  {
    destination: 'Bomdila',
    state: 'Arunachal Pradesh',
    standardRatePerNight: 2950,
    deluxeRatePerNight: 3500,
    featuredStandardHotels: ['Hotel Tsepal Yangjom (₹3,000)', 'Hotel Elysium (₹3,000)', 'Hotel Grand Bomdila (₹2,900)'],
    featuredDeluxeHotels: ['Hotel Tsepal Yangjom Deluxe (₹3,500)', 'Namsay Hotel (₹2,800)'],
    altitudeOrZone: 'Himalayan Ridge (2,415m)',
    notes: 'Panoramic Kangto peak views, Buddhist monasteries, Monpa hospitality & breakfast.'
  },
  {
    destination: 'Majuli',
    state: 'Assam',
    standardRatePerNight: 2400,
    deluxeRatePerNight: 2800,
    featuredStandardHotels: ['La Maison de Ananda (₹2,200)', 'Ygdrasill Bamboo Cottage (₹2,400)', 'Jonki Panoi (₹2,100)'],
    featuredDeluxeHotels: ['Island View Majuli (₹2,800)', 'Pansari Resort (₹2,500)'],
    altitudeOrZone: 'Brahmaputra River Island',
    notes: 'Authentic Mishing bamboo stilt cottages and heritage eco-resorts with tribal breakfasts.'
  },
  {
    destination: 'Nameri',
    state: 'Assam',
    standardRatePerNight: 2800,
    deluxeRatePerNight: 6000,
    featuredStandardHotels: ['Jia Bhoroli Resort (₹3,200)', 'Nameri Eco Camp (₹2,800)', 'Nameri Breeze Camp (₹2,800)'],
    featuredDeluxeHotels: ['Wild Mahseer Assam (₹6,000)', 'Jia Bhoroli Resort (₹3,200)'],
    altitudeOrZone: 'Jia Bhoroli River & Foothills',
    notes: 'Riverside luxury heritage tea bungalows and jungle eco-camps adjacent to national park.'
  }
];

export type HotelTier = 'standard' | 'deluxe';

export function getHotelTariff(destination: string): DestinationHotelTariff | undefined {
  const normalized = destination.toLowerCase().trim();
  return HOTEL_TARIFFS.find(h => 
    h.destination.toLowerCase().includes(normalized) || 
    normalized.includes(h.destination.toLowerCase())
  );
}
