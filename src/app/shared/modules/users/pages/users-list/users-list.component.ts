import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.model';
import { Role } from 'src/app/core/auth/models/role.model';
import { Car } from '../../../cars/models/car.model';

@Component({
  selector: 'apicars-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public dataSource!: MatTableDataSource<User>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource([
      {
        id: 1,
        firstName: 'Thiago',
        lastName: 'Lourenço',
        email: 'thiago@world.com',
        birthday: '1990-05-01',
        login: 'thiagologin',
        password: '123456789',
        role: Role['ADMIN' as keyof typeof Role],
        phone: '988888888',
        cars: [] as Car[],
      },
    ]);
  }
}
