import { CurrentUserInterface } from '../../../../../shared/types/current-user.interface';
import { AuthService } from '../../../../../core/services/auth.service';
import { AuthReponseInterface } from '../../../../../core/types/auth-response.interface';
import { LoginRequestInterface } from '../../../../../core/types/login-request.interface';

import { PersistanceService } from '../../../../../shared/services/persistance.service';
import { Observable, of, throwError } from 'rxjs';
import { Action } from '@ngrx/store';
import { authActions } from './actions';
import { loginEffect, logOutEffect } from './effects';
import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';

describe('Auth Effects', () => {
  const currentUser: CurrentUserInterface = {
    accesToken: 'token',
    email: 'test@email.com',
    firstname: 'first name',
    lastname: 'last name',
    country: 'mexico',
    image: 'someImage.jpg',
    notifications: 'email',
    username: 'testuser',
    id: 1,
    friends: [],
    photos: ['picture.jpg'],
    cover: 'cover-picture.jpg',
  };

  const authResponse: AuthReponseInterface = {
    user: currentUser,
    accessToken: 'someToken',
  };

  const loginRequest: LoginRequestInterface = {
    email: 'test@email.com',
    password: '123456',
  };

  let authService: AuthService;
  let persistanceService: PersistanceService;
  let action$: Observable<Action>;

  it('should login', (done) => {
    authService = {
      login: () => of(authResponse),
    } as unknown as AuthService;

    persistanceService = {
      set: () => {},
      delete: () => {},
    } as unknown as PersistanceService;

    const spyOnPersistance = spyOn(persistanceService, 'set');
    action$ = of(authActions.login({ request: loginRequest }));

    TestBed.runInInjectionContext((): void => {
      loginEffect(action$, authService, persistanceService).subscribe(
        (action) => {
          expect(action).toEqual(authActions.loginSuccess({ currentUser }));
          expect(spyOnPersistance).toHaveBeenCalled();
          done();
        }
      );
    });
  });

  it('should login fail', (done) => {
    authService = {
      login: () =>
        throwError(() => new HttpErrorResponse({ error: 'Login fail' })),
    } as unknown as AuthService;

    persistanceService = {
      set: () => {},
      delete: () => {},
    } as unknown as PersistanceService;
    action$ = of(authActions.login({ request: loginRequest }));

    TestBed.runInInjectionContext((): void => {
      loginEffect(action$, authService, persistanceService).subscribe(
        (action) => {
          expect(action).toEqual(
            authActions.loginFailure({ errors: 'Login fail' })
          );
          done();
        }
      );
    });
  });

  it('shoul logout success', () => {
    persistanceService = {
      set: () => {},
      delete: (token: string) => {},
    } as unknown as PersistanceService;
    const spyOnPersistance = spyOn(persistanceService, 'delete');
    action$ = of(authActions.logout());
    TestBed.runInInjectionContext((): void => {
      logOutEffect(action$, persistanceService).subscribe(() => {
        expect(spyOnPersistance).toHaveBeenCalledTimes(2);
      });
    });
  });

  it('shoul logout faile', (done) => {
    persistanceService = {
      set: () => {},
      delete: (): Observable<void> => {
        return throwError(
          () => new HttpErrorResponse({ error: 'Logout fail' })
        );
      },
    } as unknown as PersistanceService;

    const spyOnPersistance = spyOn(persistanceService, 'delete');
    action$ = of(authActions.logout());

    TestBed.runInInjectionContext((): void => {
      logOutEffect(action$, persistanceService).subscribe((action) => {
        expect(spyOnPersistance).toHaveBeenCalled();
        done();
      });
    });
  });
});
