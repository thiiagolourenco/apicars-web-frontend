import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared.module';

import { CarTableComponent } from './components/table/car-table.component';
import { CarsListComponent } from './pages/cars-list/cars-list.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [CarTableComponent, CarsListComponent, DialogComponent],
  imports: [CommonModule, SharedModule, MaterialModule, CarsRoutingModule],
})
export class CarsModule {}