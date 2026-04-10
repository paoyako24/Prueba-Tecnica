import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ItemsComponent } from './app/features/items/pages/items.component';

bootstrapApplication(ItemsComponent, appConfig)
  .catch((err) => console.error(err));
