import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-listado-pro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './listado-pro.html',
  styleUrls: ['./listado-pro.css']
})
export class ListadoProComponent implements OnInit {
  searchControl = new FormControl('');

  // Variable de estado para UX (Requisito Eje 5)
  status: 'loading' | 'error' | 'empty' | 'success' = 'loading';

  productosBase = [
    { id: 1, nombre: 'Café Americano', precio: 45 },
    { id: 2, nombre: 'Croissant Nutella', precio: 35 },
    { id: 3, nombre: 'Muffin Chocolate', precio: 30 },
    { id: 4, nombre: 'Té Matcha', precio: 40 },
    { id: 5, nombre: 'Bagel con Queso', precio: 55 }
  ];

  productosFiltrados: any[] = [];

  ngOnInit() {
    this.cargarDatosIniciales();

    // Buscador Pro con RxJS (Requisito Eje 3)
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(valor => {
      this.ejecutarBusqueda(valor || '');
    });
  }

  cargarDatosIniciales() {
    this.status = 'loading';
    setTimeout(() => {
      // Simulación de éxito
      this.productosFiltrados = [...this.productosBase];
      this.status = 'success';

      // Nota: Si quisieras probar el estado de 'error',
      // podrías cambiar a: this.status = 'error';
    }, 1500);
  }

  ejecutarBusqueda(termino: string) {
    this.status = 'loading';

    setTimeout(() => {
      const t = termino.toLowerCase();
      this.productosFiltrados = this.productosBase.filter(p =>
        p.nombre.toLowerCase().includes(t)
      );

      // Manejo de estado EMPTY (Requisito Eje 5)
      if (this.productosFiltrados.length === 0) {
        this.status = 'empty';
      } else {
        this.status = 'success';
      }
    }, 600);
  }
}
