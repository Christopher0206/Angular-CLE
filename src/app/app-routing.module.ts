import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/Auth/login/login.component';
import { RegisterComponent } from './Componentes/Auth/registro-user/registro-user.component';
import { SensorComponent } from './Componentes/Vistas/sensor/sensor.component';
import { HomeComponent } from './Componentes/Vistas/home/home.component';
import { DocumentacionComponent } from './Componentes/Vistas/documentacion/documentacion.component';
import { GraficasComponent } from './Componentes/Vistas/graficas/graficas.component';
import { SidebarComponent } from './Componentes/Vistas/sidebar/sidebar.component';
import { HistorialComponent } from './Componentes/Vistas/historial/historial.component';
import { ControlesComponent } from '../app/Componentes/Vistas/controles/controles.component'




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  //{ path: 'sidebar', component: SidebarComponent },
  { path: 'sensores', component: SensorComponent },
  { path: 'documentacion', component: DocumentacionComponent },
  { path: 'registro-user', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'graficas', component: GraficasComponent },
  { path: 'historial', component: HistorialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'control', component: ControlesComponent },
  {
    path: 'ini',
    loadChildren: () =>
      import('./Componentes/Vistas/vistas.module').then((m) => m.VistasModule),
  },
  { path: '**', redirectTo: '/login' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
