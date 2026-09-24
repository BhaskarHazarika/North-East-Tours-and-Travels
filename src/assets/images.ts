import assamTeaImg from './images/assam_tea_gardens_1789671228309.jpg';
import kazirangaRhinoImg from './images/kaziranga_rhino_1789671189525.jpg';
import meghalayaRootBridgeImg from './images/meghalaya_root_bridge_1789671209758.jpg';
import dawkiRiverImg from './images/dawki_river_1789671354365.jpg';
import arunachalTawangImg from './images/arunachal_tawang_1789671241981.jpg';
import nagalandHornbillImg from './images/nagaland_hornbill_1789671254232.jpg';
import manipurLoktakImg from './images/manipur_loktak_1789671269595.jpg';
import mizoramReiekImg from './images/mizoram_reiek_1789671283666.jpg';
import tripuraNeermahalImg from './images/tripura_neermahal_1789671299223.jpg';
import sikkimKanchenjungaImg from './images/sikkim_kanchenjunga_1789671310521.jpg';
import dzukouValleyImg from './images/dzukou_valley_1789671328735.jpg';
import ziroValleyImg from './images/ziro_valley_1789671341533.jpg';
import heroMountainsImg from './images/northeast_hero_mountains_1789671371864.jpg';
import vibrantHeroImg from './images/northeast_vibrant_hero_1790253965696.jpg';

export const CAMERA_IMAGES = {
  // Hero & General
  heroMountains: heroMountainsImg,
  heroVibrant: vibrantHeroImg,

  // States
  assam: assamTeaImg,
  meghalaya: meghalayaRootBridgeImg,
  arunachal: arunachalTawangImg,
  nagaland: nagalandHornbillImg,
  manipur: manipurLoktakImg,
  mizoram: mizoramReiekImg,
  tripura: tripuraNeermahalImg,
  sikkim: sikkimKanchenjungaImg,

  // Subjects & Major Attractions
  kazirangaRhino: kazirangaRhinoImg,
  assamTea: assamTeaImg,
  rootBridge: meghalayaRootBridgeImg,
  dawkiRiver: dawkiRiverImg,
  tawangMonastery: arunachalTawangImg,
  hornbillFestival: nagalandHornbillImg,
  dzukouValley: dzukouValleyImg,
  ziroValley: ziroValleyImg,
  loktakLake: manipurLoktakImg,
  reiekMizoram: mizoramReiekImg,
  neermahalTripura: tripuraNeermahalImg,
  kanchenjungaSikkim: sikkimKanchenjungaImg
};

/**
 * Returns authentic camera photo for each of the 8 North-East states
 */
export function getStateHeroImage(stateName: string): string {
  const norm = (stateName || '').toLowerCase();
  if (norm.includes('assam')) return CAMERA_IMAGES.assam;
  if (norm.includes('meghalaya')) return CAMERA_IMAGES.meghalaya;
  if (norm.includes('arunachal')) return CAMERA_IMAGES.arunachal;
  if (norm.includes('nagaland')) return CAMERA_IMAGES.nagaland;
  if (norm.includes('manipur')) return CAMERA_IMAGES.manipur;
  if (norm.includes('mizoram')) return CAMERA_IMAGES.mizoram;
  if (norm.includes('tripura')) return CAMERA_IMAGES.tripura;
  if (norm.includes('sikkim')) return CAMERA_IMAGES.sikkim;
  return CAMERA_IMAGES.heroMountains;
}
