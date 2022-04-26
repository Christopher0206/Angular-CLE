import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth/auth.service';
import {ESTADOS} from './estado.module'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent extends ESTADOS implements OnInit{

  constructor(private router: Router, private authService: AuthService) {
    super();
  }
  
  
  listarUsuarios() {
    return this.estado;
  }

  cerrarsesion() {
    this.estado-=1;
    console.log("cerrarsesion-buscar:\t"+this.estado)
    localStorage.removeItem('token_access');
    localStorage.removeItem('id');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
    window.onhashchange = function () {
      window.location.hash = 'no-back-button';
      window.location.hash = 'no-back-button';
    window.location.hash = 'Again-No-back-button'; //chrome
    };
  }
  buscar() {
    let s = localStorage.getItem('usuario');
    if (localStorage.getItem('usuario') == "") {
      this.usuario = "no hay"
      
      console.log("if-buscar:\t"+this.estado)
    }
    else {
      this.usuario = localStorage.getItem('usuario');
      this.estado+=1;
      console.log("else-buscar:\t"+this.estado)
    }
  }
  ngOnInit(): void {
    this.buscar()
    console.log("inicio:\t"+this.estado)
  }

}
