import {CLIOptions, Project, ProjectItem, UI} from 'aurelia-cli';
import {inject} from 'aurelia-dependency-injection';

@inject(Project, CLIOptions, UI)
export default class ValueConverterGenerator {
  constructor(private project: Project, private options: CLIOptions, private ui: UI) { }

  public async execute() {
    const name = await this.ui.ensureAnswer(
      this.options.args[0],
      'What would you like to call the value converter?'
    );

    let fileName = this.project.makeFileName(name);
    let className = this.project.makeClassName(name);

    this.project.valueConverters.add(
      ProjectItem.text(`${fileName}.ts`, this.generateSource(className))
    );

    await this.project.commitChanges();
    await this.ui.log(`Created ${fileName}.`);
  }

  public generateSource(className) {
    return `export class ${className}ValueConverter {
  toView(value) {
    //
  }

  fromView(value) {
    //
  }
}
`;
  }
}
