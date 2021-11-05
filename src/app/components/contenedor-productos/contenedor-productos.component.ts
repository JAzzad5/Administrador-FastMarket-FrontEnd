import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ComerciosService } from 'src/app/services/comercios.service';
import { ProductosService } from 'src/app/services/productos.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contenedor-productos',
  templateUrl: './contenedor-productos.component.html',
  styleUrls: ['./contenedor-productos.component.css']
})
export class ContenedorProductosComponent implements OnInit {
@Input() categoria ='';
@Input() idComercio ='';
@Output() onVerComercios = new EventEmitter();
Productos:any = [];
Comercio:any =[];
faArrowLeft=faArrowLeft;

  constructor(private productosService: ProductosService, private comerciosService:ComerciosService) { }

  ngOnInit(): void {
    this.productosService.obteneProductos(this.categoria, this.idComercio).subscribe(
      res=>{
        this.Productos = res;
        console.log(res);
      },
      error=>{
        console.log(error);
      }
    );

    this.comerciosService.obtenerUnComercio(this.categoria, this.idComercio).subscribe(
      res=>{
        console.log(res);
        this.Comercio=res.Comercios[0];
      },
      error=>{

      }
    );

  }
  
  verComercios(){
    this.onVerComercios.emit('comercios')
  }

}
