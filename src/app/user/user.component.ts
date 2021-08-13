import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @HostBinding('tabIndex') tabIndex: string;
  constructor(private router: Router) {
    this.tabIndex = '0';
   }

  ngOnInit(): void {
  }

  onClick(): void {
    this.router.navigate(['/dashdoard']);
  }

}
