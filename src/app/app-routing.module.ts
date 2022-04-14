import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/Auth/login/login.component';
import { RegistroUserComponent } from './Componentes/Auth/registro-user/registro-user.component';
import {HistorialComponent } from './Componentes/Vistas/historial/historial.component';
import { AnimalesComponent } from './Componentes/Vistas/animales/animales.component';
import { HomeComponent } from './Componentes/Vistas/home/home.component';
import { MapaComponent } from './Componentes/Vistas/mapa/mapa.component';
import { SidebarComponent } from './Componentes/Vistas/sidebar/sidebar.component';


const routes: Routes = [
      {path:'', redirectTo: '/home', pathMatch: 'full'},
      {path:'home', component: HomeComponent},
    {path:'sidebar', component: SidebarComponent},
    {path:'historial', component: HistorialComponent},
    {path:'animales', component: AnimalesComponent},
    {path:'mapa', component:MapaComponent},
    {path:'registro-user', component: RegistroUserComponent},
    {path:'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
