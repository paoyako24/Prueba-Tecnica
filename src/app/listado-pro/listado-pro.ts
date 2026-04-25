import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
// Borramos el import que fallaba y dejamos solo el del servicio
import { ItemsService } from '../features/items/services/items.service';

// 1. Definimos la Interface aquí mismo (Esto quita el error de "not found")
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-listado-pro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './listado-pro.html',
  styleUrls: ['./listado-pro.css']
})
export class ListadoPro implements OnInit {
  searchControl = new FormControl('');
  status: 'loading' | 'error' | 'empty' | 'success' = 'loading';

  // Usamos la interface que definimos arriba
  productosBase: Producto[] = [
    { id: 1, nombre: 'Café Americano', precio: 45 },
    { id: 2, nombre: 'Croissant Nutella', precio: 35 },
    { id: 3, nombre: 'Muffin Chocolate', precio: 30 },
    { id: 4, nombre: 'Té Matcha', precio: 40 },
    { id: 5, nombre: 'Bagel con Queso', precio: 55 }
  ];

  productosFiltrados: Producto[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    // Inicializamos con los datos locales para que no dependa de la API si falla
    this.productosFiltrados = [...this.productosBase];
    this.status = 'success';

    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(valor => {
      this.ejecutarBusqueda(valor || '');
    });
  }

  ejecutarBusqueda(termino: string) {
    const t = termino.toLowerCase().trim();
    this.productosFiltrados = t
      ? this.productosBase.filter(p => p.nombre.toLowerCase().includes(t))
      : [...this.productosBase];

    this.status = this.productosFiltrados.length > 0 ? 'success' : 'empty';
  }
}
