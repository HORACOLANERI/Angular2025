import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente.model';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private apiUrl = 'http://localhost:3000/pacientes';

  constructor(private http: HttpClient) {}

  // Obtener todos los pacientes
  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.apiUrl);
  }

  // Obtener paciente por ID
  getPaciente(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.apiUrl}/${id}`);
  }

  // Crear paciente
  addPaciente(paciente: Omit<Paciente, 'id' | 'activo'>): Observable<Paciente> {
    return this.http.post<Paciente>(this.apiUrl, paciente);
  }

  // Actualizar paciente
  updatePaciente(id: number, paciente: Partial<Paciente>): Observable<Paciente> {
    return this.http.patch<Paciente>(`${this.apiUrl}/${id}`, paciente);
  }

  // Desactivar paciente
  desactivarPaciente(id: number): Observable<Paciente> {
    return this.http.patch<Paciente>(`${this.apiUrl}/${id}/deactivate`, {});
  }

  // Eliminar paciente
  deletePaciente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
