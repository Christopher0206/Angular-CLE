import { Component, OnInit } from '@angular/core';
import { Sensor } from 'src/app/models/sensor';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/servicio/auth/auth.service';
import { SensorService } from 'src/app/servicio/sensores/sensores.service';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css']
})
export class ControlesComponent implements OnInit {
  sensores: Sensor[] | undefined
  sid = 0
  constructor(private sensorS: SensorService, private usuario: AuthService) {

    this.sensorS.mostrarSensor().subscribe((data: any) => {
      this.sensores = data
    })
    this.usuario.ididusuario().subscribe((data: any) => {
      this.sid = data
      //console.log(this.sid)
    })

  }
  ngOnInit(): void {

  }
  //pruebas botones issac
  ir() {
    
    console.log("avanzar")
  }
  retroceder(){
    console.log("retroceder")
  }
  stop() {
    console.log("stop")
  }
  IZQ() {
    console.log("IZQ")
  }
  CENTRO() {
    console.log("CENTRO")
  }
  DER() {
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
