import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VentasRoutingModule } from './ventas-routing.module';
import { InicioVentasComponent } from './inicio-ventas/inicio-ventas.component';
import { VisualizarClienteComponent } from './clientes/visualizar-cliente/visualizar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { TablaClientesComponent } from './clientes/tabla-clientes/tabla-clientes.component';
import { ClientesService } from './clientes.service';


@NgModule({
  declarations: [
    InicioVentasComponent,
    TablaClientesComponent,
    VisualizarClienteComponent,
    CrearClienteComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    FormsModule
  ],
  providers: [
    ClientesService
  ]
})
export class VentasModule { }
