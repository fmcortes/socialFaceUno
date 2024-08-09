import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginRequestInterface } from 'src/app/core/types/login-request.interface';
import { authActions } from './actions';
import { RegisterRequestInterface } from 'src/app/core/types/register-request.interface';

@Injectable()
export class AuthFacade {
  constructor(private store: Store) {}

  login(request: LoginRequestInterface): void {
    this.store.dispatch(authActions.login({ request }));
  }

  register(request: RegisterRequestInterface): void {
    this.store.dispatch(authActions.register({ request }));
  }

  forgotPassword(email: string): void {
    this.store.dispatch(authActions.forgotPassword({ request: email }));
  }
}
