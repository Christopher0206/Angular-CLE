import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
      'Authorization':'Bearer '+ token
    })
    return this.http.get(`${this.apiURL}historialbyuser`,{headers:tokenHeader})
  }


  mostrarHistorial(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.http.get('http://143.244.174.46:44129/mostrarHistorial',{headers:tokenHeader})
  }

}

