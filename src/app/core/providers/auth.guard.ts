import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

export const authGuard: CanActivateFn = (route, state) => {
  const persistanceService = inject(PersistanceService);
  const router = inject(Router);

  const token = persistanceService.get('accessToken');

  console.warn('Im on auth');
  console.warn('token', token);
  
  if (token) {
    return true;
  } else {
    router.navigate(['auth/login']);
    return false;
  }
};
