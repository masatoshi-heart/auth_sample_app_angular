import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  template: `
    <ul *ngIf="auth.user$ | async as user">
      <li><span>ID：</span>{{ user.sub }}</li>
      <li><span>ユーザー名：</span>{{ user.nickname }}</li>
      <li><span>メール：</span>{{ user.email }}</li>
    </ul>`
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {
    console.log(auth.user$);
  }
}
