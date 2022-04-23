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
