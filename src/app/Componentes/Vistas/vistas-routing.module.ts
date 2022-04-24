import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetenGuard } from 'src/app/guard/Reten.guard';
import { ControlesComponent } from './controles/controles.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { GraficasComponent } from './graficas/graficas.component';
import { HistorialComponent } from './historial/historial.component';
import { SensorComponent } from './sensor/sensor.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sensores', component: SensorComponent },
      //{ path: 'documentacion', component: DocumentacionComponent },
      //{ path: 'graficas', component: GraficasComponent },
      { path: 'historial', component: HistorialComponent },
      { path: 'control', component: ControlesComponent },
      { path: '**', redirectTo: '/ini/control' },
    ],
    canActivateChild: [RetenGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistasRoutingModule { }
