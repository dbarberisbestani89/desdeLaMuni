let valor1 = 2;
let valor2 = 2;
let operacion = "multiplicar";
let resultado1 = valor1 + valor2;
let resultado2 = valor1 - valor2;
let resultado3 = valor1 * valor2;
let resultado4 = valor1 / valor2;
switch (operacion){
    case "sumar":
    console.log("El resultado de " + operacion + " " + valor1 + " + " + valor2 + " es " + resultado1);
    break;
    case "restar":
    console.log("El resultado de " + operacion + " " + valor1 + " - " + valor2 + " es " + resultado2);
    break;
    case "multiplicar":
    console.log("El resultado de " + operacion + " " + valor1 + " * " + valor2 + " es " + resultado3);
    break;
    case "dividir":
    console.log("El resultado de " + operacion + " " + valor1 + " / " + valor2 + " es " + resultado4);
    break;
    default:
    console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
}

