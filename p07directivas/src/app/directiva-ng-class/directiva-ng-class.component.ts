import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-class',
  templateUrl: './directiva-ng-class.component.html',
  styleUrls: ['./directiva-ng-class.component.css']
})
export class DirectivaNgClassComponent implements OnInit {

  jugadores: Array<any> = [
    {nombre: 'Magic Johnson', equipo: 'lakers'},
    {nombre: 'Larry Bird', equipo: 'celtics'},
    {nombre: 'Michael Jordan', equipo: 'bulls'},
    {nombre: 'Scottie Pippen', equipo: 'bulls'},
    {nombre: 'Dannie Ainge', equipo: 'celtics'},
    {nombre: 'Lucas Grijander'},
    {nombre: 'James Worthy', equipo: 'lakers'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
