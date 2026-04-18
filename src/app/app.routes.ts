import { Routes } from '@angular/router';
import { ItemsComponent } from './features/items/pages/items.component'; // Tu ejercicio 1
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo'; // Tu ejercicio 2
import { ListadoProComponent } from './listado-pro/listado-pro';

export const routes: Routes = [
  { path: 'ejercicio1', component: ItemsComponent },
  { path: 'ejercicio2', component: FormularioReactivoComponent },
  { path: 'ejercicio3', component: ListadoProComponent }, // Cambié 'listado' por 'ejercicio3'
  { path: '', redirectTo: 'ejercicio1', pathMatch: 'full' }
];
