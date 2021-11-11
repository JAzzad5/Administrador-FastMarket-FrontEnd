import { Component, OnInit } from '@angular/core';
import { faEdit, faTrashAlt, faUser} from '@fortawesome/free-regular-svg-icons';
import { faCashRegister, faHistory, faCog, faStore, faChartPie} from '@fortawesome/free-solid-svg-icons';
import { MotoristasService } from 'src/app/services/motoristas.service';

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
Motoristas:any = [];

  constructor(private motoristasService:MotoristasService) { }

  ngOnInit(): void {
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

}
