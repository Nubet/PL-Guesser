"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import type { Coordinates } from "@/features/game/domain/types";
import { useGameSession } from "@/features/game/hooks/use-game-session";
import { FinalScore } from "@/features/game/ui/final-score";
import { RoundPanel } from "@/features/game/ui/round-panel";
import { RoundSummary } from "@/features/game/ui/round-summary";
import { StartScreen } from "@/features/game/ui/start-screen";

const DynamicCampusMap = dynamic(
  () => import("@/features/game/ui/campus-map").then((mod) => mod.CampusMap),
  { ssr: false },
);

export default function GamePage() {
  const { session, currentRound, startGame, submitGuess, goToNextRound, restartGame } =
    useGameSession();
  const [guess, setGuess] = useState<Coordinates | null>(null);

  if (!session) {
    return (
      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <StartScreen
          onStart={() => {
            startGame();
            setGuess(null);
          }}
        />
      </main>
    );
  }

  if (session.phase === "guess" && currentRound) {
    return (
      <main className="w-full">
        <RoundPanel
          location={currentRound}
          roundLabel={`Runda ${session.currentRoundIndex + 1} z ${session.roundsTotal}`}
          totalPoints={session.totalPoints}
          guess={guess}
          onGuessChange={setGuess}
          GuessMap={DynamicCampusMap}
          onSubmit={() => {
            if (!guess) {
              return;
            }
            submitGuess(guess);
            setGuess(null);
          }}
        />
      </main>
    );
  }

  if (session.phase === "summary" && session.currentRoundResult) {
    return (
      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <RoundSummary
          result={session.currentRoundResult}
          totalPoints={session.totalPoints}
          isLastRound={session.currentRoundIndex === session.roundsTotal - 1}
          GuessMap={DynamicCampusMap}
          onContinue={goToNextRound}
        />
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <FinalScore totalPoints={session.totalPoints} history={session.history} onRestart={restartGame} />
    </main>
  );
}
