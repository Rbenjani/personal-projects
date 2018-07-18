import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

  @HostBinding('class') hostClass = 'header-container';

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/']);
  }
}
