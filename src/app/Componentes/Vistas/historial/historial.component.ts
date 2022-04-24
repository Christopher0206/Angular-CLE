import { Component, OnInit } from '@angular/core';
import { HIBRIDO } from 'src/app/models/hibrido';
import { SensorUsuario } from 'src/app/models/SensorUsuario';
import { HC_SR04 } from 'src/app/models/ultrasonico';
import { User } from 'src/app/models/user';
import { SensorService } from 'src/app/servicio/sensores/sensores.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-about',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  

  histo: any[]=[]
  
  hola="hola";
  constructor( private histos:SensorService) {

    
    this.histos.historialbyuser().subscribe((data:any)=>{
      this.histo=data
      console.log(this.histo)
    })

  }
  ngOnInit(): void {
  

  }

   /*
  Descripcion: "Sensor usado para medir distancias."
Fechacreacion: "2022-04-24T02:59:10.810Z"
Fechadecreacion: "2000-01-01T06:00:00.000Z"
IMG: "https://mexico.newark.com/productimages/large/en_US/11X5783-40.jpg"
Nombre: "Ultrasonico"
Posicion: "avanzar"
idH: 2
idRU: 1
idSensor: 2
idUsuario: 2
_id: "6264bcfe47c73ca1b632d087"





    this.histo.mostrarHistorial().subscribe((data:any)=>{
      this.historial=data
    })
   
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
  
  */





}
