import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  estado = 0;
  usuario: any;
  listarUsuarios() {
    return this.estado;
  }

  cerrarsesion() {
    localStorage.removeItem('token_access');
    localStorage.removeItem('id');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
    window.location.hash = 'no-back-button';
    window.location.hash = 'Again-No-back-button'; //chrome
    window.onhashchange = function () {
      window.location.hash = 'no-back-button';
    };
    //this.buscar()
  }
  buscar() {
    let s = localStorage.getItem('usuario');
    if (localStorage.getItem('usuario') == "") {
      this.usuario = "no hay"
    }
    else {
      this.usuario = localStorage.getItem('usuario');
      this.estado+=1;
    }
  }
  ngOnInit(): void {
    this.buscar()
  }

}
