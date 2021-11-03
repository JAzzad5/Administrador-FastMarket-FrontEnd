import { Component, OnInit } from '@angular/core';
import { ComerciosService } from 'src/app/services/comercios.service';

@Component({
  selector: 'app-contenedor-comercios',
  templateUrl: './contenedor-comercios.component.html',
  styleUrls: ['./contenedor-comercios.component.css']
})
export class ContenedorComerciosComponent implements OnInit { 
  Comercios:any = [];
  constructor(private comerciosService:ComerciosService) { }

  ngOnInit(): void {
    this.comerciosService.obtenerComercios('Restaurantes').subscribe(
      res=>{
        this.Comercios = res[0].Comercios;
        console.log(this.Comercios);
      }
    );


  }

}
