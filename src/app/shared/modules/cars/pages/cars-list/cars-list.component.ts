import { Car } from '../../models/car.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarsService } from '../../services/cars.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { UtilService } from 'src/app/shared/services/util.service';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { EditableCar } from '../../models/editable-car.model';

@Component({
  selector: 'apicars-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
})
export class CarsListComponent implements OnInit {
  public dataSource!: MatTableDataSource<Car>;

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private carService: CarsService,
    private authService: AuthService,
    private utilService: UtilService
  ) {
    this.carService.cars$.subscribe((cars) => {
      this.dataSource = new MatTableDataSource(cars);
    });
  }

  ngOnInit(): void {
    this.carService.getCarByUser(this.authService.getUser().id).subscribe(
      (data) => {
        const currentCars = this.carService.getCarsSubject().getValue();
        if (this.utilService.compareLists(currentCars, data)) {
          this.carService.getCarsSubject().next(data);
        }
      },
      (_error) => {
        this.snackBar.open('Não foi possível listar os seus carros.', '', {
          duration: 5000,
          panelClass: ['config-error-snackbar'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: new EditableCar(this.authService.getUser().id, '', '', '', ''),
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.carService
          .create(
            new EditableCar(
              this.authService.getUser().id,
              result.yeear,
              result.licensePlate,
              result.model,
              result.color
            )
          )
          .subscribe(
            (data) => {
              const currentCars = this.carService.getCarsSubject().getValue();
              const updatedUsers = [...currentCars, data];
              this.carService.getCarsSubject().next(updatedUsers);

              this.snackBar.open(
                `Carro adicionado ao seu portifólio com sucesso!`,
                '',
                {
                  duration: 5000,
                  panelClass: ['config-success-snackbar'],
                  horizontalPosition: 'center',
                  verticalPosition: 'top',
                }
              );
            },
            (_error) => {
              this.snackBar.open(
                'Não foi adicionar o carro ao seu portifólio.',
                '',
                {
                  duration: 5000,
                  panelClass: ['config-error-snackbar'],
                  horizontalPosition: 'center',
                  verticalPosition: 'top',
                }
              );
            }
          );
      }
    });
  }
}
