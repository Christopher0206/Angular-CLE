import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../servicio/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class VigilanteGuard implements CanActivate {
  resp: boolean = true;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private service: AuthService
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
    //const cookie=this.cookieService.check('token_access');
    //this.redirect(cookie);
    //return cookie;
    if(localStorage.getItem('token_access')=="" || localStorage.getItem('token_access')==null)
    {
      this.resp = false;
    }
    else{
      this.service.gettoken().subscribe(
        (res) => {
          (this.resp = true), console.log(res);
          //this.router.navigate(["ini/control"])
        },
        (err) => {
          (this.resp = false),
            this.router.navigate(['/login']),
            localStorage.removeItem('token_access');
          localStorage.removeItem('id');
        }
      );
    }
    return this.resp;
  }
}
