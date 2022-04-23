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
  sid:User['id']
  constructor(private sensorS: SensorService, private usuario: AuthService) {
    
    this.sensorS.mostrarSensor().subscribe((data: any) => {
      this.sensores = data
    })
    const alv=this.usuario.traerusuario().subscribe((data:User['id']) => {
      //localStorage.setItem('id', data['id']);
      //console.log(data)
      //this.sid=Number(data)
      return data
    })
    //this.sid=Number(localStorage.getItem('id'))t
    //console.log(this.sid)
    console.log(alv)
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
//BLOQUEAR BOTON
  isValid($event: MouseEvent){

  }
//AVANZA EL CARRO
  avanzar($event: MouseEvent){
    ($event.target as HTMLButtonElement).disabled = true;
  }
//RETROCEDE EL CARRO
  retroceder($event: MouseEvent){

  }
//DETIENE EL CARRO AUTOMATICAMENTE
  detener($event: MouseEvent){

  }
//MUEVE A LA IZQUIERDA
  izquierda($event: MouseEvent){

  }
//MUEVE A LA DERECHA
  derecha($event: MouseEvent){

  }
//SE CENTRAN LAS LLANTAS
  centrar($event: MouseEvent){

  }

}
