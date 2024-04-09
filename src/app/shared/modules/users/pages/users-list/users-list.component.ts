import { User } from '../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../services/users.service';
import { MatTableDataSource } from '@angular/material/table';
import { UtilService } from 'src/app/shared/services/util.service';
import { delay } from 'rxjs';

@Component({
  selector: 'apicars-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public dataSource!: MatTableDataSource<User>;
  public isLoading: boolean = false;

  constructor(
    private userService: UsersService,
    private snackBar: MatSnackBar,
    private utilService: UtilService
  ) {
    this.userService.loading$.subscribe((loading) => {
      this.isLoading = loading;
    });

    this.userService.users$.subscribe((users) => {
      this.dataSource = new MatTableDataSource(users);
    });
  }

  ngOnInit(): void {
    this.userService.getLoadingSubject().next(true);
    this.userService.getAllUsers().subscribe(
      (data) => {
        const currentUsers = this.userService.getUsersSubject().getValue();
        if (this.utilService.compareLists(currentUsers, data)) {
          this.userService.getUsersSubject().next(data);
        }
        delay(10000);
        this.userService.getLoadingSubject().next(false);
      },
      (_error) => {
        this.snackBar.open('Não foi possível listar os usuários.', '', {
          duration: 5000,
          panelClass: ['config-error-snackbar'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.userService.getLoadingSubject().next(false);
      }
    );
  }
}
