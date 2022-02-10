import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numero'
})
export class NumeroPipe implements PipeTransform {

  transform(value: number, decimales: number, moneda?: string): number | string {
    let valorRedondeado;
    const factor = Math.pow(10, decimales);
    if (value < 0) {
      valorRedondeado = Math.round(-value * factor) / factor * -1;
    } else {
      valorRedondeado = Math.round(value * factor) / factor;
    }
    const valorFormateado = new Intl.NumberFormat('de-DE', {minimumFractionDigits: decimales}).format(valorRedondeado);
    return moneda? valorFormateado + ' ' + moneda : valorFormateado;
  }

}
