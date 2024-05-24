import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

// HttpInterceptorFn: Angular tarafında HTTP isteklerini dinleyen ve araya giren bir yapıdır.

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // req: HTTP isteği
  // next: Sonraki adım

  const authService = inject(AuthService);

  const newReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${authService.token}`),
  });

  return next(newReq);
};
