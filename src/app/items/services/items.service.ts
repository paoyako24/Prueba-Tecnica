import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

// 1. Definimos la Interface aquí (Adiós al 'any')
// Esto asegura que todo el proyecto sepa qué es un "Producto"
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // Cambia esta URL por la que te hayan dado en la prueba
  private readonly API_URL = 'https://api.tu-servidor.com/productos';

  // BONUS (+5 pts): Cacheamos la respuesta para no repetir la petición HTTP
  private productos$?: Observable<Producto[]>;

  constructor(private http: HttpClient) {}

  /**
   * Método principal con Tipado Fuerte y shareReplay
   */
  getProductos(): Observable<Producto[]> {
    if (!this.productos$) {
      this.productos$ = this.http.get<Producto[]>(this.API_URL).pipe(
        shareReplay(1) // Guarda los datos en memoria
      );
    }
    return this.productos$;
  }
}
