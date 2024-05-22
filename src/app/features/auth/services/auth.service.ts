import { LoginCredentials } from '../models/login-credentials';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoggedInformation } from '../models/logged-information';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiControllerUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(loginCredentials: LoginCredentials): Observable<LoggedInformation> {
    return this.http
      .post<LoggedInformation>(
        `${this.apiControllerUrl}/login`,
        loginCredentials
      )
      .pipe(
        tap((loggedInformation) => {
          localStorage.setItem('access_token', loggedInformation.access_token);
        })
      );
  }
}
