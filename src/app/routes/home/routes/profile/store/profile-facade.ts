import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { userProfileActions } from './actions';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { selectUserProfileData } from './reducers';

@Injectable()
export class ProfileFacade {
  constructor(private store: Store) {}

  get userProfile$(): Observable<CurrentUserInterface | null | undefined> {
    return this.store.select(selectUserProfileData);
  }

  fetchUserProfile(userId: number) {
    this.store.dispatch(userProfileActions.getUserProfile({ id: userId }));
  }
}
