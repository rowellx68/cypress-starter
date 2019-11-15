import { bindable } from 'aurelia-framework';

export class AttendanceTableCustomElement {
  @bindable public data: IAttendanceRow[] = [];
}

export interface IAttendanceRow {
  id: string;
  groupName: string;

  /**
   * Total monthly attendances.
   */
  attendances: number[];
}
