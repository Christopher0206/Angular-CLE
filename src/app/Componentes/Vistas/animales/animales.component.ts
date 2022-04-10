import { Sensor } from './../../../models/sensor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

 
    sensoresArray: Sensor[] = [
      {id:1, Nombre:"Christopher"},
      {id:2, Nombre:"Juan"},
    ];
  

  ngOnInit(): void {
  }

}
