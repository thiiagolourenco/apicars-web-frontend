import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
