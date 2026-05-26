const MAX_POINTS = 5000;
const PERFECT_RADIUS_METERS = 5;
const ZERO_SCORE_RADIUS_METERS = 1200;

export function calculatePointsForDistance(distanceMeters: number): number {
  if (distanceMeters <= PERFECT_RADIUS_METERS) {
    return MAX_POINTS;
  }

  if (distanceMeters >= ZERO_SCORE_RADIUS_METERS) {
    return 0;
  }

  const progress =
    (distanceMeters - PERFECT_RADIUS_METERS) /
    (ZERO_SCORE_RADIUS_METERS - PERFECT_RADIUS_METERS);
  const eased = 1 - progress ** 1.35;

  return Math.max(0, Math.round(MAX_POINTS * eased));
}

export const gameScoreConfig = {
  maxPoints: MAX_POINTS,
  perfectRadiusMeters: PERFECT_RADIUS_METERS,
};
