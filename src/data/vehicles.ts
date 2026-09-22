export type VehicleTypeId = 'sedan' | 'suv' | 'innova' | 'innova_crysta' | 'tempo_traveller';

export interface VehicleTariff {
  id: VehicleTypeId;
  name: string;
  shortName: string;
  models: string;
  seatingCapacity: number;
  recommendedGroupSize: number;
  meghalayaAssamRatePerDay: number;
  arunachalRatePerDay: number | null; // null represents N/A
  suitableForArunachal: boolean;
  description: string;
  badge?: string;
}

export const VEHICLE_TARIFFS: VehicleTariff[] = [
  {
    id: 'sedan',
    name: 'Sedan (Swift Dzire / Etios)',
    shortName: 'Sedan',
    models: 'Maruti Swift Dzire / Toyota Etios',
    seatingCapacity: 4,
    recommendedGroupSize: 2,
    meghalayaAssamRatePerDay: 3800,
    arunachalRatePerDay: null,
    suitableForArunachal: false,
    description: 'Smooth, air-conditioned comfortable ride ideal for couples and duos exploring paved highway circuits across Assam and Meghalaya hills.',
    badge: 'Popular for Duos'
  },
  {
    id: 'suv',
    name: 'SUV (Scorpio / Bolero / Xylo)',
    shortName: 'SUV',
    models: 'Mahindra Scorpio / Bolero 4x4 / Mahindra Xylo',
    seatingCapacity: 6,
    recommendedGroupSize: 3,
    meghalayaAssamRatePerDay: 4800,
    arunachalRatePerDay: 7200,
    suitableForArunachal: true,
    description: 'High ground-clearance workhorse built for rugged mountain passes, unpaved offbeat roads, and steep Arunachal switchbacks.',
    badge: 'Rugged Frontier Pick'
  },
  {
    id: 'innova',
    name: 'Innova',
    shortName: 'Innova',
    models: 'Toyota Innova Classic / Touring',
    seatingCapacity: 7,
    recommendedGroupSize: 4,
    meghalayaAssamRatePerDay: 5800,
    arunachalRatePerDay: 8200,
    suitableForArunachal: true,
    description: 'The golden standard of Indian road trips with plush captain seating, generous luggage capacity, and supreme highway endurance.',
    badge: 'Family Favorite'
  },
  {
    id: 'innova_crysta',
    name: 'Innova Crysta',
    shortName: 'Innova Crysta',
    models: 'Toyota Innova Crysta Luxury Edition',
    seatingCapacity: 7,
    recommendedGroupSize: 5,
    meghalayaAssamRatePerDay: 6500,
    arunachalRatePerDay: 9000,
    suitableForArunachal: true,
    description: 'Ultimate premium passenger comfort with individual climate control, whisper-quiet cabin acoustics, and high hill power.',
    badge: 'Executive Comfort'
  },
  {
    id: 'tempo_traveller',
    name: 'Tempo Traveller (12-Seater)',
    shortName: 'Tempo Traveller',
    models: 'Force Motors Tempo Traveller 12-Seater High-Roof',
    seatingCapacity: 10,
    recommendedGroupSize: 6,
    meghalayaAssamRatePerDay: 7800,
    arunachalRatePerDay: 10800,
    suitableForArunachal: true,
    description: 'Spacious high-roof van for family reunions, photography expeditions, and friend groups with wide picture windows and ample luggage space.',
    badge: 'Group & Extended Family'
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
 * Returns the official daily rate based on vehicle and zone
 */
export function getDailyVehicleRate(vehicleId: VehicleTypeId, isArunachal: boolean): number | null {
  const vehicle = VEHICLE_TARIFFS.find(v => v.id === vehicleId);
  if (!vehicle) return 4800;
  if (isArunachal) {
    return vehicle.arunachalRatePerDay;
  }
  return vehicle.meghalayaAssamRatePerDay;
}

/**
 * Smart recommendation for vehicle based on passenger count and zone
 */
export function getRecommendedVehicle(travelers: number, isArunachal: boolean): VehicleTypeId {
  if (isArunachal) {
    if (travelers <= 3) return 'suv';
    if (travelers === 4) return 'innova';
    if (travelers === 5) return 'innova_crysta';
    return 'tempo_traveller';
  }

  // Meghalaya & Assam
  if (travelers <= 2) return 'sedan';
  if (travelers === 3) return 'suv';
  if (travelers === 4) return 'innova';
  if (travelers === 5) return 'innova_crysta';
  return 'tempo_traveller';
}
