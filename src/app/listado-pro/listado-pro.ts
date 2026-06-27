import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ItemsService } from '../features/items/services/items.service';
import { Producto } from '../models/producto.models';

@Component({
  selector: 'app-listado-pro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './listado-pro.html',
  styleUrls: ['./listado-pro.css']
})
export class ListadoProComponent implements OnInit {
  searchControl = new FormControl('');
  status: 'loading' | 'error' | 'empty' | 'success' = 'loading';

  // SEÑALES CLAVE: Aquí es donde se crean para que el HTML deje de marcar error
  productosBase = signal<Producto[]>([]);
  searchTerm = signal<string>('');
  page = signal<number>(1);
  pageSize = signal<number>(10);

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.cargarDatos();

    // Filtro reactivo en base a lo que escribes en el input
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(valor => {
      this.searchTerm.set(valor || '');
      this.page.set(1);
    });
  }

  cargarDatos() {
    this.status = 'loading';
    // CORRECCIÓN: Nos suscribimos al observable para recibir el arreglo real de datos
    this.itemsService.getAll().subscribe({
      next: (data: Producto[]) => {
        this.productosBase.set(data);
        this.status = data.length > 0 ? 'success' : 'empty';
      },
      error: (err) => {
        console.error('Error al cargar datos en ListadoPro:', err);
        this.status = 'error';
      }
    });
  }

  // Señal computada para filtrar los productos por nombre
  filteredItems = computed(() => {
    const termino = this.searchTerm().toLowerCase().trim();
    const lista = this.productosBase();
    if (!termino) return lista;
    return lista.filter(prod => prod.name?.toLowerCase().includes(termino));
  });

  // Señal computada para cortar la lista en bloques de 10 elementos para la tabla
  paginatedItems = computed(() => {
    const inicio = (this.page() - 1) * this.pageSize();
    const fin = inicio + this.pageSize();
    return this.filteredItems().slice(inicio, fin);
  });
}
