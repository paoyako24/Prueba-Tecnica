import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Importamos las rutas del paso 1

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) // ¡Esto activa todo!
  ]
};
