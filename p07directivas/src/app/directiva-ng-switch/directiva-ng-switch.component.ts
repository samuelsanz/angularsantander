import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-switch',
  templateUrl: './directiva-ng-switch.component.html',
  styleUrls: ['./directiva-ng-switch.component.css']
})
export class DirectivaNgSwitchComponent implements OnInit {

  mensaje: string = 'fail';

  constructor() { }

  ngOnInit(): void {
  }

}
