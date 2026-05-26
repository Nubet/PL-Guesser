type StartScreenProps = {
  onStart: () => void;
};

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <section className="hero-surface relative overflow-hidden rounded-3xl border border-border/60 p-10 shadow-[0_30px_70px_color-mix(in_oklab,var(--color-brand)_24%,transparent)]">
      <div className="pointer-events-none absolute -left-12 -top-12 size-44 rounded-full border border-brand/20" />
      <div className="pointer-events-none absolute -bottom-16 right-4 size-56 rounded-full border border-accent/25" />

      <p className="text-brand/80 text-sm font-semibold uppercase tracking-[0.35em]">
        Lodz University of Technology
      </p>
      <h1 className="text-brand mt-5 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
        PLGuesser
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-foreground/90">
        Rozpoznaj miejsce na Kampusie A po jednym zdjęciu. Kliknij punkt na mapie,
        traf jak najbliżej i zdobądź maksymalnie 5000 punktów za rundę.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-5">
        <button
          type="button"
          onClick={onStart}
          className="bg-accent hover:bg-accent-hover rounded-full px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5"
        >
          Rozpocznij na Kampusie A
        </button>
        <p className="text-sm text-foreground/75">5 rund - zapis sesji do zamknięcia karty</p>
      </div>
    </section>
  );
}
