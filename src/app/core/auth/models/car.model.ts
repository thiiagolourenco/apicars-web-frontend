export class Car {
  constructor(
    public user: number,
    public year: string,
    public licensePlate: string,
    public model: string,
    public color: string
  ) {
    this.user = user;
    this.year = year;
    this.licensePlate = licensePlate;
    this.model = model;
    this.color = color;
  }
}
