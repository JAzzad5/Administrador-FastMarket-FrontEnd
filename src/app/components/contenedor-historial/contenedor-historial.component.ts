import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contenedor-historial',
  templateUrl: './contenedor-historial.component.html',
  styleUrls: ['./contenedor-historial.component.css']
})
export class ContenedorHistorialComponent implements OnInit {
  faArrowLeft=faArrowLeft;
  faTrashAlt=faTrashAlt;
  faEdit=faEdit;
  faUserPlus=faUserPlus;
  constructor(private ordenesService: OrdenesService) { }
  ordenes:any;
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
}
