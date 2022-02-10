import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from '../fake-auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private fakeAuthService: FakeAuthService) { }

  ngOnInit(): void {
  }

  hasVentasAccess(): boolean {
    return this.fakeAuthService.hasVentasAccess();
  }

}
