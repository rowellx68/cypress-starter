import { bindable } from 'aurelia-framework';
import { Chart, ChartData, ChartOptions, ChartUpdateProps } from 'chart.js';

export abstract class ChartBase {
  public abstract data: ChartData = {}
  public abstract options: ChartOptions = {};
  public abstract canvas: HTMLCanvasElement;
  public abstract type: string;
  protected abstract chart: Chart;

  /**
   * Create chart with the data and options provided.
   */
  public createChart() {
    this.chart = new Chart(this.canvas, {
      type: this.type,
      data: this.data,
      options: this.options
    });
  }

  /**
   * Destroy the chart.
   */
  public destroyChart() {
    this.chart.destroy();
  }

  /**
   * Update the chart data/options.
   */
  public updateChart(updateOptions?: ChartUpdateProps) {
    this.chart.update(updateOptions);
  }
}
