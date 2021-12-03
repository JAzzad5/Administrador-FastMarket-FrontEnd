import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  constructor(private httpClient:HttpClient) { }

  obtenerMotoristas():Observable<any>{
    return this.httpClient.get(`http://localhost:8888/motoristas`,{});
  };

  obtenerUnMotorista(idMotorista:any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/motoristas/${idMotorista}`,{});
  };

  aprobarMotoristas(idMotorista:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/motoristas/${idMotorista}/Aprobar`,{});
  };

  
  cambiarObservacion(idMotorista:any,Observacion:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/motoristas/${idMotorista}/${Observacion}/cambiarObservacion`,{});
  };

  editarMotoristas(idMotorista:any, formulario:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/motoristas/${idMotorista}/Editar`,formulario);
  };

  eliminarMotorista(idMotorista:any):Observable<any>{
    return this.httpClient.delete(`http://localhost:8888/motoristas/${idMotorista}/eliminar`,{});
  };
}
