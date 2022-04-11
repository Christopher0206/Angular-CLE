import { Sensor } from './models/sensor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpcliente:HttpClient) { 

  }
  crearSensor(sensor:any){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.post('Aqui va la api',sensor,{headers:tokenHeader})
  }
  mostrarSensor(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.get('Aqui va la api',{headers:tokenHeader})
  }
}
