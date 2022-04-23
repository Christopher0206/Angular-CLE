import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Motores } from 'src/app/models/motores';


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
    return this.http.get(`${this.apiURL}smostrarSensoress`,{headers:tokenHeader})
  }
  
  historialbyuser(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token   //sfiltroultimoregistro
    })
    return this.http.get(`${this.apiURL}historialbyuser`,{headers:tokenHeader})
  }


  mostrarHistorial(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.http.get(this.apiURL,{headers:tokenHeader})
  }
  insertarmotores(body:Motores){
    const token=localStorage.getItem("token")
    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.http.post(`${this.apiURL}sinsertarMotores`, body,{headers:tokenHeader});
  }
}

