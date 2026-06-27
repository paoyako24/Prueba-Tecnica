import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      // Requisito 6: Manejo centralizado
      console.error('Error detectado por el interceptor global:', error);
      return throwError(() => error);
    })
  );
};
