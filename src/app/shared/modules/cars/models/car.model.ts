export class Car {
  constructor(
    public id: number,
    public user: number,
    public yeear: string,
    public licensePlate: string,
    public model: string,
    public color: string
  ) {
    this.id = id;
    this.user = user;
    this.yeear = yeear;
    this.licensePlate = licensePlate;
    this.model = model;
    this.color = color;
  }
}
