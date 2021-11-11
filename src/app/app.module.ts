import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContenedorComerciosComponent } from './components/contenedor-comercios/contenedor-comercios.component';
import { HttpClientModule } from '@angular/common/http';
import { ContenedorUsuariosComponent } from './components/contenedor-usuarios/contenedor-usuarios.component';
import { BarraSuperiorComponent } from './components/barra-superior/barra-superior.component';
import { ContenedorProductosComponent } from './components/contenedor-productos/contenedor-productos.component';
import { ContenedorHistorialComponent } from './components/contenedor-historial/contenedor-historial.component';
import { ContenedorOrdenesPendientesComponent } from './components/contenedor-ordenes-pendientes/contenedor-ordenes-pendientes.component';
import { ContenedorMotoristasComponent } from './components/contenedor-motoristas/contenedor-motoristas.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    InicioSesionComponent,
    BarraLateralComponent,
    DashboardComponent,
    ContenedorComerciosComponent,
    ContenedorUsuariosComponent,
    BarraSuperiorComponent,
    ContenedorProductosComponent,
    ContenedorHistorialComponent,
    ContenedorOrdenesPendientesComponent,
    ContenedorMotoristasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
