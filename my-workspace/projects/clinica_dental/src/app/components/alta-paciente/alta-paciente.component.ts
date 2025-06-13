import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../service/paciente.service';

@Component({
  selector: 'app-alta-paciente',
  templateUrl: './alta-paciente.component.html',
  styleUrls: ['./alta-paciente.component.css']
})
export class AltaPacienteComponent {
  pacienteForm: FormGroup;
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService
  ) {
    // Definimos los controles del formulario con sus validaciones
    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.pacienteForm.valid) {
      this.pacienteService.crearPaciente(this.pacienteForm.value).subscribe({
        next: () => {
          this.mensajeExito = 'Paciente creado correctamente.';
          this.mensajeError = '';
          this.pacienteForm.reset(); // Resetea el formulario
        },
        error: (error) => {
          console.error(error);
          this.mensajeExito = '';
          this.mensajeError = 'Hubo un error al crear el paciente.';
        }
      });
    } else {
      this.mensajeError = 'Por favor completa todos los campos correctamente.';
      this.mensajeExito = '';
    }
  }
}
