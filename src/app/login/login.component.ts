import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail = "";
  userPassword = "";
  adminEmail="";
  adminPassword = "";
  invalidUserLogin = false;
  invalidAdminLogin = false;
  errorMessage = "";

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLoginUser() {
    if(this.authService.onUserLogin(this.userEmail, this.userPassword)) {
        this.route.navigate(['/dashboard',this.userEmail])
    }
    else {
      this.errorMessage = 'An Error Occured!'
      this.invalidUserLogin = true
    }
  }

  onLoginAdmin() {
    if(this.authService.onAdminLogin(this.adminEmail, this.adminPassword)) {
        this.route.navigate(['/dashboard', this.adminEmail])
    }
    else {
      this.errorMessage = 'An Error ocuured!'
      this.invalidAdminLogin = true;
    }
  }

}
