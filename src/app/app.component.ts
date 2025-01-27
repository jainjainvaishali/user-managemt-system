﻿import {Component} from '@angular/core';
import {AccountService} from './_services';
import {User} from './_models';

@Component({
  selector: 'app', templateUrl: 'app.component.html',
  styles: ['mat-toolbar.main-header { height: 50px }']
})

export class AppComponent {
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  logout(): any {
    this.accountService.logout();
  }
}
