import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { RegisterComponent } from './pages/register/register.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from '../guard/auth.guard';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    MaterialModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthService, AuthGuard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
