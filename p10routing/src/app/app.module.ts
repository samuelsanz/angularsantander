import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SoporteComponent } from './soporte/soporte.component';
import { NavComponent } from './nav/nav.component';
import { CompartidoModule } from './compartido/compartido.module';
import { AccesoNoAutorizadoComponent } from './acceso-no-autorizado/acceso-no-autorizado.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SoporteComponent,
    NavComponent,
    AccesoNoAutorizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
