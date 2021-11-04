import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-contenedor-productos',
  templateUrl: './contenedor-productos.component.html',
  styleUrls: ['./contenedor-productos.component.css']
})
export class ContenedorProductosComponent implements OnInit {
@Input() categoria ='';
@Input() idComercio ='';
Productos:any = [];

  constructor(private productosService: ProductosService) { }

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

  }

}
