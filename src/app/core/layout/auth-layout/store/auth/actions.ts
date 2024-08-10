import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-error.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { RegisterRequestInterface } from '../../../../types/register-request.interface';
import { LoginRequestInterface } from '../../../../types/login-request.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register success': props<{ currentUser: CurrentUserInterface }>(),
    'Register failure': props<{ errors: BackendErrorsInterface }>(),

    Login: props<{ request: LoginRequestInterface }>(),
    'Login success': props<{ currentUser: CurrentUserInterface }>(),
    'Login failure': props<{ errors: BackendErrorsInterface }>(),

    LogOut: emptyProps(),
    'LogOut success': emptyProps(),
    'LogOut failure': props<{ errors: BackendErrorsInterface }>(),

    'Forgot password': props<{ request: string }>(),
    'Forgot password success': emptyProps(),
    'Forgot password failure': props<{ errors: BackendErrorsInterface }>(),

    'Get current user': emptyProps(),
    'Get current user success': props<{ currentUser: CurrentUserInterface }>(),
    'Get current user failure':  props<{ errors: BackendErrorsInterface }>(),
  },
});
