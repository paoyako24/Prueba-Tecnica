import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      // Aquí podrías disparar un Toast/Snackbar para los 10 pts
      console.error('Error centralizado:', error);
      return throwError(() => error);
    })
  );
};
