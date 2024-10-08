
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userProfile: any;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const userString = sessionStorage.getItem("loggedInUser");
      if (userString) {
        this.userProfile = JSON.parse(userString);
      } else {
        this.userProfile = null;
      }
    }
  }
}

  // handleSignOut() {
  //   sessionStorage.removeItem("loggedInUser");
  //   this.router.navigate(["/login"]).then(() => {
  //     window.location.reload();
  //   });
  // }
