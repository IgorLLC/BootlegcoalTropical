import { Event } from '../types/event';

export const events: Event[] = [
  {
    id: '1',
    title: 'No. 9 Mine & Museum',
    date: 'Saturday, January 27',
    location: 'Lansford, PA',
    image: '/images/no9-mine.jpg',
    schedule: [
      {
        time: '11:30 am – 1 pm',
        description: 'Mine Tour'
      },
      {
        time: '1:30 pm – 3 pm',
        description: 'Book talk & signing'
      }
    ],
    additionalInfo: 'Light refreshments provided'
  },
  // Puedes agregar más eventos aquí
];
