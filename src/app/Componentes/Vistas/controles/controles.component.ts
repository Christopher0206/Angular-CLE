import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.css']
})
export class ControlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//BLOQUEAR BOTON
  isValid($event: MouseEvent){
    ($event.target as HTMLButtonElement).disabled = true;

  }
//AVANZA EL CARRO
  avanzar($event: MouseEvent){
    ($event.target as HTMLButtonElement).disabled = true;
  }
//RETROCEDE EL CARRO
  retroceder(){

  }
//DETIENE EL CARRO AUTOMATICAMENTE
  detener(){

  }
//MUEVE A LA IZQUIERDA
  izquierda(){

  }
//MUEVE A LA DERECHA
  derecha(){

  }
//SE CENTRAN LAS LLANTAS
  centrar(){

  }

}
