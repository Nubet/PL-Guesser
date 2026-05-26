import Link from "next/link";

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

      <footer className="w-full bg-border text-surface mt-auto py-12 border-t-8 border-foreground">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-heading text-3xl mb-4">PŁGuesser</h4>
            <p className="font-sans text-lg opacity-80">
              Edukacyjna gra miejska ułatwiająca nowym studentom odnalezienie się na Kampusie A Politechniki Łódzkiej.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-3xl mb-4">Przydatne linki</h4>
            <ul className="font-sans text-lg flex flex-col gap-2">
              <li><a href="#" className="hover:underline hover:text-brand">Webdziekanat</a></li>
              <li><a href="#" className="hover:underline hover:text-brand">WIKAMP</a></li>
              <li><a href="#" className="hover:underline hover:text-brand">Biblioteka PŁ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-3xl mb-4">Autor</h4>
            <p className="font-sans text-lg opacity-80 mb-2">
              Norbert Fila
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-12 pt-8 border-t-2 border-surface/20 text-center font-sans">
          &copy; {new Date().getFullYear()} PŁGuesser. Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </div>
  );
}
