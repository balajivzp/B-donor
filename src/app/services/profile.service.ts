import { Injectable } from '@angular/core';
import { Profile } from '../model/profile.model'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile: Profile = {
    name: "Balaji",
    email: 'balajimohan66@gmail.com',
    dob: '2000-02-01',
    mobilenumber: '9629454622',
    address: 'valukkuparai',
    city: 'coimbatore',
    password: '12345'
  };
  constructor() { }

  fetchProfile() {
    return this.profile;
  }
  update() {

  }
}
