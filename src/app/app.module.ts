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

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    InicioSesionComponent,
    BarraLateralComponent,
    DashboardComponent,
    ContenedorComerciosComponent
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
