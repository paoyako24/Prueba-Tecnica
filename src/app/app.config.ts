import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; // Importante
import { routes } from './app.routes';
import { errorInterceptor } from './manejo-de-errores/error.interceptor'; // Tu interceptor

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Esto activa el consumo de APIs y tu manejo centralizado de errores
    provideHttpClient(
      withInterceptors([errorInterceptor])
    )
  ]
};
