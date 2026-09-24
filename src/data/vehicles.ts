export type VehicleTypeId = 'sedan' | 'sumo' | 'suv' | 'innova' | 'innova_crysta' | 'tempo_traveller' | 'urbania';

export interface VehicleTariff {
  id: VehicleTypeId;
  name: string;
  shortName: string;
  models: string;
  seatingCapacity: number;
  recommendedGroupSize: number;
  recommendedGroupLabel: string;
  meghalayaAssamRatePerDay: number | null; // null represents NA
  arunachalRatePerDay: number | null; // null represents N/A
  suitableForArunachal: boolean;
  description: string;
  badge?: string;
}

export const VEHICLE_TARIFFS: VehicleTariff[] = [
  {
    id: 'sedan',
    name: 'Sedan (Swift Dzire / Etios)',
    shortName: 'Sedan (Swift Dzire/Etios)',
    models: 'Maruti Swift Dzire / Toyota Etios',
    seatingCapacity: 4,
    recommendedGroupSize: 2,
    recommendedGroupLabel: '2',
    meghalayaAssamRatePerDay: 3800,
    arunachalRatePerDay: null,
    suitableForArunachal: false,
    description: 'Smooth, air-conditioned comfortable ride ideal for duos exploring paved highway circuits across Assam and Meghalaya hills.',
    badge: 'Popular for Duos'
  },
  {
    id: 'sumo',
    name: 'Sumo (Budget SUV)',
    shortName: 'Sumo (Budget SUV)',
    models: 'Tata Sumo Gold / Spacio 4x4 Rugged',
    seatingCapacity: 6,
    recommendedGroupSize: 3,
    recommendedGroupLabel: '2-3 (Budget tier)',
    meghalayaAssamRatePerDay: null,
    arunachalRatePerDay: null,
    suitableForArunachal: true,
    description: 'Rugged, high ground-clearance non-luxury mountain carrier for off-road backcountry access and budget mountain expeditions.',
    badge: 'Budget SUV'
  },
  {
    id: 'suv',
    name: 'SUV (Ertiga/Innova)',
    shortName: 'SUV (Ertiga/Innova)',
    models: 'Maruti Ertiga / Toyota Innova',
    seatingCapacity: 6,
    recommendedGroupSize: 3,
    recommendedGroupLabel: '3',
    meghalayaAssamRatePerDay: 4800,
    arunachalRatePerDay: 5300,
    suitableForArunachal: true,
    description: 'High ground-clearance versatile mountain workhorse built for Meghalaya hills and steep Arunachal switchbacks.',
    badge: 'Mountain Workhorse'
  },
  {
    id: 'innova',
    name: 'Innova',
    shortName: 'Innova 7-Seater',
    models: 'Toyota Innova Classic (7-Seater Captain Seats)',
    seatingCapacity: 7,
    recommendedGroupSize: 4,
    recommendedGroupLabel: '4',
    meghalayaAssamRatePerDay: 5000,
    arunachalRatePerDay: 5500,
    suitableForArunachal: true,
    description: 'Proven high-torque hill cruiser with comfortable middle captain chairs and high reliability on rugged terrain.',
    badge: 'Reliable Hill Cruiser'
  },
  {
    id: 'innova_crysta',
    name: 'Innova Crysta',
    shortName: 'Innova Crysta',
    models: 'Toyota Innova Crysta Luxury Edition',
    seatingCapacity: 7,
    recommendedGroupSize: 5,
    recommendedGroupLabel: '5',
    meghalayaAssamRatePerDay: 5500,
    arunachalRatePerDay: 6000,
    suitableForArunachal: true,
    description: 'Ultimate premium passenger comfort with individual climate control, whisper-quiet cabin acoustics, and high hill power.',
    badge: 'Executive Comfort'
  },
  {
    id: 'tempo_traveller',
    name: 'Tempo Traveller (12-Seater)',
    shortName: 'Tempo Traveller',
    models: 'Force Motors Tempo Traveller (12-Seater High Roof)',
    seatingCapacity: 10,
    recommendedGroupSize: 6,
    recommendedGroupLabel: '6 (Budget tier)',
    meghalayaAssamRatePerDay: 8000,
    arunachalRatePerDay: 9000,
    suitableForArunachal: true,
    description: 'Spacious high-roof vehicle for family reunions, photography expeditions, and friend groups with wide picture windows and ample luggage space.',
    badge: 'Group Expeditions'
  },
  {
    id: 'urbania',
    name: 'Urbania (12-Seater Premium)',
    shortName: 'Force Urbania Premium',
    models: 'Force Urbania Luxury Van (12-Seater Premium Monocoque)',
    seatingCapacity: 12,
    recommendedGroupSize: 6,
    recommendedGroupLabel: '6 (Standard/Deluxe)',
    meghalayaAssamRatePerDay: 10000,
    arunachalRatePerDay: 11000,
    suitableForArunachal: true,
    description: 'Ultra-luxurious European-style monocoque van with individual reclining seats, panoramic view glass, and superior ride comfort.',
    badge: 'Ultra-Luxury Van'
  }
];

/**
 * Helper to determine if a tour covers Arunachal Pradesh
 */
export function isTourInArunachalZone(stateOrCovered: string | string[] | undefined): boolean {
  if (!stateOrCovered) return false;
  if (Array.isArray(stateOrCovered)) {
    return stateOrCovered.some(s => s.toLowerCase().includes('arunachal'));
  }
  return stateOrCovered.toLowerCase().includes('arunachal');
}

/**
 * Returns the recommended vehicle based on party size and circuit
 */
export function getRecommendedVehicle(travelers: number, isArunachal: boolean): VehicleTypeId {
  if (isArunachal) {
    if (travelers <= 3) return 'suv';
    if (travelers === 4) return 'innova';
    if (travelers === 5) return 'innova_crysta';
    if (travelers <= 8) return 'tempo_traveller';
    return 'urbania';
  } else {
    if (travelers <= 2) return 'sedan';
    if (travelers === 3) return 'suv';
    if (travelers === 4) return 'innova';
    if (travelers === 5) return 'innova_crysta';
    if (travelers <= 8) return 'tempo_traveller';
    return 'urbania';
  }
}

/**
 * Returns the official daily rate based on vehicle and zone
 */
export function getDailyVehicleRate(vehicleId: VehicleTypeId, isArunachal: boolean): number | null {
  const vehicle = VEHICLE_TARIFFS.find(v => v.id === vehicleId);
  if (!vehicle) return null;
  return isArunachal ? vehicle.arunachalRatePerDay : vehicle.meghalayaAssamRatePerDay;
}
