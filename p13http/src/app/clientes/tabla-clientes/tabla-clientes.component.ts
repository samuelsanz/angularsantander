import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent implements OnInit {

  clientes: Array<any> = [];
  formSearch: FormGroup;
  spinner: boolean = false;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.formSearch = new FormGroup({
      search: new FormControl('')
    })
    // this.cargarClientes();
    this.searchClientes();
  }

  cargarClientes(): void {
    this.clientesService.getClientes()
                        .subscribe((resp: any) => { // Lavan a deprecar, en breve se usará la sintaxis que viene en el método 'searchClientes()'
                          this.clientes = resp.clientes;
                        }, (err: any) => {
                          console.log(err);
                        })
  }

  searchClientes() {
    this.formSearch.valueChanges
                    .pipe(
                      debounceTime(400),
                      distinctUntilChanged()
                    )
                    .subscribe(data => {
                      if(data.search.length === 0) {
                        this.clientes = [];
                      } else {
                        this.spinner = true;
                        this.clientesService.searchClientes(data.search)
                                            .subscribe({
                                              next: (resp: any) => {
                                                this.spinner = false;
                                                this.clientes = resp.clientes;
                                              },
                                              error: (err: any) => console.log(err)
                                            })
                      }
                    })
  }

  borrarCliente(_id: string) {
    this.clientesService.deleteClienteBy_id(_id)
                        .subscribe({
                          next: (resp: any) => {
                            this.clientes = [];
                            this.formSearch.get('search').patchValue('');
                          },
                          error: (err: any) => console.log(err)
                        })
  }

}
