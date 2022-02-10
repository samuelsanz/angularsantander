import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-visualizar-cliente',
  templateUrl: './visualizar-cliente.component.html',
  styleUrls: ['./visualizar-cliente.component.css']
})
export class VisualizarClienteComponent implements OnInit {

  id: string = '';
  cliente: any;

  constructor(private route: ActivatedRoute,
    private clienteService: ClientesService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cliente = this.clienteService.getCliente(this.id);
  }

}
