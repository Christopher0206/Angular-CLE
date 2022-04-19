import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Sensor } from 'src/app/models/sensor';


@Injectable({
  providedIn: 'root'
})
export class SensorService {
  apiURL=environment.apiURL;
  constructor(private http:HttpClient) { }
  public async mostrarSensor()
  {
    return this.http.get<Sensor[]>(`${this.apiURL}mostrarSensores`);
  }
}
