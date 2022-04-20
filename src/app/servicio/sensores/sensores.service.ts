import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SensorService {
  
  constructor(private http:HttpClient) { 

  }
  
  
   mostrarSensor(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.http.get('url',{headers:tokenHeader})
  }
}
