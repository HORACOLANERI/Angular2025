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
  mensajeError: string = '';
  mensajeExito: string = '';

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.cargarPacientes();
  }

  cargarPacientes() {
    this.pacienteService.obtenerPacientes().subscribe({
      next: (data) => {
        this.pacientes = data;
        this.mensajeError = '';
      },
      error: (error) => {
        console.error(error);
        this.mensajeError = 'Error al cargar la lista de pacientes.';
      }
    });
  }

  eliminarPaciente(id: number) {
    if (confirm('¿Querés eliminar este paciente? Esta acción no se puede deshacer.')) {
      this.pacienteService.eliminarPaciente(id).subscribe({
        next: () => {
          this.mensajeExito = 'Paciente eliminado correctamente.';
          this.cargarPacientes(); // Refrescar lista
        },
        error: (error) => {
          console.error(error);
          this.mensajeError = 'Error al eliminar el paciente.';
        }
      });
    }
  }
}

