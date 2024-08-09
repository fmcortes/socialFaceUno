import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginRequestInterface } from '../types/login-request.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { AuthReponseInterface } from '../types/authResponse.interface';
import { RegisterRequestInterface } from '../types/register-request.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  getUser(response: AuthReponseInterface): CurrentUserInterface {
    return response.user;
  }

  getPosts(): Observable<any> {
    return this.httpClient.get<any>('https://fakefaceapi.onrender.com/posts');
  }

  login(data: LoginRequestInterface): Observable<AuthReponseInterface> {
    const url = 'https://fakefaceapi.onrender.com' + '/login';
    return this.httpClient.post<AuthReponseInterface>(url, data);
  }

  register(data: RegisterRequestInterface): Observable<AuthReponseInterface> {
    const url = 'https://fakefaceapi.onrender.com/register';
    return this.httpClient.post<AuthReponseInterface>(url, data);
  }

  forgotPassword(email: string): Observable<string> {
    const url = 'https://fakefaceapi.onrender.com/forgotpasswords';
    return this.httpClient.post<string>(url, { email });
  }
}
