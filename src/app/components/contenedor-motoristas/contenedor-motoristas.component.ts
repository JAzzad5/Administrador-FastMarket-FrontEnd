import { Component, OnInit } from '@angular/core';
import { faEdit, faTrashAlt, faUser} from '@fortawesome/free-regular-svg-icons';
import { faCashRegister, faHistory, faCog, faStore, faChartPie, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import { MotoristasService } from 'src/app/services/motoristas.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare const Swal: any;

@Component({
  selector: 'app-contenedor-motoristas',
  templateUrl: './contenedor-motoristas.component.html',
  styleUrls: ['./contenedor-motoristas.component.css']
})
export class ContenedorMotoristasComponent implements OnInit {
  faEdit =faEdit;
  faTrashAlt=faTrashAlt;
  faCashRegister= faCashRegister;
  faHistory=faHistory;
  faCog= faCog;
  faStore= faStore;
  faUser= faUser;
  faChartPie= faChartPie;
  faCheck=faCheck;
  faTimes=faTimes;
  Motoristas:any = [];
  EstadoMotorista:any;
  motoristaSeleccionado:any;

formularioMotorista = new FormGroup({
  Nombre:new FormControl('', [Validators.required, Validators.maxLength(20)]),
  Placa:new FormControl('', [Validators.required]),
  Contraseña:new FormControl('', [Validators.required]),
  Correo:new FormControl('', [Validators.required]),
  Estado:new FormControl('', [Validators.required]),
  ImagenMotorista:new FormControl(''),
  Telefono:new FormControl('', [Validators.required])
});
  constructor(private motoristasService:MotoristasService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.cargarMotoristas();
  }

  cargarMotoristas(){
    
    this.motoristasService.obtenerMotoristas().subscribe(
      res=>{
        this.Motoristas = res
        console.log(this.Motoristas);
      },
      error=>{
        console.log(error);
      }
    );
  }
  aprobar(){
    
  }

  aprobarmoto(id:any){
    Swal.fire({
      title: 'Desea aprobar el motorista?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Aprobar'
    }).then((result:any) => {
      if(result.isConfirmed){
        this.motoristasService.aprobarMotoristas(id).subscribe(
          res=>{
            console.log(res);
            this.aprobado();
            this.cargarMotoristas();
          }
        );
      }
    })
  }

  aprobado(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Motorista Aprobado`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  eliminado(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Motorista Eliminado`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  modalEditar(modal:any, idMotorista:any){
    console.log(idMotorista);
    this.motoristasService.obtenerUnMotorista(idMotorista).subscribe(
      res=>{
        console.log(res);
        this.motoristaSeleccionado = res[0]
        this.cargarDatosModal(res[0]);
      }
    );
        this.modalService.open(
          modal,
          {
            size:'xs',
            centered:true
          }
        );

  }

  cargarDatosModal(motorista:any){
    console.log(motorista)
    this.formularioMotorista.setValue({
      Nombre: motorista.Nombre,
      Placa:motorista.Placa,
      Contraseña:motorista.Contraseña,
      Correo:motorista.Correo,
      Telefono:motorista.Telefono,
      Estado: motorista.Estado,
      ImagenMotorista:''
    });
    this.EstadoMotorista= motorista.Estado;
    
  };

  editarMotorista(){
    const NombreImagen = this.formularioMotorista.value.ImagenMotorista.split("\\");
    this.formularioMotorista.value.ImagenMotorista = NombreImagen[NombreImagen.length - 1];
    if (this.formularioMotorista.value.ImagenMotorista == ""){
      this.formularioMotorista.value.ImagenMotorista = this.motoristaSeleccionado.ImagenMotorista;
    }
    
    this.motoristasService.editarMotoristas(this.motoristaSeleccionado._id, this.formularioMotorista.value).subscribe(
      res=>{
        console.log(res);
        this.aprobado();
        this.cargarMotoristas();
      }
    );
  }

  EliminarMotorista(id:any){
    Swal.fire({
      title: 'Desea eliminar el motorista?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar'
    }).then((result:any) => {
        if(result.isConfirmed){
          this.motoristasService.eliminarMotorista(id).subscribe(
            res=>{
              console.log(res);
              this.eliminado();
              this.cargarMotoristas();
            }
          );
        }
      
    })
  }
}
