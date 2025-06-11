import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AltaPacienteComponent } from './components/alta-paciente/alta-paciente.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
