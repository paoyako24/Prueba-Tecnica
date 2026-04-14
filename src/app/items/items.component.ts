import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from './items.model';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html'
})
export class ItemsComponent {
  // 1. Definición de Signals
  searchTerm = signal('');
  page = signal(1);
  pageSize = 5;

  items = signal<Item[]>([
    { id: 1, name: 'Laptop', createdAt: new Date() },
    { id: 2, name: 'Mouse', createdAt: new Date() },
    { id: 3, name: 'Teclado', createdAt: new Date() },
    { id: 4, name: 'Monitor', createdAt: new Date() },
    { id: 5, name: 'Cámara', createdAt: new Date() }
  ]);

  // 2. Lógica de Filtrado y Ordenamiento (Corrige el error de la captura image_bb171c.png)
  filteredItems = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.items()
      .filter(i => i.name.toLowerCase().includes(term))
      .sort((a: Item, b: Item) => a.name.localeCompare(b.name)); // Usamos el tipo Item aquí
  });

  paginatedItems = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.filteredItems().slice(start, start + this.pageSize);
  });

  // 3. Métodos del componente
  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
    this.page.set(1);
  }

  // --- EL APARTADO DONDE VAN LAS FUNCIONES DE PAGINACIÓN ---
  onPrevPage() {
    this.page.update(p => p - 1);
  }

  onNextPage() {
    this.page.update(p => p + 1);
  }
  // -------------------------------------------------------

} // <--- ESTA ES LA LLAVE QUE CIERRA LA CLASE (Asegúrate de no borrarla)
