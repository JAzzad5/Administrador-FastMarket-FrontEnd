import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private httpClient:HttpClient) { }

  obtenerOrdenesUsuario(IdUsuario:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/ordenes/${IdUsuario}`,{});
  };

  obtenerOrdenes():Observable<any>{
    return this.httpClient.get(`http://localhost:8888/ordenes/`,{});
  };
}