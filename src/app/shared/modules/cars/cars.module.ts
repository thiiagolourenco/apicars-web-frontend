import { NgModule } from '@angular/core';
import { CarsRoutingModule } from './cars-routing.module';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared.module';

import { CarTableComponent } from './components/table/car-table.component';
import { CarsListComponent } from './pages/cars-list/cars-list.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarsService } from './services/cars.service';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { UtilService } from '../../services/util.service';

@NgModule({
  declarations: [CarTableComponent, CarsListComponent, DialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    CarsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [CarsService, AuthService, UtilService],
})
export class CarsModule {}
