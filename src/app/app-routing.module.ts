import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/Auth/login/login.component';
import { RegisterComponent } from './Componentes/Auth/registro-user/registro-user.component';
import { GraficasComponent } from './Componentes/Vistas/graficas/graficas.component';
import { HomeComponent } from './Componentes/Vistas/home/home.component';




const routes: Routes = [
  { path: 'registro-user', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: 'home', component:HomeComponent},
  {path: 'grafi', component:GraficasComponent},
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
