import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateCif } from 'src/app/validators/cif.validator';
import Big from 'big.js';

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
      cifCliente: new FormControl('', [Validators.required, ValidateCif]),
      fechaFactura: new FormControl((new Date()).toISOString().substring(0,10)),
      baseImponible: new FormControl(0),
      tipoIVA: new FormControl(0.21),
      importeIVA: new FormControl(0),
      totalFactura: new FormControl(0)
    })
    this.actualizarFactura();
  }

  actualizarFactura():void {
    this.formFactura.valueChanges
                    .subscribe(data => {
                      const importeIVA = new Big(data.baseImponible).times(data.tipoIVA);
                      const totalFactura = new Big(data.baseImponible).add(importeIVA);
                      this.formFactura.get('importeIVA')?.patchValue(importeIVA, {emitEvent: false});
                      this.formFactura.get('totalFactura')?.patchValue(totalFactura, {emitEvent: false});
                    })
  }

  addFactura(): void {
    const {['importeIVA']: removeImporte, ['totalFactura']: removeTotalFactura, ...rest} = this.formFactura.value;
    const valorFactura = {...rest, user: 'Juan Pepinillos'};
    console.log(valorFactura);
  }

}
