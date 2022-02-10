import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  private usuario = {
    nombre: 'Lucas',
    rol: 'abrazafarolas'
  }

  constructor() { }

  hasVentasAccess(): boolean {
    return this.usuario.rol === 'abrazafarolas';
  }
}
