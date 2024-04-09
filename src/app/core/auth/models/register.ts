import { Role } from 'src/app/core/auth/models/role.model';
import { Car } from 'src/app/shared/modules/cars/models/car.model';

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
