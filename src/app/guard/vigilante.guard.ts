import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../servicio/auth/auth.service';
import { SensorService } from '../servicio/sensores/sensores.service';

@Injectable({
  providedIn: 'root',
})
export class VigilanteGuard implements CanActivate {
  resp: boolean = true;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private service: AuthService,private sensor:SensorService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if(localStorage.getItem('token_access')=="" || localStorage.getItem('token_access')==null)
    {
      this.resp = false;
    }
    else{
      this.service.gettoken().subscribe(
        (res) => {
          (this.resp = true), console.log(res);
        },
        (err) => {
          (this.resp = false),
            this.router.navigate(['/login']),
            localStorage.removeItem('token_access');
          localStorage.removeItem('id');
        }
      );
      this.service.getUsuariobyToken(localStorage.getItem('token_access')).subscribe(
        (res) => {
          //localStorage.setItem('id',res)
          environment.IDUSUARIO=res
          //console.log("global:\t"+environment.IDUSUARIO)
        },
        (err) => {
          console.log(err)
        }//misSensores
      );
      this.sensor.historialbyuser(environment.IDUSUARIO).subscribe(
        (res) => {
          //localStorage.setItem('id',res)
          res.forEach((element: any) => {
            return environment.USUARIOHISTORIAL.push(element);
          });
          console.log("global:\t"+environment.USUARIOHISTORIAL)
        },
        (err) => {
          console.log(err)
        }//misSensores
      );
    }
    return this.resp;
  }
}
