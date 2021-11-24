import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComerciosService {

  constructor(private httpClient:HttpClient) { }

  obtenerComercios(NombreCategoria:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/categorias/${NombreCategoria}/comercios`,{});
  };

  obtenerUnComercio(idComercio:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/comercios/${idComercio}`,{});
  };


  nuevoComercio(Formulario:any):Observable<any>{
    console.log(Formulario);
    return this.httpClient.post(`http://localhost:8888/comercios/nuevo`,Formulario);
  }

  agregarProductoAComercio(idComercio:any, idProducto:any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/comercios/${idComercio}/agregarProducto/${idProducto}`,{});
  }

  editarComercio(idComercio:any, formulario:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/comercios/${idComercio}/editar`,formulario);
  }
}
