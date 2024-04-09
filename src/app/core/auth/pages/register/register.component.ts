import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Role } from '../../models/role.model';
import { Register } from '../../models/register';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'apicars-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public isLoading: boolean = false;

  public registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    birthday: ['', Validators.required],
    login: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', Validators.required],
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

  register(): void {
    this.authService.getSubmitSubject().next(true);

    const newUser: Register = {
      firstName: this.registerForm.controls['firstName'].value || '',
      lastName: this.registerForm.controls['lastName'].value || '',
      email: this.registerForm.controls['email'].value || '',
      birthday: this.registerForm.controls['birthday'].value || '',
      login: this.registerForm.controls['login'].value || '',
      password: this.registerForm.controls['password'].value || '',
      role: Role.ADMIN,
      phone: this.registerForm.controls['phone'].value || '',
      cars: [],
    };

    if (this.formValid(newUser)) {
      this.authService.register(newUser).subscribe(
        (_data) => {
          this.snackBar.open(`Usuário cadastrado com sucesso!`, '', {
            duration: 5000,
            panelClass: ['config-success-snackbar'],
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.router.navigate(['/']);
        },
        (_error) => {
          this.snackBar.open('Não foi possível cadastrar o usuário.', '', {
            duration: 5000,
            panelClass: ['config-error-snackbar'],
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      );
    }
    this.authService.getSubmitSubject().next(false);
  }

  formValid(newUser: Register): boolean {
    return (
      !!newUser.firstName &&
      !!newUser.lastName &&
      !!newUser.email &&
      !!newUser.birthday &&
      !!newUser.login &&
      !!newUser.password &&
      !!newUser.phone
    );
  }

  getErrorMessage() {
    return 'Por favor, preencha o campo.';
  }
}
