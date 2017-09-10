export const definiter = {
  headers: [
    { title: 'Nominativ', hint: 'Mir gefält / gefallen...' },
    { title: 'Akkusativ', hint: 'Ich finde ... am besten' },
    { title: 'Dativ', hint: 'mit ...' },
  ],
  rows: [
    {
      header: { title: 'Maskulin', color: 'blue' },
      cols: [
        { start: 'der', ending: 'e' },
        { start: 'de**n**', ending: 'en' },
        { start: 'de**m**', ending: 'en' },
      ],
    },
    {
      header: { title: 'Neutrum', color: 'green' },
      cols: [
        { start: 'das', ending: 'e' },
        { start: 'das', ending: 'e' },
        { start: 'de**m**', ending: 'en' },
      ],
    },
    {
      header: { title: 'Feminin', color: 'red' },
      cols: [
        { start: 'die', ending: 'e' },
        { start: 'die', ending: 'e' },
        { start: 'de**r**', ending: 'en' },
      ],
    },
    {
      header: { title: 'Plural', color: 'yellow' },
      cols: [
        { start: 'die', ending: 'en' },
        { start: 'die', ending: 'en' },
        { start: 'de**n**', ending: 'en' },
      ],
    },
  ],
}

export const indefiniter = {
  headers: [
    { title: 'Nominativ', hint: 'Das ist/sinde...' },
    { title: 'Akkusativ', hint: 'Ich hatte gern...' },
    { title: 'Dativ', hint: 'mit ...' },
  ],
  rows: [
    {
      header: { title: 'Maskulin', color: 'blue' },
      cols: [
        { start: 'ein', ending: 'er' },
        { start: 'ein**en**', ending: 'en' },
        { start: 'ein**em**', ending: 'en' },
      ],
    },
    {
      header: { title: 'Neutrum', color: 'green' },
      cols: [
        { start: 'ein', ending: 'es' },
        { start: 'ein', ending: 'es' },
        { start: 'ein**em**', ending: 'en' },
      ],
    },
    {
      header: { title: 'Feminin', color: 'red' },
      cols: [
        { start: 'ein**e**', ending: 'e' },
        { start: 'ein**e**', ending: 'e' },
        { start: 'ein**er**', ending: 'en' },
      ],
    },
    {
      header: { title: 'Plural', color: 'yellow' },
      cols: [
        { start: '**—**', ending: 'e' },
        { start: '**—**', ending: 'e' },
        { start: '**—**', ending: 'en' },
      ],
    },
  ],
}

export const nullartikel = {
  headers: [{ title: 'Nominativ' }, { title: 'Akkusativ' }, { title: 'Dativ' }],
  rows: [
    {
      header: { title: 'Maskulin', color: 'blue' },
      cols: [{ ending: 'er' }, { ending: 'en' }, { ending: 'em' }],
    },
    {
      header: { title: 'Neutrum', color: 'green' },
      cols: [{ ending: 'es' }, { ending: 'es' }, { ending: 'em' }],
    },
    {
      header: { title: 'Feminin', color: 'red' },
      cols: [{ ending: 'e' }, { ending: 'e' }, { ending: 'er' }],
    },
    {
      header: { title: 'Plural', color: 'yellow' },
      cols: [{ ending: 'e' }, { ending: 'e' }, { ending: 'en' }],
    },
  ],
}
