import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Motores } from 'src/app/models/motores';
import { MPU6050 } from 'src/app/models/acelerometro';
import { KY_031 } from 'src/app/models/impacto';
import { DHT11 } from 'src/app/models/temperatura';
import { HC_SR04 } from 'src/app/models/ultrasonico';
//import { Motores } from 'src/app/models/motores';
@Injectable({
  providedIn: 'root'
})
/*
mostrarmiDht11
mostrarmiHcSr04
mostrarmiKy_031
mostrarmiMotore
mostrarmiServo
mostrarmiMPU6050
*/
export class SensoresindividualService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) { }
  miServo(iduser: number) {
    const token = localStorage.getItem("token")
    const tokenHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    const resp = this.http.get(`${this.apiURL}mostrarmiServo/` + iduser, { headers: tokenHeader })
    return resp
  }
  miMotor(iduser: number) {
    const token = localStorage.getItem("token")
    const tokenHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    const resp = this.http.get(`${this.apiURL}mostrarmiMotore/` + iduser, { headers: tokenHeader })
    return resp
  }
  miMPU6050(iduser: number) {
    const token = localStorage.getItem("token")
    const tokenHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    const resp = this.http.get(`${this.apiURL}mostrarmiMPU6050/` + iduser, { headers: tokenHeader })
    return resp
  }
  miKy_031(iduser: number) {
    const token = localStorage.getItem("token")
    const tokenHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    const resp = this.http.get(`${this.apiURL}mostrarmiKy_031/` + iduser, { headers: tokenHeader })
    return resp
  }
  miHcSr04(iduser: number) {
    const token = localStorage.getItem("token")
    const tokenHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    const resp = this.http.get(`${this.apiURL}smisSensores/` + iduser, { headers: tokenHeader })
    return resp
  }
  miDht11(iduser: number) {
    const token = localStorage.getItem("token")
    const tokenHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    const resp = this.http.get(`${this.apiURL}mostrarmiDht11/` + iduser, { headers: tokenHeader })
    return resp
  }
}
