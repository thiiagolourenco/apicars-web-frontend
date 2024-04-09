export class LoginResponse {
  constructor(
    public token: string,
    public firstName: string,
    public userId: number
  ) {
    this.token = token;
    this.firstName = firstName;
    this.userId = userId;
  }
}
