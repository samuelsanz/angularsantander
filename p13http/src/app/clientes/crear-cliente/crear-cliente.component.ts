import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  formCliente: FormGroup;

  constructor(private clientesService: ClientesService,
              private router: Router) { }

  ngOnInit(): void {
    this.formCliente = new FormGroup({
      nombre: new FormControl(''),
      actividades: new FormControl(''),
      direccion: new FormControl(''),
      localidad: new FormControl(''),
    })
  }

  addCliente() {
    this.clientesService.crearCliente(this.formCliente.value)
                        .subscribe({
                          next: (resp: any) => {
                            this.router.navigate(['/']);
                          },
                          error: (err: any) => console.log(err)
                        })
  }

}
