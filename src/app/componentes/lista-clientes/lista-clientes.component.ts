import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  ngOnInit(): void {
   if (!this.clientes) throw new Error('Method not implemented.');
  }

  @Input()
  public clientes:Cliente[] = [];

  @Input()
  public titulo!:string;
}
