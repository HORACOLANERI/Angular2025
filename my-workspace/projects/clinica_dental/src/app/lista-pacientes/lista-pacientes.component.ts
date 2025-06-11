import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../service/paciente.service';
import { Paciente } from '../../model/paciente.model';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {
  pacientes: Paciente[] = [];
  cargando = true;
  error = '';

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(): void {
    this.pacienteService.getPacientes().subscribe({
      next: (data) => {
        this.pacientes = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error al cargar pacientes';
        console.error(err);
        this.cargando = false;
      },
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Seguro que deseas eliminar este paciente?')) {
      this.pacienteService.deletePaciente(id).subscribe(() => {
        this.pacientes = this.pacientes.filter(p => p.id !== id);
      });
    }
  }

  desactivar(id: number): void {
    if (confirm('¿Deseas marcar este paciente como inactivo?')) {
      this.pacienteService.desactivarPaciente(id).subscribe(() => {
        this.pacientes = this.pacientes.filter(p => p.id !== id);
      });
    }
  }
}
