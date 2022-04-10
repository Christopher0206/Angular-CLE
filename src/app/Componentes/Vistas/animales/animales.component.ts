import { Sensor } from './../../../models/sensor';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { interval } from 'rxjs';
import Swal from 'sweetalert';


@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

 
    sensor:Sensor= {
      "id":'',
      "Nombre":''
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

    showModal(){
      if(this.FormularioRegistro.valid){
        Swal({
          title: "Sensor Registrado",
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

