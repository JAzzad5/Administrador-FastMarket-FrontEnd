import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ComerciosService } from 'src/app/services/comercios.service';
import { ProductosService } from 'src/app/services/productos.service';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
faPlus=faPlus;

formularioProducto = new FormGroup({
  NombreProducto:new FormControl('', [Validators.required, Validators.maxLength(20)]),
  ImagenProducto:new FormControl('', [Validators.required]),
  Descripcion :new FormControl('', [Validators.required, Validators.maxLength(50) ]),
  Precio:new FormControl('', [Validators.required,  Validators.min(10)]),
});



  constructor(private productosService: ProductosService, private comerciosService:ComerciosService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.productosService.obteneProductos( this.idComercio).subscribe(
      res=>{
        this.Productos = res.Productos;
        console.log(res);
      },
      error=>{
        console.log(error);
      }
    );

    this.comerciosService.obtenerUnComercio(this.idComercio).subscribe(
      res=>{
        console.log(res);
        this.Comercio=res;
      },
      error=>{

      }
    );

  }
  
  verComercios(){
    this.onVerComercios.emit('comercios')
  }

  aggProducto(modal:any){

    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:true
      }
    );
  }
}
