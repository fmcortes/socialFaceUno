import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginRequestInterface } from '../types/login-request.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { AuthReponseInterface } from '../types/authResponse.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  getUser(response: AuthReponseInterface): CurrentUserInterface {
    return response.user
  }

  getPosts(): Observable<any> {
    return this.httpClient.get<any>('https://fakefaceapi.onrender.com/posts', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthbXVpMUBtYWlsLmNvbSIsImlhdCI6MTcyMjk5ODQ2OCwiZXhwIjoxNzIzMDAyMDY4LCJzdWIiOiIyIn0.3-Hp33a25-q8oI5Q-ayq6Zz6MhZkfpLw7hVpDXmjHCI',
      },
    });
  }


  login(data: LoginRequestInterface): Observable<AuthReponseInterface> {
    const url = "https://fakefaceapi.onrender.com" + '/login'
    return this.httpClient
      .post<AuthReponseInterface>(url, data)
  }

}
