import { Component, OnInit } from '@angular/core';
import { hMotores } from 'src/app/models/hmotores';
import { Motores } from 'src/app/models/motores';
import { Sensor } from 'src/app/models/sensor';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/servicio/auth/auth.service';
import { SensorService } from 'src/app/servicio/sensores/sensores.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css']
})
export class ControlesComponent implements OnInit {
  sensores: Sensor[] | undefined
  sid = 0
  motor!: hMotores;
  constructor(private sensorS: SensorService, private usuario: AuthService) {
    this.usuario.ididusuario().subscribe((data: any) => {
      this.sid = data
      //console.log(this.sid)
    })
    console.log("idusuario:"+this.sid)
    this.sensorS.misSensores(environment.IDUSUARIO).subscribe((data: any) => {
      this.sensores = data
    })
  }
  ngOnInit(): void {

  }
  //pruebas botones issac
  ir() {
    this.motor = {  
    idRU:1,
    idSensor:5,
    Posicion:"avanzar"
    };
    console.log("avanzar")
  }
  retroceder(){
    this.motor = {  
      idRU:1,
      idSensor:5,
      Posicion:"retroceder"
      };
    console.log("retroceder")
  }
  stop() {
    this.motor = {  
      idRU:1,
      idSensor:5,
      Posicion:"stop"
      };
    console.log("stop")
  }
  IZQ() {
    this.motor = {  
      idRU:1,
      idSensor:6,
      Posicion:"IZQ"
      };
    console.log("IZQ")
  }
  CENTRO() {
    this.motor = {  
      idRU:1,
      idSensor:6,
      Posicion:"CENTRO"
      };
    console.log("CENTRO")
  }
  DER() {
    this.motor = {  
      idRU:1,
      idSensor:6,
      Posicion:"DER"
      };
    console.log("DER")
  }
  /*
  //BLOQUEAR BOTON
  isValid($event: MouseEvent) {

  }
  //AVANZA EL CARRO
  avanzar($event: MouseEvent) {
    ($event.target as HTMLButtonElement).disabled = true;
  }
  //RETROCEDE EL CARRO
  retroceder($event: MouseEvent) {

  }
  //DETIENE EL CARRO AUTOMATICAMENTE
  detener($event: MouseEvent) {

  }
  //MUEVE A LA IZQUIERDA
  izquierda($event: MouseEvent) {

  }
  //MUEVE A LA DERECHA
  derecha($event: MouseEvent) {

  }
  //SE CENTRAN LAS LLANTAS
  centrar($event: MouseEvent) {

  }
  */
}
