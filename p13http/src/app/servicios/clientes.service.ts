import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url = environment.urlAPIClientesEndpoint;

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get(this.url)
                    .pipe(
                      map((resp: any) => {
                        // Al usar pipe podríamos si quisiéramos transformar la respuesta 'resp'
                        return resp;
                      })
                    )
  }

  searchClientes(term: string) {
    return this.http.get(this.url + 'search/' + term)
                    .pipe(
                      map((resp: any) => {
                        // Al usar pipe podríamos si quisiéramos transformar la respuesta 'resp'
                        return resp;
                      })
                    )    
  }

  crearCliente(cliente: any) {
    return this.http.post(this.url, cliente)
                    .pipe(
                      map((resp: any) => {
                        // Al usar pipe podríamos si quisiéramos transformar la respuesta 'resp'
                        return resp;
                      })
                    )
  }

  getClienteBy_id(_id) {
    return this.http.get(`${this.url}${_id}`)
                    .pipe(
                      map((resp: any) => {
                        // Al usar pipe podríamos si quisiéramos transformar la respuesta 'resp'
                        return resp;
                      })
                    )    
  }

  updateClienteBy_id(_id, cliente: any) {
    return this.http.put(`${this.url}${_id}`, cliente)
                    .pipe(
                      map((resp: any) => {
                        // Al usar pipe podríamos si quisiéramos transformar la respuesta 'resp'
                        return resp;
                      })
                    )    
  }

  deleteClienteBy_id(_id) {
    return this.http.delete(`${this.url}${_id}`)
                    .pipe(
                      map((resp: any) => {
                        // Al usar pipe podríamos si quisiéramos transformar la respuesta 'resp'
                        return resp;
                      })
                    )    
  }

}
