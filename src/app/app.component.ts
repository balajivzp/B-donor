import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isClicked = false;
  title = 'B-donor';

  onClciked() {
    this.isClicked = true;
  }
}
