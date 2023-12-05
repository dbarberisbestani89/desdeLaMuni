let nombre = "Juan";
let apellido = "Perez";
let sueldoActual = 33000;
let porcentajeAumento = 15;
let calculoAumneto = (sueldoActual * porcentajeAumento)/100;
let nuevoSueldo = sueldoActual + calculoAumneto;

console.log("Hola, estimad@"+" "+nombre+" "+apellido);
console.log("En base a su sueldo actual:");
console.log("$"+sueldoActual);
console.log("Ha recibido un aumento del 15%:");
console.log("$"+calculoAumneto);
console.log("y su nuevo sueldo es de: $" + nuevoSueldo);
