import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { faEdit, faTrashAlt, faUser} from '@fortawesome/free-regular-svg-icons';
import { faCashRegister, faHistory, faCog, faStore, faChartPie} from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare const Swal: any;

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
  EstadoUsuario:any;
  usuarioEdit:any;
  
  formularioUsuario = new FormGroup({

    NombreUsuario:new FormControl('', [Validators.required, Validators.maxLength(20)]),
    Correo:new FormControl('', [Validators.required]),
    Telefono:new FormControl('', [Validators.required]),
    Contraseña:new FormControl('', [Validators.required]),
    Estado:new FormControl(''),
  });

  constructor(private usuariosServices:UsuariosService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  modalEditar(modal:any, idUsuario:any){
    console.log(idUsuario);
    this.usuarioEdit = idUsuario;
    this.usuariosServices.obtenerUsuario(idUsuario).subscribe(
      res=>{
        console.log(res);
        this.cargarDatosModal(res);
        this.modalService.open(
          modal,
          {
            size:'xs',
            centered:true
          }
        );
      }
    );

  }

  cargarDatosModal(usuario:any){
    console.log(usuario)
    this.formularioUsuario.setValue({
      NombreUsuario: usuario.NombreUsuario,
      Correo:usuario.Correo,
      Telefono:usuario.Telefono,
      Contraseña:usuario.Contraseña,
      Estado:'',
    });
    this.EstadoUsuario= usuario.Estado;
    
  };

  editarUsuario(){
    console.log(this.formularioUsuario.value);
    if(this.formularioUsuario.value.Estado==''){
      this.formularioUsuario.value.Estado = this.EstadoUsuario;
    }
    this.usuariosServices.editarUsuarios(this.usuarioEdit,this.formularioUsuario.value).subscribe(
      res=>{
        console.log(res);
        this.cargarUsuarios();
        this.sweet();
      }
    );
  }

  cargarUsuarios(){
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

  sweet(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Usuario Editado con Exito`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
