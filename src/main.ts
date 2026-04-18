import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App} from './app/app'; // Importamos el componente principal

bootstrapApplication(App, appConfig) // Ahora arrancamos desde la base
  .catch((err) => console.error(err));
