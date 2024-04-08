import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/models/login.model';

@Component({
  selector: 'apicars-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public submitted = false;

  public loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    //private authService: AuthService,
    //private snackBar: MatSnackBar,
    //private router: Router,
    private fb: FormBuilder
  ) {}

  login(): void {
    this.submitted = true;
    const validEmail = this.emailValid(
      this.loginForm.controls['login'].value || ''
    );
    const validPassword = this.passwordValid(
      this.loginForm.controls['password'].value || ''
    );

    /* if (validEmail && validPassword) {
      this.authService.login(this.user.email, this.user.password).subscribe(
        (success) => {
          if (success !== undefined) {
            this.snackBar.open('Olá, como você está ?', "", {
              duration: 5000,
              panelClass: ["config-snackbar"],
              horizontalPosition: "right",
              verticalPosition: "top",
            });
            this.router.navigate(['/dashboard']);
          }
        },
        (error) => {
          if (error.error.error !== undefined) {
            this.snackBar.open(error.error.error, "", {
              duration: 5000,
              panelClass: ["config-snackbar"],
              horizontalPosition: "right",
              verticalPosition: "top",
            });
          } else {
            this.snackBar.open('O serviço será restabelecido em breve.', "", {
              duration: 5000,
              panelClass: ["config-snackbar"],
              horizontalPosition: "right",
              verticalPosition: "top",
            });
          }
          this.submitted = false;
        }
      );
    } else if (!validEmail) {
      this.snackBar.open('E-mail ou senha inválida.', "", {
        duration: 5000,
        panelClass: ["config-snackbar"],
        horizontalPosition: "right",
        verticalPosition: "top",
      });
    } */
    this.submitted = false;
  }

  emailValid(email: String) {
    if (email !== '') {
      return true;
    }
    return false;
  }

  passwordValid(password: String) {
    if (password !== '') {
      return true;
    }
    return false;
  }

  getErrorMessage() {
    return 'Por favor, preencha o campo';
  }
}
