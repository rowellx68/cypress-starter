import { bootstrap } from 'aurelia-bootstrapper';
import { PLATFORM } from 'aurelia-pal';
import { ComponentTester, StageComponent } from 'aurelia-testing';

import { AttendanceTableCustomElement } from 'pages/dashboard/components/attendance-table';

describe('Attendance Table', () => {
  let component: ComponentTester<AttendanceTableCustomElement>;

  beforeEach(() => {
    component = StageComponent
      .withResources(
        PLATFORM.moduleName('pages/dashboard/components/attendance-table')
      )
      .inView('<attendance-table data.bind="data"></attendance-table>');
  });

  afterEach(() => {
    component.dispose();
  });

  it('renders the correct headers', async () => {
    const expectedHeaders = ['Group', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
    const data = [];
    
    await component.boundTo({ data }).create(bootstrap);

    const actualHeaders = component.element.querySelectorAll('th');

    expect(actualHeaders.length).toEqual(expectedHeaders.length);

    actualHeaders.forEach((h, i) => {
      expect(h.textContent.trim()).toEqual(expectedHeaders[i]);
    });
  });
});
