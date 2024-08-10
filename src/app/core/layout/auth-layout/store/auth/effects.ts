import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../../../services/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { authActions } from './actions';
import { AuthReponseInterface } from '../../../../types/authResponse.interface';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

export const loginEffect = createEffect(
  (
    action$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return action$.pipe(
      ofType(authActions.login),
      switchMap(({ request }) => {
        return authService.login(request).pipe(
          map((loginResponse: AuthReponseInterface) => {
            persistanceService.set('accessToken', loginResponse.accessToken);

            const { user: currentUser } = loginResponse;

            return authActions.loginSuccess({ currentUser });
          }),
          catchError((errorResponse) => {
            return of(
              authActions.loginFailure({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const logOutEffect = createEffect(
  (
    action$ = inject(Actions),
    persistanceService = inject(PersistanceService)
  ) => {
    return action$.pipe(
      ofType(authActions.logout),
      map(() => {
        persistanceService.delete('accessToken')
        return authActions.logoutSuccess();
      }),
      catchError((errorResponse) => {
        return of(
          authActions.logoutFailure({ errors: errorResponse.error.errors })
        );
      })
    );
  },
  { functional: true }
);

export const registerEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((registerResponse: AuthReponseInterface) => {
            // we can set the token to local storage
            // window.localStorage.setItem('accessToken', currentUser.token)
            persistanceService.set('accessToken', registerResponse.accessToken);

            const { user: currentUser } = registerResponse;

            return authActions.registerSuccess({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.registerFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterRegisterEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.registerSuccess, authActions.loginSuccess),
      tap(() => {
        router.navigateByUrl('/home');
      })
    );
  },
  {
    functional: true,
    dispatch: false,
  }
);

export const forgotEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.forgotPassword),
      switchMap(({ request }) => {
        return authService.forgotPassword(request).pipe(
          map((email: string) => {
            return authActions.forgotPasswordSuccess();
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.forgotPasswordFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterForgetEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.forgotPasswordSuccess, authActions.logoutSuccess),
      tap(() => {
        router.navigateByUrl('auth/login');
      })
    );
  },
  {
    functional: true,
    dispatch: false,
  }
);
