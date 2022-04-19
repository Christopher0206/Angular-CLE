import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs';
import { Sensor } from 'src/app/models/sensor';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert';


@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  @Input() dataEntrante:any;

  sensor:Sensor= {
    "id":'',
    "Nombre":'',
    "Descripcion":'',
    "Estado":'',
    "Imagen":''
  }
  sensores:Sensor[]|undefined
  FormularioRegistro= new FormGroup({
    Nombre_Sensor: new  FormControl(null,[Validators.required])
  })

  constructor(private sensorservi:ServiceService){
     const contador=interval(3000)
    contador.subscribe(()=>{
      this.sensorservi.mostrarSensor().subscribe((data:any)=>{
        this.sensor=data
      })
    })  
  }
  mandar(){
    console.log(this.dataEntrante);
  }

  

  showModal(){
    if(this.FormularioRegistro.valid){
      Swal({
        title: "Sensor Registrado Con Exito",
        icon: "success",
      });
    }
    else{
     Swal({
       title:'Ocurrio un ERROR al intentar registrar el sensor',
       icon:"warning"
     })
    }


  }
  crearSensor(){
    this.sensorservi.crearSensor(this.sensor).subscribe((data:any)=>{
      this.sensor=data
    })
  }
     ngOnInit(): void {
}

}
