import { BackendErrorsInterface } from '../../../../../shared/types/backend-error.interface';
import { LoginRequestInterface } from '../../../../../core/types/login-request.interface';
import { CurrentUserInterface } from '../../../../../shared/types/current-user.interface';

import { authActions } from './actions';

describe('Auth Actions', () => {
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

  describe('Register', () => {
    it('should register', () => {
      const request = {
        email: 'test@email.com',
        password: '12324',
        firstname: 'first name',
        lastname: 'last name',
        country: 'mexico',
        notification: 'email',
        image: 'someImage.jpg',
        age: 38,
      };

      const register = authActions.register({ request });
      expect(register).toBeTruthy();
      expect(register.request).toEqual(request);
    });

    it('should register succes', () => {
      const actionSuccess = authActions.registerSuccess({ currentUser });
      expect(actionSuccess.currentUser).toEqual(currentUser);
    });

    it('should register fail', () => {
      const failure = 'Register failed';
      const actionFailure = authActions.registerFailure({ errors: failure });

      expect(actionFailure.errors).toEqual(failure);
    });
  });

  describe('Login', () => {
    it('Login', () => {
      const loginRequest: LoginRequestInterface = {
        email: 'test@email.com',
        password: '123456',
      };

      const login = authActions.login({ request: loginRequest });
      expect(login.request).toEqual(loginRequest);
    });

    it('login request', () => {
      const loginSucces = authActions.loginSuccess({ currentUser });
      expect(loginSucces).toBeTruthy();
      expect(loginSucces.currentUser).toBe(currentUser);
    });

    it('should login failure', () => {
      const errors = 'Login Failed';
      const loginFailure = authActions.loginFailure({ errors });
      expect(loginFailure).toBeTruthy();
      expect(loginFailure.errors).toEqual(errors);
    });
  });

  describe('Logout', () => {
    it('should logout', () => {
      const logout = authActions.logout();
      expect(logout).toBeTruthy();
    });

    it('should logout success', () => {
      const logoutSucces = authActions.logoutSuccess();
      expect(logoutSucces).toBeTruthy();
    });

    it('should logut fail', () => {
      const errors: BackendErrorsInterface = {
        ['error']: ['Login failed'],
      };

      const logOutFailure = authActions.logoutFailure({ errors });
      expect(logOutFailure).toBeTruthy();
      expect(logOutFailure.errors).toBe(errors);
    });
  });

  describe('Forgot password', () => {
    it('should forgot password', () => {
      const request = 'test@mail.com';
      const forgotAction = authActions.forgotPassword({ request });

      expect(forgotAction).toBeTruthy();
      expect(forgotAction.request).toEqual(request);
    });

    it('should forgot password success', () => {
      const forgotAction = authActions.forgotPasswordSuccess();

      expect(forgotAction).toBeTruthy();
    });

    it('should forgot password failure', () => {
      const errors: BackendErrorsInterface = {
        ['error']: ['Forgot failed'],
      };
      const forgotAction = authActions.forgotPasswordFailure({ errors });

      expect(forgotAction).toBeTruthy();
      expect(forgotAction.errors).toEqual(errors);
    });
  });

  describe('Current user', () => {
    it('should get the current user', () => {
      const currentUserAction = authActions.getCurrentUser();
      expect(currentUserAction).toBeTruthy();
    });

    it('should get the current user success', () => {
      const currentUserAction = authActions.getCurrentUserSuccess({
        currentUser,
      });
      expect(currentUserAction).toBeTruthy();
      expect(currentUserAction.currentUser).toEqual(currentUser);
    });

    it('should get the current user fail', () => {
      const errors: BackendErrorsInterface = {
        ['error']: ['Current failed'],
      };
      const currentUserAction = authActions.getCurrentUserFailure({
        errors,
      });
      expect(currentUserAction).toBeTruthy();
      expect(currentUserAction.errors).toEqual(errors);
    });
  });

  describe('Update user', () => {
    it('should update user', () => {
      const updateUserAction = authActions.updateCurrentUser({ currentUser });
      expect(updateUserAction).toBeTruthy();
    });
    it('should update user success', () => {
      const updateUserAction = authActions.updateCurrentUserSuccess({
        currentUser,
      });
      expect(updateUserAction).toBeTruthy();
      expect(updateUserAction.currentUser).toEqual(currentUser);
    });

    it('should update user fail', () => {
      const errors = 'Fail to update user';
      const updateUserAction = authActions.updateCurrentFailure({ errors });
      expect(updateUserAction).toBeTruthy();
      expect(updateUserAction.errors).toEqual(errors);
    });
  });

  describe('Clear errors', () => {
    it('should clear errors', () => {
      const clearActions = authActions.clearErrors();
      expect(clearActions).toBeTruthy();
    });
  });
});
