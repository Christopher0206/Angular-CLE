import { noUndefined } from '@angular/compiler/src/util';
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
  ultimosregistros!: any[]
  sid = 0
  motor!: hMotores;
  constructor(private sensorS: SensorService, private usuario: AuthService) {
    this.usuario.ididusuario().subscribe((data: any) => {
      this.sid = data
      //console.log(this.sid)
    })
    console.log("idusuario:"+this.sid)
    //aqui se asigna en la variable gloval los ids de los sensores
    this.sensorS.misSensores(environment.IDUSUARIO).subscribe((data: any) => {
      this.sensores = data
      this.sensores.forEach((element:any) => {
        environment.IDSSENSORESUSUARIO=element['idSensor']
        console.log("sensores del usuario:\t"+environment.IDSSENSORESUSUARIO)
      });
    })
    //aqui se setean en ultimoregistro despues debes mostrar ultimo registro en el card
    this.sensorS.filtroultimoregistro(environment.IDUSUARIO,environment.IDSSENSORESUSUARIO).subscribe((data: any) => {
      this.ultimosregistros = data
      console.log(data)
      data.forEach((element: any) => {
        console.log(element)
      });
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
}
