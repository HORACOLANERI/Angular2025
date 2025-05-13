import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoblacionesService {
  url:string="https://www.el-tiempo.net/api/json/v2/provincias"

  constructor(private http:HttpClient) { }

  provincias():Observable<Provincia[]>{
    return this.http.get(any)(this.urlProvincias);
    .pipe(map(obj=> obj.provincias));
  }
  municipiosProvincia(cod:number):Observable<Municipio[]>{
    const url:string=`${this.urlProvincias}/${cod}/municipios`;
    return this.http.get<any>(url)
    .pipe(map(datos=>datos.municipios));
  }
}

