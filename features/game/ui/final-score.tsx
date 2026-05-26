import type { RoundResult } from "@/features/game/domain/types";

type FinalScoreProps = {
  totalPoints: number;
  history: RoundResult[];
  onRestart: () => void;
};

export function FinalScore({ totalPoints, history, onRestart }: FinalScoreProps) {
  return (
    <section className="panel-shadow rounded-3xl border border-border/60 bg-surface p-8">
      <p className="text-brand/65 text-sm font-semibold uppercase tracking-[0.22em]">Koniec gry</p>
      <h2 className="mt-3 text-4xl font-semibold text-foreground">Wynik łączny: {totalPoints} pkt</h2>

      <div className="mt-8 space-y-3">
        {history.map((round) => (
          <div
            key={round.roundNumber}
            className="bg-surface-muted flex items-center justify-between rounded-2xl px-4 py-3"
          >
            <p className="text-sm font-medium text-foreground">Runda {round.roundNumber}</p>
            <p className="text-sm text-foreground/85">{round.points} pkt</p>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="bg-brand hover:bg-brand-hover mt-8 rounded-full px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
      >
        Zagraj ponownie
      </button>
    </section>
  );
}
