import { Component, OnInit } from '@angular/core';
import { SensorUsuario } from 'src/app/models/SensorUsuario';
import { User } from 'src/app/models/user';
import { SensorService } from 'src/app/servicio/sensores/sensores.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-about',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  
  historial:any

  

  constructor( private histo:SensorService,private sensor:SensorService) {

   /*
    this.histo.mostrarHistorial().subscribe((data:any)=>{
      this.historial=data
    })
    */
    this.sensor.historialbyuser(environment.IDUSUARIO).subscribe(
      (res) => {
        
        this.historial=res;
        console.log("global:\t"+this.historial)
      },
      (err) => {
        console.log(err)
      }//misSensores
    );
  }
  



  ngOnInit(): void {
  }



}
