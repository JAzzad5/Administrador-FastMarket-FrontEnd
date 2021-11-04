import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
ver ="usuarios"
  constructor() { }

  ngOnInit(): void {
  }
  verComercios(e:any){
    this.ver=e;
  }

  verUsuarios(e:any){
    this.ver=e;
  }
}
