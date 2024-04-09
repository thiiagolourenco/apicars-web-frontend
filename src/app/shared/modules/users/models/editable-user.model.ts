export class EditableUser {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public birthday: string,
    public phone: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthday = birthday;
    this.phone = phone;
  }
}
