import { Car } from '../models/car.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EditableCar } from '../models/editable-car.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  private carsSubject = new BehaviorSubject<Car[]>([]);
  cars$: Observable<Car[]> = this.carsSubject.asObservable();

  constructor(private http: HttpClient) {}

  create(car: EditableCar) {
    return this.http
      .post<Car>(`${environment.URL_API}/api/cars`, car, httpOptions)
      .pipe(take(1));
  }

  getCarByUser(userId: number): Observable<Car[]> {
    return this.http.get<Car[]>(
      `${environment.URL_API}/api/cars/by-user/${userId}`,
      httpOptions
    );
  }

  getCarById(carId: number): Observable<Car> {
    return this.http.get<Car>(
      `${environment.URL_API}/api/cars/${carId}`,
      httpOptions
    );
  }

  updateCarById(carId: number, data: EditableCar): Observable<Car> {
    return this.http.put<Car>(
      `${environment.URL_API}/api/cars/${carId}`,
      data,
      httpOptions
    );
  }

  deleteCarById(carId: number): Observable<any> {
    return this.http.delete<Car>(
      `${environment.URL_API}/api/cars/${carId}`,
      httpOptions
    );
  }

  getCarsSubject(): BehaviorSubject<Car[]> {
    return this.carsSubject;
  }

  getLoadingSubject(): BehaviorSubject<boolean> {
    return this.loadingSubject;
  }
}
