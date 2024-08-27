import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserProfileService {
  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getUserProfileById(userId: number) {
    return this.httpClient.get<CurrentUserInterface[]>(`${this.url}/users?id=${userId}`).pipe(
      map((currentUsersResponse) => {
        return currentUsersResponse[0];
      })
    );
  }
}
