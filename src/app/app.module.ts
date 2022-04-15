import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http' 

import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './Componentes/Vistas/dashboard-admin/dashboard-admin.component';
import { NavBarComponent } from './Componentes/Vistas/nav-bar/nav-bar.component';
import { FooterComponent } from './Componentes/Vistas/footer/footer.component';
import { DashboardComponent } from './Componentes/Vistas/dashboard/dashboard.component';
import { HomeComponent } from './Componentes/Vistas/home/home.component';
import { SidebarComponent } from './Componentes/Vistas/sidebar/sidebar.component';
import { RegistroUserComponent } from './Componentes/Auth/registro-user/registro-user.component';
import { LoginComponent } from './Componentes/Auth/login/login.component';
import { SensorComponent } from './Componentes/Vistas/sensor/sensor.component';
import { DocumentacionComponent } from './Componentes/Vistas/documentacion/documentacion.component';
import { GraficasComponent } from './Componentes/Vistas/graficas/graficas.component';
import { HistorialComponent } from './Componentes/Vistas/historial/historial.component';



//  AppRoutingModule,ReactiveFormsModule, FormsModule,HttpClientModule,

@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    NavBarComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    SidebarComponent,
    RegistroUserComponent,
    LoginComponent,
    SensorComponent,
    DocumentacionComponent,
    GraficasComponent,
    HistorialComponent
  ],                                                           
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
