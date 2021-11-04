import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorProductosComponent } from './components/contenedor-productos/contenedor-productos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: '', component:LandingPageComponent},
  {path: 'inicio-sesion', component: InicioSesionComponent},
  {path: ':Comercio/productos', component:ContenedorProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
