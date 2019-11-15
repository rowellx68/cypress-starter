import { IAttendanceRow } from './components/attendance-table';

export const attendances: IAttendanceRow[] = [
  {
    id: 'cs-1',
    groupName: 'CS 1',
    attendances: [38, 33, 38, 25, 22, 29],
  },
  {
    id: 'cs-2',
    groupName: 'CS 2',
    attendances: [39, 37, 25, 38, 22, 32],
  },
  {
    id: 'se-1',
    groupName: 'SE 1',
    attendances: [34, 21, 28, 37, 34, 27],
  },
  {
    id: 'se-2',
    groupName: 'SE 2',
    attendances: [39, 28, 32, 26, 20, 31],
  },
  {
    id: 'se-3',
    groupName: 'SE 3',
    attendances: [34, 24, 26, 29, 25, 36],
  }
];
