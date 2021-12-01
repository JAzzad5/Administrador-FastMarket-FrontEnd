import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare const Swal: any;

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  
  formularioLogin = new FormGroup({
    Usuario:new FormControl('', [Validators.required]),
    Contraseña:new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  
  iniciarSesion(){
    console.log(this.formularioLogin.value);
    console.log(this.formularioLogin.value.Usuario);
    if(this.formularioLogin.value.Usuario == 'admin' && this.formularioLogin.value.Contraseña == 'admin' ){
      window.location.href = '/dashboard';
    }
    else{
      this.incorrecto();
    }
  }


  
  incorrecto(){
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: `Usuario y contraseña no coinciden.`,
      showConfirmButton: false,
      timer: 2500,
    });
  }
  

}
