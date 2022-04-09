import { Component } from '@angular/core';
import { Sensores } from './modelos/sensores';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Security Car';
  sensoresArray: Sensores[] = [
    {id: 1, nombre: "Temperatura"},
    {id: 2, nombre: "Humedad"},
    {id: 3, nombre: "Proximidad"}
  ];
}
