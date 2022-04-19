import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../../../servicio/auth/auth.service'
import { Registro} from '../../../models/registro'

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.css']
})
export class RegistroUserComponent implements OnInit {

  usuario:Registro={
    "email":'',
    "password":''
  }

  constructor(private servicio:AuthService) { }

  ngOnInit(): void {
  }

  formularioregistro=new FormGroup({
    email:new FormControl(null,[Validators.required, Validators.email]),
    password:new FormControl(null,[Validators.required])
  })

  registrar() {
    this.servicio.registro(this.usuario).subscribe((data:any)=>{
     this.usuario=data;
    })
  }



}
