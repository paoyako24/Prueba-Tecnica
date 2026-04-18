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

  // Tu lista de productos (puedes agregar más para probar la paginación)
  productos = [
    { id: 1, nombre: 'Café Americano', precio: 45, categoria: 'Bebidas' },
    { id: 2, nombre: 'Croissant Nutella', precio: 35, categoria: 'Panadería' },
    { id: 3, nombre: 'Muffin Chocolate', precio: 30, categoria: 'Postres' },
    { id: 4, nombre: 'Té Matcha', precio: 40, categoria: 'Bebidas' },
    { id: 5, nombre: 'Bagel con Queso', precio: 55, categoria: 'Salados' },
    { id: 6, nombre: 'Capuchino Vainilla', precio: 50, categoria: 'Bebidas' },
    { id: 7, nombre: 'Galleta de Avena', precio: 20, categoria: 'Postres' }
  ];

  productosFiltrados = [...this.productos];

  // Configuración de Paginación
  paginaActual: number = 1;
  itemsPorPagina: number = 3; // Mostraremos de 3 en 3

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(valor => {
      this.filtrar(valor || '');
      this.paginaActual = 1; // Volver a la pág 1 cuando buscamos
    });
  }

  filtrar(termino: string) {
    const t = termino.toLowerCase();
    this.productosFiltrados = this.productos.filter(p =>
      p.nombre.toLowerCase().includes(t) || p.categoria.toLowerCase().includes(t)
    );
  }

  // Lógica para mostrar solo los de la página actual
  get productosPaginados() {
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    return this.productosFiltrados.slice(inicio, fin);
  }

  get totalPaginas() {
    return Math.ceil(this.productosFiltrados.length / this.itemsPorPagina);
  }

  ordenarAZ() {
    this.productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }
}
