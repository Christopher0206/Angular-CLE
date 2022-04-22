import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Componentes/Vistas/nav-bar/nav-bar.component';
import { FooterComponent } from './Componentes/Vistas/footer/footer.component';
import { HomeComponent } from './Componentes/Vistas/home/home.component';
import { SidebarComponent } from './Componentes/Vistas/sidebar/sidebar.component';
import { RegisterComponent } from './Componentes/Auth/registro-user/registro-user.component';
import { LoginComponent } from './Componentes/Auth/login/login.component';
import { SensorComponent } from './Componentes/Vistas/sensor/sensor.component';
import { DocumentacionComponent } from './Componentes/Vistas/documentacion/documentacion.component';
import { GraficasComponent } from './Componentes/Vistas/graficas/graficas.component';
import { HistorialComponent } from './Componentes/Vistas/historial/historial.component';
import { AuthInterceptorService } from './interceptor/auth-interceptor.service';

import { ControlesComponent } from '../app/Componentes/Vistas/controles/controles.component';
import { SensorService } from './servicio/sensores/sensores.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VigilanteGuard } from './guard/vigilante.guard';
import { CookieService } from 'ngx-cookie-service';



//  AppRoutingModule,ReactiveFormsModule, FormsModule,HttpClientModule,

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavBarComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    VigilanteGuard,
    SensorService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
