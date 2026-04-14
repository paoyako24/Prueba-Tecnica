import { Injectable } from '@angular/core';
import { Item } from '../models/items.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // Estos son los datos que antes estaban "hardcodeados" en el componente
  private items: Item[] = [
    { id: 1, name: 'Laptop Air', createdAt: new Date() },
    { id: 2, name: 'Monitor curvo', createdAt: new Date() },
    { id: 3, name: 'Teclado Mecánico', createdAt: new Date() },
    { id: 4, name: 'Mouse Inalámbrico', createdAt: new Date() },
    { id: 5, name: 'Cámara Web HD', createdAt: new Date() },
    { id: 6, name: 'Audífonos Bluetooth', createdAt: new Date() },
    { id: 7, name: 'Escritorio Gamer', createdAt: new Date() },
  ];

  constructor() {}

  // Método GET ALL que pide tu componente
  getAll(): Item[] {
    return this.items;
  }

  // Otros métodos CRUD que pide la evaluación
  getById(id: number): Item | undefined {
    return this.items.find(item => item.id === id);
  }

  create(item: Item): void {
    this.items.push(item);
  }

  remove(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}
