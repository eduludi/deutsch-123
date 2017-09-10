export const definiter = {
  headers: [
    { title: 'Nominativ', hint: 'Mir gefält / gefallen...' },
    { title: 'Akkusativ', hint: 'Ich finde ... am besten' },
    { title: 'Dativ', hint: 'mit ...' },
  ],
  rows: [
    {
      header: { title: 'Maskulin', color: 'blue' },
      gender: 'm',
      cols: [
        { start: 'der', ending: 'e' },
        { start: 'de**n**', ending: 'en' },
        { start: 'de**m**', ending: 'en' },
      ],
    },
    {
      header: { title: 'Neutrum', color: 'green' },
      gender: 'n',
      cols: [
        { start: 'das', ending: 'e' },
        { start: 'das', ending: 'e' },
        { start: 'de**m**', ending: 'en' },
      ],
    },
    {
      header: { title: 'Feminin', color: 'red' },
      gender: 'f',
      cols: [
        { start: 'die', ending: 'e' },
        { start: 'die', ending: 'e' },
        { start: 'de**r**', ending: 'en' },
      ],
    },
    {
      header: { title: 'Plural', color: 'yellow' },
      gender: 'p',
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
    { title: 'Nominativ', hint: 'Das ist/sind...' },
    { title: 'Akkusativ', hint: 'Ich hatte gern...' },
    { title: 'Dativ', hint: 'mit ...' },
  ],
  rows: [
    {
      header: { title: 'Maskulin', color: 'blue' },
      gender: 'm',
      cols: [
        { start: '__(k)__ein', ending: 'er' },
        { start: '__(k)__ein**en**', ending: 'en' },
        { start: '__(k)__ein**em**', ending: 'en' },
      ],
    },
    {
      header: { title: 'Neutrum', color: 'green' },
      gender: 'n',
      cols: [
        { start: '__(k)__ein', ending: 'es' },
        { start: '__(k)__ein', ending: 'es' },
        { start: '__(k)__ein**em**', ending: 'en' },
      ],
    },
    {
      header: { title: 'Feminin', color: 'red' },
      gender: 'f',
      cols: [
        { start: '__(k)__ein**e**', ending: 'e' },
        { start: '__(k)__ein**e**', ending: 'e' },
        { start: '__(k)__ein**er**', ending: 'en' },
      ],
    },
    {
      header: { title: 'Plural', color: 'yellow' },
      gender: 'p',
      cols: [
        { start: '—/kein**e**', ending: 'e/en' },
        { start: '—/kein**e**', ending: 'e/en' },
        { start: '—/kein**en**', ending: 'en' },
      ],
    },
  ],
}

export const nullartikel = {
  headers: [{ title: 'Nominativ' }, { title: 'Akkusativ' }, { title: 'Dativ' }],
  rows: [
    {
      header: { title: 'Maskulin', color: 'blue' },
      gender: 'm',
      cols: [{ ending: 'er' }, { ending: 'en' }, { ending: 'em' }],
    },
    {
      header: { title: 'Neutrum', color: 'green' },
      gender: 'n',
      cols: [{ ending: 'es' }, { ending: 'es' }, { ending: 'em' }],
    },
    {
      header: { title: 'Feminin', color: 'red' },
      gender: 'f',
      cols: [{ ending: 'e' }, { ending: 'e' }, { ending: 'er' }],
    },
    {
      header: { title: 'Plural', color: 'yellow' },
      gender: 'p',
      cols: [{ ending: 'e' }, { ending: 'e' }, { ending: 'en' }],
    },
  ],
}
