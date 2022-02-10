import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  puntosLocales: number = 0;
  puntosVisitantes: number = 0;

  equipoLocal: any = {
    nombre: 'lakers',
    logo: 'https://i.ibb.co/kScnyQC/lakers.png',
    jugadores: [
      {nombre: 'Isaiah Thomas', puntos: 0, imagen: 'https://i.ibb.co/j5LYsQN/thomas.png'},
      {nombre: 'Kyle Kuzma', puntos: 0, imagen: 'https://i.ibb.co/Fs16X5C/kuzma.png'},
      {nombre: 'Julius Randle', puntos: 0, imagen: 'https://i.ibb.co/bF3PLWX/randle.png'},
      {nombre: 'Brandom Ingram', puntos: 0, imagen: 'https://i.ibb.co/ZgVqCZF/ingram.png'},
      {nombre: 'Brook López', puntos: 0, imagen: 'https://i.ibb.co/nQ8nwNX/lopez.png'},
    ]
  };

  equipoVisitante: any = {
    nombre: 'celtics',
    logo: 'https://i.ibb.co/vk7Ks0R/celtics.png',
    jugadores: [
      {nombre: 'Kaadem Allen', puntos: 0, imagen: 'https://i.ibb.co/87m9wLB/allen.png'},
      {nombre: 'Aaron Bynes', puntos: 0, imagen: 'https://i.ibb.co/Jmf8bw1/bynes.png'},
      {nombre: 'Jabari Bird', puntos: 0, imagen: 'https://i.ibb.co/SKRQkmQ/bird.png'},
      {nombre: 'Jaylen Brown', puntos: 0, imagen: 'https://i.ibb.co/kyLWB2R/brown.png'},
      {nombre: 'Jonathan Gibson', puntos: 0, imagen: 'https://i.ibb.co/tc64z3t/gibson.png'},
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  getCanastaLocal(canasta: any): void {
    this.puntosLocales += canasta.puntos;
    this.equipoLocal.jugadores.forEach((elem: any) => {
      if (elem.nombre === canasta.nombreJugador) {
        elem.puntos += canasta.puntos;
      }
    })
  }

  getCanastaVisitante(canasta: any): void {
    this.puntosVisitantes += canasta.puntos;
    this.equipoVisitante.jugadores.forEach((elem: any) => {
      if (elem.nombre === canasta.nombreJugador) {
        elem.puntos += canasta.puntos;
      }
    })
  }

}
