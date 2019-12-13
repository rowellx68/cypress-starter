import { autoinject, computedFrom } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
import { IAttendanceRow } from './components/attendance-table';

@autoinject
export class DashboardLayout {
  constructor(private http: HttpClient) { }

  private attendances: IAttendanceRow[] = [];

  public async attached() {
    const response = await this.http.get('/api/attendances.json');

    this.attendances = response.isSuccess 
      ? response.content 
      : [];
  }

  private get dataset(): Chart.ChartDataSets[] {
    const colours = ['#FFC312', '#C4E538', '#12CBC4', '#FDA7DF', '#ED4C67'];

    return this.attendances.map((d, i) => {
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

  @computedFrom('attendances')
  public get tableData(): IAttendanceRow[] {
    return [...this.attendances];
  }

  @computedFrom('attendances')
  public get lineData(): Chart.ChartData {
    return {
      labels: ['Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
      datasets: this.dataset,
    };
  }

  public get lineOptions(): Chart.ChartOptions {
    return {
      legend: {
        display: true,
        position: 'bottom',
      },
      maintainAspectRatio: false,
    };
  }
}
