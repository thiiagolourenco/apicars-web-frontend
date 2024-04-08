import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}