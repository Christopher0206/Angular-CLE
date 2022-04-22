import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/app/servicio/sensores/sensores.service';

@Component({
  selector: 'app-about',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

 
  historial: any
 


  constructor( private histo:SensorService) {

   
     this.histo.mostrarHistorial().subscribe((data:any)=>{
       this.historial=data
     })

   }
   



  ngOnInit(): void {
  }

}
