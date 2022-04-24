import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Motores } from 'src/app/models/motores';
import { hMotores } from 'src/app/models/hmotores';
@Injectable({
  providedIn: 'root'
})
export class SensorService {
  apiURL=environment.apiURL;
  constructor(private http:HttpClient) { 

  }
  mostrarSensor(){
    const token=localStorage.getItem("token")
    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.http.get(`${this.apiURL}mostrarSensoresa`)
  }
  historialbyuser(id:any){
    const token=localStorage.getItem("token")
    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token   //sfiltroultimoregistro
    })
    return this.http.get(`${this.apiURL}historialbyuser/`+id)
  }
  mostrarHistorial(){
    const token=localStorage.getItem("token")
    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.http.get(`${this.apiURL}mostrarHistorial`)
  }
  insertarmotores(body:hMotores){
    const token=localStorage.getItem("token")
    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.http.post(`${this.apiURL}sinsertarMotores`, body,{headers:tokenHeader});
  }
  misSensores(iduser:number){
    const token=localStorage.getItem("token")
    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.http.get(`${this.apiURL}smisSensores/`+iduser,{headers:tokenHeader})
  }
}

