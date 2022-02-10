import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteEnLineaComponent } from './componente-en-linea/componente-en-linea.component';
import { MarcadorComponent } from './marcador/marcador.component';
import { EquipoComponent } from './equipo/equipo.component';
import { TopScoreComponent } from './top-score/top-score.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteEnLineaComponent,
    MarcadorComponent,
    EquipoComponent,
    TopScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
