import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CountryService } from 'src/app/core/services/country.service';
import { countriesActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { CountryInterface } from 'src/app/core/types/country.interface';

export const getCountriesEffect = createEffect(
  (actions$ = inject(Actions), countryService = inject(CountryService)) => {
    return actions$.pipe(
      ofType(countriesActions.getCountries),
      switchMap(() => {
        return countryService.getCountries().pipe(
          map((countries: CountryInterface[]) => {
            return countriesActions.getCountriesSuccess({ countries });
          }),
          catchError((errorResponse) => {
            return of(
              countriesActions.getCountriesFailure({
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
