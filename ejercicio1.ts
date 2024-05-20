// realice un programa que devuelva la potencia de un numero.
// la base y el exponente deben ser ingresados por teclado.
// solo deben admitirse exponentes mayores o iguales a cero.
// recuerde que el resultado de un numero elevado a 0 es 1.
// separe la logica de calcular la potencia utilizando metodos.

import * as rls from 'readline-sync';

let base: number = rls.questionInt ("Ingrese la base del calculo");
let exponente: number = rls.questionInt ("Ingrese el exponente del calculo");

while (exponente < 0){
    console.log ("ingresar exponente mayor o igual a cero");
    exponente = rls.questionInt("ingrese numero de exponente");
}

function calculo (base: number, exponente:number){
    let resultado:number;
    resultado= base**exponente;
    return resultado;
}
