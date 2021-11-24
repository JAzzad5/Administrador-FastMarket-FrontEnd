import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ComerciosService } from 'src/app/services/comercios.service';
import { ProductosService } from 'src/app/services/productos.service';
import { faArrowLeft, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare const Swal: any;

@Component({
  selector: 'app-contenedor-productos',
  templateUrl: './contenedor-productos.component.html',
  styleUrls: ['./contenedor-productos.component.css']
})
export class ContenedorProductosComponent implements OnInit {
@Input() categoria ='';
@Input() idComercio ='';
@Output() onVerComercios = new EventEmitter();
Productos:any = [];
Comercio:any =[];
faArrowLeft=faArrowLeft;
faPlus=faPlus;
faEdit=faEdit;

formularioProducto = new FormGroup({
  NombreProducto:new FormControl('', [Validators.required, Validators.maxLength(20)]),
  ImagenProducto:new FormControl('', [Validators.required]),
  Descripcion :new FormControl('', [Validators.required, Validators.maxLength(50) ]),
  Precio:new FormControl('', [Validators.required,  Validators.min(10)]),
});

formularioComercio = new FormGroup({
  NombreComercio:new FormControl('', [Validators.required, Validators.maxLength(20)]),
  ImagenComercio:new FormControl(''),
  BannerComercio:new FormControl(''),
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

  constructor(private productosService: ProductosService, private comerciosService:ComerciosService, private modalService:NgbModal) { }

  ngOnInit(): void {

    this.cargarProductos();

    this.cargarComercio();

  }
  
  verComercios(){
    this.onVerComercios.emit('comercios')
  }

  aggProducto(modal:any){

    this.modalService.open(
      modal,
      {
        size:'xs',
        centered:true
      }
    );
  }

  agregarProducto(){
    console.log(this.idComercio);
    const NombreImagen = this.formularioProducto.value.ImagenProducto.split("\\");
    this.formularioProducto.value.ImagenProducto = NombreImagen[NombreImagen.length - 1];
    console.log(this.formularioProducto.value);

    this.productosService.nuevoProducto(this.idComercio, this.formularioProducto.value).subscribe(
      res=>{
        console.log(res);
        console.log(res[0]._id);
        //añadir el producto a su comercio
        this.comerciosService.agregarProductoAComercio(this.idComercio,res[0]._id).subscribe(
          resp=>{
            console.log(resp);
            this.sweet();
            this.cargarProductos();
          }
        );
      }
    )
}


editarComercio(modal:any){
  this.cargarDatosModal(this.Comercio);
  this.modalService.open(
    modal,
    {
      size:'xs',
      centered:true
    }
  );
}

cargarProductos(){
  this.productosService.obteneProductos( this.idComercio).subscribe(
    res=>{
      this.Productos = res.Productos;
      console.log(res);
    },
    error=>{
      console.log(error);
    }
  );
}

editar(){
  console.log(this.idComercio);
  const NombreImagen = this.formularioComercio.value.ImagenComercio.split("\\");
  const NombreBanner = this.formularioComercio.value.BannerComercio.split("\\");
  this.formularioComercio.value.ImagenComercio = NombreImagen[NombreImagen.length - 1];
  this.formularioComercio.value.BannerComercio = NombreBanner[NombreBanner.length - 1];
  if (this.formularioComercio.value.ImagenComercio == ""){
    this.formularioComercio.value.ImagenComercio = this.Comercio.ImagenComercio;
  }
  if (this.formularioComercio.value.BannerComercio == ""){
    this.formularioComercio.value.BannerComercio = this.Comercio.BannerComercio;
  }
  console.log(this.formularioComercio.value);
  this.comerciosService.editarComercio(this.idComercio, this.formularioComercio.value).subscribe(
    res=>{
      console.log(res);
      this.edicionCorrecta();
      this.cargarComercio();
    }
  );
    
}

sweet(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: `Producto agregado`,
    showConfirmButton: false,
    timer: 1500,
  });
}

edicionCorrecta(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Edición Exitosa`,
      showConfirmButton: false,
      timer: 1500,
    });
}

cargarDatosModal(comercio:any){
  console.log(comercio)
  let H = comercio.Horario.split(" ");
  let HI = H[0];
  let HF = H[2];
  this.formularioComercio.setValue({
    NombreComercio: comercio.NombreComercio,
    ImagenComercio: '',
    BannerComercio:'',
    Calificacion: comercio.Calificacion,
    Direccion: comercio.Direccion,
    CostoEnvio: comercio.CostoEnvio,
    HoraInicio: HI,
    HoraFinal: HF,
  });
  
};

cargarComercio(){
  this.comerciosService.obtenerUnComercio(this.idComercio).subscribe(
    res=>{
      console.log(res);
      this.Comercio=res;
    },
    error=>{
      console.log(error);
    }
  );
}

}
