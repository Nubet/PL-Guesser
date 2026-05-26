import type { Coordinates, RoundResult } from "@/features/game/domain/types";

type RoundSummaryProps = {
  result: RoundResult;
  totalPoints: number;
  GuessMap: React.ComponentType<{
    guess: Coordinates | null;
    actual?: Coordinates;
    showSummaryLine?: boolean;
  }>;
  onContinue: () => void;
  isLastRound: boolean;
};

export function RoundSummary({
  result,
  totalPoints,
  GuessMap,
  onContinue,
  isLastRound,
}: RoundSummaryProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
      <article className="panel-shadow rounded-3xl border border-border/60 bg-surface p-7">
        <p className="text-brand/65 text-sm font-semibold uppercase tracking-[0.2em]">
          Podsumowanie rundy {result.roundNumber}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground">{result.points} pkt</h2>
        <p className="mt-2 text-base text-foreground/80">
          Dystans od celu: <strong>{Math.round(result.distanceMeters)} m</strong>
        </p>
        <p className="bg-surface-muted mt-7 rounded-2xl px-4 py-3 text-sm text-foreground">
          Faktyczna lokalizacja: {result.locationName}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-brand text-sm font-semibold">Suma: {totalPoints} pkt</p>
          <button
            type="button"
            onClick={onContinue}
            className="bg-accent hover:bg-accent-hover rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            {isLastRound ? "Pokaż wynik końcowy" : "Następna runda"}
          </button>
        </div>
      </article>

      <article className="panel-shadow overflow-hidden rounded-3xl border border-border/60 bg-surface">
        <div className="border-b border-border/70 px-6 py-4">
          <h3 className="text-lg font-semibold text-foreground">Twój strzał vs poprawne miejsce</h3>
        </div>
        <div className="bg-surface-muted h-[370px] w-full">
          <GuessMap guess={result.guess} actual={result.actual} showSummaryLine />
        </div>
      </article>
    </section>
  );
}
