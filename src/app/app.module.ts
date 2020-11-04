import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LenguajesProgramacionComponent } from './lenguajes-programacion/lenguajes-programacion.component';
import { ListaLenguajesComponent } from './lista-lenguajes/lista-lenguajes.component';

@NgModule({
  declarations: [
    AppComponent,
    LenguajesProgramacionComponent,
    ListaLenguajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
