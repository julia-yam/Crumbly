import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = true;
  if (isAuthenticated) {
    return true;
  }
  return router.createUrlTree(['/']);
};
