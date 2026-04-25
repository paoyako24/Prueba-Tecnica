import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manejo-de-errores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manejo-de-errores.html'
})
export class ManejoDeErroresComponent {
  status: 'loading' | 'error' | 'success' = 'success';

  simularError() {
    this.status = 'error';
  }

  simularCarga() {
    this.status = 'loading';
    setTimeout(() => this.status = 'success', 2000);
  }
}
