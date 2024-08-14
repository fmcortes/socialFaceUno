import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { map } from 'rxjs';

@Injectable( )
export class UserProfileService {
  constructor(private httpClient: HttpClient) { }
  
  getUserProfileById(userId: number) {
    const url = `https://fakefaceapi.onrender.com/users?id=${userId}`;
    return this.httpClient.get<CurrentUserInterface[]>(url).pipe(
      map((currentUsersResponse) => {        
        return currentUsersResponse[0];
      })
    );
  }

}