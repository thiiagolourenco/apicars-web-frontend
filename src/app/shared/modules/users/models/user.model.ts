import { Role } from 'src/app/core/auth/models/role.model';
import { Car } from '../../cars/models/car.model';

export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public birthday: string,
    public login: string,
    public password: string,
    public role: Role,
    public phone: string,
    public cars: Car[],
    public lastLogin?: string,
    public createdAt?: string,
    public enabled?: boolean,
    public accountNonLocked?: boolean,
    public accountNonExpired?: boolean,
    public credentialsNonExpired?: boolean,
    public authorities?: { authority: string }[],
    public username?: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthday = birthday;
    this.login = login;
    this.password = password;
    this.role = role;
    this.phone = phone;
    this.cars = cars;
    this.lastLogin = lastLogin;
    this.createdAt = createdAt;
    this.enabled = enabled;
    this.accountNonLocked = accountNonLocked;
    this.accountNonExpired = accountNonExpired;
    this.credentialsNonExpired = credentialsNonExpired;
    this.authorities = authorities;
    this.username = username;
  }
}
