import type { Coordinates } from "@/features/game/domain/types";

const EARTH_RADIUS_METERS = 6371000;

const toRadians = (value: number) => (value * Math.PI) / 180;

export function getDistanceInMeters(from: Coordinates, to: Coordinates): number {
  const dLat = toRadians(to.lat - from.lat);
  const dLng = toRadians(to.lng - from.lng);
  const fromLat = toRadians(from.lat);
  const toLat = toRadians(to.lat);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(fromLat) * Math.cos(toLat) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS_METERS * c;
}
