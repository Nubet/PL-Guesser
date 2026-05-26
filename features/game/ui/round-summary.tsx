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
  // Map points to a color (green for good, yellow for ok, red for bad)
  const scoreColor = result.points > 4000 ? "text-emerald-600" : result.points > 2000 ? "text-amber-500" : "text-brand";

  return (
    <section className="mx-auto grid min-h-[80vh] max-w-6xl gap-8 lg:grid-cols-[1fr_1.5fr] mt-8">
      <article className="ui-card flex flex-col justify-between p-8 md:p-10">
        <div>
          <div className="ui-badge">
            Runda {result.roundNumber} zakończona
          </div>
          
          <div className="mt-8">
            <h2 className="text-sm font-sans uppercase tracking-wider text-foreground/60">Zdobyte punkty</h2>
            <p className={`font-heading text-6xl ${scoreColor} md:text-7xl`}>
              +{result.points}
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="border-4 border-border bg-surface p-4 shadow-[4px_4px_0_0_var(--color-border)]">
              <p className="text-xs font-sans uppercase tracking-wider text-foreground/70">Dystans od celu</p>
              <p className="font-heading text-3xl text-foreground mt-1">
                {Math.round(result.distanceMeters)} m
              </p>
            </div>
            
            <div className="border-4 border-border bg-surface p-4 shadow-[4px_4px_0_0_var(--color-border)]">
              <p className="text-xs font-sans uppercase tracking-wider text-foreground/70">Lokalizacja</p>
              <p className="font-heading text-2xl text-foreground mt-1">
                {result.locationName}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5">
          <div className="flex items-center justify-between border-4 border-border bg-foreground text-surface p-5 shadow-[4px_4px_0_0_var(--color-brand)]">
            <p className="text-sm font-sans uppercase tracking-wider">Suma punktów</p>
            <p className="font-heading text-4xl">{totalPoints}</p>
          </div>
          
          <button
            type="button"
            onClick={onContinue}
            className="ui-button ui-button-primary py-5 text-xl"
          >
            {isLastRound ? "Pokaż wynik końcowy" : "Następna runda"}
            <svg className="ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </article>

      <article className="ui-card overflow-hidden bg-surface p-3">
        <div className="ui-map-frame h-100 w-full bg-background lg:h-full">
          <GuessMap guess={result.guess} actual={result.actual} showSummaryLine />
        </div>
      </article>
    </section>
  );
}
