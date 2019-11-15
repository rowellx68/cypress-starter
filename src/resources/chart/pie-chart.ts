import { bindable } from 'aurelia-framework';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import { ChartBase } from './chart-base';

export class PieChartCustomElement extends ChartBase {
  @bindable public data: ChartData = {}
  @bindable public options: ChartOptions = {};
  
  public type: string = 'pie';
  public canvas: HTMLCanvasElement;
  protected chart: Chart;

  public attached() {
    this.createChart();
  }

  public detached() {
    this.destroyChart();
  }
}
