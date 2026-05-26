import { CAMPUS_A_LOCATIONS } from "@/features/game/domain/locations";
import type { CampusLocation, GameSession } from "@/features/game/domain/types";

const ROUNDS_TOTAL = 5;

function shuffleLocations(locations: CampusLocation[]): CampusLocation[] {
  const cloned = [...locations];

  for (let index = cloned.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [cloned[index], cloned[swapIndex]] = [cloned[swapIndex], cloned[index]];
  }

  return cloned;
}

export function createSession(): GameSession {
  const rounds = shuffleLocations(CAMPUS_A_LOCATIONS).slice(0, ROUNDS_TOTAL);

  return {
    phase: "guess",
    roundsTotal: rounds.length,
    currentRoundIndex: 0,
    rounds,
    totalPoints: 0,
    currentRoundResult: null,
    history: [],
  };
}

export function getCurrentRound(session: GameSession) {
  return session.rounds[session.currentRoundIndex] ?? null;
}

export function normalizeSession(session: GameSession | null): GameSession | null {
  if (!session) {
    return null;
  }

  const locationsById = new Map(CAMPUS_A_LOCATIONS.map((location) => [location.id, location]));

  const rounds = session.rounds
    .map((round) => locationsById.get(round.id))
    .filter((round): round is CampusLocation => Boolean(round));

  if (rounds.length === 0) {
    return null;
  }

  const safeRoundIndex = Math.min(session.currentRoundIndex, rounds.length - 1);

  return {
    ...session,
    rounds,
    roundsTotal: rounds.length,
    currentRoundIndex: safeRoundIndex,
  };
}
