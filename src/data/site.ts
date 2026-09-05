// ─────────────────────────────────────────────────────────────────────────────
// Every editable piece of copy on this site lives here. Change text in this
// file, not in the components. Concert dates are the one exception — they live
// in concerts.json so they can be edited without reading TypeScript.
//
// CONTENT-TODO markers flag what still needs Niklas' input. Sections whose data
// is empty hide themselves, so it is safe to ship with gaps and fill them later.
// ─────────────────────────────────────────────────────────────────────────────

export const NAME = 'Niklas Lustig';
export const ROLE = 'Dirigent & Organist';
export const EMAIL = 'kontakt@niklaslustig.de';
export const CITY = 'Berlin';

/** Photo credit shown in the footer. */
export const PHOTO_CREDIT = 'Isabel Zerfowski, Lennert van de Kreeke';

export const hero = {
  /** Swap this slug to change the hero image — see src/components/Hero.astro.
   *  Portrait-orientation files suit this layout; a studio portrait drops in here. */
  image: 'dirigat-beide-haende',
  alt: 'Niklas Lustig dirigiert, beide Hände erhoben, vor Orchester und Chor',
  // CONTENT-TODO: this line is a placeholder written for the layout, not Niklas'
  // own words. It needs his approval or replacement before the site goes live.
  claim: 'Die Partitur ist erst der Anfang.',
  intro:
    'Dirigent und Organist in Berlin. Chor- und Orchesterleitung bei Kai-Uwe Jirka, ' +
    'Orgel bei Henry Fairs an der Universität der Künste Berlin.',
};

export const vita = {
  short: [
    'Niklas Lustig (*2004) dirigiert Chor und Orchester und spielt Orgel. Er studiert ' +
      'Kirchenmusik an der Universität der Künste Berlin — Chorleitung bei Kai-Uwe Jirka, ' +
      'Orgel bei Henry Fairs.',
    'Im Mai 2026 leitete er das Oratorienkonzert «Mensch Natur Gott» in St. Josef Berlin ' +
      'mit Werken von Beethoven, Mendelssohn, Mozart und Weber. Im August 2026 folgte sein ' +
      'Abschlusskonzert an der Orgel der Pauluskirche Berlin-Zehlendorf.',
  ],
  /** Shown behind «Ausführliche Vita». CONTENT-TODO: extend — early musical training,
   *  ensembles he has worked with, current positions. */
  long: [
    'Ein Studienjahr an der Estnischen Musikakademie Tallinn bei Toomas Kapten prägte seine ' +
      'Arbeit am Chorklang. Meisterkurse bei Stefan Parkman, Frieder Bernius, Anne Kohler und ' +
      'Hirvo Surva vertieften sie.',
    'An der Orgel gilt sein Interesse dem Zusammenspiel von Instrument und Raum — der Frage, ' +
      'wie eine Akustik das Tempo, die Registrierung und die Phrasierung mitbestimmt.',
  ],
  facts: [
    { k: 'Studium', v: 'Kirchenmusik (B.A.), Universität der Künste Berlin' },
    { k: 'Chorleitung', v: 'bei Kai-Uwe Jirka' },
    { k: 'Orgel', v: 'bei Henry Fairs' },
    { k: 'Studienjahr', v: 'Estnische Musikakademie Tallinn, bei Toomas Kapten' },
    { k: 'Meisterkurse', v: 'Stefan Parkman, Frieder Bernius, Anne Kohler, Hirvo Surva' },
    { k: 'Auszeichnung', v: '2. Preis, Wettbewerb für ehren- und nebenamtliche Organist*innen, Lutherkirche Spandau (2021)' },
    { k: 'Basis', v: 'Berlin' },
  ],
};

/** CONTENT-TODO: this is what is documented from the 2026 concerts. Extend with
 *  the full repertoire — an empty group hides itself. */
export const repertoire = [
  {
    group: 'Chor & Orchester',
    works: [
      'Ludwig van Beethoven — Symphonie Nr. 6 F-Dur op. 68 «Pastorale»',
      'Carl Maria von Weber — Der Freischütz, Ouvertüre',
      'Felix Mendelssohn Bartholdy — CONTENT-TODO: Werk ergänzen',
      'Wolfgang Amadeus Mozart — CONTENT-TODO: Werk ergänzen',
    ],
  },
  {
    group: 'Orgel',
    works: [
      // CONTENT-TODO: das Programm des Abschlusskonzerts vom 16.08.2026 eintragen.
    ],
  },
];

/** Click-to-load only — nothing third-party loads until a visitor clicks.
 *  kind: 'youtube' embeds after a click, 'link' opens externally, 'audio' plays a local file.
 *  CONTENT-TODO: add the recording from the Abschlusskonzert once it is uploaded. */
export const recordings: Array<{
  title: string;
  meta: string;
  kind: 'youtube' | 'link' | 'audio';
  src: string;
}> = [
  {
    title: 'Orgelspiel — Ausschnitt',
    meta: 'Instagram',
    kind: 'link',
    src: 'https://www.instagram.com/reels/DSMj5u_Dnb5/',
  },
];

/** CONTENT-TODO: quotes from mentors, reviews, concert organisers.
 *  The whole Presse quote block hides while this is empty. */
export const quotes: Array<{ text: string; source: string }> = [];

/** CONTENT-TODO: put a bio PDF and a zipped photo set in public/presse/,
 *  then list them here. The download list hides while this is empty. */
export const pressKit: Array<{ label: string; href: string; meta: string }> = [];

export const contact = {
  lead:
    'Für Konzerte, Chor- und Orchesterprojekte, Assistenzen und Orgelabende — ' +
    'eine kurze Mail mit Datum, Ort und Anlass genügt.',
  contexts: ['Chor- & Orchesterleitung', 'Orgelkonzert', 'Assistenz & Einstudierung', 'Kirchenmusikalische Dienste'],
};
