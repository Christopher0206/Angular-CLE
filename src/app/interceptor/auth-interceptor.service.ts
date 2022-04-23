import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }
 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string|null = localStorage.getItem('token_access');
    console.log("hay un token",token);
    let request = req;
    if (token) {
      request = req.clone({
        setHeaders: {
          Authorization: `bearer ${ token }`
        }
      });
    }
    return next.handle(request);
  }  
}
