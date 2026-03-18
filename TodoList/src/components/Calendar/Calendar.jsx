import CalendarItem from './CalendarItem';

const DUMMY_CALENDAR = [
  {
    id: 'c1',
    month: '1',
    days: Array.from({ length: 31 }, (v, i) => i),
    events: [],
  },
  {
    id: 'c2',
    month: '2',
    days: Array.from({ length: 28 }, (v, i) => i),
    events: [],
  },
  {
    id: 'c3',
    month: '3',
    days: Array.from({ length: 31 }, (v, i) => i),
    events: [],
  },
  {
    id: 'c4',
    month: '4',
    days: Array.from({ length: 30 }, (v, i) => i),
    events: [],
  },
  {
    id: 'c5',
    month: '5',
    days: Array.from({ length: 31 }, (v, i) => i),
    events: [],
  },
  {
    id: 'c6',
    month: '6',
    days: Array.from({ length: 30 }, (v, i) => i),
    events: [],
  },
  {
    id: 'c7',
    month: '7',
    days: Array.from({ length: 31 }, (v, i) => i),
    events: [],
  },
  {
    id: 'c8',
    month: '8',
    days: Array.from({ length: 31 }, (v, i) => i),
    events: [],
  },
  {
    id: 'c9',
    month: '9',
    days: Array.from({ length: 30 }, (v, i) => i),
    events: [],
  },
  {
    id: 'c10',
    month: '10',
    days: Array.from({ length: 31 }, (v, i) => i),
    events: [],
  },
  {
    id: 'c11',
    month: '11',
    days: Array.from({ length: 30 }, (v, i) => i),
    events: [],
  },
  {
    id: 'c12',
    month: '12',
    days: Array.from({ length: 31 }, (v, i) => i),
    events: [],
  },
];

export default function Calender() {
  return (
    <>
      <button type="button">추가하기</button>
      <ul></ul>
    </>
  );
}
