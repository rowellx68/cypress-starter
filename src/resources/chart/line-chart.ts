import { bindable } from 'aurelia-framework';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import { ChartBase } from './chart-base';

export class LineChartCustomElement extends ChartBase {
  @bindable public data: ChartData = {}
  @bindable public options: ChartOptions = {};
  
  public type: string = 'line';
  public canvas: HTMLCanvasElement;
  protected chart: Chart;

  public attached() {
    this.createChart();
  }

  public dataChanged() {
    this.updateChart();
  }

  public detached() {
    this.destroyChart();
  }
}
