import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [],
  exports: [AuthModule],
  imports: [CommonModule],
})
export class CoreModule {}
