import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit{
  user: any;
  username: any;
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit() {
    this.checkUserSession();
  }
  redirectHome(){
    this.router.navigate(['/']);
  }
  checkUserSession() {
    if (isPlatformBrowser(this.platformId)) {
      const userString = sessionStorage.getItem('loggedInUser');
      if (userString) {
        this.user = JSON.parse(userString);
      } else {
        this.user = null;
      }
    }
  }
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('loggedInUser');
      this.user = null;
      this.router.navigate(['/']);
    }
  }
}
