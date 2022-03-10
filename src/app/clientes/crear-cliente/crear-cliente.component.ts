import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente: any = {
    nombre: '',
    cif: '',
    localidad: ''
  }

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
  }

  addCliente(): void {
    this.clientesService.setCliente(this.cliente);
    this.cliente = {
      nombre: '',
      cif: '',
      localidad: ''
    }
  }

}
