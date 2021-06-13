import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  onUserLogin(name: string, password: string) {
    return                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           this.http.post<any>(
        `${API_URL}/authenticate`,{
          name,
          password
        }).pipe(
          map(
            data => {
              localStorage.setItem('USER', name);
              localStorage.setItem('ROLE', 'USER');
              localStorage.setItem('TOKEN', `Bearer ${data.token}`);
              return data;
            }
          )
        );
  }

  onAdminLogin(name: string, password: string) {
    return                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           this.http.post<any>(
        `${API_URL}/authenticate`,{
          name,
          password
        }).pipe(
          map(
            data => {
              localStorage.setItem('USER', name);
              localStorage.setItem('ROLE', 'ADMIN');
              localStorage.setItem('TOKEN', `Bearer ${data.token}`);
              return data;
            }
          )
        );
  }
  userType() {
  let  type:string = localStorage.getItem('ROLE');
    return type;
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('USER');
    if(user === null || user.length === 0) {
      return false;
    }
    return true;
  }
  getAuthenticatedToken() {
    return localStorage.getItem('TOKEN');
  }
  getAuthenticatedUser() {
    return localStorage.getItem('USER');
  }

  logout(){
    localStorage.clear();
  }
}
