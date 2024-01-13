import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  obtenerClientes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clientes`);
  }

  // Obtener un cliente por ID
  obtenerClientePorId(clienteId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/clientes/${clienteId}`);
  }

  // Crear un nuevo cliente
  crearCliente(cliente: any,token:string): Observable<any> {
    return this.http.post(`${this.apiUrl}/clientes`, {cliente,token});
  }

  // Actualizar un cliente existente
  actualizarCliente(cliente: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/clientes/${cliente.ClienteID}`, cliente);
  }

  // Eliminar un cliente
  eliminarCliente(clienteId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clientes/${clienteId}`);
  }
}
