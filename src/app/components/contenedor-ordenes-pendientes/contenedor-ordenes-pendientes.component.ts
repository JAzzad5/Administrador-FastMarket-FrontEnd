import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-contenedor-ordenes-pendientes',
  templateUrl: './contenedor-ordenes-pendientes.component.html',
  styleUrls: ['./contenedor-ordenes-pendientes.component.css']
})
export class ContenedorOrdenesPendientesComponent implements OnInit {
  faArrowLeft=faArrowLeft;
  faTrashAlt=faTrashAlt;
  faEdit=faEdit;
  faUserPlus=faUserPlus;
  constructor(private modalService:NgbModal, private ordenesService: OrdenesService) { }
  ordenes:any;
  OrdenPendiente:any = [];
  subtotal:any=0;
  ngOnInit(): void {
    this.ordenesService.obtenerOrdenes().subscribe(
      res=>{
        console.log(res);
        this.ordenes = res;
      },
      error=>{
        console.log(error);
      }
    );
  }

  abrirOrden(modal:any, idOrden:any){
    this.ordenesService.obtenerOrdenId(idOrden).subscribe(
      res=>{
        this.OrdenPendiente = res;
        console.log(this.OrdenPendiente[0]);
        this.totalOrden();
      },
      error=>{
        console.log(error);
      }
    )
    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:true
      }
    );

  }

  totalOrden(){
    this.subtotal=0;
    let productos = this.OrdenPendiente[0].productos;
    productos.forEach((producto:any) => {
      this.subtotal += producto.cantidad * producto._id[0].Precio;
      
      console.log(this.subtotal);
    });
  }

}