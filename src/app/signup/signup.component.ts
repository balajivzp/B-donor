import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Profile } from '../model/profile.model'
import { Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
message:string;
 profile: Profile;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    this.message = 'Successfully Registered';
    this.profile = form.value;
    console.log(this.profile);
    setTimeout(() => {
      this.route.navigate(['/login']);
    }, 5000)

  }

}
