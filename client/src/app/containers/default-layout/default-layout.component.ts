import { Component, OnDestroy, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { makeNavItems } from '../../_nav';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { AppSidebarComponent } from '@coreui/angular/lib/sidebar/app-sidebar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnDestroy, OnInit {
  public navItems;
  public element: HTMLElement;

  //@ViewChild("AppSideBar") public AppSideBar: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) _document?: any,
  ) {
    this.element = _document.body;
  }

  async ngOnInit() {
  }

  changePassword() {
    this.router.navigate(['/changepassword']);
  }

  logout() {
  }
  ngOnDestroy(): void {
    //this.changes.disconnect();
  }
}
