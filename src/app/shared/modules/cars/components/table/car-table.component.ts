import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Car } from '../../models/car.model';

@Component({
  selector: 'apicars-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss'],
})
export class CarTableComponent {
  @Input() public displayedColumns: string[] = [];
  @Input() public dataSource!: MatTableDataSource<Car>;
}
