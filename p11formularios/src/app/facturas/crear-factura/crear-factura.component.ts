import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateCif } from 'src/app/validators/cif.validator';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  formFactura: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formFactura = new FormGroup({
      nombreCliente: new FormControl('', [Validators.required, Validators.minLength(4)]), 
      cifCliente: new FormControl('', [Validators.required, ValidateCif])
    })
  }

}
