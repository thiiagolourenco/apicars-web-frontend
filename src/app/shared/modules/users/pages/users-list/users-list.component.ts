import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.model';
import { Role } from 'src/app/core/auth/models/role.model';
import { Car } from '../../../cars/models/car.model';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'apicars-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public dataSource!: MatTableDataSource<User>;

  constructor(
    private userService: UsersService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data || []);
      },
      (_error) => {
        this.snackBar.open('Não foi possível lista os usuários.', '', {
          duration: 5000,
          panelClass: ['config-error-snackbar'],
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
    );
  }
}
