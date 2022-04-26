import { noUndefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { errorMessage, timeMessage } from 'src/app/notificasiones/notificasiones';
import { hMotores } from 'src/app/models/hmotores';
import { Motores } from 'src/app/models/motores';
import { Sensor } from 'src/app/models/sensor';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/servicio/auth/auth.service';
import { SensorService } from 'src/app/servicio/sensores/sensores.service';
import { environment } from 'src/environments/environment.prod';
import { SensoresindividualService } from 'src/app/servicio/sensores/SensoresindividualService';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css']
})
export class ControlesComponent implements OnInit {
  sensores!: Sensor[]
  ultimosregistrosDht11: any[]=[]
  ultimosregistrosHcSr04: any[]=[]
  ultimosregistrosKy_031!: any[]
  ultimosregistrosMPU6050!: any[]
  sid = -1
  motor!: hMotores;
  constructor(private sensorS: SensorService,
    private usuario: AuthService,
    private missensores: SensoresindividualService) {
    this.usuario.ididusuario().subscribe((data: any) => {
      this.sid = data
      //console.log(this.sid)
    })
    console.log("idusuario:" + this.sid)
    //aqui se asigna en la variable global los id's de los sensores

    
    this.missensores.miDht11(environment.IDUSUARIO).subscribe((data: any) => {
      this.ultimosregistrosDht11.push(data)
    })

    this.missensores.miMPU6050(environment.IDUSUARIO).subscribe((data: any) => {
      this.ultimosregistrosMPU6050.push(data)
    })
    
    this.missensores.miKy_031(environment.IDUSUARIO).subscribe((data: any) => {
      this.ultimosregistrosKy_031.push(data)
    })
    
    this.missensores.miHcSr04(environment.IDUSUARIO).subscribe((data: any) => {
      this.ultimosregistrosHcSr04.push(data)
    })
    console.log(this.sid)
  }
  ngOnInit(): void {

  }
  //pruebas botones 
  ir() {
    this.motor = {
      idRU: 1,
      idSensor: 5,
      Posicion: "avanzar"
    };
    this.sensorS.insertarmotores(this.motor).subscribe(
      (data: any) => {
        timeMessage('Registrado', 1500);
        console.log(this.motor);
        //this.router.navigate(['/login']);
      },  
      (_error) => {
        errorMessage('Ha ocurrido un error:\n' + _error);
        console.log(this.motor);
      }
    );
    console.log("avanzar")
  }
  retroceder() {
    this.motor = {
      idRU: 1,
      idSensor: 5,
      Posicion: "retroceder"
    };
    this.sensorS.insertarmotores(this.motor).subscribe(
      (data: any) => {
        timeMessage('Registrado', 1500);
        console.log(this.motor);
        //this.router.navigate(['/login']);
      },
      (_error) => {
        errorMessage('Ha ocurrido un error:\n' + _error);
        console.log(this.motor);
      }
    );
    console.log("avanzar")
    console.log("retroceder")
  }
  stop() {
    this.motor = {
      idRU: 1,
      idSensor: 5,
      Posicion: "stop"
    };
    this.sensorS.insertarmotores(this.motor).subscribe(
      (data: any) => {
        timeMessage('Registrado', 1500);
        console.log(this.motor);
        //this.router.navigate(['/login']);
      },
      (_error) => {
        errorMessage('Ha ocurrido un error:\n' + _error);
        console.log(this.motor);
      }
    );
    console.log("stop")
  }
  IZQ() {
    this.motor = {
      idRU: 1,
      idSensor: 6,
      Posicion: "IZQ"
    };
    this.sensorS.insertarmotores(this.motor).subscribe(
      (data: any) => {
        timeMessage('Registrado', 1500);
        console.log(this.motor);
        //this.router.navigate(['/login']);
      },
      (_error) => {
        errorMessage('Ha ocurrido un error:\n' + _error);
        console.log(this.motor);
      }
    );
    console.log("IZQ")
  }
  CENTRO() {
    this.motor = {
      idRU: 1,
      idSensor: 6,
      Posicion: "CENTRO"
    };
    this.sensorS.insertarmotores(this.motor).subscribe(
      (data: any) => {
        timeMessage('Registrado', 1500);
        console.log(this.motor);
        //this.router.navigate(['/login']);
      },
      (_error) => {
        errorMessage('Ha ocurrido un error:\n' + _error);
        console.log(this.motor);
      }
    );
    console.log("CENTRO")
  }
  DER() {
    this.motor = {
      idRU: 1,
      idSensor: 6,
      Posicion: "DER"
    };
    this.sensorS.insertarmotores(this.motor).subscribe(
      (data: any) => {
        timeMessage('Registrado', 1500);
        console.log(this.motor);
        //this.router.navigate(['/login']);
      },
      (_error) => {
        errorMessage('Ha ocurrido un error:\n' + _error);
        console.log(this.motor);
      }
    );
    console.log("DER")
  }
}
//aqui se setean en ultimoregistro despues debes mostrar ultimo registro en el card
/*
let s = 0;
this.sensorS.misSensores(environment.IDUSUARIO).subscribe((data: any) => {
  this.sensores = data
  this.sensores.forEach((element: any) => {
    //environment.IDSSENSORESUSUARIO = element['idSensor']
    s += 1;
    environment.IDSSENSORESUSUARIO[s] = element['idSensor']

  }
  );
})
*/




/*
 this.sensorS.filtroultimoregistro(environment.IDUSUARIO,environment.IDSSENSORESUSUARIO).subscribe((data: any) => {
      this.ultimosregistros = data
      console.log(data)
      data.forEach((element: any) => {
        console.log(element)
      });
      console.log("ultimos registros:\t"+ this.ultimosregistros)
    })
    console.log("sensores del usuario:\t" + environment.IDSSENSORESUSUARIO[s])



  
  console.log(environment.IDSSENSORESUSUARIO)
  console.log("xddd:\t" + this.sensorS.idsensores)
  let s = 0;
  this.sensorS.idsensores.forEach((element: any) => {
    console.log("variable del servicio:\t" + element)
    s += 1;
    environment.IDSSENSORESUSUARIO[s] = element.idsensores
  });
  console.log("perro madre:\t" + environment.IDSSENSORESUSUARIO.length)

//viejos
this.sensorS.filtroultimoregistro(environment.IDUSUARIO,environment.IDSSENSORESUSUARIO).subscribe((data: any) => {
       this.ultimosregistros = data
       console.log(data)
       data.forEach((element: any) => {
         console.log(element)
       });
       console.log("ultimos registros:\t"+ this.ultimosregistros)
     })
*/