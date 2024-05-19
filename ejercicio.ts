import * as rls from 'readline-sync';

let numeroIngresado : number = rls.questionInt ("ingrese un numero");
if (numeroIngresado % 2 == 0){
    console.log ("el numero ingresado es " + numeroIngresado + " y  es par")
} else if (numeroIngresado % 2 ==1){
    console.log ("el numero ingresado es " + numeroIngresado + " y es impar")
};
