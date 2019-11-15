import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';

@autoinject
export class LoginLayout {
  constructor(private router: Router) {}

  public username: string;
  public password: string;

  public login() {
    if (!this.username || !this.password) {
      return;
    }

    this.router.navigateToRoute('dashboard');
  }
}
