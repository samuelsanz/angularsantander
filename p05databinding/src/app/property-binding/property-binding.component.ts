import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  logoRojo: string = 'https://i.ibb.co/6m6hJwy/santander-red.png';
  logoBlanco: string = 'https://i.ibb.co/48RWS1F/santander-white.png';

  urlImagen: string; // Para que no de error setear 'strict' a false en el archivo tsconfig.json

  constructor() { 
    this.urlImagen = this.logoBlanco;
  }

  ngOnInit(): void {
    this.cambiarLogo();
  }

  cambiarLogo() {
    setInterval(() => {
      this.urlImagen === this.logoRojo ? this.urlImagen = this.logoBlanco : this.urlImagen = this.logoRojo;
    }, 2000)
  }

}
