import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';

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
  ) {
    this.userService.users$.subscribe((users) => {
      this.dataSource = new MatTableDataSource(users);
    });
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        const currentUsers = this.userService.getUsersSubject().getValue();
        if (this.compareLists(currentUsers, data)) {
          this.userService.getUsersSubject().next(data);
        }
      },
      (_error) => {
        this.snackBar.open('Não foi possível lista os usuários.', '', {
          duration: 5000,
          panelClass: ['config-error-snackbar'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    );
  }

  compareLists(oldList: User[], newList: User[]): boolean {
    if (oldList.length !== newList.length) {
      return true;
    }

    for (let i = 0; i < oldList.length; i++) {
      if (oldList[i].id !== newList[i].id) {
        return true;
      }
    }

    return false;
  }
}
