export interface Announcement {
  readonly [index: number]: number | string;
  readonly id: number;
  readonly author: number;
  title: string;
  description: string;
  date?: Date;
  place?: {
    calle: string;
    numero: number;
    cp: number;
    provincia: string;
    autonomia: string;
  };
  type: string;
}
/*
{
  id: 1,
  title: 'Example title01',
  description: 'Exampledescription01',
  date: new Date(2021, 0, 13),
  place: 'Example place',
  type: 'Recado'
},
{
  id: 2,
  title: 'Example title02',
  description: 'Exampledescription02',
  date: new Date(2021, 11, 3),
  type: 'Recado'
},
{
  id: 3,
  title: 'Example title03',
  description: 'Exampledescription03',
  date: new Date(2021, 11, 14),
  place: 'Example place',
  type: 'Recado'
}
*/
