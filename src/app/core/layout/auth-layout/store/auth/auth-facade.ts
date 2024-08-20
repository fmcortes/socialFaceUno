import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginRequestInterface } from 'src/app/core/types/login-request.interface';
import { authActions } from './actions';
import { RegisterRequestInterface } from 'src/app/core/types/register-request.interface';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { selectCurrentUser, selectValidationErrors } from './reducer';

@Injectable()
export class AuthFacade {
  constructor(private store: Store) {}

  get currentUser$(): Observable<CurrentUserInterface | null | undefined> {
    return this.store.select(selectCurrentUser);
  }

  get error$(): Observable<string | null> {
    return this.store.select(selectValidationErrors);
  }

  login(request: LoginRequestInterface): void {
    this.store.dispatch(authActions.login({ request }));
  }

  register(request: RegisterRequestInterface): void {
    this.store.dispatch(authActions.register({ request }));
  }

  forgotPassword(email: string): void {
    this.store.dispatch(authActions.forgotPassword({ request: email }));
  }

  logOut(): void {
    this.store.dispatch(authActions.logout());
  }

  clearErrors(): void {
    this.store.dispatch(authActions.clearErrors());
  }

  getCurrentUser(): void {
    this.store.dispatch(authActions.getCurrentUser());
  }

  updateCurrentUser(currentUser: CurrentUserInterface): void {
    this.store.dispatch(authActions.updateCurrentUser({ currentUser }));
  }
}
