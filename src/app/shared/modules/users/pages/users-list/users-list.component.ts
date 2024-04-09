import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'apicars-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public dataSource!: MatTableDataSource<User>;

  constructor(
    private userService: UsersService,
    private snackBar: MatSnackBar,
    private utilService: UtilService
  ) {
    this.userService.users$.subscribe((users) => {
      this.dataSource = new MatTableDataSource(users);
    });
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        const currentUsers = this.userService.getUsersSubject().getValue();
        if (this.utilService.compareLists(currentUsers, data)) {
          this.userService.getUsersSubject().next(data);
        }
      },
      (_error) => {
        this.snackBar.open('Não foi possível listar os usuários.', '', {
          duration: 5000,
          panelClass: ['config-error-snackbar'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    );
  }
}
