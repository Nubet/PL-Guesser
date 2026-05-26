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
    <section className="relative h-screen w-full overflow-hidden font-sans">
      <StreetView location={location} />

      {/* Top Indicators - Neo Brutalist styling */}
      <article className="pointer-events-none absolute left-0 top-0 z-20 flex w-full items-start justify-between p-4 md:p-6 md:px-8">
        
        {/* Round Counter */}
        <div className="ui-card pointer-events-auto flex items-center gap-3 px-5 py-3 !shadow-[4px_4px_0_0_var(--color-border)]">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-border bg-brand">
            <svg className="h-6 w-6 text-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-foreground/60">Runda</span>
            <span className="font-heading text-2xl leading-none text-foreground">{roundLabel}</span>
          </div>
        </div>

        {/* Score Counter */}
        <div className="ui-card pointer-events-auto flex items-center gap-3 px-5 py-3 !shadow-[4px_4px_0_0_var(--color-border)]">
          <div className="flex flex-col text-right">
            <span className="text-xs uppercase tracking-wider text-foreground/60">Wynik</span>
            <span className="font-heading text-3xl leading-none text-brand">{totalPoints}</span>
          </div>
          <div className="flex h-10 w-10 items-center justify-center border-2 border-border bg-surface">
            <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </div>
      </article>

      {/* Map & Guess Panel */}
      <article className="pointer-events-none absolute bottom-4 right-4 z-20 flex w-[calc(100vw-32px)] flex-col gap-4 md:bottom-8 md:right-8 md:w-[28rem]">
        
        {/* Map Container */}
        <div className="ui-card pointer-events-auto relative bg-surface p-3 pb-4">
          <div className="ui-map-frame relative h-[260px] w-full md:h-[300px]">
            <div className="absolute inset-0 z-0 bg-background">
              <GuessMap guess={guess} onGuessChange={onGuessChange} />
            </div>
            
            <button
              type="button"
              onClick={() => setIsMapFullscreen(true)}
              className="ui-button ui-button-secondary absolute right-3 top-3 z-10 !size-10 !p-0"
              title="Pełny ekran"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
          
          <div className="mt-4">
            <button
              type="button"
              disabled={!guess}
              onClick={onSubmit}
              className="ui-button ui-button-primary w-full py-4 disabled:cursor-not-allowed disabled:opacity-50 disabled:!transform-none"
            >
              {guess ? "Zatwierdź strzał" : "Zaznacz na mapie"}
            </button>
          </div>
        </div>
      </article>

      {/* Fullscreen Map Modal */}
      {isMapFullscreen ? (
        <aside className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 md:p-8 animate-in fade-in">
          <div className="ui-card flex h-full max-h-[90vh] w-full max-w-6xl flex-col p-3">
            <div className="mb-3 flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border-2 border-border bg-brand">
                  <svg className="h-6 w-6 text-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-foreground">Mapa</h3>
                  <p className="text-sm font-sans text-foreground/50 uppercase tracking-wider">Powiększenie (ESC)</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsMapFullscreen(false)}
                className="ui-button ui-button-secondary px-4 py-2"
              >
                ZAMKNIJ
              </button>
            </div>
            
            <div className="ui-map-frame flex-1 bg-background">
              <GuessMap guess={guess} onGuessChange={onGuessChange} />
            </div>
          </div>
        </aside>
      ) : null}
    </section>
  );
}
