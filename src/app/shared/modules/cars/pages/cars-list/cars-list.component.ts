import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Car } from '../../models/car.model';

@Component({
  selector: 'apicars-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
})
export class CarsListComponent implements OnInit {
  public dataSource!: MatTableDataSource<Car>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource([
      {
        id: 1,
        user: 1,
        yeear: '2020',
        licensePlate: 'ABC3AS4',
        model: 'HB20S',
        color: ' Azul',
      },
    ]);
  }
}
