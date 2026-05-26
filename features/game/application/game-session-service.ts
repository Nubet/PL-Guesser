import { getDistanceInMeters } from "@/features/game/domain/distance";
import { calculatePointsForDistance } from "@/features/game/domain/scoring";
import { createSession, getCurrentRound, normalizeSession } from "@/features/game/domain/session";
import type { Coordinates, GameSession, RoundResult } from "@/features/game/domain/types";
import {
  clearStoredSession,
  getStoredSessionSnapshotCached,
  saveStoredSession,
  subscribeToStoredSessionChanges,
} from "@/features/game/infrastructure/session-storage";

export function getGameSessionSnapshot(): GameSession | null {
  return normalizeSession(getStoredSessionSnapshotCached());
}

export function subscribeToGameSession(onChange: () => void): () => void {
  return subscribeToStoredSessionChanges(onChange);
}

export function startGameSession(): void {
  saveStoredSession(createSession());
}

export function restartGameSession(): void {
  clearStoredSession();
  saveStoredSession(createSession());
}

export function submitGuessForSession(session: GameSession | null, guess: Coordinates): void {
  if (!session || session.phase !== "guess") {
    return;
  }

  const currentLocation = getCurrentRound(session);
  if (!currentLocation) {
    return;
  }

  const distanceMeters = getDistanceInMeters(guess, currentLocation.coordinates);
  const points = calculatePointsForDistance(distanceMeters);

  const result: RoundResult = {
    roundNumber: session.currentRoundIndex + 1,
    locationId: currentLocation.id,
    locationName: currentLocation.name,
    actual: currentLocation.coordinates,
    guess,
    distanceMeters,
    points,
  };

  saveStoredSession({
    ...session,
    phase: "summary",
    totalPoints: session.totalPoints + points,
    currentRoundResult: result,
    history: [...session.history, result],
  });
}

export function advanceGameSession(session: GameSession | null): void {
  if (!session || session.phase !== "summary") {
    return;
  }

  const isLastRound = session.currentRoundIndex >= session.roundsTotal - 1;

  saveStoredSession({
    ...session,
    phase: isLastRound ? "finished" : "guess",
    currentRoundIndex: isLastRound ? session.currentRoundIndex : session.currentRoundIndex + 1,
    currentRoundResult: null,
  });
}

export function selectCurrentRound(session: GameSession | null) {
  return session ? getCurrentRound(session) : null;
}
