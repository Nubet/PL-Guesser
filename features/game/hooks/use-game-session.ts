"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

import {
  advanceGameSession,
  getGameSessionSnapshot,
  restartGameSession,
  selectCurrentRound,
  startGameSession,
  submitGuessForSession,
  subscribeToGameSession,
} from "@/features/game/application/game-session-service";
import type { Coordinates } from "@/features/game/domain/types";

export function useGameSession() {
  const session = useSyncExternalStore(subscribeToGameSession, getGameSessionSnapshot, () => null);

  const startGame = useCallback(() => {
    startGameSession();
  }, []);

  const restartGame = useCallback(() => {
    restartGameSession();
  }, []);

  const submitGuess = useCallback(
    (guess: Coordinates) => {
      submitGuessForSession(session, guess);
    },
    [session],
  );

  const goToNextRound = useCallback(() => {
    advanceGameSession(session);
  }, [session]);

  const currentRound = useMemo(() => selectCurrentRound(session), [session]);

  return {
    session,
    currentRound,
    startGame,
    restartGame,
    submitGuess,
    goToNextRound,
  };
}
