import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AltaPacienteComponent } from './components/alta-paciente/alta-paciente.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { PacienteService } from './service/paciente.service';

@NgModule({
  declarations: [
    AppComponent,
    AltaPacienteComponent,
    ListaPacientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PacienteService],
  bootstrap: [AppComponent,AltaPacienteComponent, ListaPacientesComponent]
})
export class AppModule {}
