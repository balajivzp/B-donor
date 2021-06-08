import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  onUserLogin(email: string, password: string) {
    if(email === 'user' && password === '1234') {
      localStorage.setItem('user', email);
      localStorage.setItem('role', "user");

      return true;
    }
    return false;
  }

  onAdminLogin(email: string, password: string) {
    if(email === 'admin' && password === '1234') {
      localStorage.setItem('user', email);
      localStorage.setItem('role', "admin");

      return true;
    }
    return false;
  }
  userType() {
  let  type:string = localStorage.getItem('role');
    return type;
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('user');
    if(user === null || user.length === 0) {
      return false;
    }
    return true;
  }

  logout(){
    localStorage.clear();
  }
}
