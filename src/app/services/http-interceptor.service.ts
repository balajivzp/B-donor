import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'in28minutes'
    // let password = 'dummy'
    //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.authService.getAuthenticatedToken();
    let username = this.authService.getAuthenticatedUser()

    if(basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        })
    }
    return next.handle(request);
  }
}
