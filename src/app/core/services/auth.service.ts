import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginRequestInterface } from '../types/login-request.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { AuthReponseInterface } from '../types/authResponse.interface';
import { RegisterRequestInterface } from '../types/register-request.interface';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  url = environment.apiUrl;

  getUser(response: AuthReponseInterface): CurrentUserInterface {
    return response.user;
  }

  login(data: LoginRequestInterface): Observable<AuthReponseInterface> {
    return this.httpClient.post<AuthReponseInterface>(
      `${this.url}/login`,
      data
    );
  }

  register(data: RegisterRequestInterface): Observable<AuthReponseInterface> {
    return this.httpClient.post<AuthReponseInterface>(
      `${this.url}/register`,
      data
    );
  }

  forgotPassword(email: string): Observable<string> {
    return this.httpClient.post<string>(`${this.url}/forgotpasswords`, {
      email,
    });
  }

  getCurrentUser(email: string): Observable<CurrentUserInterface> {
    return this.httpClient
      .get<CurrentUserInterface[]>(`${this.url}/users?email=${email}`)
      .pipe(
        map((currentUsersResponse) => {
          return currentUsersResponse[0];
        })
      );
  }

  updateUser(
    currentUser: CurrentUserInterface
  ): Observable<CurrentUserInterface> {
    return this.httpClient.patch<CurrentUserInterface>(
      `${this.url}/users/${currentUser.id}`,
      currentUser
    );
  }
}
