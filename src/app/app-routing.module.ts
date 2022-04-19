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
import { RegisensorComponent } from './Componentes/Vistas/regisensor/regisensor.component';



const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'sidebar', component: SidebarComponent},
    {path:'sensores', component: SensorComponent},
    {path:'documentacion', component:DocumentacionComponent},
    {path:'registro-user', component: RegistroUserComponent},
    {path:'login', component: LoginComponent},
    {path:'graficas', component: GraficasComponent},
    {path:'historial', component: HistorialComponent},
    {path:'regis', component: RegisensorComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
