// Distance helpers, centered on downtown Fort Payne, Alabama.
// Coordinates supplied by the project brief.

export const FORT_PAYNE = {
  name: "Downtown Fort Payne, Alabama",
  lat: 34.444256,
  lng: -85.719582,
} as const;

export const SEARCH_RADIUS_MILES = 150;

const EARTH_RADIUS_MILES = 3958.7613;

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/**
 * Great-circle ("as the crow flies") distance between two points in miles.
 * This is straight-line distance, not road distance.
 */
export function haversineMiles(
  aLat: number,
  aLng: number,
  bLat: number,
  bLng: number
): number {
  const dLat = toRadians(bLat - aLat);
  const dLng = toRadians(bLng - aLng);
  const lat1 = toRadians(aLat);
  const lat2 = toRadians(bLat);

  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;

  return 2 * EARTH_RADIUS_MILES * Math.asin(Math.min(1, Math.sqrt(h)));
}

/** Straight-line miles from downtown Fort Payne to the given point. */
export function milesFromFortPayne(lat: number, lng: number): number {
  return haversineMiles(FORT_PAYNE.lat, FORT_PAYNE.lng, lat, lng);
}

/** Rounded straight-line miles from Fort Payne (whole number). */
export function roundedMilesFromFortPayne(lat: number, lng: number): number {
  return Math.round(milesFromFortPayne(lat, lng));
}

export function isWithinSearchRadius(lat: number, lng: number): boolean {
  return milesFromFortPayne(lat, lng) <= SEARCH_RADIUS_MILES;
}
