import { Car } from './car.model';
import { Role } from './role.model';

export class Register {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public birthday: string,
    public login: string,
    public password: string,
    public role: Role,
    public phone: string,
    public cars: Car[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthday = birthday;
    this.login = login;
    this.password = password;
    this.role = role;
    this.phone = phone;
    this.cars = cars;
  }
}
