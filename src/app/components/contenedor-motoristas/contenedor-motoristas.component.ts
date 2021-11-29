import { Component, OnInit } from '@angular/core';
import { faEdit, faTrashAlt, faUser} from '@fortawesome/free-regular-svg-icons';
import { faCashRegister, faHistory, faCog, faStore, faChartPie, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import { MotoristasService } from 'src/app/services/motoristas.service';
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

  constructor(private motoristasService:MotoristasService) { }

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
      this.motoristasService.aprobarMotoristas(id).subscribe(
        res=>{
          console.log(res);
          this.aprobado();
          this.cargarMotoristas();
        }
      );
    })
  }

  aprobado(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Producto agregado`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
