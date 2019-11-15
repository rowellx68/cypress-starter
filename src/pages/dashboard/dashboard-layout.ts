import { IAttendanceRow } from './components/attendance-table';
import { attendances } from './table-data';

export class DashboardLayout {
  private get dataset(): Chart.ChartDataSets[] {
    const colours = ['#FFC312', '#C4E538', '#12CBC4', '#FDA7DF', '#ED4C67'];

    return attendances.map((d, i) => {
      const data: Chart.ChartDataSets = {
        label: d.groupName,
        data: [...d.attendances],
        borderColor: colours[i],
        fill: false,
        lineTension: 0,
      };

      return data;
    });
  }

  public tableData: IAttendanceRow[] = [...attendances];

  public lineData: Chart.ChartData = {
    labels: ['Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    datasets: this.dataset,
  };

  public lineOptions: Chart.ChartOptions = {
    legend: {
      display: true,
      position: 'bottom',
    },
    maintainAspectRatio: false,
  };
}
