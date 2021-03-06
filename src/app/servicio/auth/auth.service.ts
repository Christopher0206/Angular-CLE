import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { LUser } from 'src/app/models/loginuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  apiURL = environment.apiURL;
  idusuario!: any;
  constructor(private http: HttpClient) { }
  gettoken() {
    const token = localStorage.getItem("token")


    const tokenHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    return this.http.get<any>(`${this.apiURL}token`, { headers: tokenHeader });
  }
  registro(user: User): Observable<any> {
    return this.http.post(`${this.apiURL}Register`, user);
  }

  login(user: LUser): Observable<any> {
    return this.http.post(`${this.apiURL}Login`, user);
  }

  //usuarios
  traerusuario() {
    //straerUsuario   idusuario
    const token = localStorage.getItem("token")
    const tokenHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    return this.http.get<User[]>(`${this.apiURL}straerUsuario`, { headers: tokenHeader });
  }
  ididusuario() {
    //straerUsuario   idusuario
    const token = localStorage.getItem("token")
    const tokenHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    return this.http.get(`${this.apiURL}idusuario`, { headers: tokenHeader });
  }
  getUsuarios() {
    return this.http.get<User[]>(`${this.apiURL}straerUsuario`);
  }
  getUsuario(id: number | string | null) {
    return this.http.get(`${this.apiURL}usuario/${id}`);
  }
  getUsuariobyToken(t: any): Observable<any> {
    return this.http.get(`${this.apiURL}idusuario`, t);
  }
}
