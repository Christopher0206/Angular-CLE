import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SensorComponent } from './sensor/sensor.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { GraficasComponent } from './graficas/graficas.component';
import { HistorialComponent } from './historial/historial.component';
import { ControlesComponent } from './controles/controles.component';
import { VistasRoutingModule } from './vistas-routing.module';

@NgModule({
  declarations: [
    //HomeComponent,
    SensorComponent,
    //DocumentacionComponent,
    //GraficasComponent,
    HistorialComponent,
    ControlesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    VistasRoutingModule
  ],
})
export class VistasModule {}
