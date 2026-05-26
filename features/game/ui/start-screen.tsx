type StartScreenProps = {
  onStart: () => void;
};

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <section className="ui-card relative mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center p-10 text-center md:mt-24 md:p-16">
      <div className="ui-badge absolute -top-5">
        KAMPUS A
      </div>
      
      <h1 className="mt-4 font-heading text-5xl md:text-7xl">
        PŁ<span className="text-brand">Guesser</span>
      </h1>
      
      <p className="mx-auto mt-8 max-w-lg text-lg font-sans text-foreground">
        Rozpoznaj miejsce po jednym zdjęciu. Kliknij punkt na mapie,
        traf jak najbliżej i zdobądź do 5000 punktów w każdej z 5 rund!
      </p>

      <div className="mt-12 flex flex-col items-center justify-center gap-5">
        <button
          type="button"
          onClick={onStart}
          className="ui-button ui-button-primary px-10 py-4"
        >
          ZAGRAJ TERAZ
          <svg className="ml-2 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        <p className="mt-2 text-sm font-sans uppercase tracking-wider text-foreground/50 border-2 border-foreground/10 px-4 py-2">5 RUND • ZAPIS SESJI</p>
      </div>
    </section>
  );
}
