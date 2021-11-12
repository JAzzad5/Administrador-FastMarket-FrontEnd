import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contenedor-categorias',
  templateUrl: './contenedor-categorias.component.html',
  styleUrls: ['./contenedor-categorias.component.css']
})
export class ContenedorCategoriasComponent implements OnInit {
  categorias:any;
  faTrashAlt=faTrashAlt;
  faEdit=faEdit;
  constructor(private categoriasService:CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.obtenerCategorias().subscribe(
      res=>{
        this.categorias = res;
        console.log("Categorias: ", this.categorias);
      },
      error=>{
        console.log(error)
      }
    );
  }

}
