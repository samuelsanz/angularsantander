import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Proveedor } from '../models/proveedor.model';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.css']
})
export class DirectivaNgForComponent implements OnInit {

  proveedores: Array<Proveedor> = [ // Datos hardcodeados guarramente
    new Proveedor('Gas Natural','A12345678'),
    new Proveedor('Iberdrola', 'A87654321'),
    new Proveedor('Jazztel', 'B12345678'),
    new Proveedor('BBVA', 'C12345678'), // Javascrip permite no "cerrar" el array, dejando la última coma, y no da error
  ]

  clientes: Array<Cliente> = [ // Más datos hardcodeados guarramente
    {nombre: 'Orange', cif: 'C10923843'},
    {nombre: 'Iberdrola', cif: 'C1093846'},
    {nombre: 'BBVA', cif: 'C998766'},
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.clientes = [...this.clientes, {nombre: 'Yomvi', cif: 'A9384765'}];
    }, 3000)
  }

}
