import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'apicars-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private router: Router, private authService: AuthService) {}

  navigateToLogin(): void {
    this.router.navigate(['/']);
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

  navigateToUsers(): void {
    this.router.navigate(['/users']);
  }

  navigateToCars(): void {
    this.router.navigate(['/cars']);
  }

  isLogged(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.router.navigate(['/']);
    this.authService.logout();
  }
}
