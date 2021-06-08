import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = ''
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.user = this.activatedRoute.snapshot.params['name'];
  }

}
