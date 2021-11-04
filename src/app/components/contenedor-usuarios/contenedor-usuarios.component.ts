import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { faEdit, faTrashAlt, faUser} from '@fortawesome/free-regular-svg-icons';
import { faCashRegister, faHistory, faCog, faStore, faChartPie} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contenedor-usuarios',
  templateUrl: './contenedor-usuarios.component.html',
  styleUrls: ['./contenedor-usuarios.component.css']
})
export class ContenedorUsuariosComponent implements OnInit {
  faEdit =faEdit;
  faTrashAlt=faTrashAlt;
  faCashRegister= faCashRegister;
  faHistory=faHistory;
  faCog= faCog;
  faStore= faStore;
  faUser= faUser;
  faChartPie= faChartPie;
Usuarios:any = [];
  constructor(private usuariosServices:UsuariosService) { }

  ngOnInit(): void {
    this.usuariosServices.obtenerUsuarios().subscribe(
      res=>{
        this.Usuarios = res
        console.log(this.Usuarios);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
