export class Car {
  constructor(
    public user: number,
    public yeear: string,
    public licensePlate: string,
    public model: string,
    public color: string
  ) {
    this.user = user;
    this.yeear = yeear;
    this.licensePlate = licensePlate;
    this.model = model;
    this.color = color;
  }
}
