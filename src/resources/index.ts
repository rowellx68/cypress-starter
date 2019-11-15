import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./chart/line-chart'),
    PLATFORM.moduleName('./chart/pie-chart'),
  ]);
}
