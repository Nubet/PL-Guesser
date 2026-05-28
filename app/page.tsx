import Link from "next/link";
import { GraduationCap, Library, Globe, User, Briefcase, Terminal, Code2, ExternalLink, MapPin } from "lucide-react";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 md:py-24">

        <section className="ui-card relative z-10 mb-16 w-full p-8 md:p-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h1 className="font-heading text-6xl md:text-8xl font-black uppercase text-foreground mb-4">
                PŁ<span className="text-brand">Guesser</span>
              </h1>
              <p className="text-xl md:text-2xl font-sans text-foreground mb-8">
                Przewodnik i gra terenowa dla studentów Politechniki Łódzkiej. Poznaj Kampusy, zanim zgubisz się w drodze na zajęcia.
              </p>

              <Link
                href="/game"
                className="ui-button ui-button-primary w-full px-10 py-4 text-2xl md:w-auto"
              >
                Rozpocznij grę
                <svg className="ml-3 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="hidden md:flex flex-col gap-4 text-center">
              <div className="ui-card rotate-3 bg-brand p-6 text-surface">
                <h3 className="text-3xl font-heading">5 Rund</h3>
                <p className="font-sans">Odkryj tajemnice kampusu</p>
              </div>
              <div className="ui-card -rotate-2 bg-surface p-6 text-foreground">
                <h3 className="text-3xl font-heading">25 000 pkt</h3>
                <p className="font-sans">Maksymalny wynik do zdobycia</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-4xl md:text-6xl mb-10 text-foreground bg-surface inline-block border-4 border-border px-6 py-2 shadow-[4px_4px_0px_0px_var(--color-border)]">
            Poradnik Studenta
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="ui-card bg-surface p-8">
              <h3 className="font-heading text-3xl mb-4 text-brand">Pierwsze Obowiązki</h3>
              <p className="font-sans text-lg text-foreground">
                Nie zapomnij o opłacie za legitymację (22 zł) oraz podpisaniu ślubowania i oświadczenia z Uczelnią! Przed zajęciami musisz też wykonać badania lekarskie (skierowanie otrzymasz z dziekanatu) i ukończyć szkolenia: BHP, biblioteczne oraz z praw studenta.
              </p>
            </article>

            <article className="ui-card bg-surface p-8">
              <h3 className="font-heading text-3xl mb-4 text-brand">Zasady i Obecność</h3>
              <p className="font-sans text-lg text-foreground">
                Uważaj na frekwencję! Jeśli opuścisz ponad 20% obowiązkowych zajęć (laboratoria, ćwiczenia, lektoraty) bez usprawiedliwienia, możesz nie uzyskać zaliczenia z przedmiotu. Kontaktując się z wykładowcami ze swojego maila (<i>imie.nazwisko@p.lodz.pl</i>), pamiętaj o właściwych tytułach naukowych.
              </p>
            </article>

            <article className="ui-card bg-surface p-8">
              <h3 className="font-heading text-3xl mb-4 text-brand">Kluczowe Miejsca</h3>
              <p className="font-sans text-lg text-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non tortor id tellus dapibus tempus ut eu elit. Fusce imperdiet erat at varius aliquet. Praesent quis fringilla nibh. Phasellus eros orci, dignissim id metus vitae, mattis egestas urna. Proin est nibh, molestie a mattis sed, dapibus sed ipsum.
              </p>
            </article>

            <article className="ui-card bg-surface p-8">
              <h3 className="font-heading text-3xl mb-4 text-brand">Słowniczek Studenta</h3>
              <p className="font-sans text-lg text-foreground">
                <strong>Kolos</strong> to kolokwium, <strong>wejściówka</strong> to krótki test przed ćwiczeniami, <strong>sprawko</strong> to sprawozdanie, a <strong>zerówka</strong> to egzamin przed sesją. Najważniejsze to <strong>ECTSy</strong> – w semestrze musisz zebrać 30 punktów, jeśli nie chcesz aby zastały Cię dodatkowe opłaty!
              </p>
            </article>
          </div>
        </section>

      </main>

      <footer className="w-full bg-surface text-foreground mt-auto border-t-4 border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="md:col-span-2 lg:col-span-2 flex flex-col items-start">
              <Link href="/" className="font-heading text-5xl font-black uppercase mb-4 inline-block hover:text-brand transition-colors">
                PŁ<span className="text-brand">Guesser</span>
              </Link>
              <p className="font-sans text-base font-bold max-w-sm">
                Edukacyjna gra miejska ułatwiająca nowym studentom odnalezienie się na Kampusie A Politechniki Łódzkiej.
              </p>
            </div>

            <div className="flex flex-col gap-4 font-sans font-bold">
              <h4 className="font-heading text-2xl uppercase tracking-widest mb-2 opacity-50">Rozgrywka</h4>
              <Link href="/ranking" className="w-fit hover:bg-brand hover:text-surface px-1 -ml-1 transition-colors">Ranking</Link>
              <Link href="/zasady" className="w-fit hover:bg-brand hover:text-surface px-1 -ml-1 transition-colors">Zasady gry</Link>
              <Link href="/osiagniecia" className="w-fit hover:bg-brand hover:text-surface px-1 -ml-1 transition-colors">Osiągnięcia</Link>
            </div>

            <div className="flex flex-col gap-4 font-sans font-bold">
              <h4 className="font-heading text-2xl uppercase tracking-widest mb-2 opacity-50">Przydatne linki</h4>
              <a href="https://webdziekanat.p.lodz.pl/" target="_blank" rel="noopener noreferrer" className="w-fit hover:bg-brand hover:text-surface px-1 -ml-1 transition-colors">Webdziekanat</a>
              <a href="https://edu.p.lodz.pl/" target="_blank" rel="noopener noreferrer" className="w-fit hover:bg-brand hover:text-surface px-1 -ml-1 transition-colors">WIKAMP</a>
              <a href="https://csllal.ent.sirsidynix.net.uk/client/pl_PL/bpl/#" target="_blank" rel="noopener noreferrer" className="w-fit hover:bg-brand hover:text-surface px-1 -ml-1 transition-colors">Biblioteka PŁ</a>
            </div>

            <div className="flex flex-col gap-4 font-sans font-bold">
              <h4 className="font-heading text-2xl uppercase tracking-widest mb-2 opacity-50">Autor</h4>
              <Link href="/o-projekcie" className="w-fit hover:bg-brand hover:text-surface px-1 -ml-1 transition-colors">O projekcie</Link>
              <a href="https://github.com/Nubet/PL-Guesser" target="_blank" rel="noopener noreferrer" className="w-fit hover:bg-brand hover:text-surface px-1 -ml-1 transition-colors">Kod źródłowy</a>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-border bg-border text-surface py-6">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-sm font-bold">
            <p>© {new Date().getFullYear()} PŁGuesser.</p>
            <div className="flex items-center gap-6">
              <a href="https://norbertfila.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Norbert Fila</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
