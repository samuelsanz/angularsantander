import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  template: `
    <div class="card">
      <h1>Ejemplo de componente en linea</h1>
      <p>{{mensaje}}</p>
    </div>
  `,
  styles: [
    'p {color: violet;}',
    'h1 {color: brown;}'
  ]
})
export class ComponenteEnLineaComponent implements OnInit {

  mensaje: string = "Hola Mundo!";

  constructor() { }

  ngOnInit(): void {
  }

}
