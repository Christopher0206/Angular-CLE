import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { errorMessage, successDialog } from 'src/app/funciones/alertas';
import { LUser } from 'src/app/models/loginuser';
import { AuthService } from 'src/app/servicio/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  user!: LUser;
  constructor(private fb: FormBuilder, private SERVICIO: AuthService, private router: Router) {
    this.createFrom();
    this.login();
  }
  ngOnInit(): void {
  }

  login(): void {
    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach(control => {
        control.markAllAsTouched();
      })
    }
    else {
      this.setUser();
      this.SERVICIO.login(this.user).subscribe((data: any) => {
        successDialog('Iniciado').then(() => {
          
          if (localStorage.getItem("token_access")) {
            localStorage.removeItem("token_access")
            console.log("remplase el token existente")
          }
          localStorage.setItem("token_access", data.token)
          localStorage.setItem("usuario", this.loginForm.get('email')?.value)
          console.log("pongo el token:\t" + data.token)
          this.router.navigate(['ini/control']);
        })
      }, (error) => {
        errorMessage('Usuario o contraseña incorrectas');
      })
    }
  }
  get emailValidate() {
    return (
      this.loginForm.get('email')?.invalid && this.loginForm.get('email')?.touched
    )
  }
  get passwordValidate() {
    return (
      this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched
    )
  }
  createFrom(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
    });
  }
  setUser(): void {
    this.user = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
  }
}
