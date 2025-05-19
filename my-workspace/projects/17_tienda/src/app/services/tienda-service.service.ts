import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaServiceService {

  constructor(private http:HttpClient) {}
    urlProductos:string = 'http://localhost:3000/productos';
    urlCategorias:string = 'http://localhost:3000/categorias';


altaProducto(producto:Producto):Observable<void> {


  return this.http.post<void>(this.urlProductos, producto);
}


}
