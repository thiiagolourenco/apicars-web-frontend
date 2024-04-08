import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.model';
import { Car } from '../../../cars/models/car.model';

@Component({
  selector: 'apicars-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent {
  @Input() public displayedColumns: string[] = [];
  @Input() public dataSource!: MatTableDataSource<User>;

  getCars(cars: Car[]): string {
    const carModels: string[] = cars.map(
      (car) => `${car.model} - ${car.yeear}`
    );
    return carModels.join(', ');
  }
}
