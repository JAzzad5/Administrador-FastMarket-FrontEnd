import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faEdit, faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import { faCashRegister, faHistory, faCog, faStore, faChartPie, faMotorcycle, faUser, faClock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {
@Output() onVerUsuarios = new EventEmitter();
@Output() onVerComercios = new EventEmitter();
@Output() onVerHistorial = new EventEmitter();
@Output() onVerPendientes = new EventEmitter();
@Output() onVerMotoristas = new EventEmitter();
@Output() onVerCategorias = new EventEmitter();
faEdit =faEdit;
faTrashAlt=faTrashAlt;
faCashRegister= faCashRegister;
faHistory=faHistory;
faCog= faCog;
faStore= faStore;
faUser= faUser;
faChartPie= faChartPie;
faMotorcycle= faMotorcycle;
faClock= faClock;
  constructor() { }

  ngOnInit(): void {
  }

  verUsuarios(){
    this.onVerUsuarios.emit('usuarios')
  }

  verComercios(){
    this.onVerComercios.emit('comercios')
  }

  verHistorial(){
    this.onVerHistorial.emit('historial')
  }

  verPendientes(){
    this.onVerPendientes.emit('pendientes')
  }

  verMotoristas(){
    this.onVerMotoristas.emit('motoristas')
  }

  verCategorias(){
    this.onVerCategorias.emit('categorias')
  }
}
