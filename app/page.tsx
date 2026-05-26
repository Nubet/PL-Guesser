import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-14">
      <section className="hero-surface w-full overflow-hidden rounded-3xl border border-border/60 p-10 shadow-[0_35px_80px_color-mix(in_oklab,var(--color-brand)_26%,transparent)]">
        <p className="text-brand/80 text-sm font-semibold uppercase tracking-[0.35em]">
          Student prototype
        </p>
        <h1 className="text-brand mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl">
          PŁGuesser
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/90">
          Gra terenowa dla Politechniki Łódzkiej. Oglądasz kadr z Kampusu A, klikasz
          miejsce na mapie i walczysz o wynik bliski 25 000 punktów.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/game"
            className="bg-accent hover:bg-accent-hover rounded-full px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5"
          >
            Wejdź do gry
          </Link>
          <p className="text-sm text-foreground/75">MVP: 5 rund, mapa OSM, bez logowania</p>
        </div>
      </section>
    </main>
  );
}
