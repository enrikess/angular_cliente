import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  // Crear un nuevo cliente
  crearCorreo(Cliente: Cliente): Observable<any> {
    return this.http.post(`${this.apiUrl}/correo/guardar`,Cliente);
  }
}
