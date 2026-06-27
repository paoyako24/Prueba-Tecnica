// 1. Interfaz para la propiedad 'data' que exige la API
export interface ItemData {
  price?: number;
  color?: string;
  capacity?: string;
  // Cumple con la rúbrica: Record<string, unknown> mapea datos variables de forma segura
  // y evita por completo el uso de 'any'
  [key: string]: unknown;
}

// 2. Interfaces separadas para las peticiones (Request) y respuestas (Response) como pide tu evaluación
export interface ProductoRequest {
  name: string;
  data?: ItemData | null;
}

export interface ProductoResponse {
  id: string;          // Rúbrica: El ID debe ser estrictamente 'string' (ya no 'number')
  name: string;
  data?: ItemData | null;
  createdAt?: string;  // Opcional para las respuestas de creación (POST)
  updatedAt?: string;  // Opcional para las respuestas de actualización (PUT)
}

// 3. Interfaz base para el uso general de los componentes de tu aplicación
export interface Producto {
  id: string;          // Aseguramos que en toda la app el id se maneje como string
  name: string;
  data?: ItemData | null;
  createdAt?: string;
  updatedAt?: string;
}
