import { Component, OnInit , OnDestroy} from '@angular/core';
import { BloodService} from '../services/blood.service';
import {BloodDetails} from '../blood-details/blood-details.model'
import { Subscription} from 'rxjs'

@Component({
  selector: 'app-blood-details',
  templateUrl: './blood-details.component.html',
  styleUrls: ['./blood-details.component.css']
})
export class BloodDetailsComponent implements OnInit, OnDestroy {

  constructor(private bloodService: BloodService) { }
 blood_details: BloodDetails[];
 subs: Subscription;
  ngOnInit(): void {
  this.subs =  this.bloodService.getBloodSub().subscribe( data => {
      this.blood_details = data;
    })
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
