import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      // Requisito Ejercicio 6: Manejo centralizado
      console.error('Error detectado globalmente:', error);
      return throwError(() => error);
    })
  );
};
