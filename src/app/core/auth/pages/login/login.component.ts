import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'apicars-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public isLoading: boolean = false;

  public loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.authService.submitted$.subscribe((data) => {
      this.isLoading = data;
    });
  }

  login(): void {
    this.authService.getSubmitSubject().next(true);
    const userLogin = this.loginForm.controls['login'].value || '';
    const userPassword = this.loginForm.controls['password'].value || '';

    if (!!userLogin && !!userPassword) {
      this.authService.login(userLogin, userPassword).subscribe(
        (data) => {
          this.snackBar.open(`Olá ${data.firstName}, como você está?`, '', {
            duration: 5000,
            panelClass: ['config-success-snackbar'],
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.router.navigate(['/users']);
          this.authService.getSubmitSubject().next(false);
        },
        (_error) => {
          this.snackBar.open('Login ou senha inválida.', '', {
            duration: 5000,
            panelClass: ['config-error-snackbar'],
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.authService.getSubmitSubject().next(false);
        }
      );
    }
  }

  getErrorMessage(): string {
    return 'Por favor, preencha o campo.';
  }
}
