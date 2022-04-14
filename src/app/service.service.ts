import { Injectable } from '@angular/core';
import { Login } from '../app/models/login'
import { Response } from '../app/models/response'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url:string = "AQUI VA LA API";

  constructor(private httpcliente:HttpClient) { }

  loginByEmail(form:Login):Observable<Response>{

    let direccion = this.url + "auth";
    return this.httpcliente.post<Response>(direccion,form)
    
  }
  crearSensor(sensor:any){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.post('http://143.244.174.46:3333/crearSensores',sensor,{headers:tokenHeader})
  }
  mostrarSensor(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.get('Aqui va la api',{headers:tokenHeader})
  }
}
