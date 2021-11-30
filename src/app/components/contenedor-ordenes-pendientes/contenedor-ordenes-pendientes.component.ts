import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { MotoristasService } from 'src/app/services/motoristas.service';
declare const L: any;
declare const Swal: any;

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
  ordenseleccionada:any;

  ngOnInit(): void {
    
    this.cargarMotoristas();
    this.cargarOrdenes();
  }


  motoristasDisponibles(modal:any, idOrden:any){
    this.ordenseleccionada = idOrden;
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
  Swal.fire({
    title: 'Desea asignar este motorista?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, Asignar'
  }).then((result:any) => {
    console.log(this.ordenseleccionada);
    this.ordenesService.asignarOrden(this.ordenseleccionada,deviceValue.value).subscribe(
      res=>{
        console.log(res);
        this.motoristasService.cambiarObservacion(deviceValue.value,'Con Orden').subscribe(
          res=>{
            console.log(res);
            this.asignado();
            this.cargarOrdenes();
            this.cargarMotoristas();
          }
        );
      }
    );
  })
  
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
      this.motoristasDisp = [];
      this.disponibles();
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

asignado(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Motorista asignado',
      showConfirmButton: false,
      timer: 1500,
    });
}

}