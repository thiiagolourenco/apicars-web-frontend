import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './core/auth/services/auth.service';

@Component({
  selector: 'apicars-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/users']);
    } else {
      this.router.navigate(['/']);
    }
    this.snackBar.open(
      `A 1ª requisição demora mais que o normal. Isso acontece porque o deploy do serviço foi feito gratuitamente e quando não é usado ele é DESLIGADO.`,
      '',
      {
        duration: 7500,
        panelClass: ['config-success-snackbar'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
      }
    );
  }
}
