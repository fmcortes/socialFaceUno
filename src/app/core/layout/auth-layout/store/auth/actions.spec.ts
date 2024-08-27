import { BackendErrorsInterface } from '../../../../../shared/types/backend-error.interface';
import { LoginRequestInterface } from '../../../../../core/types/login-request.interface';
import { CurrentUserInterface } from '../../../../../shared/types/current-user.interface';

import { authActions } from './actions';

fdescribe('Auth Actions', () => {
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
});
