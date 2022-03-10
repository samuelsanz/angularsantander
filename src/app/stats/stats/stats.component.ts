import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  numeroClientes: number = 0;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.numeroClientes = this.clientesService.getNumeroClientes();
  }

}
