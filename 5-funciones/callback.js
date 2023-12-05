let sumar = (numero1, numero2) => numero1 + numero2;
let resta = (numero1, numero2) => numero1 - numero2;
let multiplicacion = (numero1, numero2) => numero1 * numero2;
let division = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2 , operacion) => operacion (numero1, numero2);

console.log(calculadora(18, 3, sumar));
//play gorund:
let doble = numero => numero * 2;
let triple = numero => numero * 3;
let aplicarCallback = (numero, operacion) => operacion (numero);
