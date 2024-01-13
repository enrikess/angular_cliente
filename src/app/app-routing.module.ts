import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroClientesComponent } from './registro-clientes/registro-clientes.component';


const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' }, // Ruta por defecto redirige a /clientes
  //{ path: 'clientes', component: ListaClientesComponent },
  { path: 'registro-clientes', component: RegistroClientesComponent },
  { path: 'editar-clientes/:id', component: RegistroClientesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
