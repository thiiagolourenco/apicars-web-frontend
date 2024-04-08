import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Car } from '../../models/car.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'apicars-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss'],
})
export class CarTableComponent {
  @Input() public dataSource!: MatTableDataSource<Car>;
  public displayedColumns: string[] = [
    'id',
    'user',
    'yeear',
    'licensePlate',
    'model',
    'color',
    'actions',
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(data: Car): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('RESULT:', result);
    });
  }
}
