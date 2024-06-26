import { BehaviorSubject, Observable, delay, take, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../models/login-response.model';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private submittedSubject = new BehaviorSubject<boolean>(false);
  submitted$: Observable<boolean> = this.submittedSubject.asObservable();

  constructor(private http: HttpClient) {}

  public login(login: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${environment.URL_API}/auth/login`, {
        login,
        password,
      })
      .pipe(
        tap((response) => {
          this.setSession(response);
          return response;
        })
      );
  }

  public register(user: Register): Observable<string> {
    return this.http
      .post(`${environment.URL_API}/auth/register`, user, {
        responseType: 'text',
      })
      .pipe(take(1));
  }

  public logout() {
    localStorage.clear();
  }

  private setSession(result: LoginResponse) {
    localStorage.setItem('token', result.token);
    localStorage.setItem(
      'user',
      JSON.stringify({ firstName: result.firstName, id: result.id })
    );
  }

  public isLoggedIn(): boolean {
    const userToken = localStorage.getItem('token');
    return !!userToken;
  }

  public getUser(): { firstName: string; id: number } {
    let user;
    const auxAuthInfo = localStorage.getItem('user');

    if (auxAuthInfo != null) {
      user = JSON.parse(auxAuthInfo);
    }
    return user;
  }

  getSubmitSubject(): BehaviorSubject<boolean> {
    return this.submittedSubject;
  }
}
