import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pais } from '../model/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  url: string = 'https://restcountries.com/v2/all';
  constructor(private http:HttpClient) { }

  obtenerPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url);
  }
  //metodo que devuelve un observable de un array de string (nombre de continente)
  continentes():Observable<string[]>{
    return this.http.get<Pais[]>(this.url)//Observable<Pais[]>
    //.pipe(map(paises=>paises.map(p=>p.region))) //Observable<string[]>; Así habría quedado
    .pipe(map(paises=>[...new Set(paises.map(paises=>paises.region))]));//Observable<string[]>;
  }

  paisesContinente(continente:string):Observable<Pais[]>{
    return this.http.get<Pais[]>(this.url) //Observable<Pais[]>
    .pipe(map(paises=>paises.filter(p=>p.region==continente)));
  }

}


