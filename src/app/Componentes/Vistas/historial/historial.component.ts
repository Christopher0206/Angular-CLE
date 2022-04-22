import { Component, OnInit } from '@angular/core';
import { MPU6050 } from 'src/app/models/acelerometro';
import { SensorService } from 'src/app/servicio/sensores/sensores.service';

@Component({
  selector: 'app-about',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  acele: MPU6050[]|undefined
 


  constructor( private mostrar:SensorService) {

   
     this.mostrar.mostrarAcele().subscribe((data:any)=>{
       this.acele=data
     })

   }
   



  ngOnInit(): void {
  }

}
