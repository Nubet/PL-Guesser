import type { RoundResult } from "@/features/game/domain/types";

type FinalScoreProps = {
  totalPoints: number;
  history: RoundResult[];
  onRestart: () => void;
};

export function FinalScore({ totalPoints, history, onRestart }: FinalScoreProps) {
  let rank = "Legenda Kampusu";
  let rankColor = "text-emerald-600";
  if (totalPoints < 10000) { rank = "Początkujący"; rankColor = "text-brand"; }
  else if (totalPoints < 18000) { rank = "Przewodnik"; rankColor = "text-amber-500"; }

  return (
    <section className="mx-auto max-w-3xl pt-10">
      <div className="ui-card relative p-8 text-center md:p-14">
        
        <div className="relative z-10">
          <div className="ui-badge">
            Gra Zakończona
          </div>
          
          <h2 className="mt-10 text-sm font-sans uppercase tracking-wider text-foreground/60">Twój wynik końcowy</h2>
          <p className={`mt-2 font-heading text-7xl md:text-[6rem] ${rankColor}`}>
            {totalPoints}
          </p>
          
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-sm font-sans uppercase tracking-wider text-foreground/50">Ranga:</span>
            <span className={`border-2 border-border bg-surface px-4 py-1.5 font-heading text-2xl uppercase shadow-[2px_2px_0_0_var(--color-border)] ${rankColor}`}>
              {rank}
            </span>
          </div>

          <div className="mx-auto mt-12 grid max-w-lg gap-3">
            <h3 className="mb-2 text-left text-sm font-sans uppercase tracking-wider text-foreground/50">Historia rund</h3>
            {history.map((round) => (
              <div
                key={round.roundNumber}
                className="flex items-center justify-between border-2 border-border bg-surface px-5 py-4 shadow-[2px_2px_0_0_var(--color-border)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center bg-foreground/10 text-sm font-sans text-foreground/70">
                    {round.roundNumber}
                  </div>
                  <p className="text-left font-sans text-foreground line-clamp-1">{round.locationName}</p>
                </div>
                <p className="font-heading text-2xl text-foreground">+{round.points}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRestart}
            className="ui-button ui-button-primary mt-12 px-12 py-5 text-xl"
          >
            Zagraj ponownie
            <svg className="ml-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
