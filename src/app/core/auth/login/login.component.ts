import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public submitted = false;

  //public user: UserLogin = new UserLogin('', '');

  public loginForm = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    //private authService: AuthService,
    //private snackBar: MatSnackBar,
    private router: Router,
    private fb: FormBuilder
  ) {}

  login(): void {
    /* this.user.email = this.loginForm.controls['user'].value;
    this.user.password = this.loginForm.controls['password'].value;
    this.submitted = true;
    debugger;
    const validEmail = this.emailValid();
    const validPassword = this.passwordValid();

    if (validEmail && validPassword) {
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
    }
    this.submitted = false; */
  }

  emailValid() {
    /* if (this.user.email !== undefined && this.user.email !== '') {
      return true;
    }
    return false; */
  }

  passwordValid() {
    /* if (this.user.password !== undefined && this.user.password !== '') {
      return true;
    }
    return false; */
  }

  getErrorMessage() {
    return 'Por favor, preencha o campo';
  }
}
