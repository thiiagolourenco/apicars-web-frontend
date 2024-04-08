import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { MaterialModule } from '../../material.module';
import { CarTableComponent } from './components/table/car-table.component';
import { CarsListComponent } from './pages/cars-list/cars-list.component';

@NgModule({
  declarations: [CarTableComponent, CarsListComponent],
  imports: [CommonModule, MaterialModule, CarsRoutingModule],
})
export class CarsModule {}
