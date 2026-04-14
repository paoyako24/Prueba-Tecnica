import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../services/items.service';
import { Item } from '../models/items.model';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  private itemsService = inject(ItemsService); // Inyectamos el servicio

  items = signal<Item[]>([]); // Lista principal
  searchQuery = signal('');   // Para el buscador
  page = signal(1);           // Para la paginación
  pageSize = 5;

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.items.set(this.itemsService.getAll()); // Traemos los datos del servicio
  }

  filteredItems = computed(() => {
    return this.items().filter(item =>
      item.name.toLowerCase().includes(this.searchQuery().toLowerCase())
    );
  });

  paginatedItems = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.filteredItems().slice(start, start + this.pageSize);
  });

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.set(value);
    this.page.set(1);
  }
}
