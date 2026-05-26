"use client";

import { useEffect, useState } from "react";

import type { CampusLocation, Coordinates } from "@/features/game/domain/types";
import { StreetView } from "@/features/game/ui/street-view";

type RoundPanelProps = {
  location: CampusLocation;
  roundLabel: string;
  totalPoints: number;
  guess: Coordinates | null;
  onGuessChange: (guess: Coordinates) => void;
  GuessMap: React.ComponentType<{
    guess: Coordinates | null;
    onGuessChange?: (guess: Coordinates) => void;
  }>;
  onSubmit: () => void;
};

export function RoundPanel({
  location,
  roundLabel,
  totalPoints,
  guess,
  onGuessChange,
  GuessMap,
  onSubmit,
}: RoundPanelProps) {
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);

  useEffect(() => {
    if (!isMapFullscreen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMapFullscreen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMapFullscreen]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <StreetView location={location} />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-brand)_35%,transparent)_0%,transparent_22%,transparent_72%,color-mix(in_oklab,var(--color-brand)_45%,transparent)_100%)]" />

      <article className="pointer-events-none absolute left-0 top-0 flex w-full items-center justify-between px-6 py-5 md:px-10 md:py-7">
        <div className="pointer-events-auto rounded-2xl border border-white/30 bg-black/40 px-5 py-3 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">{roundLabel}</p>
          <p className="text-xl font-semibold text-white">Tryb zgadywania</p>
        </div>

        <div className="pointer-events-auto rounded-2xl border border-white/30 bg-black/40 px-5 py-3 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.16em] text-white/75">Wynik</p>
          <p className="text-xl font-semibold text-white">{totalPoints} pkt</p>
        </div>
      </article>

      <article className="panel-shadow absolute bottom-6 right-6 z-20 w-[22rem] overflow-hidden rounded-3xl border border-border/70 bg-surface md:bottom-8 md:right-8 md:w-[26rem]">
        <div className="border-b border-border/70 px-5 py-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-foreground">Zaznacz miejsce na mapie</h2>
              <p className="mt-1 text-sm text-foreground/75">Kliknij lokalizację i zatwierdź strzał.</p>
            </div>
            <button
              type="button"
              onClick={() => setIsMapFullscreen(true)}
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-foreground transition hover:bg-surface-muted"
            >
              Pełny ekran
            </button>
          </div>
        </div>
        <div className="bg-surface-muted h-[18rem] w-full">
          <GuessMap guess={guess} onGuessChange={onGuessChange} />
        </div>
        <div className="flex items-center justify-between px-5 py-4">
          <p className="text-sm text-foreground/75">{guess ? "Punkt zaznaczony" : "Czekamy na Twój strzał"}</p>
          <button
            type="button"
            disabled={!guess}
            onClick={onSubmit}
            className="bg-brand hover:bg-brand-hover rounded-full px-6 py-3 text-sm font-semibold text-white transition enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Zatwierdź strzał
          </button>
        </div>
      </article>

      {isMapFullscreen ? (
        <aside className="fixed inset-0 z-50 bg-black/65 p-4 md:p-8">
          <div className="panel-shadow flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border bg-surface">
            <div className="flex items-center justify-between border-b border-border/70 px-5 py-4 md:px-6">
              <div>
                <h3 className="text-base font-semibold text-foreground md:text-lg">Mapa - pełny ekran</h3>
                <p className="text-xs text-foreground/75 md:text-sm">ESC lub przycisk, aby zminimalizować.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsMapFullscreen(false)}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-foreground transition hover:bg-surface-muted md:text-sm"
              >
                Minimalizuj
              </button>
            </div>
            <div className="bg-surface-muted h-full w-full">
              <GuessMap guess={guess} onGuessChange={onGuessChange} />
            </div>
          </div>
        </aside>
      ) : null}
    </section>
  );
}
