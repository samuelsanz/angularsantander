import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p13http';

  constructor() {
    this.fakeLogin();
  }

  fakeLogin() {
    localStorage.setItem('faketoken', '1234') // No lo haga en producción, por favor...
  }
}
