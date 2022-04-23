import { Component, OnInit } from '@angular/core';
import { SensorUsuario } from 'src/app/models/SensorUsuario';
import { User } from 'src/app/models/user';
import { SensorService } from 'src/app/servicio/sensores/sensores.service';

@Component({
  selector: 'app-about',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  
  historial:SensorUsuario[]|undefined

  

  constructor( private histo:SensorService) {

   
    this.histo.mostrarHistorial().subscribe((data:any)=>{
      this.historial=data
    })

  }
  



  ngOnInit(): void {
  }



}
