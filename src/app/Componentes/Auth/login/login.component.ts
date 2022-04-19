import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ServiceService} from '../../../service.service'
import { Login} from '../../../models/login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //LoginForm = new FormGroup({
    //usuario : new FormControl('', Validators.required),
    //password : new FormControl('',Validators.required)
  //}
  contactForm!: FormGroup;
  constructor(private api:ServiceService) { }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log('Form->');
  }

  

  onLogin(form:Login){
    this.api.loginByEmail(form).subscribe(data =>{
      console.log(data);
    })
  }

}
