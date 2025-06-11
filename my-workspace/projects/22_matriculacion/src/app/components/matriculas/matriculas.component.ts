import { Component } from '@angular/core';
import { Curso } from '../../model/Curso';
import { Matricula } from '../../model/Matricula';
import { MatriculasService } from '../../service/matriculas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matriculas',
  imports: [FormsModule,CommonModule],
  templateUrl: './matriculas.component.html',
  styleUrl: './matriculas.component.css'
})
export class MatriculasComponent {
  cursos:Curso[] = [];
  idCursoSeleccionado = 0;
  matriculas:Matricula[] = [];

  constructor(private readonly matriculasService:MatriculasService){
    this.matriculasService.buscarCursos().subscribe(
      data => {
        this.cursos = data;
      }
    );
  }



  getAlumnosMatriculados(idCursoSeleccionado:number){
    this.matriculasService.buscarMatriculas(idCursoSeleccionado).subscribe(
      data => {
        this.matriculas = data;
      }
    )
  }
}
