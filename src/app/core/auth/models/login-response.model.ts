export class LoginResponse {
  constructor(
    public token: string,
    public firstName: string,
    public id: number
  ) {
    this.token = token;
    this.firstName = firstName;
    this.id = id;
  }
}
