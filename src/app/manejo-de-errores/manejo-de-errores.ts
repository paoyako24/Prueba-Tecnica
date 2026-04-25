import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manejo-de-errores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manejo-de-errores.html',
  styleUrls: ['./manejo-de-errores.css']
})
export class ManejoDeErrores {
  // Estado inicial (Requisito Ejercicio 5)
  status: 'loading' | 'error' | 'success' = 'success';

  simularCarga() {
    this.status = 'loading';
    setTimeout(() => {
      this.status = 'success';
    }, 2000);
  }

  simularError() {
    this.status = 'error';
  }
}
