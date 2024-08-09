import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CountryInterface } from 'src/app/core/types/country.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-error.interface';

export const countriesActions = createActionGroup({
  source: 'countries',
  events: {
    'Get countries': emptyProps(),
    'Get countries success': props<{ countries: CountryInterface[] }>(),
    'Get countries failure': props<{ errors: BackendErrorsInterface }>(),
  },
});
