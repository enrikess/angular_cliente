// servicio-seguridad.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioSeguridad {
  private apiUrl = 'http://localhost:3000'; // Reemplaza con la URL real

  constructor(private http: HttpClient) {}

  obtenerToken(ClienteID: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tokens/obtener/${ClienteID}`);
  }

  generarToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tokens/generars`);
  }

  actualizarToken(ClienteID: number,token:string): Observable<any> {
    return this.http.get(`${this.apiUrl}/tokens/actualizar/${ClienteID}/${token}`);
  }

  validarToken(token:string):any{
    return this.http.get(`${this.apiUrl}/tokens/validar/${token}`);

  }

}
