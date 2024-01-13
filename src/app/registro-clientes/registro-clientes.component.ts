import { Component, OnInit } from '@angular/core';
import { Cliente } from '../modelo/cliente.model';
import { ServicioSeguridad } from '../servicios/servicio-seguridad.service';
import { ClienteService } from '../servicios/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CorreoService } from '../servicios/correo.service';

@Component({
  selector: 'app-registro-clientes',
  templateUrl: './registro-clientes.component.html',
  styleUrls: ['./registro-clientes.component.css']
})
export class RegistroClientesComponent implements OnInit {
  nuevoCliente: Cliente = { ClienteID: 0, Nombre: '', Apellido: '', CorreoElectronico: '',Token: '' };
  public clientes: Cliente[] = [];
  token: string = '';

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private servicioSeguridad: ServicioSeguridad,
    private ClienteService: ClienteService,
    private CorreoService: CorreoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.obtenerClientes();
    const s = this.generarToken();
    console.log(s)
    /*if (!this.router.url.includes('editar-clientes')) return;

    this.ActivatedRoute.params
      .pipe(
        switchMap(({ id }) => this.ClienteService.obtenerClientePorId(id)),
      ).subscribe(nuevoCliente => {
        if (!nuevoCliente) return this.router.navigateByUrl('/');
        console.log(nuevoCliente)
        this.obtenerToken(nuevoCliente.ClienteID);
        this.nuevoCliente = { ClienteID: nuevoCliente.ClienteID, Nombre: nuevoCliente.Nombre, Apellido: nuevoCliente.Apellido, CorreoElectronico: nuevoCliente.CorreoElectronico,Token: nuevoCliente.Token };
        return;
      })*/
  }

  async registrarCliente() {
    this.servicioSeguridad.validarToken(this.nuevoCliente.Token)
    .subscribe((resp:any)=>{

      if (resp.valido==true) {
        this.ClienteService.crearCliente(this.nuevoCliente,this.token)
        .subscribe(cliente => {
          console.log("2",cliente)
debugger
          if (cliente.data.CorreoEnviado=='true') {
            alert('correo de bienvenida enviado correctamente')
            this.ClienteService.obtenerClientePorId(cliente.data.ClienteID)
            .subscribe((cliente)=>{
              console.log(cliente)
              this.CorreoService.crearCorreo(cliente)
              .subscribe((resp) =>{
                console.log(resp)


              })
            })



          }else{
            alert('Correo de bienvenida desactivado')
          }
          location.reload();
          return
          //this.generarToken(cliente.clienteId);


        })
      }else{
        alert("token no valido")
      }
    })
    console.log("resp")
    return
  }

  obtenerClientePorId():any{

  }


  generarToken(): void {
    this.servicioSeguridad.generarToken()
    .subscribe(
      (resultado: any) => {
        this.nuevoCliente.Token = resultado.token;
        console.log(this.nuevoCliente)
      },
      (error) => {
        console.error('Error al generar el token:', error);
      }
    );
  }

  obtenerToken(ClienteID: number): void {
    this.servicioSeguridad.obtenerToken(ClienteID).subscribe(
      (resultado: any) => {
        console.log(resultado)
        this.nuevoCliente.Token = resultado.token.Token;
      },
      (error) => {
        console.error('Error al generar el token:', error);
      }
    );
  }

  actualizarToken(ClienteID: number, Token: string): void {

    this.servicioSeguridad.actualizarToken(ClienteID, Token).subscribe(
      (resultado: any) => {
        this.nuevoCliente.Token = resultado.token.Token;
      },
      (error) => {
        console.error('Error al generar el token:', error);
      }
    );
  }

  obtenerClientes() {
    this.ClienteService.obtenerClientes()
      .subscribe(clientes => {
        this.clientes = clientes;
      })
  }

}
