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
    this.authService.onUserLogin(this.userEmail, this.userPassword).
    subscribe(data => {
      console.log(data);
      this.route.navigate(['/dashboard', this.userEmail]);
    }, error => {
      this.errorMessage = 'An Error occured!';
    })
  }

  onLoginAdmin() {
    this.authService.onUserLogin(this.adminEmail, this.adminPassword).
    subscribe(data => {
      console.log(data);
      this.route.navigate(['/dashboard', this.adminEmail]);
    }, error => {
      this.errorMessage = 'An Error occured!';
    })
  }

}
