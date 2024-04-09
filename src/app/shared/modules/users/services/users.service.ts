import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EditableUser } from '../models/editable-user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$: Observable<User[]> = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.URL_API}/api/users`);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.URL_API}/api/users/${userId}`);
  }

  updateUserById(userId: number, data: EditableUser): Observable<User> {
    return this.http.put<User>(
      `${environment.URL_API}/api/users/${userId}`,
      data
    );
  }

  deleteUserById(userId: number): Observable<any> {
    return this.http.delete<User>(`${environment.URL_API}/api/users/${userId}`);
  }

  getUsersSubject(): BehaviorSubject<User[]> {
    return this.usersSubject;
  }
}
