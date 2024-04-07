import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [FormsModule, CommonModule, AuthRoutingModule, ReactiveFormsModule],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
