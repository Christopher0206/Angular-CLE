import { Component, Input, OnInit } from '@angular/core';
import { Sensor } from 'src/app/models/sensor';
import { SensorService } from 'src/app/servicio/sensores/sensores.service';
 

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
 
 
  sensores: Sensor[]|undefined


  constructor( private sensorS:SensorService) {

     this.sensorS.mostrarSensor().subscribe((data:any)=>{
       this.sensores=data
     })

   }




  ngOnInit(): void {}

}
