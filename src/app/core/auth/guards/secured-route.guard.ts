import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const securedRouteGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated) {
    console.error('You are not authenticated! Redirecting to login page...');
    router.navigate(['/auth/login']);
    return false;
  }

  const requiredRoles = route.data['requiredRoles'] as number[] | undefined;
  if (requiredRoles && !authService.isAuthroized(requiredRoles)) {
    console.error('You are not authorized! Redirecting to home page...');
    router.navigate(['/']);
    return false;
  }

  return true; // True döndüldüğünde route'a devam eder, false döndüğünde route'a devam etmez.
};
