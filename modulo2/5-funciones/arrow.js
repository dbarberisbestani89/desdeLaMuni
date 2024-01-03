// ES6 arrow function
let sumar = (a, b) => a + b;
console.log( sumar(2, 4) ); // 6
///////////////
let laMitad = numero => numero / 2;
console.log(laMitad(8));

let dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log(dividir(20, 4));


let tengoQueTrabajar = dia => {
    if(dia == "Sabado" || dia == "Domingo"){
        return "No tenes que trabajar";
    }else{
        return "Si, tenes que trabajar";
    }
}
console.log(tengoQueTrabajar("Sabado"));
/////////////////
//antes eran asi:
function dameCinco() {
    return [1,2,3,4,5];
}

function multiplicarPorDos() {
  return 123 * 2 ;
}

function mostrarNombre() {
  return "Mi nombre es Hernán";
}
//ahora quedarian asi:
let dameCinco = () => [1,2,3,4,5];

let multiplicarPorDos = () => 123 * 2 ;

let mostrarNombre = () => "Mi nombre es Hernán";
//otro ejemplo:
let saludar = nombre => 'Hola, ' + nombre + '!';
//otro ejemplo:
let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';
