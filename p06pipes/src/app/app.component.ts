import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto: string = 'ciudad de Madrid';
  id: any = 721;
  fecha: any = new Date();
  importe: number = 12345.678;
  aciertos: number = 0.0974329;

  actor: any = {
    nombre: 'Lucas',
    apellidos: 'Grijander',
    edad: 75
  }

  actrizObservable: Observable<any> = new Observable(observer => {
    observer.next({
      nombre: 'Medina',
      apellidos: 'Azahara',
      edad: 34      
    })
  })

  cantidad: number = 98127.359873;
  decimales: number = 2;

  ngOnInit(): void {
    this.id = '000000' + this.id;
    console.log(this.actrizObservable);
  }

  setDecimales(decimales: number): void {
    if (this.decimales >= 0 && this.decimales <= 10) {
      this.decimales += decimales;
    }
  }

}
