import { Injectable } from '@angular/core';
import { BloodDetails } from '../blood-details/blood-details.model'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BloodService {

   blood_details: BloodDetails[] = [{
    name: 'Balaji',
    age: '21',
    blood_group: 'A+',
    mobile_number: '9629454622',
    city: 'Coimbatore',
    sex: 'Male'
  },
  {
    name: 'Mohan',
    age: '21',
    blood_group: 'A+',
    mobile_number: '9629454622',
    city: 'Coimbatore',
    sex: 'Male'
  },
]

private bloodSub : BehaviorSubject<BloodDetails[]> = new BehaviorSubject(this.blood_details)
  constructor() { }

  getDetails(group: string, city: string) {
    this.bloodSub.next(this.blood_details)
  }

  getBloodSub() {
    return this.bloodSub.asObservable();
  }
}
