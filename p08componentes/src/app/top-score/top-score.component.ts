import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-score',
  templateUrl: './top-score.component.html',
  styleUrls: ['./top-score.component.css']
})
export class TopScoreComponent implements OnInit {

  @Input() equipoLocal: any = [];
  @Input() equipoVisitante: any = [];
  jugadores: any = [];

  constructor() { }

  ngOnInit(): void {
    this.jugadores = [...this.equipoLocal.jugadores, ...this.equipoVisitante.jugadores]; // Rompe la referencia
  }

  ngAfterContentChecked() { // Se ejecutará cada vez que se chequee correctamente el contenido recibido por el componente
    this.sortJugadores();
  }

  sortJugadores() {
    this.jugadores.sort((a: any, b: any) => {
      return (b.puntos - a.puntos); // Para ascendente sería al revés (a.puntos - b.puntos)
    })
  }

}
