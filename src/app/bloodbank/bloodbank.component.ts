import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { BloodService } from '../services/blood.service'

@Component({
  selector: 'app-bloodbank',
  templateUrl: './bloodbank.component.html',
  styleUrls: ['./bloodbank.component.css']
})
export class BloodbankComponent implements OnInit {

 isClicked = false;
  constructor(private bloodService: BloodService) { }


  ngOnInit(): void {
  }

  search(form: NgForm) {
    console.log(form);
    this.isClicked = true;
    this.bloodService.getDetails(form.value.blood_group, form.value.city);
  }

}
