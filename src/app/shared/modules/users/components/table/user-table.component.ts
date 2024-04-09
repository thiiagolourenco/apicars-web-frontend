import { User } from '../../models/user.model';
import { Component, Input } from '@angular/core';
import { Car } from '../../../cars/models/car.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../services/users.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { EditableUser } from '../../models/editable-user.model';

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

  constructor(
    public dialog: MatDialog,
    private userService: UsersService,
    private snackBar: MatSnackBar
  ) {}

  openDialog(user: User): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService
          .updateUserById(
            user.id,
            new EditableUser(
              result.firstName,
              result.lastName,
              result.email,
              result.birthday,
              result.phone
            )
          )
          .subscribe(
            (data) => {
              this.snackBar.open(
                `Usuário de id ${data.id} editado com sucesso.`,
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
              this.snackBar.open('Não foi possível editar esse usuário.', '', {
                duration: 5000,
                panelClass: ['config-error-snackbar'],
                horizontalPosition: 'center',
                verticalPosition: 'top',
              });
            }
          );

        const currentUsers = this.userService.getUsersSubject().getValue();
        const updatedUsers = currentUsers.map((item) => {
          if (item.id === result.id) {
            return {
              ...item,
              firstName: result.firstName,
              lastName: result.lastName,
              email: result.email,
              birthday: result.birthday,
              phone: result.phone,
            };
          }
          return item;
        });
        this.userService.getUsersSubject().next(updatedUsers);
      } else {
        this.userService.getUserById(user.id).subscribe((data) => {
          const currentUsers = this.userService.getUsersSubject().getValue();
          const updatedUsers = currentUsers.map((item) => {
            if (item.id === data.id) {
              return {
                ...data,
              };
            }
            return item;
          });
          this.userService.getUsersSubject().next(updatedUsers);
        });
      }
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

  deleteUser(user: User): void {
    this.userService.deleteUserById(user.id).subscribe(
      () => {
        const currentUsers = this.userService.getUsersSubject().getValue();
        const updatedUsers = currentUsers.filter((item) => item.id !== user.id);
        this.userService.getUsersSubject().next(updatedUsers);

        this.snackBar.open(`Usuário ${user.id} deletado com sucesso!`, '', {
          duration: 5000,
          panelClass: ['config-success-snackbar'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      (_error) => {
        this.snackBar.open('Não foi possível deletar o usuário.', '', {
          duration: 5000,
          panelClass: ['config-error-snackbar'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    );
  }
}
