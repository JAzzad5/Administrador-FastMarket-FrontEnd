import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ver ="comercios";
  cat ="";
  id ="";
  constructor() { }

  ngOnInit(): void {
  }
  verComercios(e:any){
    this.ver=e;
  }

  verUsuarios(e:any){
    this.ver=e;
  }

  verProductos(e:any){
    this.ver=e;
  }

  cargarProductos(e:any){
    this.cat = e.cat;
    this.id = e.id;
  }
}
