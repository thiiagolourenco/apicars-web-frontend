export class LoginResponse {
  constructor(
    public token: string,
    public name: string,
    public userId: number
  ) {
    this.token = token;
    this.name = name;
    this.userId = userId;
  }
}
