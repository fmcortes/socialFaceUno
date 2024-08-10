import { createFeature, createReducer, on } from '@ngrx/store';

import { authActions } from './actions';
import { routerNavigatedAction } from '@ngrx/router-store';
import { AuthStateInterface } from '../../../../types/auth-state.interface';

const initialState: AuthStateInterface = {
  isSubmiting: false,
  isLoading: false,
  currentUser: undefined,
  validationErrors: null,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, (state) => ({
      ...state,
      isSubmiting: true,
      validationErrors: null,
    })),
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      isSubmiting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.registerFailure, (state, action) => ({
      ...state,
      isSubmiting: false,
      validationErrors: action.errors,
      currentUser: null,
    })),

    on(authActions.login, (state) => ({
      ...state,
      isSubmiting: true,
      validationErrors: null,
    })),
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      isSubmiting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.loginFailure, (state, action) => ({
      ...state,
      isSubmiting: false,
      validationErrors: action.errors,
      currentUser: null,
    })),

    on(authActions.logout, (state) => ({
      ...state,
      isSubmiting: true,
      validationErrors: null,
    })),
    on(authActions.logoutSuccess, (state) => ({
      ...state,
      isSubmiting: false,
      currentUser: null,
    })),
    on(authActions.loginFailure, (state, action) => ({
      ...state,
      isSubmiting: false,
      validationErrors: action.errors,
    })),

    on(routerNavigatedAction, (state) => ({ ...state, validationErrors: null }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmiting,
  selectIsLoading,
  selectCurrentUser,
  selectValidationErrors,
} = authFeature;
