import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  private router: Router;

  public message: string = 'Hello World!';

  public configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;

    config.title = 'Cypress Starter';
    config.map([
      { route: '', redirect: 'login' },
      { route: '/login', name: 'login', title: 'Login', moduleId: PLATFORM.moduleName('./pages/login/login-layout') },
      { route: '/dashboard', name: 'dashboard', title: 'Dashboard', moduleId: PLATFORM.moduleName('./pages/dashboard/dashboard-layout') },
    ]);

    config.mapUnknownRoutes({ redirect: 'login' });
  }
}
