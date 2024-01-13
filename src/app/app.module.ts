import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaClientesComponent } from './componentes/lista-clientes/lista-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroClientesComponent,
    ListaClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
