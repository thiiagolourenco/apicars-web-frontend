import { User } from '../../models/user.model';
import { Component, Input } from '@angular/core';
import { Car } from '../../../cars/models/car.model';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'apicars-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent {
  @Input() public dataSource!: MatTableDataSource<User>;
  public displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'birthday',
    'phone',
    'cars',
    'actions',
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(data: User): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('RESULT:', result);
    });
  }

  getCars(cars: Car[]): string {
    if (cars.length > 0) {
      const carModels: string[] = cars.map(
        (car) => `${car.model} - ${car.yeear}`
      );
      return carModels.join(', ');
    }
    return 'Usuário não possui carros.';
  }
}
