import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../../services/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { authActions } from './actions';
import { AuthReponseInterface } from '../../../types/authResponse.interface';
import { Router } from '@angular/router';

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

export const redirectAfterLoginEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.loginSuccess),
      tap(() => {
        router.navigateByUrl('/home')
      })
    )
  },
  {
    functional: true,
    dispatch: false,
  }
)


export const redirectAfterRegisterEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.registerSuccess),
      tap(() => {
        router.navigateByUrl('/home')
      })
    )
  },
  {
    functional: true,
    dispatch: false,
  }
)