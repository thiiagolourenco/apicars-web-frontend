import { Car } from '../../models/car.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'apicars-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
})
export class CarsListComponent implements OnInit {
  public dataSource!: MatTableDataSource<Car>;

  constructor(public dialog: MatDialog) {}

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((newUser) => {
      console.log('RESULT:', newUser);
    });
  }
}
