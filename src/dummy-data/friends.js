import { v4 as uuid } from 'uuid'

export const hello = 'world'

export default [
  {
    id: uuid(),
    name: 'Emre',
    age: 45,
    hobbies: [
      'Voleybol',
      'Kore dizisi',
      'Latin müzik',
      'Problem çözmek',
    ],
    married: true,
    pets: [
      { id: uuid(), name: 'Pia', type: 'Kedi' },
      { id: uuid(), name: 'Alfa', type: 'Köpek' },
    ]
  },
  {
    id: uuid(),
    name: 'Erdem',
    age: 27,
    hobbies: [
      'Balık Tutmak',
      'Gezmek',
      'Heavy metal',
      'Kodlamak',
    ],
    married: true,
    pets: [
      { id: uuid(), name: 'Mars', type: 'Tavşan' },
      { id: uuid(), name: 'Kraker', type: 'Köpek' },
    ]
  },
  {
    id: uuid(),
    name: 'Hatice',
    age: 31,
    hobbies: [
      'Trekking',
      'Kamp',
      'Voleybol',
      'Dışarıda Yemek',
    ],
    married: false,
    pets: [
      { id: uuid(), name: 'Ceylin', type: 'Kedi' },
      { id: uuid(), name: 'Stark', type: 'Balık' },
    ]
  },
]
