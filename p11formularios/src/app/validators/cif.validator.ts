import { AbstractControl } from "@angular/forms";



export function ValidateCif(control: AbstractControl) {

    const cifLetter = /^([ABCDEFGHPQSKLMX])$/;

    let isValidLetraCif: boolean = false;

    if (control.value.charAt(0).toUpperCase().match(cifLetter)) {
        isValidLetraCif = true;
    }

    if (!isValidLetraCif) {
        return {invalidCif: true, mensaje: 'Letra de CIF no válida'};
    } else if (control.value.length !== 9)
    {
        return {invalidCif: true, mensaje: 'El CIF debe tener 9 caracteres'};
    }

    return null;
    
}