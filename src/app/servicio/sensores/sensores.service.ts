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
<<<<<<< Updated upstream
    return this.http.get('http://143.244.174.46:3333/mostrarSensores',{headers:tokenHeader})
=======
    return this.http.get('http://143.244.174.46:44129/mostrarSensoress',{headers:tokenHeader})
>>>>>>> Stashed changes
  }
  

  mostrarHistorial(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
<<<<<<< Updated upstream
    return this.http.get('http://143.244.174.46:3333/mostrarHistorial',{headers:tokenHeader})
=======
    return this.http.get('http://143.244.174.46:44129/mostrarHistorial',{headers:tokenHeader})
>>>>>>> Stashed changes
  }

}
