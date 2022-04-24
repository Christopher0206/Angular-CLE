import { Component, OnInit } from '@angular/core';
import { errorMessage, timeMessage } from 'src/app/funciones/alertas';
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
  sensores!: Sensor[]
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
    this.sensorS.insertarmotores(this.motor).subscribe(
      (data: any) => {
        timeMessage('Registrado', 1500);
        console.log(this.motor);
        //this.router.navigate(['/login']);
      },
      (_error) => {
        errorMessage('Ha ocurrido un error:\n'+_error);
        console.log(this.motor);
      }
    );
    console.log("avanzar")
  }
  retroceder(){
    this.motor = {  
      idRU:1,
      idSensor:5,
      Posicion:"retroceder"
      };
      this.sensorS.insertarmotores(this.motor).subscribe(
        (data: any) => {
          timeMessage('Registrado', 1500);
          console.log(this.motor);
          //this.router.navigate(['/login']);
        },
        (_error) => {
          errorMessage('Ha ocurrido un error:\n'+_error);
          console.log(this.motor);
        }
      );
      console.log("avanzar")
    console.log("retroceder")
  }
  stop() {
    this.motor = {  
      idRU:1,
      idSensor:5,
      Posicion:"stop"
      };
      this.sensorS.insertarmotores(this.motor).subscribe(
        (data: any) => {
          timeMessage('Registrado', 1500);
          console.log(this.motor);
          //this.router.navigate(['/login']);
        },
        (_error) => {
          errorMessage('Ha ocurrido un error:\n'+_error);
          console.log(this.motor);
        }
      );
    console.log("stop")
  }
  IZQ() {
    this.motor = {  
      idRU:1,
      idSensor:6,
      Posicion:"IZQ"
      };
      this.sensorS.insertarmotores(this.motor).subscribe(
        (data: any) => {
          timeMessage('Registrado', 1500);
          console.log(this.motor);
          //this.router.navigate(['/login']);
        },
        (_error) => {
          errorMessage('Ha ocurrido un error:\n'+_error);
          console.log(this.motor);
        }
      );
    console.log("IZQ")
  }
  CENTRO() {
    this.motor = {  
      idRU:1,
      idSensor:6,
      Posicion:"CENTRO"
      };
      this.sensorS.insertarmotores(this.motor).subscribe(
        (data: any) => {
          timeMessage('Registrado', 1500);
          console.log(this.motor);
          //this.router.navigate(['/login']);
        },
        (_error) => {
          errorMessage('Ha ocurrido un error:\n'+_error);
          console.log(this.motor);
        }
      );
    console.log("CENTRO")
  }
  DER() {
    this.motor = {  
      idRU:1,
      idSensor:6,
      Posicion:"DER"
      };
      this.sensorS.insertarmotores(this.motor).subscribe(
        (data: any) => {
          timeMessage('Registrado', 1500);
          console.log(this.motor);
          //this.router.navigate(['/login']);
        },
        (_error) => {
          errorMessage('Ha ocurrido un error:\n'+_error);
          console.log(this.motor);
        }
      );
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
