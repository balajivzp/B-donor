import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'
import { BloodDetails} from '../blood-details/blood-details.model'

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {
  blood_details: BloodDetails
  constructor() { }

  ngOnInit(): void {
  }
  addDonor(form: NgForm) {
    this.blood_details = form.value;
    console.log(this.blood_details);
  }
}
