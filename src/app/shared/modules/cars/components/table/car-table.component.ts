import { Car } from '../../models/car.model';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarsService } from '../../services/cars.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from '../dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { EditableCar } from '../../models/editable-car.model';

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

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private carService: CarsService
  ) {}

  openDialog(car: Car): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: car,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.carService
          .updateCarById(
            car.id,
            new EditableCar(
              result.user,
              result.yeear,
              result.licensePlate,
              result.model,
              result.color
            )
          )
          .subscribe(
            (data) => {
              this.snackBar.open(
                `Carro de id ${data.id} editado com sucesso.`,
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
              this.snackBar.open('Não foi possível editar esse carro.', '', {
                duration: 5000,
                panelClass: ['config-error-snackbar'],
                horizontalPosition: 'center',
                verticalPosition: 'top',
              });
            }
          );

        const currentCars = this.carService.getCarsSubject().getValue();
        const updatedCars = currentCars.map((item) => {
          if (item.id === result.id) {
            return {
              ...item,
              user: result.user,
              yeear: result.yeear,
              licensePlate: result.licensePlate,
              model: result.model,
              color: result.color,
            };
          }
          return item;
        });
        this.carService.getCarsSubject().next(updatedCars);
      } else {
        this.carService.getCarById(car.id).subscribe((data) => {
          const currentCars = this.carService.getCarsSubject().getValue();
          const updatedCars = currentCars.map((item) => {
            if (item.id === data.id) {
              return {
                ...data,
              };
            }
            return item;
          });
          this.carService.getCarsSubject().next(updatedCars);
        });
      }
    });
  }

  deleteCar(car: Car): void {
    this.carService.deleteCarById(car.id).subscribe(
      () => {
        const currentCars = this.carService.getCarsSubject().getValue();
        const updatedCars = currentCars.filter((item) => item.id !== car.id);
        this.carService.getCarsSubject().next(updatedCars);

        this.snackBar.open(`Carro ${car.id} deletado com sucesso!`, '', {
          duration: 5000,
          panelClass: ['config-success-snackbar'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      (_error) => {
        this.snackBar.open('Não foi possível deletar o carro.', '', {
          duration: 5000,
          panelClass: ['config-error-snackbar'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    );
  }
}
