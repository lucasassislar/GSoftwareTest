import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { User } from './models/user';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  currentUser: User;

  constructor(
    private router: Router) {
  }

  public static useGlobal = false;

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
