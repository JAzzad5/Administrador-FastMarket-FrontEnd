import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ComerciosService } from 'src/app/services/comercios.service';

@Component({
  selector: 'app-contenedor-comercios',
  templateUrl: './contenedor-comercios.component.html',
  styleUrls: ['./contenedor-comercios.component.css']
})
export class ContenedorComerciosComponent implements OnInit { 
@Output() onVerProductos = new EventEmitter();
@Output() onCargarProductos = new EventEmitter();
  Categorias:any = [];
  constructor(private categoriasService:CategoriasService) { }

  ngOnInit(): void {
    
    this.categoriasService.obtenerCategorias().subscribe(
      res=>{
        this.Categorias = res;
        console.log("Categorias: ", this.Categorias);
      },
      error=>{
        console.log(error)
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
