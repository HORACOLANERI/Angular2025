import { Component } from '@angular/core';
import { Contacto } from '../model/Contacto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule,CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombre: string;
  email: string;
  telefono: string;
  agenda:Contacto[]=[];
  visible: boolean = false;

  guardar():void{
    //creamos un nuevo contacto y lo añadimos a la agenda
    let contacto: Contacto = new Contacto(this.nombre, this.email, this.telefono);
    //añadimos el contacto al array agenda
    this.agenda.push(contacto);
  }
  mostrar():void{
    this.visible=!this.visible;
  }
  eliminar(indice:number){
    this.agenda.splice(indice,1);
}
