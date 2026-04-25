import { Routes } from '@angular/router';
import { ItemsComponent } from './features/items/pages/items.component'; // Tu ejercicio 1
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo'; // Tu ejercicio 2
import { ListadoPro} from './listado-pro/listado-pro';
import { ManejoDeErrores} from './manejo-de-errores/manejo-de-errores';

export const routes: Routes = [
  { path: 'ejercicio1', component: ItemsComponent },
  { path: 'ejercicio2', component: FormularioReactivoComponent },
  { path: 'ejercicio3', component: ListadoPro},
  // NUEVA RUTA EJERCICIO 6
  { path: 'ejercicio6', component: ManejoDeErrores},
  { path: '', redirectTo: 'ejercicio1', pathMatch: 'full' },
  // Comodín para errores 404
  { path: '**', component: ManejoDeErrores}
];
