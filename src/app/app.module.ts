import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { AuthInterceptorService } from './interceptor/auth-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { VigilanteGuard } from './guard/vigilante.guard';




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
    HistorialComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    VigilanteGuard,
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
