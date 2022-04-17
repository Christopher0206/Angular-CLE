import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/Auth/login/login.component';
import { RegistroUserComponent } from './Componentes/Auth/registro-user/registro-user.component';
import { SensorComponent } from './Componentes/Vistas/sensor/sensor.component';
import { HomeComponent } from './Componentes/Vistas/home/home.component';
import { DocumentacionComponent } from './Componentes/Vistas/documentacion/documentacion.component';
import { GraficasComponent } from './Componentes/Vistas/graficas/graficas.component';
import { SidebarComponent } from './Componentes/Vistas/sidebar/sidebar.component';
import { HistorialComponent } from './Componentes/Vistas/historial/historial.component';



const routes: Routes = [
    {path:'', redirectTo: '/login', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'sidebar', component: SidebarComponent},
    {path:'sensores', component: SensorComponent},
    {path:'documentacion', component:DocumentacionComponent},
    {path:'registro-user', component: RegistroUserComponent},
    {path:'login', component: LoginComponent},
    {path:'graficas', component: GraficasComponent},
    {path:'historial', component: HistorialComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
