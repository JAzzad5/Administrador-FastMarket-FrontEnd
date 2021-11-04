import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComerciosService } from 'src/app/services/comercios.service';

@Component({
  selector: 'app-contenedor-comercios',
  templateUrl: './contenedor-comercios.component.html',
  styleUrls: ['./contenedor-comercios.component.css']
})
export class ContenedorComerciosComponent implements OnInit { 
@Output() onVerProductos = new EventEmitter();
@Output() onCargarProductos = new EventEmitter();
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

  verProductos(categoria:any, idComercio:any){
    console.log(categoria);
    console.log(idComercio);
    this.onVerProductos.emit('productos');
    this.onCargarProductos.emit({cat : categoria, id: idComercio});

  }

}
