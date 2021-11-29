import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { MotoristasService } from 'src/app/services/motoristas.service';
declare const L: any;

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
  zoom:any = 10;
  mymap:any="";
  marker:any ="";
  lat:any;
  lon:any;
  constructor(private modalService:NgbModal, private motoristasService:MotoristasService ,private ordenesService: OrdenesService) { }
  motoristas:any;
  motoristasDisp:any = [];
  ordenes:any;
  OrdenPendiente:any = [];
  subtotal:any=0;

  ngOnInit(): void {
    
    this.cargarMotoristas();
    this.cargarOrdenes();
    setTimeout(()=> this.disponibles(), 2000); ;
  }


  motoristasDisponibles(modal:any, idOrden:any){

    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:true
      }
    );
  }

onChange(deviceValue:any) {
  console.log(deviceValue.value);
}
cargarOrdenes(){
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

cargarMotoristas(){
  this.motoristasService.obtenerMotoristas().subscribe(
    res=>{
      console.log(res);
      this.motoristas = res;
    }
  );
}

disponibles(){
  this.motoristas.forEach((element:any) => {
    if (element.Observacion == 'Disponible'){
      this.motoristasDisp.push(element);
    }
  });
  console.log(this.motoristasDisp);
}
}