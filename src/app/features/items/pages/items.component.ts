import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ItemsService } from '../services/items.service';
import { Producto } from '../../../models/producto.models'; // Tu modelo real

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  searchControl = new FormControl('');
  status: 'loading' | 'error' | 'empty' | 'success' = 'loading';

  items = signal<Producto[]>([]); // CORRECCIÓN: Quitamos Item que rompía la build
  searchTerm = signal<string>('');
  page = signal<number>(1);
  pageSize = signal<number>(10);

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.cargarDatos();

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
    this.itemsService.getAll().subscribe({
      next: (datos: Producto[]) => {
        this.items.set(datos);
        this.status = datos.length > 0 ? 'success' : 'empty';
      },
      error: (err) => {
        console.error(err);
        this.status = 'error';
      }
    });
  }

  filteredItems = computed(() => {
    const termino = this.searchTerm().toLowerCase().trim();
    const lista = this.items();
    if (!termino) return lista;
    return lista.filter(item => item.name?.toLowerCase().includes(termino));
  });

  paginatedItems = computed(() => {
    const inicio = (this.page() - 1) * this.pageSize();
    const fin = inicio + this.pageSize();
    return this.filteredItems().slice(inicio, fin);
  });
}
