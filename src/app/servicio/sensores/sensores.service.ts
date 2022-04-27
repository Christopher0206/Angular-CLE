import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Motores } from 'src/app/models/motores';
import { hMotores } from 'src/app/models/hmotores';
import { right } from '@popperjs/core';
@Injectable({
  providedIn: 'root'
})
export class SensorService {
  idsensores:any;
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
  historialbyuser(){
    const token=localStorage.getItem("token")
    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token   //sfiltroultimoregistro
    })
    return this.http.get(`${this.apiURL}historialbyuser/`+environment.IDUSUARIO)
  }
  filtroultimoregistro(idusuario:any,idsensor:any){
    const token=localStorage.getItem("token")
    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.http.get(`${this.apiURL}sfiltroultimoregistro/`+idusuario+`/`+idsensor,{headers:tokenHeader})
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
    this.idsensores= this.http.get(`${this.apiURL}smisSensores/`+iduser,{headers:tokenHeader})
    //environment.IDSSENSORESUSUARIO.push(this.idsensores)
    return this.idsensores
  }

  historialbyuser2(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })


    return this.http.get('http://143.244.174.46:3333/historialbyuser/'+environment.IDUSUARIO,{headers:tokenHeader})
  }

  traerdht11(){
    const token=localStorage.getItem("token")
    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.http.get('http://143.244.174.46:3333/dht11',{headers:tokenHeader})
  }

  traerultra(){
    const token=localStorage.getItem("token")
    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.http.get('http://143.244.174.46:3333/ultrasonico',{headers:tokenHeader})
  }





  }

