import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ComerciosService } from 'src/app/services/comercios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contenedor-comercios',
  templateUrl: './contenedor-comercios.component.html',
  styleUrls: ['./contenedor-comercios.component.css']
})
export class ContenedorComerciosComponent implements OnInit { 
@Output() onVerProductos = new EventEmitter();
@Output() onCargarProductos = new EventEmitter();
  Categorias:any = [];
  faPlus=faPlus;
  categoria:any;

  formularioComercio = new FormGroup({
    NombreComercio:new FormControl('', [Validators.required, Validators.maxLength(20)]),
    ImagenComercio:new FormControl('', [Validators.required]),
    BannerComercio:new FormControl('', [Validators.required]),
    Calificacion:new FormControl('', [Validators.required, Validators.min(0), Validators.max(5) ]),
    Direccion:new FormControl('', [Validators.required]),
    CostoEnvio:new FormControl('', [Validators.required,  Validators.min(25), Validators.max(100)]),
    HoraInicio:new FormControl('', [Validators.required]),
    HoraFinal:new FormControl('', [Validators.required]),
  });

  get NombreComercio(){
    return this.formularioComercio.get('NombreComercio');
  }
  get Calificacion(){
    return this.formularioComercio.get('Calificacion');
  }
  get CostoEnvio(){
    return this.formularioComercio.get('CostoEnvio');
  }

  constructor(private modalService:NgbModal,private categoriasService:CategoriasService, private comerciosService:ComerciosService) { }

  ngOnInit(): void {
    
    this.categoriasService.obtenerCategorias().subscribe(
      res=>{
        this.Categorias = res;
        console.log("Categorias: ", this.Categorias);
      },
      error=>{
        console.log(error)
      }
    );


  }

  verProductos(categoria:any, idComercio:any){
    console.log(categoria);
    console.log(idComercio);
    this.onVerProductos.emit('productos');
    this.onCargarProductos.emit({cat : categoria, id: idComercio});

  }
  aggComercio(modal:any, categoria:any){
    console.log(categoria);
    this.categoria = categoria;
    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:true
      }
    );
  }

  guardar(){
    console.log('Formulario válido:' , this.formularioComercio.valid);
    const NombreImagen = this.formularioComercio.value.ImagenComercio.split("\\");
    const NombreBanner = this.formularioComercio.value.BannerComercio.split("\\");
    this.formularioComercio.value.ImagenComercio = NombreImagen[NombreImagen.length - 1];
    this.formularioComercio.value.BannerComercio = NombreBanner[NombreBanner.length - 1];
    console.log('Formulario:' , this.formularioComercio.value);
    console.log('Categoria:' , this.categoria);

    this.comerciosService.agregarComercio(this.categoria, this.formularioComercio.value).subscribe(
      res=>{
        console.log(res);
      }
    );
  }
}
