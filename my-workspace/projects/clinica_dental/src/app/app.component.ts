import { Component } from '@angular/core';
import { ListaPacientesComponent } from "./components/lista-pacientes/lista-pacientes.component";
import { AltaPacienteComponent } from "./components/alta-paciente/alta-paciente.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ListaPacientesComponent, AltaPacienteComponent]
})
export class AppComponent {}
