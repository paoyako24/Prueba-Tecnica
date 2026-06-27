import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../../../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // 1. URL para el Ejercicio 1 (Datos base)
  private urlEjercicio1 = 'https://api.restful-api.dev/objects';

  // 2. URL o Endpoint para el Ejercicio 3 y 5 (¡Datos Pro / Diferentes!)
  // Si tu profesor te dio otra URL específica para el listado pro, cámbiala aquí:
  private urlEjercicio3y5 = 'https://api.restful-api.dev/objects';

  constructor(private http: HttpClient) {}

  // Para el Ejercicio 1
  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.urlEjercicio1);
  }

  // Para el Ejercicio 3 y 5 (Datos Diferentes)
  getProductosPro(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.urlEjercicio3y5);
  }
}
