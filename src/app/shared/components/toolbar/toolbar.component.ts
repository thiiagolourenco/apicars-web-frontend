import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'apicars-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private router: Router) {}

  navigateToUsers(): void {
    this.router.navigate(['/users']);
  }

  navigateToCars(): void {
    this.router.navigate(['/cars']);
  }
}
