import { createFeature, createReducer, on } from '@ngrx/store';
import { CountriesStateInterface } from 'src/app/core/types/countries-state.interface';
import { countriesActions } from './actions';

const initialState: CountriesStateInterface = {
  isSubmiting: false,
  isLoading: false,
  countries: undefined,
  validationErrors: null,
};

export const countriesFeature = createFeature({
  name: 'countries',
  reducer: createReducer(
    initialState,
    on(countriesActions.getCountries, (state) => ({
      ...state,
      isSubmiting: true,
      validationErrors: null,
    })),
    on(countriesActions.getCountriesSuccess, (state, action) => ({
      ...state,
      isSubmiting: false,
      validationErrors: null,
      countries: action.countries,
    })),
    on(countriesActions.getCountriesFailure, (state, action) => ({
      ...state,
      isSubmiting: false,
      validationErrors: action.errors,
      countries: null,
    }))
  ),
});

export const {
  name: countriesFeatureKey,
  reducer: countriesReducer,
  selectCountries,
  selectIsLoading,
  selectIsSubmiting,
  selectValidationErrors,
} = countriesFeature;
