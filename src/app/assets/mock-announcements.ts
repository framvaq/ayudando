import { Announcement } from './announcement';

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    title: 'Example title01',
    description:
      'Exampledescription01: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque est sit amet elementum lobortis. Cras interdum magna turpis, vel auctor sapien aliquet in. Nullam in condimentum erat, eu pulvinar orci. Suspendisse ut lorem non massa pharetra congue ut non orci. Fusce mattis tellus nisl, at bibendum diam interdum vel. Nulla facilisi. Pellentesque blandit eu odio ac fermentum. ',
    date: new Date(2021, 0, 13),
    place: {
      calle: 'Calle de ejemplo 1',
      numero: 1,
      cp: Number.parseInt('04720', 10),
      provincia: 'almería',
      autonomia: 'andalucia'
    },
    type: 'Recado',
    author: 1
  },
  {
    id: 2,
    title: 'Example title02',
    description:
      'Exampledescription02: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque est sit amet elementum lobortis. Cras interdum magna turpis, vel auctor sapien aliquet in. Nullam in condimentum erat, eu pulvinar orci. Suspendisse ut lorem non massa pharetra congue ut non orci. Fusce mattis tellus nisl, at bibendum diam interdum vel. Nulla facilisi. Pellentesque blandit eu odio ac fermentum. ',
    date: new Date(2021, 11, 3),
    type: 'Recado',
    author: 1
  },
  {
    id: 3,
    title: 'Example title03',
    description:
      'Exampledescription03: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque est sit amet elementum lobortis. Cras interdum magna turpis, vel auctor sapien aliquet in. Nullam in condimentum erat, eu pulvinar orci. Suspendisse ut lorem non massa pharetra congue ut non orci. Fusce mattis tellus nisl, at bibendum diam interdum vel. Nulla facilisi. Pellentesque blandit eu odio ac fermentum. ',
    date: new Date(2021, 11, 14),
    place: {
      calle: 'Calle de ejemplo 3(no hay 2)',
      numero: 1,
      cp: Number.parseInt('04720', 10),
      provincia: 'almería',
      autonomia: 'andalucia'
    },
    type: 'Recado',
    author: 1
  }
];
