import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ServiceService } from '../../../service.service'
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

  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
  }

  formularioregistro=new FormGroup({
    email:new FormControl(null,[Validators.required, Validators.email]),
    password:new FormControl(null,[Validators.required])
  })

  registrar() {
    this.servicio.registratse(this.usuario).subscribe((data:any)=>{
     this.usuario=data;
    })
  }



}
