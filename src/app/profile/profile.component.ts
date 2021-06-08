import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service'
import { Profile } from '../model/profile.model'
import  { NgForm } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  user:string;
  constructor(private profileService: ProfileService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user =  this.activatedRoute.snapshot.params['name']
    this.profile =  this.profileService.fetchProfile();
    console.log(this.profile);
  }

  update(form: NgForm) {
    this.profileService.update();
  }

}
