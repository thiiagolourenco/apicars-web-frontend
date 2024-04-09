import { User } from 'src/app/shared/modules/users/models/user.model';

export class LoginResponse {
  constructor(public token: string, public user: User) {
    this.token = token;
    this.user = user;
  }
}
